// components/system-clock/system-clock.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

export default function SystemClock() {
    const [now, setNow] = useState(new Date());
    const [startTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const time = useMemo(() => {
        return new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(now);
    }, [now]);

    const date = useMemo(() => {
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(now);
    }, [now]);

    const timeZone = useMemo(() => {
        const offsetMinutes = -now.getTimezoneOffset();
        const sign = offsetMinutes >= 0 ? "+" : "-";
        const hours = String(Math.floor(Math.abs(offsetMinutes) / 60)).padStart(2, "0");
        const minutes = String(Math.abs(offsetMinutes) % 60).padStart(2, "0");

        return `UTC${sign}${hours}:${minutes}`;
    }, [now]);

    const uptime = useMemo(() => {
        const diffMs = now.getTime() - startTime.getTime();

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${days}d ${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    }, [now, startTime]);

    return (
        <section className="overflow-hidden rounded-xl border border-white/10 bg-(--color-component) text-white shadow-[0_0_30px_rgba(0,255,255,0.04)]">
            <div className="border-b border-white/10 bg-(--color-component) px-8 py-12 text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
                    System Time
                </p>

                <h2 className="font-mono text-3xl text-(--text-clr) md:text-4xl">{time}</h2>

                <p className="mt-4 text-1xl text-white/60">{date}</p>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-(--color-component) p-6">
                    <p className="mb-3 text-sm text-white/40">Uptime</p>
                    <p className="font-mono text-1xl text-white/90">{uptime}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-(--color-component) p-6">
                    <p className="mb-3 text-sm text-white/40">Time Zone</p>
                    <p className="font-mono text-1xl text-white/90">{timeZone}</p>
                </div>
            </div>
        </section>
    );
}