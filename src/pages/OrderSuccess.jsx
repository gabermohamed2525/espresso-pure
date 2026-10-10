import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Coffee } from "lucide-react";

function OrderSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f0a07] px-5 py-20">
      <div className="w-full max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#c89b3c]/10">
          <CheckCircle2
            size={52}
            className="text-[#c89b3c]"
          />
        </div>

        <p className="mt-8 text-sm font-medium text-[#c89b3c]">
          Espresso Pure
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
          تم تجهيز طلبك بنجاح
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
          شكرًا لاختيارك Espresso Pure.
          <br />
          تم تجهيز تفاصيل طلبك وإرسالها إلى واتساب.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#17100c] p-5">
          <div className="flex items-center justify-center gap-2 text-[#f5e6c8]">
            <Coffee size={20} className="text-[#c89b3c]" />
            <span className="font-semibold">
              نتمنى لك تجربة قهوة مميزة ☕
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#c89b3c] px-6 py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
          >
            العودة للرئيسية
            <ArrowLeft size={18} />
          </Link>

          <Link
            to="/menu"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
          >
            تصفح القائمة
          </Link>

        </div>

      </div>
    </main>
  );
}

export default OrderSuccess;