import {
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0f0a07] px-5 pb-20 pt-32 lg:px-8">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">

          <div className="w-full rounded-[2rem] border border-white/10 bg-[#17100c] p-10 text-center shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c89b3c]/10">
              <ShoppingBag
                size={34}
                className="text-[#c89b3c]"
              />
            </div>

            <h1 className="mt-6 text-2xl font-extrabold text-[#f5e6c8]">
              سلتك فارغة
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/50">
              لم تضف أي منتجات إلى سلتك حتى الآن.
              استكشف قائمتنا واختر مشروبك المفضل.
            </p>

            <Link
              to="/menu"
              className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-full bg-[#c89b3c] px-7 py-3.5 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
            >
              تصفح القائمة
              <ArrowLeft size={18} />
            </Link>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0a07] px-5 pb-20 pt-32 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-bold text-[#c89b3c]">
            طلبك
          </span>

          <h1 className="mt-2 text-4xl font-extrabold text-[#f5e6c8]">
            سلة المشتريات
          </h1>

          <p className="mt-3 text-sm text-white/50">
            راجع طلبك قبل إتمام عملية الشراء.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Products */}
          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#17100c] p-4 sm:flex-row sm:items-center"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-full rounded-2xl object-cover sm:h-28 sm:w-32"
                />

                {/* Info */}
                <div className="flex-1">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h2 className="font-bold text-[#f5e6c8]">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-xs text-white/40">
                        {item.category}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/30 transition hover:text-red-400"
                      title="حذف"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <div className="mt-5 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="min-w-5 text-center text-sm font-bold text-white">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c89b3c] text-[#0f0a07] transition hover:bg-[#d8b66a]"
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                    {/* Price */}
                    <div className="text-left">
                      <p className="text-lg font-bold text-[#c89b3c]">
                        {item.price * item.quantity} ج.م
                      </p>

                      {item.quantity > 1 && (
                        <p className="mt-1 text-xs text-white/30">
                          {item.price} ج.م × {item.quantity}
                        </p>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="h-fit rounded-3xl border border-white/10 bg-[#17100c] p-6 lg:sticky lg:top-28">

            <h2 className="text-xl font-bold text-[#f5e6c8]">
              ملخص الطلب
            </h2>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-white/50">
                  المنتجات
                </span>

                <span className="font-semibold text-white">
                  {cartTotal} ج.م
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/50">
                  التوصيل
                </span>

                <span className="text-[#c89b3c]">
                  سيتم تحديده
                </span>
              </div>

            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-center justify-between">

              <span className="font-bold text-white">
                الإجمالي
              </span>

              <span className="text-2xl font-extrabold text-[#c89b3c]">
                {cartTotal} ج.م
              </span>

            </div>

            <Link
            to="/checkout"
            className="flex w-full mx-auto my-6 items-center justify-center rounded-xl bg-[#c89b3c] py-4 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
          >
            إتمام الطلب
          </Link>

            <Link
              to="/menu"
              className="mt-3 flex w-full items-center justify-center rounded-2xl border border-white/10 py-3 text-sm font-semibold text-white/60 transition hover:border-[#c89b3c]/40 hover:text-[#c89b3c]"
            >
              متابعة التسوق
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Cart;