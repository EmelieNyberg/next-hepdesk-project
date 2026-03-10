// components/toolbar/toolbar.tsx

import Link from "next/link";
import SearchTicketForm from "../tickets/search-ticket-form";
import { LuTicketPlus } from "react-icons/lu";

type ToolbarProps = {
    search?: string;
};

export default function Toolbar({ search }: ToolbarProps) {
    return (
        <aside>
            <div className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
                <SearchTicketForm defaultValue={search} />
            </div>

            <div className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
                <Link href="/tickets/create" className="flex gap-4 items-center whitespace-nowrap"><LuTicketPlus />
                    Create new ticket</Link>
            </div>
        </aside>
    )
}
