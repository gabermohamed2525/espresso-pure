import { Link } from "react-router-dom";
import {
  Coffee,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0b0705]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              onClick={scrollToTop}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c89b3c] text-xl text-[#0f0a07]">
                ☕
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#f5e6c8]">
                  Espresso Pure
                </h2>

                <p className="text-[10px] tracking-[0.25em] text-[#c89b3c]">
                  قهوة بطابع خاص
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              تجربة قهوة مختلفة تجمع بين الجودة،
              المذاق المميز، والأجواء التي تستحق أن تعود إليها.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

              <div className="mt-6 flex gap-3">

                    خدمة العملاء

                    </div>

              <a
                href="https://wa.me/201043594303"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
              >
                <MessageCircle size={18} />
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-[#f5e6c8]">
              روابط سريعة
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                onClick={scrollToTop}
                className="text-sm text-white/45 transition hover:text-[#c89b3c]"
              >
                الرئيسية
              </Link>

              <Link
                to="/menu"
                onClick={scrollToTop}
                className="text-sm text-white/45 transition hover:text-[#c89b3c]"
              >
                القائمة
              </Link>

              <Link
                to="/about"
                onClick={scrollToTop}
                className="text-sm text-white/45 transition hover:text-[#c89b3c]"
              >
                من نحن
              </Link>

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="text-sm text-white/45 transition hover:text-[#c89b3c]"
              >
                تواصل معنا
              </Link>

              <Link
                to="/cart"
                onClick={scrollToTop}
                className="text-sm text-white/45 transition hover:text-[#c89b3c]"
              >
                سلة المشتريات
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-[#f5e6c8]">
              تواصل معنا
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#c89b3c]"
                />

                <div>
                  <p className="text-sm text-white/70">
                    موقعنا
                  </p>

                  <p className="mt-1 text-xs leading-6 text-white/35">
                    القاهرة، مصر
                    <br />
                    شارع القهوة الرئيسي
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-[#c89b3c]"
                />

                <div>
                  <p className="text-sm text-white/70">
                    الهاتف
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 text-xs text-white/35"
                  >
                    +20 104 359 4303
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold text-[#f5e6c8]">
              مواعيد العمل
            </h3>

            <div className="mt-6 flex items-start gap-3">

              <Clock
                size={20}
                className="mt-1 shrink-0 text-[#c89b3c]"
              />

              <div>
                <p className="text-sm text-white/70">
                  يوميًا
                </p>

                <p className="mt-2 text-sm text-white/40">
                  8:00 صباحًا
                </p>

                <p className="mt-1 text-sm text-white/40">
                  حتى 12:00 مساءً
                </p>
              </div>

            </div>

            <div className="mt-7 rounded-2xl border border-[#c89b3c]/20 bg-[#c89b3c]/5 p-4">
              <div className="flex items-center gap-2">
                <Coffee
                  size={18}
                  className="text-[#c89b3c]"
                />

                <p className="text-sm font-semibold text-[#f5e6c8]">
                  جاهز لقهوة مميزة؟
                </p>
              </div>

              <Link
                to="/menu"
                onClick={scrollToTop}
                className="mt-3 inline-block text-xs font-bold text-[#c89b3c] hover:text-[#d8b66a]"
              >
                اكتشف القائمة ←
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row lg:px-8">

          <p className="text-center text-xs text-white/30 sm:text-right">
            © {new Date().getFullYear()} Espresso Pure. جميع الحقوق محفوظة.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50 transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            العودة للأعلى
            <ArrowUp size={15} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;