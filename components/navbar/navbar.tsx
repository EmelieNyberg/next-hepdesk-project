// components/navbar/navbar.tsx

import Link from 'next/link'
import { RiTicketFill } from "react-icons/ri";

export default function Navbar() {
    return (
        <header>
            <nav className="flex gap-4 m-3 py-4 border-b border-white/10">

                <Link href="/" className="flex items-center gap-2 text-xl">
                    <RiTicketFill className="text-xl text-(--text-clr)" />

                    <span className="bg-gradient-to-r from-[var(--text-clr)] to-white bg-clip-text text-transparent font-bold">
                        TicketFlow
                    </span>
                </Link>
            </nav>
        </header>
    )
}
