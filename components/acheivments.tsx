import { cn } from "@/lib/utils";

type AchievementItemProps = {
  title: string;
  date: string;
  description: string;
  href?: string;
  className?: string;
};

export function AchievementItem({
  title,
  date,
  description,
  href,
  className,
}: AchievementItemProps) {
  return (
    <div className={cn("group flex flex-col gap-1", className)}>
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {title}
        </h4>
        <span className="text-xs text-neutral-400 dark:text-neutral-600 tabular-nums shrink-0">
          {date}
        </span>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
        {description}
      </p>
      {href && (
        <a href={href} className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline underline-offset-2 transition-colors">
          View details
        </a>
      )}
    </div>
  );
}