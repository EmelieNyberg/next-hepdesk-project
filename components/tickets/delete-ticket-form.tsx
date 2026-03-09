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
            <button type="submit" className="cursor-pointer p-3 rounded-full hover:bg-(--color-component) transition"><LuTrash2 /></button>

        </Form>
    )
}
