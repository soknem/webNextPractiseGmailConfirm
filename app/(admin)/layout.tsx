'use client'
import "@/globals.css";
import SidebarComponent from "@/components/sidebar/SidebarComponent";
import { useState } from "react";
import { ProductType } from "@/components/lib/definitions";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const[isShow,setIsShow]=useState<Boolean>(false);

  return (
    
    <html>
      <body className="bg-gray-200 flex">
        <aside className="h-screen">
          <SidebarComponent />
        </aside>
        <main className="flex-1"> {children}</main>
      </body>
    </html>
  );
}
