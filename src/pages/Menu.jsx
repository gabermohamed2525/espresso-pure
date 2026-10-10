import { useEffect, useMemo, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");

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

  // تحديث المنتجات عند الرجوع إلى صفحة القائمة
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

    return () => {
      window.removeEventListener("focus", loadProducts);
      window.removeEventListener("pageshow", loadProducts);
    };
  }, []);

  // استخراج التصنيفات الموجودة فعلًا في المنتجات
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category).filter(Boolean)),
    ];

    return ["الكل", ...uniqueCategories];
  }, [products]);

  // الرجوع إلى "الكل" لو التصنيف المحدد لم يعد موجودًا
  useEffect(() => {
    if (category !== "الكل" && !categories.includes(category)) {
      setCategory("الكل");
    }
  }, [category, categories]);

  const filteredProducts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "الكل" || product.category === category;

      const matchesSearch =
        (product.name || "").toLowerCase().includes(searchValue) ||
        (product.description || "").toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <main className="min-h-screen bg-[#0f0a07] pt-28" dir="rtl">
      {/* Header */}
      <section className="px-5 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[#c89b3c]">
              قائمتنا
            </span>

            <h1 className="mt-3 text-4xl font-extrabold text-[#f5e6c8] sm:text-5xl">
              اختر مشروبك المفضل
            </h1>

            <p className="mt-5 leading-8 text-white/50">
              مجموعة مختارة من القهوة والمشروبات التي
              أعددناها بعناية لتناسب ذوقك.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-white/10 bg-[#130c09] px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === item
                    ? "bg-[#c89b3c] text-[#0f0a07]"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-[#c89b3c]/40 hover:text-[#c89b3c]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pr-11 pl-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c89b3c]/60"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-white/50">
              عرض{" "}
              <span className="font-bold text-[#c89b3c]">
                {filteredProducts.length}
              </span>{" "}
              منتجات
            </p>

            <ShoppingBag size={20} className="text-[#c89b3c]" />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">
              <p className="text-lg font-bold text-[#f5e6c8]">
                لم نجد ما تبحث عنه
              </p>

              <p className="mt-2 text-sm text-white/40">
                جرّب البحث عن منتج آخر أو اختر تصنيفًا مختلفًا.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("الكل");
                }}
                className="mt-5 rounded-xl bg-[#c89b3c] px-5 py-2.5 text-sm font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
              >
                عرض جميع المنتجات
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Menu;