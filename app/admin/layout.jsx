"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import AdminSidebar from "./components/admin-sidebar";
import { Loader2 } from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/admin/login");
    },
  });

  useEffect(() => {
    // Handle session expiry and role check
    if (status === "authenticated") {
      if (!session?.user?.role || session.user.role !== "ADMIN") {
        router.push("/");
      }
    }
  }, [session, status, router]);

  // Don't show loading state on login page
  if (pathname === "/admin/login") {
    return children;
  }

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Only render admin layout if user is authenticated and is an admin
  if (status === "authenticated" && session?.user?.role === "ADMIN") {
    return (
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    );
  }

  // Return null while redirecting
  return null;
}
