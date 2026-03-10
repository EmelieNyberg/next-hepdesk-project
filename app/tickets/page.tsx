// app/tickets/page.tsx

import { getTickets } from "@/lib/api/tickets";
import TicketCard from "@/components/tickets/ticket-card";
import Toolbar from "@/components/toolbar/toolbar";

export default async function TicketsPage({
    searchParams,
}: {
    searchParams: Promise<{
        search?: string
    }>
}) {

    const tickets = await getTickets();

    const params = await searchParams;

    const search = params.search?.toLowerCase() || "";

    const filteredTickets = tickets.filter((ticket) =>
        ticket.title.toLowerCase().includes(search) ||
        ticket.body.toLowerCase().includes(search) ||
        ticket.user_email.toLowerCase().includes(search)
    )

    return (
        <>
            <main className="main-page">
                <ul>
                    {filteredTickets.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                    {filteredTickets.length === 0 && (
                        <li>
                            <p className="text-center"> There are no open tickets, yay!</p>
                        </li>
                    )
                    }
                </ul>
            </main>
            <Toolbar search={params.search} />
        </>
    )
}
