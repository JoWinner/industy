"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Ship,
  Map,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Shipments", href: "/admin/shipments", icon: Ship },
    { name: "Port Map", href: "/admin/port-map", icon: Map },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 px-4 border-b">
        <h1 className="text-lg font-bold text-gray-900">Admin Portal</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-gray-600 hover:text-primary hover:bg-primary/5"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center px-4 py-4 border-t">
        <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-primary hover:bg-primary/5">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar