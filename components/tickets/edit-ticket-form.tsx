// components/tickets/edit-ticket-form.tsx

import { updateTicket } from "@/lib/actions/actions";
import { Ticket } from "@/lib/types/ticket";
import Form from "next/form";
import { LuSave } from "react-icons/lu";

type EditTicketFormProps = {
    ticket: Ticket;
}

export default function EditTicketForm({ ticket }: EditTicketFormProps) {
    return (
        <Form action={updateTicket}>
            {/* Added this input to make sure we send correct id back. Its read only so you want be able to change its value */}
            <input readOnly name="id" value={ticket.id} />

            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center">
                <label className="font-semibold" htmlFor="title">
                    Title
                </label>
                <input
                    className="bg-(--color-component) rounded-xl border border-white/10 p-2"
                    type="text"
                    id="title"
                    name="title"
                    minLength={3}
                    maxLength={20}
                    // Adding defult value on all fields, so the user knows what was written from the beginning
                    defaultValue={ticket.title}
                    required
                />
                <label className="font-semibold" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="bg-(--color-component) rounded-xl border border-white/10 p-2"
                    id="description"
                    name="description"
                    minLength={5}
                    maxLength={400}
                    defaultValue={ticket.body}
                    required
                />
                <label className="font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    className="bg-(--color-component) rounded-xl border border-white/10 p-2"
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={ticket.user_email}
                    required
                />
                <label className="font-semibold" htmlFor="priority">
                    Priority
                </label>
                <select
                    id="priority"
                    name="priority"
                    defaultValue={ticket.priority}
                    className="bg-(--color-component) rounded-xl border border-white/10 p-2"
                // Hur gör jag defultvalue här?
                >
                    <option value="low">🟢 Low Priority</option>
                    <option value="medium">🟡 Medium Priority</option>
                    <option value="high">🔴 High Priority</option>
                </select>
            </div>
            <button type="submit" className="flex gap-4 items-center"><LuSave />
                Save</button>
        </Form>
    )
}
