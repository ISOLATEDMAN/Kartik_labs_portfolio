import { cn } from "@/lib/utils";
import { Chip } from "./chip";


type ProjectListItemProps = {
  title: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; url: string }[];
  className?: string;
  showBuilding?: boolean;
};

export function ProjectListItem({
  title,
  bullets,
  tags,
  links = [],
  className,
  showBuilding = false,
}: ProjectListItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white px-5 py-4 md:px-6 md:py-5 dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
          {title}
          {showBuilding && (
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Building</span>
            </span>
          )}
        </h4>
        <div className="ml-auto flex gap-2">
          {links.map(l => (
            <a
              key={l.label}
              href={l.url}
              className="text-xs rounded-md border border-neutral-200 px-3 py-1 text-neutral-700 hover:bg-neutral-50 transition-colors dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(t => (
          <Chip key={t} className="px-2.5 py-1 text-xs" variant="soft">
            {t}
          </Chip>
        ))}
      </div>
    </article>
  );
}