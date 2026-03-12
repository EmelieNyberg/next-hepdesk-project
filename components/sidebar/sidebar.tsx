// components/sidebar/sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuCommand, LuTicket } from "react-icons/lu";

export default function Sidebar() {
    const pathname = usePathname();

    const isDashboard = pathname === "/";
    const isTickets = pathname.startsWith("/tickets");

    return (
        <aside className="bg-(--color-component) rounded-xl border border-white/10 m-3 pt-6 p-3">
            <div className="grid gap-2">
                <Link
                    href="/"
                    className={`flex gap-4 items-center px-6 py-2 rounded-xl hover:bg-(--color-component) transition
                    ${isDashboard ? "bg-(--color-component) text-(--text-clr)" : ""}`}
                >
                    <LuCommand /> Dashboard
                </Link>

                <Link
                    href="/tickets"
                    className={`flex gap-4 items-center px-6 py-2 rounded-xl hover:bg-(--color-component) transition
                    ${isTickets ? "bg-(--color-component) text-(--text-clr)" : ""}`}
                >
                    <LuTicket /> Tickets
                </Link>
            </div>
        </aside>
    )
}
