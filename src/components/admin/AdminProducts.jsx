import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  X,
  Coffee,
  ArrowRight,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import productsData from "../../data/products";

function AdminProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(() => {
  try {
    const savedProducts = localStorage.getItem("espresso-products");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return productsData;
  } catch (error) {
    console.error("Error loading products:", error);
    return productsData;
  }
});

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem(
      "espresso-products",
      JSON.stringify(products)
    );
  }, [products]);

  const categories = [
    "قهوة ساخنة",
    "قهوة باردة",
    "فرابيه",
    "عصائر",
    "شاي وأعشاب",
    "شوكولاتة",
    "ميلك شيك",
    "مخبوزات",
    "كيك",
    "كوكيز",
    "دونات",
    "ساندوتشات",
    "برجر",
    "وجبات خفيفة",
    "آيس كريم",
    "بان كيك ووافل",
    "إضافات",
  ];

  const openAddModal = () => {
    setEditingProduct(null);

    setFormData({
      name: "",
      description: "",
      price: "",
      category: categories[0],
      image: "",
    });

    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.price ||
      !formData.category ||
      !formData.image.trim()
    ) {
      alert("من فضلك أكمل جميع البيانات");
      return;
    }

    if (editingProduct) {
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                name: formData.name,
                description: formData.description,
                price: Number(formData.price),
                category: formData.category,
                image: formData.image,
              }
            : product
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
      };

      setProducts((currentProducts) => [
        newProduct,
        ...currentProducts,
      ]);
    }

    closeModal();
  };

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "هل أنت متأكد من حذف هذا المنتج؟"
    );

    if (!confirmDelete) return;

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  };

  const filteredProducts = products.filter((product) => {
    const searchValue = search.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    );
  });

  const handleLogout = () => {
    localStorage.removeItem("espresso-admin");
    navigate("/admin");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#0f0a07] text-white"
    >

      {/* Header */}
      <header className="border-b border-white/10 bg-[#17100c]">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c89b3c] text-[#0f0a07]">
              <Coffee size={22} />
            </div>

            <div>
              <h1 className="font-bold text-[#f5e6c8]">
                Espresso Pure
              </h1>

              <p className="text-xs text-[#c89b3c]">
                إدارة المنتجات
              </p>
            </div>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-red-400/40 hover:text-red-400"
          >
            <LogOut size={17} />
            تسجيل الخروج
          </button>

        </div>

      </header>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

        {/* Top */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>

            <button
              onClick={() => navigate("/admin/dashboard")}
              className="mb-4 flex items-center gap-2 text-xs text-white/40 transition hover:text-[#c89b3c]"
            >
              <ArrowRight size={15} />
              العودة للوحة التحكم
            </button>

            <h2 className="text-3xl font-bold text-[#f5e6c8]">
              المنتجات
            </h2>

            <p className="mt-2 text-sm text-white/40">
              إدارة جميع منتجات القائمة
            </p>

          </div>

          <button
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#c89b3c] px-5 py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
          >
            <Plus size={19} />
            إضافة منتج
          </button>

        </div>

        {/* Search */}
        <div className="mt-8">

          <div className="relative">

            <Search
              size={19}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث باسم المنتج أو التصنيف..."
              className="w-full rounded-2xl border border-white/10 bg-[#17100c] py-4 pr-12 pl-5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
            />

          </div>

        </div>

        {/* Count */}
        <div className="mt-6 flex items-center justify-between">

          <p className="text-sm text-white/40">
            عدد المنتجات:
            <span className="mr-1 font-bold text-[#c89b3c]">
              {filteredProducts.length}
            </span>
          </p>

        </div>

        {/* Products */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#17100c]">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="border-b border-white/10 text-right text-xs text-white/30">

                  <th className="px-5 py-4 font-medium">
                    المنتج
                  </th>

                  <th className="px-5 py-4 font-medium">
                    التصنيف
                  </th>

                  <th className="px-5 py-4 font-medium">
                    السعر
                  </th>

                  <th className="px-5 py-4 font-medium">
                    الإجراءات
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredProducts.map((product) => (

                  <tr
                    key={product.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >

                    {/* Product */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-4">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />

                        <div className="max-w-md">

                          <h3 className="font-semibold text-[#f5e6c8]">
                            {product.name}
                          </h3>

                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/35">
                            {product.description}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">

                      <span className="rounded-full bg-[#c89b3c]/10 px-3 py-1 text-xs text-[#c89b3c]">
                        {product.category}
                      </span>

                    </td>

                    {/* Price */}
                    <td className="px-5 py-4">

                      <span className="font-bold text-[#f5e6c8]">
                        {product.price} ج.م
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">

                      <div className="flex gap-2">

                        <button
                          onClick={() => openEditModal(product)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
                          title="تعديل"
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:border-red-400/40 hover:text-red-400"
                          title="حذف"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredProducts.length === 0 && (

            <div className="py-20 text-center">

              <Coffee
                size={40}
                className="mx-auto text-white/10"
              />

              <p className="mt-4 text-sm text-white/30">
                لا توجد منتجات مطابقة للبحث
              </p>

            </div>

          )}

        </div>

      </div>

      {/* Modal */}
      {showModal && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-sm">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#17100c]">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <div>

                <h2 className="text-xl font-bold text-[#f5e6c8]">
                  {editingProduct
                    ? "تعديل المنتج"
                    : "إضافة منتج جديد"}
                </h2>

                <p className="mt-1 text-xs text-white/35">
                  أدخل بيانات المنتج
                </p>

              </div>

              <button
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-red-400/40 hover:text-red-400"
              >
                <X size={19} />
              </button>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6"
            >

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm text-white/60">
                  اسم المنتج
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="مثال: كابتشينو كلاسيك"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c89b3c]"
                />

              </div>

              {/* Description */}
              <div>

                <label className="mb-2 block text-sm text-white/60">
                  الوصف
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="وصف المنتج..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c89b3c]"
                />

              </div>

              {/* Price + Category */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm text-white/60">
                    السعر
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="150"
                    min="0"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c89b3c]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm text-white/60">
                    التصنيف
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#21150f] px-4 py-3 text-sm text-white outline-none focus:border-[#c89b3c]"
                  >

                    {categories.map((category) => (

                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>

                    ))}

                  </select>

                </div>

              </div>

              {/* Image */}
              <div>

                <label className="mb-2 block text-sm text-white/60">
                  رابط صورة المنتج
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#c89b3c]"
                  dir="ltr"
                />

              </div>

              {/* Preview */}
              {formData.image && (

                <div>

                  <p className="mb-2 text-xs text-white/35">
                    معاينة الصورة
                  </p>

                  <img
                    src={formData.image}
                    alt="Preview"
                    className="h-48 w-full rounded-2xl object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                </div>

              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-3">

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#c89b3c] py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
                >
                  {editingProduct ? (
                    <>
                      <Edit3 size={18} />
                      حفظ التعديلات
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      إضافة المنتج
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  إلغاء
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </main>
  );
}

export default AdminProducts;