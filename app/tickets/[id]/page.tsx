// app/tickets/[id]/page.tsx

import { getTicket } from "@/lib/api/tickets";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuPencil } from "react-icons/lu";

export default async function TicketPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const ticket = await getTicket({ id });

    if (!ticket) notFound();

    return (
        <main className="bg-(--color-component) rounded-xl border border-white/10">
            <Link href="/tickets" className="inline-block font-bold transition-transform duration-200 hover:-translate-x-1">← Back</Link>
            <Link href={`/tickets/edit/${ticket.id}`}><LuPencil />
            </Link>
            <article className="bg-(--color-component) m-6 p-6 rounded-xl border border-white/10 hover:border-white/20 transition">
                <h1 className="font-bold">{ticket.title}</h1>
                <p className="">{ticket.body}</p>
            </article>
        </main>
    )
}
