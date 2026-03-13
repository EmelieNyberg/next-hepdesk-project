// app/tickets/create/page.tsx

import CreateTicketForm from "@/components/tickets/create-ticket-form";

export default function CreateTicketPage() {
    return (
        <main className="main-page">
            <h1 className="border-b border-white/10 p-6 font-bold">Create new ticket</h1>
            <CreateTicketForm />
        </main>
    );
};
