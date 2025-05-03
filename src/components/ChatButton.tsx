'use client';

import { usePathname } from 'next/navigation';

export default function ChatButton() {
  const pathname = usePathname();

  // Don't render the chat button on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3396FF] text-white font-bold shadow-lg hover:bg-[#1976D2] transition"
        onClick={() => {
          if (typeof window !== 'undefined' && window.ChannelIO) {
            window.ChannelIO('showMessenger');
          }
        }}
        aria-label="실시간 채팅"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="12" fill="white" fillOpacity="0.2"/>
          <path d="M7 10h.01M12 10h.01M17 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 0 1-4.39-1.01L3 20l1.11-3.32C3.4 15.1 3 13.59 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        <span>실시간 채팅</span>
      </button>
    </div>
  );
}