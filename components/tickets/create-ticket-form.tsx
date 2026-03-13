// components/tickets/create-ticket-form.tsx

import { addTicket } from "@/lib/actions/actions";
import Form from "next/form";
import { LuSave } from "react-icons/lu";

export default function CreateTicketForm() {
    return (
        <div className="bg-(--color-component) rounded-xl border border-white/10 m-3 pt-6 p-3">
            <Form action={addTicket}>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center p-6">
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
                        required
                    />
                    <label className="font-semibold" htmlFor="priority">
                        Priority
                    </label>
                    <select
                        id="priority"
                        name="priority"
                        className="bg-(--color-component) rounded-xl border border-white/10 p-2"
                    >
                        <option value="low">🟢 Low Priority</option>
                        <option value="medium">🟡 Medium Priority</option>
                        <option value="high">🔴 High Priority</option>
                    </select>
                </div>
                <button type="submit" className="flex gap-4 items-center"><LuSave />
                    Save</button>
            </Form>
        </div>
    )
}
