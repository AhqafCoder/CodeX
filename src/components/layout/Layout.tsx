import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-svh flex flex-col bg-background text-foreground">
      {/* Use flex-col for vertical stacking */}
      <Navbar />
      <main className="flex-1 w-full">
        {/* Ensure main is centered with container and mx-auto */}
        {children}
      </main>
      <Footer />
    </div>
  );
}