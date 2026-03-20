// components/tickets/ticket-overview.tsx

import { getTickets } from "@/lib/api/tickets"
import { PiChatTextBold } from "react-icons/pi";


export default async function TicketOverview() {
    const tickets = await getTickets();

    return (
        <section className="bg-(--color-component) rounded-xl border border-white/10 p-6">

            <h2 className="flex items-center gap-4 text-xl font-bold py-3"><PiChatTextBold className="text-(--text-clr)" />
                Recent Tickets</h2>

            <ul className="grid gap-3">
                {tickets.slice(0, 4).map((ticket) => (
                    <li
                        key={ticket.id}
                        className="bg-(--color-component) rounded-xl border border-white/10 p-6 flex gap-6">
                        <div className={`w-1 shrink-0 rounded priority-${ticket.priority}`}></div>
                        <div>
                            <h3 className="font-bold">{ticket.title}</h3>
                            <p className="line-clamp-1">{ticket.body}</p>
                        </div>

                    </li>
                ))
                }

            </ul >
        </section >
    )
}
