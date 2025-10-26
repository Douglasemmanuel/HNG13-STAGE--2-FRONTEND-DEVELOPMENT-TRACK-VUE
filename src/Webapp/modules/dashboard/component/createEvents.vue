<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'
import useTicketStore from '../../../../store/ticketStore'

// ✅ Props
interface Event {
  id: number
  title: string
  description: string
  image: string
  date: string
  venue: string
  ticketPrices: {
    Regular: number
    VIP: number
    Student: number
  }
}

interface EventTicketModalProps {
  show: boolean
  handleClose: () => void
  event: Event
}

const props = defineProps<EventTicketModalProps>()

// ✅ Ticket Store
const store = useTicketStore()

// ✅ Default Ticket Prices
const defaultTicketPrices = {
  Regular: 10000,
  VIP: 1000000,
  Student: 5000
}

// ✅ Form data interface
interface FormData {
  eventName: string
  eventDate: string
  venue: string
  quantity: string
  attendeeName?: string
  attendeeEmail?: string
  attendeePhone?: string
  ticketType: 'Regular' | 'VIP' | 'Student'
  price: number
}

const formData = ref<FormData>({
  eventName: props.event.title,
  eventDate: props.event.date,
  venue: props.event.venue,
  quantity: '1',
  attendeeName: '',
  attendeeEmail: '',
  attendeePhone: '',
  ticketType: 'Regular',
  price: props.event.ticketPrices?.Regular ?? defaultTicketPrices.Regular
})

// ✅ Watch for ticketType changes
watch(
  () => formData.value.ticketType,
  (newType) => {
    formData.value.price =
      props.event.ticketPrices?.[newType] ?? defaultTicketPrices[newType]
  }
)

// ✅ Watch for event change
watch(
  () => props.event,
  (newEvent) => {
    formData.value = {
      eventName: newEvent.title,
      eventDate: newEvent.date,
      venue: newEvent.venue,
      quantity: '1',
      attendeeName: '',
      attendeeEmail: '',
      attendeePhone: '',
      ticketType: 'Regular',
      price: newEvent.ticketPrices?.Regular ?? defaultTicketPrices.Regular
    }
  },
  { deep: true, immediate: true }
)

// ✅ Submit handler
const handleSubmit = () => {
  const data = formData.value
  const ticketData = {
    eventId: props.event.id,
    eventName: props.event.title,
    eventDate: props.event.date,
    venue: props.event.venue,
    quantity: data.quantity,
    ticketType: data.ticketType,
    price: data.price,
    attendeeName: data.attendeeName,
    attendeeEmail: data.attendeeEmail,
    attendeePhone: data.attendeePhone
  }

  store.addTicket(ticketData)
  alert('🎟️ Ticket purchased successfully!')
  props.handleClose()
}
</script>


<template>
  <!-- ✅ Bootstrap Modal -->
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block"
    v-if="show"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title">Buy Ticket - {{ event.title }}</h5>
          <button type="button" class="btn-close" @click="handleClose"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Event Name</label>
                <input type="text" class="form-control" v-model="formData.eventName" readonly />
              </div>
              <div class="col-md-6">
                <label class="form-label">Event Date</label>
                <input type="date" class="form-control" v-model="formData.eventDate" readonly />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Venue</label>
                <input type="text" class="form-control" v-model="formData.venue" readonly />
              </div>
              <div class="col-md-6">
                <label class="form-label">Quantity</label>
                <input type="text" class="form-control" v-model="formData.quantity" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-4">
                <label class="form-label">Attendee Name</label>
                <input type="text" class="form-control" v-model="formData.attendeeName" />
              </div>
              <div class="col-md-4">
                <label class="form-label">Attendee Email</label>
                <input type="email" class="form-control" v-model="formData.attendeeEmail" />
              </div>
              <div class="col-md-4">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" v-model="formData.attendeePhone" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Ticket Type</label>
                <select class="form-select" v-model="formData.ticketType">
                  <option value="Regular">Regular</option>
                  <option value="VIP">VIP</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Price</label>
                <input type="number" class="form-control" v-model="formData.price" readonly />
              </div>
            </div>

            <!-- Buttons -->
            <div class="d-flex justify-content-end mt-3">
              <button type="button" class="btn btn-secondary me-2" @click="handleClose">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                Buy Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
