import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Coffee, Eye, EyeOff } from "lucide-react";

function AdminLogin() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "Espresso@123") {
      localStorage.setItem("espresso-admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("كلمة المرور غير صحيحة");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f0a07] px-5">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c89b3c] text-[#0f0a07] shadow-2xl">
            <Coffee size={36} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#f5e6c8]">
            Espresso Pure
          </h1>

          <p className="mt-2 text-sm text-[#c89b3c]">
            لوحة تحكم الإدارة
          </p>

        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-white/10 bg-[#17100c] p-7 shadow-2xl">

          <div className="mb-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c89b3c]/10">
                <LockKeyhole
                  size={21}
                  className="text-[#c89b3c]"
                />
              </div>

              <div>
                <h2 className="font-bold text-[#f5e6c8]">
                  تسجيل الدخول
                </h2>

                <p className="mt-1 text-xs text-white/40">
                  أدخل كلمة المرور للدخول إلى لوحة التحكم
                </p>
              </div>

            </div>

          </div>

          <form onSubmit={handleLogin}>

            <label className="mb-2 block text-sm font-medium text-white/70">
              كلمة المرور
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="أدخل كلمة المرور"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#c89b3c]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-[#c89b3c]"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

            {error && (
              <p className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c89b3c] py-3 font-bold text-[#0f0a07] transition hover:bg-[#d8b66a]"
            >
              <LockKeyhole size={18} />
              دخول لوحة التحكم
            </button>

          </form>

        </div>

        <p className="mt-6 text-center text-xs text-white/25">
          Espresso Pure Admin Panel
        </p>

      </div>

    </main>
  );
}

export default AdminLogin;