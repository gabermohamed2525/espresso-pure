import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Coffee,
} from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-[#0f0a07] pt-20">

      {/* Hero */}
      <section className="border-b border-white/10 bg-[#130d09]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">

          <p className="text-sm font-bold tracking-widest text-[#c89b3c]">
            ESPRESSO PURE
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-[#f5e6c8] md:text-5xl">
            تواصل معنا
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/50">
            عندك سؤال أو استفسار؟ يسعدنا دائمًا أن نتواصل معك
            ونساعدك في أي وقت.
          </p>

        </div>
      </section>

      {/* Contact Info */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 transition hover:-translate-y-1 hover:border-[#c89b3c]/40">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c]">
              <MapPin size={25} />
            </div>

            <h3 className="mt-5 font-bold text-[#f5e6c8]">
              موقعنا
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/45">
              القاهرة، مصر
              <br />
              شارع القهوة الرئيسي
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 transition hover:-translate-y-1 hover:border-[#c89b3c]/40">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c]">
              <Phone size={25} />
            </div>

            <h3 className="mt-5 font-bold text-[#f5e6c8]">
              الهاتف
            </h3>

            <p
              dir="ltr"
              className="mt-2 text-sm leading-6 text-white/45"
            >
              +20 104 359 4303
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 transition hover:-translate-y-1 hover:border-[#c89b3c]/40">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c]">
              <Mail size={25} />
            </div>

            <h3 className="mt-5 font-bold text-[#f5e6c8]">
              البريد الإلكتروني
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/45">
              info@espressopure.com
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 transition hover:-translate-y-1 hover:border-[#c89b3c]/40">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c]">
              <Clock size={25} />
            </div>

            <h3 className="mt-5 font-bold text-[#f5e6c8]">
              مواعيد العمل
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/45">
              يوميًا
              <br />
              8:00 صباحًا - 12:00 مساءً
            </p>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="border-y border-white/10 bg-[#130d09]">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

          {/* Text */}
          <div className="flex flex-col justify-center">

            <Coffee
              size={42}
              className="text-[#c89b3c]"
            />

            <h2 className="mt-6 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              يسعدنا سماعك
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-white/50">
              سواء كنت تريد الاستفسار عن القائمة أو لديك
              اقتراح لتحسين تجربتك، اترك لنا رسالة وسنتواصل
              معك في أقرب وقت.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#c89b3c]">
                  <Phone size={18} />
                </div>

                <span dir="ltr">
                  +20 104 359 4303
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#c89b3c]">
                  <Mail size={18} />
                </div>

                <span>
                  info@espressopure.com
                </span>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 md:p-8">

            <form className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#f5e6c8]">
                  الاسم
                </label>

                <input
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#f5e6c8]">
                  رقم الهاتف
                </label>

                <input
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#f5e6c8]">
                  البريد الإلكتروني
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  dir="ltr"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#f5e6c8]">
                  رسالتك
                </label>

                <textarea
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
                />
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c89b3c] py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
              >
                إرسال الرسالة
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c89b3c]/10">
          <Coffee
            size={30}
            className="text-[#c89b3c]"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#f5e6c8]">
          قهوتك المفضلة في انتظارك ☕
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/45">
          اكتشف قائمة Espresso Pure واختر مشروبك المفضل.
        </p>

        <a
          href="/menu"
          className="mt-7 inline-flex rounded-xl bg-[#c89b3c] px-7 py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
        >
          تصفح القائمة
        </a>

      </section>

    </main>
  );
}

export default Contact;