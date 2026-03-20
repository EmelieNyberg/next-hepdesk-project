// components/navbar/navbar.tsx

import Link from 'next/link'
import Image from "next/image";
import { RiTicketFill } from "react-icons/ri";

export default function Navbar() {
    return (
        <header>
            <nav className="flex gap-4 justify-between m-3 py-4 border-b border-white/10">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl">
                    <RiTicketFill className="text-xl text-(--text-clr)" />

                    <span className="bg-gradient-to-r from-[var(--text-clr)] to-white bg-clip-text text-transparent font-bold">
                        TicketFlow
                    </span>
                </Link>

                {/* Profile image */}
                <Image
                    src="/profile-pic.png"
                    alt="User avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                />

            </nav>
        </header>
    )
}
