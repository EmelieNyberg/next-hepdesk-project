// components/sidebar/sidebar.tsx

import Link from "next/link";
import { LuCommand } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";


export default function Sidebar() {
    return (
        <aside className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
            <div className="grid">
                <Link href="/" className="flex gap-4 items-center"><LuCommand /> Dashboard</Link>
                <Link href="/tickets" className="flex gap-4 items-center"><LuTicket /> Tickets</Link>
            </div>
        </aside>
    )
}
