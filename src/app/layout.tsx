import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import ChatButton from '@/components/ChatButton'

// Add this global declaration to fix the ChannelIO type error
declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "세강병원",
  description: "세강병원 공식 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://channels-plugin.s3.ap-northeast-2.amazonaws.com/channel-plugin/latest/channel-plugin.min.js"
        />
        <Script
          id="channel-talk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ChannelIO('boot', {
                "pluginKey": "YOUR_PLUGIN_KEY", // 채널톡에서 발급받은 플러그인 키를 입력하세요
                "memberId": "", // 로그인한 사용자의 ID (선택사항)
                "profile": {
                  "name": "", // 사용자 이름 (선택사항)
                  "email": "", // 사용자 이메일 (선택사항)
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
