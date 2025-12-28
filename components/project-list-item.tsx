import { cn } from "@/lib/utils";
import { Chip } from "./chip";
import { 
  Chrome, 
  Github, 
  Play as PlayIcon, 
  Globe, 
  Layers 
} from "lucide-react";

// Helper to pick the right icon based on the link label
const getLinkIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("play") || l.includes("store")) return <PlayIcon size={14} className="fill-current" />;
  if (l.includes("github") || l.includes("code")) return <Github size={14} />;
  if (l.includes("web") || l.includes("site")) return <Globe size={14} />;
  if (l.includes("chrome")) return <Chrome size={14} />;
  return <Layers size={14} />; // Default "Project" icon
};

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
        "flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-colors dark:border-neutral-800 dark:bg-neutral-950/50",
        "hover:border-neutral-300 dark:hover:border-neutral-700",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          {title}
          {showBuilding && (
             <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:border-amber-900/30 dark:bg-amber-900/10 dark:text-amber-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                </span>
                WIP
             </span>
          )}
        </h4>
        
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              {getLinkIcon(link.label)}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
