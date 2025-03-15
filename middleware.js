import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdmin = token?.role === "ADMIN";
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    const isLoginPage = req.nextUrl.pathname === "/admin/login";

    // Allow access to login page
    if (isLoginPage) {
      if (isAdmin) {
        // If already logged in as admin, redirect to admin dashboard
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      return NextResponse.next();
    }

    // Protect admin routes
    if (isAdminRoute) {
      if (!token) {
        // No token, redirect to login
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
      if (!isAdmin) {
        // Not an admin, redirect to home
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow public access to login page
        if (req.nextUrl.pathname === "/admin/login") {
          return true;
        }
        // Require token for admin routes
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token;
        }
        // Allow access to public routes
        return true;
      },
    },
    pages: {
      signIn: "/admin/login",
    },
  }
);
