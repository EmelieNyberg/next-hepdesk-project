// components/tickets/search-tickets-form.tsx

import { LuSearch } from "react-icons/lu";

type SearchTicketFormProps = {
  defaultValue?: string;
};

export default function SearchTicketForm({ defaultValue }: SearchTicketFormProps) {
  return (
    <div className="flex gap-4 items-center">
      <LuSearch size={24} />

      <form>
        <input
          name="search"
          defaultValue={defaultValue}
          placeholder="Search tickets..."
          className="w-full rounded-xl border border-white/10 bg-(--color-component) p-2"
        />
      </form>
    </div>
  );
}
