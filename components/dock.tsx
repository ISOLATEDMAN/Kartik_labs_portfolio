import {
  Github,
  Home,
  Mail,
  Globe2,
  User,
  Twitter,
  Linkedin,
} from "lucide-react";

export function Dock() {
  const items = [
    { icon: Home, label: "Home", href: "#", external: false },
    {
      icon: Twitter,
      label: "Follow on Twitter",
      href: "https://x.com/KARTIKEYA_S_1",
      external: true,
    },
    { icon: Github, label: "View GitHub", href: "https://github.com/ISOLATEDMAN", external: true },
    {
      icon: Linkedin,
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/kartikeya-samudrala-59164b252/",
      external: true,
    },
    { icon: Mail, label: "Send Email", href: "mailto:samudralakartikeya@gmail.com", external: false },
  ];
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <nav
        aria-label="Quick actions"
        className="flex items-center gap-1 rounded-xl border border-neutral-200 bg-white/90 p-1.5 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
      >
        {items.map(it => (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noopener noreferrer" : undefined}
            aria-label={it.label}
            className="group inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 transition-colors"
          >
            <it.icon className="h-4 w-4 opacity-90" aria-hidden="true" />
            <span className="sr-only">{it.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}