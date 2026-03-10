// components/tickets/filter-tickets-form.tsx

"use client";

import { LuSearch } from "react-icons/lu";
import { FaSort } from "react-icons/fa";
import { BsExclamationDiamond } from "react-icons/bs";

type FilterTicketsProps = {
  search?: string;
  sort?: string;
  priority?: string;
};

export default function FilterTickets({
  search = "",
  sort = "newest",
  priority = "all",
}: FilterTicketsProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <LuSearch />
        <input
          name="search"
          defaultValue={search}
          placeholder="Search tickets..."
          className="flex-1 rounded-xl border border-white/10 bg-(--color-component) p-2"
        />
      </div>

      <div className="flex gap-4 items-center">
        <FaSort />
        <select
          id="sort"
          name="sort"
          defaultValue={sort}
          onChange={(e) => e.currentTarget.form?.submit()}
          className="flex-1 rounded-xl border border-white/10 bg-(--color-component) p-2"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <BsExclamationDiamond />
        <select
          id="priority"
          name="priority"
          defaultValue={priority}
          onChange={(e) => e.currentTarget.form?.submit()}
          className="flex-1 rounded-xl border border-white/10 bg-(--color-component) p-2"
        >
          <option value="all">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      {/* <button
        type="submit"
        className="rounded-xl border border-white/10 bg-(--color-component) p-2"
      >
        Apply filters
      </button> */}
    </form>
  );
}