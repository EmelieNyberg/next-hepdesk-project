// page.tsx

import SystemClock from "@/components/system-clock/system-clock";
import TicketOverview from "@/components/tickets/ticket-overview";
import CompanyUpdates from "@/components/company-updates/company-updates";

export default function DashboardPage() {
  return (
    <main className="p-3 grid grid-cols-3 gap-6">

      <div className="col-span-2 grid gap-6">
        <CompanyUpdates />

        <TicketOverview />
      </div>

      <div className="col-span-1">
        <SystemClock />
      </div>

    </main>
  );
}
