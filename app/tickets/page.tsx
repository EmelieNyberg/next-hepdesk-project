// app/tickets/page.tsx

import { getTickets } from "@/lib/api/tickets";
import TicketCard from "@/components/tickets/ticket-card";
import Toolbar from "@/components/toolbar/toolbar";

export default async function TicketsPage() {

    const tickets = await getTickets();

    return (
        <>
            <main className="main-page">
                <ul>
                    {tickets.map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                    {tickets.length === 0 && (
                        <li>
                            <p className="text-center"> There are no open tickets, yay!</p>
                        </li>
                    )
                    }
                </ul>
            </main>
            <Toolbar />
        </>
    )
}
