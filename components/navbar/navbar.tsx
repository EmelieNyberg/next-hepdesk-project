// components/navbar/navbar.tsx

import Link from 'next/link'
import { RiTicketFill } from "react-icons/ri";

export default function Navbar() {
    return (
        <nav className="flex gap-4 m-3 py-4 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
                <RiTicketFill className="text-xl" />
                <span>TicketFlow</span>
            </Link>
        </nav>
    )
}
