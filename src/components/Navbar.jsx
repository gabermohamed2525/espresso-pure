import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X , LayoutDashboard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "القائمة", path: "/menu" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#0f0a07]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c89b3c] text-xl shadow-lg">
            ☕
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#f5e6c8]">
              Espresso Pure
            </h1>

            <p className="text-[10px] tracking-[0.25em] text-[#c89b3c]">
              قهوة بطابع خاص
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-[#c89b3c]"
                    : "text-white/80 hover:text-[#c89b3c]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5e6c8] transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            <ShoppingBag size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c89b3c] text-[10px] font-bold text-[#0f0a07]">
              {cartCount}
            </span>
          </Link>
          <Link to={'/admin/login'}>
         <LayoutDashboard className="w-5 h-5" />
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5e6c8] md:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0f0a07] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#c89b3c]/10 text-[#c89b3c]"
                      : "text-white/80 hover:bg-white/5 hover:text-[#c89b3c]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;