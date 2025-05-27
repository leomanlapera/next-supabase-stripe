import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BuildFast</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/auth/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
