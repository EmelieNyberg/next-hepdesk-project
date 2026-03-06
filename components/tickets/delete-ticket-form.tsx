// components/tickets/delete-ticket-form.tsx

import { deleteTicket } from "@/lib/actions/actions";
import Form from "next/form";
import { LuTrash2 } from "react-icons/lu";

type DeleteTicketFormProps = {
    id: string;
}

export default function DeleteTicketForm({ id }: DeleteTicketFormProps) {
    return (
        <Form action={deleteTicket}>
            {/* Added this input to make sure we send correct id back. Its hidden so you want be able to see its value */}
            <input hidden readOnly name="id" value={id} />
            <button type="submit" className="flex gap-4 items-center"><LuTrash2 /></button>

        </Form>
    )
}
