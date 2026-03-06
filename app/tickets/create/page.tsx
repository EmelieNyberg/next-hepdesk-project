// app/tickets/create/page.tsx

import CreateTicketForm from "@/components/tickets/create-ticket-form";

export default function CreateTicketPage() {
    return (
        <main className="bg-(--color-component) rounded-xl border border-white/10">
            <h1>Create new ticket</h1>
            <CreateTicketForm />
        </main>
    );
};
