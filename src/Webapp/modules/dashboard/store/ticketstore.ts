import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: 'Open' | 'In Progress' | 'Closed';
}


export const useTicketStore = defineStore('ticket', () => {
  const tickets = ref<Ticket[]>(JSON.parse(localStorage.getItem('tickets') || '[]'));

  watch(tickets, (newTickets) => {
    localStorage.setItem('tickets', JSON.stringify(newTickets));
  }, { deep: true });

  const addTicket = (ticket: Omit<Ticket, 'id' | 'status' > & { status?: 'Open' | 'In Progress' | 'Closed' }) => {
    tickets.value.push({
      id: Date.now(),
      status: ticket.status || 'Open',
      ...ticket,
    });
  };

  const deleteTicket = (id: number) => {
    tickets.value = tickets.value.filter((t) => t.id !== id);
  };

  const updateTicket = (id: number, ticket: Omit<Ticket, 'id'>) => {
    const index = tickets.value.findIndex((t) => t.id === id);
    if (index !== -1) tickets.value[index] = { id, ...ticket };
  };

  const getTicket = (id: number) => tickets.value.find((t) => t.id === id);

  return { tickets, addTicket, deleteTicket, updateTicket, getTicket };
});




