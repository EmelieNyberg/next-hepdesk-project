// app/tickets/edit/[id]/page.tsx

import EditTicketForm from '@/components/tickets/edit-ticket-form'
import { getTicket } from '@/lib/api/tickets'
import { notFound } from 'next/navigation';

export default async function EditTicketPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;
    const ticket = await getTicket({ id });

    if (!ticket) notFound();

    return (
        <main>
            <h1>Edit ticket</h1>
            <EditTicketForm ticket={ticket} />
        </main>
    )
}
