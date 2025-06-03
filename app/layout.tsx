import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "@excalidraw/excalidraw/index.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lexora – Next-Gen Note & Whiteboard App",
  description: "Lexora is a clean, creative-first note-taking and whiteboarding app built with performance and clarity in mind. Think freely, write boldly, collaborate instantly.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ConvexClientProvider>
          {children}
          <Toaster richColors />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
