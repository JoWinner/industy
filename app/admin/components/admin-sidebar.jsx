"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Ship,
  Map,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Shipments", href: "/admin/shipments", icon: Ship },
    { name: "Port Map", href: "/admin/port-map", icon: Map },
    // { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <h1 className="text-lg font-bold text-gray-900">Admin Portal</h1>
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>
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
              onClick={() => setIsMobileMenuOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-lg"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col w-64 bg-white border-r">
        {sidebarContent}
      </div>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col w-64 h-full z-50 fixed bg-white shadow-lg">
          {sidebarContent}
        </div>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
      </div>
    </>
  );
};

export default AdminSidebar;
