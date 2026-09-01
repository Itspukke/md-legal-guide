import { useEffect, useState } from "react";

const STORAGE_KEY = "md-legal-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use cookies to keep this site working and to understand how it is used. You can accept
          or decline non-essential cookies at any time.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="border border-border px-5 py-2 text-sm text-navy transition-colors duration-200 hover:border-navy"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="bg-gold px-5 py-2 text-sm text-accent-foreground transition-opacity duration-200 hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
