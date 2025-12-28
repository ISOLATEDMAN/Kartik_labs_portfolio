
import { Building2, Shield } from "lucide-react";
import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  icon?: "shield" | "building";
  logoUrl?: string;
  showActiveStatus?: boolean;
};

export function WorkItem({
  company,
  role,
  period,
  summary,
  icon = "building",
  logoUrl,
  showActiveStatus = false,
}: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2;
  return (
    <div className="group relative flex gap-4 rounded-xl border border-transparent p-2 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
      {/* Timeline Line */}
      <div className="absolute left-[1.65rem] top-10 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 group-last:hidden" />

      {/* Logo / Icon */}
      <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={40}
            height={40}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <Icon className="h-5 w-5 text-neutral-500" aria-hidden="true" />
        )}
        {showActiveStatus && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-neutral-950"></span>
          </span>
        )}
      </div>

      <div className="flex-1 pb-6 group-last:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {company}
          </h4>
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 tabular-nums">
            {period}
          </span>
        </div>
        
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
          {role}
        </p>
        
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-xl">
          {summary}
        </p>
      </div>
    </div>
  );
}