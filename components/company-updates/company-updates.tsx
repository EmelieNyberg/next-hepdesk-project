// components/company-updates/company-updates.tsx

import { LuNewspaper } from "react-icons/lu";

const companyUpdates = [
    {
        title: "New AI Monitoring System Deployed",
        body: "We have successfully deployed our new AI-based monitoring system across all production servers. The system will help detect anomalies earlier and improve overall system stability.",
        date: "2026-03-10"
    },
    {
        title: "Infrastructure Upgrade Completed",
        body: "Our infrastructure upgrade has been completed, including new database clusters and improved load balancing. This upgrade is expected to improve performance during peak traffic hours.",
        date: "2026-03-08"
    },
    {
        title: "Security Patch Released",
        body: "A new security patch has been applied to all internal services to address recently discovered vulnerabilities. All teams are advised to update their local environments accordingly.",
        date: "2026-03-06"
    },
    {
        title: "Internal Developer Tools Updated",
        body: "The internal developer toolkit has been updated with improved logging, faster build pipelines, and enhanced debugging tools to support faster development cycles.",
        date: "2026-03-04"
    },
    {
        title: "Cloud Migration Phase 2 Started",
        body: "Phase 2 of our cloud migration project has started. Several backend services will be gradually moved to the new cloud infrastructure over the coming weeks.",
        date: "2026-03-02"
    },
    {
        title: "Performance Improvements Released",
        body: "We have rolled out several performance optimizations across our core APIs. Early benchmarks show up to 35% faster response times for high-load endpoints.",
        date: "2026-02-27"
    },
    {
        title: "New Collaboration Platform Introduced",
        body: "A new internal collaboration platform has been introduced to streamline communication between engineering, product, and support teams.",
        date: "2026-02-25"
    },
    {
        title: "Data Backup Strategy Improved",
        body: "Our backup strategy has been enhanced with additional redundancy and faster restore capabilities to ensure improved data safety and reliability.",
        date: "2026-02-22"
    }
];

export default function CompanyUpdates() {

    return (
        <section className="bg-(--color-component) rounded-xl border border-white/10">

            <div className="border-b border-white/10 pt-3">
                <h2 className="flex items-center gap-4 text-2xl font-bold p-6"><LuNewspaper className="text-(--text-clr)" />
                    Company Updates</h2>
            </div>

            <ul className="grid gap-3 p-6 max-h-[420px] overflow-y-auto">
                {companyUpdates.map((update, index) => (
                    <li
                        key={index}
                        className="bg-(--color-component) rounded-xl border border-white/10 p-6 flex gap-6">
                        <div className="grid gap-4">
                            <div className="flex justify-between">
                                <h3 className="font-bold">{update.title}</h3>
                                <span className="text-white/40">{update.date}</span>
                            </div>
                            <p>{update.body}</p>
                        </div>
                    </li>
                ))}
            </ul >
        </section >
    )
}
