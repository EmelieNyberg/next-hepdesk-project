// app/tickets/[id]/page.tsx

import { getTicket } from "@/lib/api/tickets";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuPencil } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

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
                <Link href="/tickets" className="inline-block font-bold transition-transform duration-200 hover:-translate-x-1">← Back</Link>
                <div className="flex gap-4">
                    <Link href={`/tickets/edit/${ticket.id}`}><LuPencil />
                    </Link>

                    {/* Add delete function instead */}
                    <Link href={`/tickets/edit/${ticket.id}`}><LuTrash2 />
                    </Link>
                </div>
            </nav>
            <article className="bg-(--color-component) m-6 p-6 rounded-xl border border-white/10 hover:border-white/20 transition grid gap-4">
                <header className="flex justify-between">
                    <div className="flex gap-4">
                        <h1 className="font-bold">{ticket.title}</h1>
                        <span className={`pill-two priority-${ticket.priority}`}>priority {ticket.priority}</span>
                    </div>
                    <span className="text-(--text-clr)">#{ticket.id}</span>
                </header>
                <p>{ticket.body}</p>
                <p>{ticket.user_email}</p>
            </article>
        </main>
    )
}
