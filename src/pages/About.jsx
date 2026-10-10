import {
  Award,
  Coffee,
  Heart,
  Leaf,
  Users,
  CheckCircle2,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Coffee,
      title: "قهوة مختارة بعناية",
      description:
        "نختار حبوب القهوة بعناية لنقدم لك مذاقًا متوازنًا في كل كوب.",
    },
    {
      icon: Award,
      title: "جودة نهتم بها",
      description:
        "نهتم بكل التفاصيل بداية من اختيار المكونات وحتى تقديم الطلب.",
    },
    {
      icon: Heart,
      title: "نصنعها بحب",
      description:
        "كل مشروب يتم تحضيره بشغف لأننا نؤمن أن التفاصيل الصغيرة تصنع الفرق.",
    },
    {
      icon: Leaf,
      title: "مكونات طازجة",
      description:
        "نحرص على استخدام مكونات طازجة للحصول على أفضل تجربة ممكنة.",
    },
  ];

  const features = [
    "حبوب قهوة مختارة بعناية",
    "مشروبات يتم تحضيرها عند الطلب",
    "مكونات عالية الجودة",
    "تجربة مميزة لكل عميل",
    "قائمة متنوعة تناسب جميع الأذواق",
    "خدمة سريعة واهتمام بالتفاصيل",
  ];

  return (
    <main className="min-h-screen bg-[#0f0a07] pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=85"
            alt="Espresso Pure"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#0f0a07] via-[#0f0a07]/90 to-[#0f0a07]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-widest text-[#c89b3c]">
              ESPRESSO PURE
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-[#f5e6c8] md:text-6xl">
              أكثر من مجرد
              <span className="block text-[#c89b3c]">
                كوب قهوة
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              في Espresso Pure نؤمن أن القهوة ليست مجرد مشروب،
              بل لحظة تستحق أن تعيشها بكل تفاصيلها.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
              alt="Coffee"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-[#c89b3c]">
              قصتنا
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              بدأت بحب بسيط للقهوة
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              بدأ Espresso Pure من فكرة بسيطة:
              تقديم كوب قهوة بجودة عالية وتجربة مختلفة
              تجعل كل زيارة لها طابع خاص.
            </p>

            <p className="mt-4 leading-8 text-white/55">
              ومع الوقت أصبحت الفكرة أكبر من مجرد قهوة.
              أصبح هدفنا أن نصنع مكانًا يشعر فيه كل شخص
              بالراحة ويجد المشروب الذي يناسب ذوقه.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#17100c] p-5">
                <p className="text-3xl font-bold text-[#c89b3c]">
                  +20
                </p>
                <p className="mt-1 text-sm text-white/50">
                  اختيار في القائمة
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17100c] p-5">
                <p className="text-3xl font-bold text-[#c89b3c]">
                  4.9
                </p>
                <p className="mt-1 text-sm text-white/50">
                  تقييم عملائنا
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-[#130d09]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-[#c89b3c]">
              لماذا نحن؟
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              التفاصيل الصغيرة تصنع الفرق
            </h2>

            <p className="mt-4 leading-7 text-white/50">
              نهتم بكل تفصيلة حتى تحصل على تجربة تستحق العودة من أجلها.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#17100c] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#c89b3c]/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#f5e6c8]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold text-[#c89b3c]">
              التزامنا
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              نريد أن تكون كل زيارة مختلفة
            </h2>

            <p className="mt-5 leading-8 text-white/50">
              من أول رشفة وحتى آخر لحظة، نعمل على تقديم
              تجربة متكاملة تجمع بين الجودة والطعم والخدمة.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#c89b3c]"
                  />

                  <span className="text-sm text-white/70">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
                alt="Coffee shop"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-[#c89b3c]/30 bg-[#17100c] p-6 shadow-2xl sm:block">
              <Users
                size={28}
                className="text-[#c89b3c]"
              />

              <p className="mt-3 text-2xl font-bold text-[#f5e6c8]">
                أنت أولويتنا
              </p>

              <p className="mt-1 text-xs text-white/40">
                تجربة تستحق التكرار
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#130d09]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">

          <Coffee
            size={40}
            className="mx-auto text-[#c89b3c]"
          />

          <h2 className="mt-5 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
            مستعد لتجربة Espresso Pure؟
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/50">
            اكتشف قائمتنا واختر مشروبك المفضل واستمتع
            بتجربة قهوة مختلفة.
          </p>

          <a
            href="/menu"
            className="mt-8 inline-flex rounded-xl bg-[#c89b3c] px-7 py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
          >
            اكتشف القائمة
          </a>

        </div>
      </section>

    </main>
  );
}

export default About;