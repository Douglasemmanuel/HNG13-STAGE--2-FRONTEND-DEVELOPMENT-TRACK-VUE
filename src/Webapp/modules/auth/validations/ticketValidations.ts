import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  assignee: z.string().nonempty("Assignee is required"),
  status: z.enum(["Open", "In Progress", "Closed"], {
  required_error: "Status is required",
}),

});

export type TicketFormData = z.infer<typeof ticketSchema>;
