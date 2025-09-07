// app/episodes/page.tsx
import Link from "next/link";
import { fetchEpisodes } from "@/lib/rss";

/**
 * Utilities
 */
function formatMonthYear(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function EpisodesPage() {
  // 1) Fetch & sort newest → oldest
  const raw = await fetchEpisodes().catch(() => []) as Array<{
    id: string;
    title: string;
    description?: string;
    date: string;          // ISO
    audioUrl?: string;
    image?: string;
  }>;

  const sorted = [...raw]
    .filter(e => e?.date)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((ep, i, arr) => ({
      ...ep,
      // Running number like the reference (highest number = latest episode)
      number: arr.length - i,
      dateObj: new Date(ep.date),
    }));

  // 2) Group by Month Year
  const groups = sorted.reduce<Record<string, typeof sorted>>((acc, ep) => {
    const key = formatMonthYear(ep.dateObj);
    (acc[key] ||= []).push(ep);
    return acc;
  }, {});

  const monthKeys = Object.keys(groups); // already in sorted order because "sorted" was newest → oldest

  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="sr-only">Episodes</h1>

        <div className="space-y-16">
          {monthKeys.map((month) => (
            <section key={month} className="space-y-10">
              {/* Month header */}
              <header className="sticky top-0 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-4">
                <h2 className="font-serif text-2xl md:text-4xl tracking-tight">{month}</h2>
              </header>

              <div className="space-y-14">
                {groups[month].map((ep) => {
                  const href =
                    ep.id ? `/episodes/${encodeURIComponent(ep.id)}` :
                    ep.audioUrl || "#";

                  return (
                    <article
                      key={ep.id || ep.audioUrl || ep.title}
                      className="grid gap-6 md:grid-cols-[minmax(220px,320px)_1fr]"
                    >
                      {/* Cover image (kept as <img> for simplicity/compat) */}
                      <Link
                        href={href}
                        className="block overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5"
                      >
                        <img
                          src={
                            ep.image ||
                            "https://placehold.co/1200x1200?text=Episode+Cover"
                          }
                          alt=""
                          loading="lazy"
                          className="aspect-[1/1] w-full object-cover"
                        />
                      </Link>

                      {/* Right column */}
                      <div className="flex flex-col">
                        {/* Number badge */}
                        <div className="mb-6">
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-white font-serif text-2xl text-neutral-800 shadow-sm">
                            {ep.number}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-3xl leading-tight md:text-5xl text-neutral-900">
                          <Link href={href} className="hover:opacity-90">
                            {ep.title}
                          </Link>
                        </h3>

                        {/* Date */}
                        <p className="mt-4 text-neutral-500">
                          {ep.dateObj.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>

                        {/* Optional description */}
                        {ep.description && (
                          <p className="mt-4 line-clamp-3 text-neutral-700 leading-relaxed">
                            {ep.description}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
