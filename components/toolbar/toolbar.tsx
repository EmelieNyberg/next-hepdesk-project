// components/toolbar/toolbar.tsx

import Link from "next/link";
import { LuTicketPlus } from "react-icons/lu";
import FilterTickets from "../tickets/filter-tickets-form";

type ToolbarProps = {
    search?: string;
    sort?: string;
    priority?: string;
};

export default function Toolbar({ search, sort, priority }: ToolbarProps) {
    return (
        <aside>
            <div className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
                <FilterTickets
                    search={search}
                    sort={sort}
                    priority={priority}
                />

            </div>

            <div className="bg-(--color-component) rounded-xl border border-white/10 m-3 p-6">
                <Link href="/tickets/create" className="flex gap-4 items-center whitespace-nowrap"><LuTicketPlus />
                    Create new ticket</Link>
            </div>
        </aside>
    )
}
