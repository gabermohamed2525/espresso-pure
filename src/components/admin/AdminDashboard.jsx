import {
  Coffee,
  ShoppingBag,
  Users,
  DollarSign,
  TrendingUp,
  Package,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("espresso-admin");
    navigate("/admin");
  };

  const stats = [
    {
      title: "إجمالي المنتجات",
      value: "120",
      icon: Coffee,
      description: "منتج متوفر",
    },
    {
      title: "إجمالي الطلبات",
      value: "86",
      icon: ShoppingBag,
      description: "طلب هذا الشهر",
    },
    {
      title: "العملاء",
      value: "1,240",
      icon: Users,
      description: "عميل مسجل",
    },
    {
      title: "المبيعات",
      value: "48,500",
      icon: DollarSign,
      description: "جنيه مصري",
    },
  ];

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
                لوحة التحكم
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

        {/* Title */}
        <div className="mb-8">

          <p className="text-sm text-[#c89b3c]">
            مرحبًا بك 👋
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#f5e6c8]">
            لوحة التحكم
          </h2>

          <p className="mt-2 text-sm text-white/40">
            تابع أداء متجر Espresso Pure من مكان واحد.
          </p>

        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-[#17100c] p-5 transition hover:-translate-y-1 hover:border-[#c89b3c]/40"
              >

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm text-white/45">
                      {stat.title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-[#f5e6c8]">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-xs text-white/30">
                      {stat.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c89b3c]/10">
                    <Icon
                      size={21}
                      className="text-[#c89b3c]"
                    />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Sales */}
          <div className="rounded-2xl border border-white/10 bg-[#17100c] p-6">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-[#f5e6c8]">
                  أداء المبيعات
                </h3>

                <p className="mt-1 text-xs text-white/35">
                  مقارنة المبيعات خلال الفترة الأخيرة
                </p>
              </div>

              <TrendingUp
                size={22}
                className="text-[#c89b3c]"
              />

            </div>

            <div className="mt-8 flex items-end gap-2">

              <span className="text-4xl font-bold text-[#f5e6c8]">
                48.5K
              </span>

              <span className="mb-1 text-sm text-green-400">
                +18.4%
              </span>

            </div>

            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/5">

              <div className="h-full w-[78%] rounded-full bg-[#c89b3c]" />

            </div>

            <div className="mt-3 flex justify-between text-xs text-white/25">
              <span>هذا الشهر</span>
              <span>الهدف: 62K</span>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-[#17100c] p-6">

            <div>
              <h3 className="font-bold text-[#f5e6c8]">
                إجراءات سريعة
              </h3>

              <p className="mt-1 text-xs text-white/35">
                الوصول السريع لأهم أقسام الإدارة
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <button
                onClick={() => navigate("/admin/products")}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-right transition hover:border-[#c89b3c]/50 hover:bg-[#c89b3c]/5"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c89b3c]/10">
                    <Package
                      size={19}
                      className="text-[#c89b3c]"
                    />
                  </div>

                  <span className="text-sm font-medium text-white/70">
                    إدارة المنتجات
                  </span>

                </div>

                <ArrowLeft
                  size={17}
                  className="text-white/30"
                />

              </button>

              <button
                onClick={() => navigate("/admin/orders")}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-right transition hover:border-[#c89b3c]/50 hover:bg-[#c89b3c]/5"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c89b3c]/10">
                    <ShoppingBag
                      size={19}
                      className="text-[#c89b3c]"
                    />
                  </div>

                  <span className="text-sm font-medium text-white/70">
                    إدارة الطلبات
                  </span>

                </div>

                <ArrowLeft
                  size={17}
                  className="text-white/30"
                />

              </button>

            </div>

          </div>

        </div>

        {/* Recent Orders */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#17100c]">

          <div className="flex items-center justify-between border-b border-white/10 p-6">

            <div>
              <h3 className="font-bold text-[#f5e6c8]">
                آخر الطلبات
              </h3>

              <p className="mt-1 text-xs text-white/35">
                أحدث الطلبات على المتجر
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/orders")}
              className="text-xs font-medium text-[#c89b3c] hover:text-[#d8b66a]"
            >
              عرض الكل
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px]">

              <thead>
                <tr className="border-b border-white/10 text-right text-xs text-white/30">

                  <th className="px-6 py-4 font-medium">
                    رقم الطلب
                  </th>

                  <th className="px-6 py-4 font-medium">
                    العميل
                  </th>

                  <th className="px-6 py-4 font-medium">
                    المبلغ
                  </th>

                  <th className="px-6 py-4 font-medium">
                    الحالة
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-white/5">

                  <td className="px-6 py-4 text-sm text-[#c89b3c]">
                    #EP-1024
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    محمد أحمد
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    420 ج.م
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      مكتمل
                    </span>

                  </td>

                </tr>

                <tr className="border-b border-white/5">

                  <td className="px-6 py-4 text-sm text-[#c89b3c]">
                    #EP-1023
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    سارة محمود
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    285 ج.م
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                      قيد التنفيذ
                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="px-6 py-4 text-sm text-[#c89b3c]">
                    #EP-1022
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    عمر خالد
                  </td>

                  <td className="px-6 py-4 text-sm text-white/70">
                    610 ج.م
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      جديد
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}

export default AdminDashboard;