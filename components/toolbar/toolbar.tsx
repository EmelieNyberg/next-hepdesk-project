// components/toolbar/toolbar.tsx

import Link from "next/link";
import { LuTicketPlus } from "react-icons/lu";

export default function Toolbar() {
    return (
        <aside className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
            <Link href="/tickets/create" className="flex gap-4 items-center whitespace-nowrap"><LuTicketPlus />
                Create new ticket</Link>
        </aside>
    )
}
