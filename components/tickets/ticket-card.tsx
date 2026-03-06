// components/tickets/ticket-card.tsx

import { Ticket } from "@/lib/types/ticket";
import Link from "next/link"

type TicketCardProps = {
    ticket: Ticket;
};

export default function TicketCard({ ticket }: TicketCardProps) {
    return (
        <li className="bg-(--color-component) m-6 p-6 rounded-xl border border-white/10 hover:border-white/20 transition">
            <Link href={`/tickets/${ticket.id}`}>
                <h3 className="font-bold">{ticket.title}</h3>
                <p className="line-clamp-2">{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </Link>
        </li>
    )
}
