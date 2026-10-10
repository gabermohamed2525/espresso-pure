import { ShoppingBag, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#17100c] transition duration-300 hover:-translate-y-2 hover:border-[#c89b3c]/40 hover:shadow-2xl">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4 rounded-full bg-[#0f0a07]/80 px-3 py-1 text-xs text-[#c89b3c] backdrop-blur-md">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#f5e6c8]">
              {product.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/50">
              {product.description}
            </p>
          </div>

          <span className="whitespace-nowrap text-lg font-bold text-[#c89b3c]">
            {product.price} ج.م
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c89b3c] py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
        >          
        <ShoppingBag size={18} />
          أضف إلى السلة
          <Plus size={16} />
        </button>

      </div>
    </div>
  );
}

export default ProductCard;