export const WHATSAPP_URL =
  "https://wa.me/27678767861?text=" +
  encodeURIComponent("Hi, I'd like to enquire about your contract advisory services.");

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-13 w-13 place-items-center rounded-full text-white shadow-lg transition-opacity duration-200 hover:opacity-90"
      style={{ height: "3.25rem", width: "3.25rem", backgroundColor: "#25D366" }}
      
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.24-4.27c0-4.47 3.65-8.11 8.14-8.11 2.17 0 4.21.85 5.75 2.38a8.06 8.06 0 0 1 2.38 5.74c0 4.48-3.65 8.11-8.13 8.11Zm4.47-6.07c-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.38.1-.5.11-.11.24-.28.36-.42.12-.14.16-.25.24-.41.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.98s.85 2.3.97 2.46c.12.16 1.67 2.62 4.05 3.58 1.42.57 1.98.62 2.69.51.43-.06 1.33-.54 1.51-1.07.18-.53.18-.98.13-1.07-.05-.1-.19-.16-.43-.28Z" />
      </svg>
    </a>
  );
}
