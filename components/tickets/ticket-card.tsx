// components/tickets/ticket-card.tsx

import { Ticket } from "@/lib/types/ticket";
import Link from "next/link"

type TicketCardProps = {
    ticket: Ticket;
};

export default function TicketCard({ ticket }: TicketCardProps) {
    return (
        <li className="card">
            <Link href={`/tickets/${ticket.id}`} className="grid gap-2 pb-2">
                <h3 className="font-bold">{ticket.title}</h3>
                <p className="line-clamp-2">{ticket.body}</p>
                <div className={`pill priority-${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </Link>
        </li>
    )
}
