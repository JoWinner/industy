import { redirect } from "next/navigation";
import AdminSidebar from "./components/admin-sidebar";

export default async function AdminLayout({ children }) {
  // TODO: Add proper authentication
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}