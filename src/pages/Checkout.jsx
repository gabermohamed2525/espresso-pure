import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Checkout() {
    const navigate = useNavigate();
const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((currentData) => ({
    ...currentData,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    alert("من فضلك اكتب الاسم بالكامل");
    return;
  }

  if (!formData.phone.trim()) {
    alert("من فضلك اكتب رقم الهاتف");
    return;
  }

  if (!formData.address.trim()) {
    alert("من فضلك اكتب العنوان");
    return;
  }

  let message = `☕ طلب جديد - Espresso Pure

👤 الاسم: ${formData.name}
📱 الهاتف: ${formData.phone}
📍 العنوان: ${formData.address}

🛒 المنتجات:
`;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    message += `- ${item.name} × ${item.quantity} = ${itemTotal} ج.م\n`;
  });

  message += `
💰 الإجمالي: ${cartTotal} ج.م
`;

  if (formData.notes.trim()) {
    message += `
📝 ملاحظات:
${formData.notes}
`;
  }

const whatsappUrl = `https://wa.me/201043594303?text=${encodeURIComponent(
  message
)}`;

window.open(whatsappUrl, "_blank");

clearCart();

navigate("/order-success");
};
 const {
  cart,
  cartTotal,
  clearCart,
} = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0f0a07] px-5 pb-20 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c89b3c]/10 text-[#c89b3c]">
            <ShoppingBag size={36} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-[#f5e6c8]">
            لا يوجد منتجات لإتمام الطلب
          </h1>

          <p className="mt-3 text-white/50">
            أضف بعض المنتجات إلى السلة أولاً.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c89b3c] px-6 py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
          >
            الذهاب إلى القائمة
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0a07] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#c89b3c]">
            Espresso Pure
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#f5e6c8] md:text-4xl">
            إتمام الطلب
          </h1>

          <p className="mt-3 text-sm text-white/50">
            أدخل بياناتك لإتمام طلبك بسهولة.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-[#17100c] p-6 md:p-8">
            <h2 className="mb-6 text-xl font-bold text-[#f5e6c8]">
              بيانات الطلب
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  الاسم بالكامل
                </label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اكتب اسمك"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c89b3c]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  رقم الهاتف
                </label>

                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01xxxxxxxxx"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c89b3c]"
                />
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  العنوان
                </label>

                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="اكتب عنوان التوصيل بالتفصيل"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c89b3c]"
                    ></textarea>
              </div>

              {/* Notes */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  ملاحظات إضافية
                  <span className="mr-2 text-xs text-white/30">
                    اختياري
                  </span>
                </label>

                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="أي ملاحظات خاصة بالطلب..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c89b3c]"
                    ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#c89b3c] py-4 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
              >
                تأكيد الطلب
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-white/10 bg-[#17100c] p-6">

            <h2 className="mb-6 text-xl font-bold text-[#f5e6c8]">
              ملخص الطلب
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b border-white/10 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-[#f5e6c8]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/40">
                      الكمية: {item.quantity}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-sm font-bold text-[#c89b3c]">
                    {item.price * item.quantity} ج.م
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-6">

              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">
                  المنتجات
                </span>

                <span className="font-medium text-white">
                  {cartTotal} ج.م
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">
                  التوصيل
                </span>

                <span className="text-[#c89b3c]">
                  سيتم تحديده
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-bold text-[#f5e6c8]">
                  الإجمالي
                </span>

                <span className="text-xl font-bold text-[#c89b3c]">
                  {cartTotal} ج.م
                </span>
              </div>

            </div>

            <Link
              to="/cart"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-white/70 transition hover:border-[#c89b3c] hover:text-[#c89b3c]"
            >
              <ArrowRight size={17} />
              العودة إلى السلة
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}

export default Checkout;