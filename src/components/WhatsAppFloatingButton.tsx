import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/554784458998?text=Ol%C3%A1%21%20Quero%20copiar%20a%20Master%20da%20NYVU%20Tecnologia";

const MESSAGES = [
  "Olá! Eu sou a Maitê, especialista da NYVU. Posso te ajudar? 💙",
  "Quer começar a copiar a Master agora?",
  "Tire todas as suas dúvidas comigo aqui no WhatsApp!",
];

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closed) {
        setVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [closed]);

  useEffect(() => {
    if (!visible || closed) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [visible, closed]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setClosed(true);
    setVisible(false);
  }, []);

  const handleOpenWhatsApp = useCallback(() => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {visible && !closed && (
        <button
          onClick={handleOpenWhatsApp}
          className="animate-nyvu-slide-up group relative mb-2 max-w-[260px] cursor-pointer rounded-2xl rounded-br-sm bg-nyvu-white px-4 py-3 text-left shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.02] sm:max-w-[300px]"
          aria-label="Abrir conversa no WhatsApp"
        >
          <span
            onClick={handleClose}
            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-nyvu-black text-nyvu-white opacity-70 transition-opacity hover:opacity-100"
            role="button"
            aria-label="Fechar notificação"
          >
            <X className="h-3.5 w-3.5" />
          </span>
          <p className="pr-4 text-sm font-medium leading-snug text-nyvu-black">
            {MESSAGES[messageIndex]}
          </p>
          <span className="absolute -bottom-1.5 right-0 h-3 w-3 bg-nyvu-white" 
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        </button>
      )}

      <button
        onClick={handleOpenWhatsApp}
        className="animate-nyvu-pulse flex h-14 w-14 items-center justify-center rounded-full bg-nyvu-whatsapp text-nyvu-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-nyvu-white focus:ring-offset-2 focus:ring-offset-nyvu-black"
        aria-label="Falar no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.435C9.348 2.695 6.848 4.295 5.356 6.678c-.744 1.169-1.13 2.498-1.13 3.88 0 1.174.303 2.295.882 3.287l-.97 3.532 3.617-.948c.948.518 2.012.79 3.097.79 2.632 0 5.117-1.612 6.158-4.13 1.04-2.52.5-5.435-1.356-7.36-.05-.05-.1-.1-.15-.148-.05-.05-.1-.1-.15-.148M12.05 0C5.41 0 0 5.41 0 12.05c0 2.12.555 4.18 1.612 6.006L.052 24l6.168-1.612c1.73.944 3.67 1.44 5.63 1.44 6.64 0 12.05-5.41 12.05-12.05S18.69 0 12.05 0z" />
        </svg>
      </button>
    </div>
  );
}
