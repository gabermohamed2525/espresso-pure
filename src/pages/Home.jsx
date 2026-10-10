import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  Star,
  Award,
  Clock,
  Heart,
  ShoppingBag,
  Sparkles,
  Users,
  CheckCircle2,
  Quote,
} from "lucide-react";

import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState(() => {
  try {
    const savedProducts = localStorage.getItem("espresso-products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : productsData;
  } catch (error) {
    console.error("Error loading products:", error);
    return productsData;
  }
});

useEffect(() => {
  const loadProducts = () => {
    try {
      const savedProducts = localStorage.getItem("espresso-products");

      setProducts(
        savedProducts ? JSON.parse(savedProducts) : productsData
      );
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  window.addEventListener("focus", loadProducts);
  window.addEventListener("pageshow", loadProducts);
  window.addEventListener("storage", loadProducts);

  return () => {
    window.removeEventListener("focus", loadProducts);
    window.removeEventListener("pageshow", loadProducts);
    window.removeEventListener("storage", loadProducts);
  };
}, []);

  const slides = [
    {
      title: "قهوتك المفضلة",
      highlight: "بطابع مختلف",
      description:
        "استمتع بتجربة قهوة مميزة تجمع بين أجود المكونات والطعم الذي يستحق أن تعود إليه.",
      button: "اكتشف القائمة",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90",
    },
    {
      title: "ابدأ يومك",
      highlight: "بكوب من السعادة",
      description:
        "قهوة طازجة، أجواء هادئة، ومذاق مميز يجعل بداية يومك أفضل.",
      button: "شاهد المشروبات",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=90",
    },
    {
      title: "كل رشفة",
      highlight: "لها حكاية",
      description:
        "من الإسبريسو إلى اللاتيه والفرابيه، اكتشف عالمًا من النكهات في Espresso Pure.",
      button: "استكشف عالمنا",
      image:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=90",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const categories = [
    {
      title: "قهوة ساخنة",
      description: "إسبريسو، لاتيه، كابتشينو وأكثر",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85",
    },
    {
      title: "مشروبات باردة",
      description: "انتعاش مثالي في كل رشفة",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",
    },
    {
      title: "فرابيه",
      description: "نكهات كريمية ومميزة",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85",
    },
    {
      title: "حلويات",
      description: "قطعة حلوى تكمل قهوتك",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
    },
  ];

  const features = [
    {
      icon: Coffee,
      title: "قهوة مختارة",
      description:
        "نختار أجود أنواع القهوة بعناية لنقدم لك مذاقًا استثنائيًا.",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description:
        "نهتم بكل التفاصيل بداية من المكونات وحتى طريقة التقديم.",
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      description:
        "نحرص على تقديم طلبك بسرعة دون التأثير على الجودة.",
    },
    {
      icon: Heart,
      title: "مصنوعة بحب",
      description:
        "كل كوب يتم تحضيره بشغف حتى تحصل على التجربة التي تستحقها.",
    },
  ];

  const testimonials = [
    {
      name: "محمد أحمد",
      text:
        "من أفضل الأماكن اللي جربت فيها القهوة. الطعم ممتاز والتجربة كلها مختلفة.",
      rating: 5,
    },
    {
      name: "سارة محمود",
      text:
        "اللاتيه والفرابيه عندهم ممتازين جدًا، والمكان شكله راقي وهادئ.",
      rating: 5,
    },
    {
      name: "عمر خالد",
      text:
        "القهوة مظبوطة جدًا والخدمة سريعة. أكيد هكرر التجربة.",
      rating: 5,
    },
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <main className="overflow-hidden bg-[#0f0a07]">

      {/* ================= HERO SLIDER ================= */}

      <section className="relative h-[720px] min-h-[650px] overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "visible scale-100 opacity-100"
                : "invisible scale-105 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0f0a07]/70" />

            <div className="absolute inset-0 bg-gradient-to-l from-[#0f0a07] via-[#0f0a07]/75 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-[#0f0a07]/30" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">

          <div
            key={currentSlide}
            className="max-w-3xl animate-[heroContent_0.8s_ease-out]"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/30 bg-[#c89b3c]/10 px-4 py-2 text-sm text-[#d8b66a] backdrop-blur-md">
              <Sparkles size={16} />
              <span>مرحبًا بك في Espresso Pure</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.2] text-[#f5e6c8] md:text-7xl">

              {slides[currentSlide].title}

              <span className="mt-2 block text-[#c89b3c]">
                {slides[currentSlide].highlight}
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {slides[currentSlide].description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/menu"
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#c89b3c] px-7 py-4 font-bold text-[#0f0a07] transition duration-300 hover:-translate-y-1 hover:bg-[#d8b66a]"
              >
                {slides[currentSlide].button}

                <ArrowLeft
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-md transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
              >
                اكتشف Espresso Pure
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <p className="text-3xl font-bold text-[#f5e6c8]">
                  +20
                </p>
                <p className="mt-1 text-xs text-white/40">
                  مشروب مميز
                </p>
              </div>

              <div className="h-12 w-px bg-white/10" />

              <div>
                <p className="text-3xl font-bold text-[#f5e6c8]">
                  4.9
                </p>
                <div className="mt-1 flex gap-1 text-[#c89b3c]">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>

              <div className="h-12 w-px bg-white/10" />

              <div>
                <p className="text-3xl font-bold text-[#f5e6c8]">
                  100%
                </p>
                <p className="mt-1 text-xs text-white/40">
                  جودة واهتمام
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Arrows */}

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition hover:border-[#c89b3c] hover:text-[#c89b3c] md:left-8"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition hover:border-[#c89b3c] hover:text-[#c89b3c] md:right-8"
        >
          <ArrowRight size={20} />
        </button>

        {/* Dots */}

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-9 bg-[#c89b3c]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

      </section>

      {/* ================= CATEGORY SECTION ================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-bold text-[#c89b3c]">
              قائمتنا
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              اختار مزاجك اليوم
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
              مجموعة متنوعة من المشروبات والحلويات التي تناسب كل وقت وكل ذوق.
            </p>
          </div>

          <Link
            to="/menu"
            className="group flex items-center gap-2 text-sm font-bold text-[#c89b3c]"
          >
            عرض القائمة كاملة
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </Link>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <Link
              to="/menu"
              key={category.title}
              className="group relative h-72 overflow-hidden rounded-3xl border border-white/10"
            >

              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 right-0 left-0 p-6">

                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-white/55">
                  {category.description}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="border-y border-white/10 bg-[#130d09]">

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold text-[#c89b3c]">
              لماذا Espresso Pure؟
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
              لأنك تستحق الأفضل
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              لا نقدم مجرد مشروب، بل نهتم بأن تكون كل زيارة تجربة تتذكرها.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-[#17100c] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#c89b3c]/40"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c89b3c]/10 text-[#c89b3c] transition group-hover:bg-[#c89b3c] group-hover:text-[#0f0a07]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#f5e6c8]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#17100c] sm:grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-white/10 p-8 text-center sm:border-l lg:border-b-0">
            <Coffee className="mx-auto text-[#c89b3c]" size={28} />
            <p className="mt-4 text-4xl font-extrabold text-[#f5e6c8]">
              +20
            </p>
            <p className="mt-2 text-sm text-white/40">
              اختيار من المشروبات
            </p>
          </div>

          <div className="border-b border-white/10 p-8 text-center lg:border-b-0 lg:border-l">
            <Users className="mx-auto text-[#c89b3c]" size={28} />
            <p className="mt-4 text-4xl font-extrabold text-[#f5e6c8]">
              +1000
            </p>
            <p className="mt-2 text-sm text-white/40">
              عميل سعيد
            </p>
          </div>

          <div className="border-b border-white/10 p-8 text-center sm:border-l lg:border-b-0">
            <Star className="mx-auto text-[#c89b3c]" size={28} />
            <p className="mt-4 text-4xl font-extrabold text-[#f5e6c8]">
              4.9
            </p>
            <p className="mt-2 text-sm text-white/40">
              متوسط التقييم
            </p>
          </div>

          <div className="p-8 text-center">
            <Award className="mx-auto text-[#c89b3c]" size={28} />
            <p className="mt-4 text-4xl font-extrabold text-[#f5e6c8]">
              100%
            </p>
            <p className="mt-2 text-sm text-white/40">
              اهتمام بالجودة
            </p>
          </div>

        </div>

      </section>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="border-y border-white/10 bg-[#130d09]">

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-bold text-[#c89b3c]">
                اختياراتنا
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
                الأكثر طلبًا
              </h2>

              <p className="mt-3 text-sm text-white/45">
                جرب مجموعة من المشروبات التي يفضلها عملاؤنا.
              </p>
            </div>

            <Link
              to="/menu"
              className="group flex items-center gap-2 text-sm font-bold text-[#c89b3c]"
            >
              مشاهدة كل المنتجات
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold text-[#c89b3c]">
            آراء عملائنا
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
            ماذا يقولون عنا؟
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-[#17100c] p-7"
            >

              <Quote
                size={30}
                className="text-[#c89b3c]"
              />

              <div className="mt-5 flex gap-1 text-[#c89b3c]">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-8 text-white/55">
                "{item.text}"
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-[#f5e6c8]">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-white/35">
                  عميل في Espresso Pure
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden border-t border-white/10">

        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
          alt="Espresso Pure"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0f0a07]/80" />

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">

          <Coffee
            size={42}
            className="mx-auto text-[#c89b3c]"
          />

          <h2 className="mt-6 text-3xl font-extrabold text-[#f5e6c8] md:text-5xl">
            لحظتك مع القهوة تبدأ هنا
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/55">
            اختر مشروبك المفضل، أضفه إلى السلة،
            واستمتع بتجربة Espresso Pure.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c89b3c] px-8 py-4 font-bold text-[#0f0a07] transition hover:-translate-y-1 hover:bg-[#d8b66a]"
          >
            اطلب الآن
            <ShoppingBag size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;