// app/tickets/[id]/page.tsx

import DeleteTicketForm from "@/components/tickets/delete-ticket-form";
import { getTicket } from "@/lib/api/tickets";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuPencil } from "react-icons/lu";
import { LuCircleArrowLeft } from "react-icons/lu";


export default async function TicketPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const ticket = await getTicket({ id });

    if (!ticket) notFound();

    return (
        <main className="main-page">
            <nav className="flex justify-between px-6 pt-6">
                <Link href="/tickets" className="flex items-center gap-2 font-bold transition-transform duration-200 hover:-translate-x-1"><LuCircleArrowLeft /><span>Back</span></Link>
                <div className="flex gap-3">
                    <Link href={`/tickets/edit/${ticket.id}`} className="p-3 rounded-full hover:bg-(--color-component) transition"><LuPencil />
                    </Link>

                    <DeleteTicketForm id={ticket.id.toString()} />
                </div>
            </nav>
            <article className="bg-(--color-component) m-6 p-6 rounded-xl border border-white/10  transition grid gap-4">
                <header className="flex justify-between items-start">
                    <div className="flex gap-4">
                        <h1 className="font-bold">{ticket.title}</h1>
                        <span className={`pill-ticket-page priority-${ticket.priority}`}>priority {ticket.priority}</span>
                    </div>
                    <span className="text-(--text-clr) text-2xl">#{ticket.id}</span>
                </header>
                <p>{ticket.body}</p>
                <p>{ticket.user_email}</p>
            </article>
        </main>
    )
}
