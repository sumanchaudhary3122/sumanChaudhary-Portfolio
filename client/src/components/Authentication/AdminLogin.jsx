import { Lock, MoveRight, MoveUp } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const LoginHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log("Admin Login:", data);
      if (!response.ok) {
        toast.error(data.msg);
        return;
      }
      if (!data.token) {
        toast.error("Login failed. Token not received.");
        return;
      }
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminAuth", "true");
      toast.success(data.msg );
      navigate("/adminDash");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#100b24] via-[#21164a] to-[#4c3b9e] px-4 py-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>
      <div className="relative w-full max-w-md">
        <div className="rounded-[22px] bg-white px-6 py-8 sm:px-9 sm:py-10">
          <div className="mb-7 flex flex-col items-center text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-[#6552e0] to-[#8b5cf6] p-1 shadow-lg shadow-purple-500/30">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[14px] bg-white">
                <img
                  src="https://i.pinimg.com/736x/20/b9/ee/20b9ee6131cdb3521fc367f4b4c7da95.jpg"
                  alt="Suman Chaudhary"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#15131f]">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[#77738b]">
              Sign in to your admin dashboard
            </p>
          </div>
          <form onSubmit={LoginHandle} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#302c40]"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c88a1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 6.993V6.75"
                    />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="h-13 w-full rounded-xl border border-[#e5e2ee] bg-[#faf9fd] pl-12 pr-4 text-sm text-[#15131f] outline-none transition focus:border-[#6552e0] focus:bg-white focus:ring-4 focus:ring-[#6552e0]/10"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#302c40]"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c88a1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 0h10.5A2.25 2.25 0 0119.5 12.75v6A2.25 2.25 0 0117.25 21H6.75a2.25 2.25 0 01-2.25-2.25v-6a2.25 2.25 0 012.25-2.25z"
                    />
                  </svg>
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="h-13 w-full rounded-xl border border-[#e5e2ee] bg-[#faf9fd] pl-12 pr-12 text-sm text-[#15131f] outline-none transition focus:border-[#6552e0] focus:bg-white focus:ring-4 focus:ring-[#6552e0]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8c88a1] transition hover:text-[#6552e0]"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.5 12c1.5 4.5 5.7 7.5 10.5 7.5 1.695 0 3.29-.4 4.7-1.11M6.228 6.228A10.45 10.45 0 0112 4.5c4.8 0 9 3 10.5 7.5a10.49 10.49 0 01-4.263 5.272M6.228 6.228L3 3m3.228 3.228l3.2 3.2m7.344 7.344L21 21m-4.228-4.228l-3.2-3.2m0 0a3 3 0 10-4.243-4.243"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-[#6552e0]"
                />
                <span className="text-sm text-[#625f78]">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm font-semibold text-[#6552e0] transition hover:text-[#4938b8]"
                onClick={() =>
                  toast.error("Password reset is not configured yet.")
                }
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group relative h-13 w-full overflow-hidden rounded-xl bg-linear-to-r from-[#6552e0] to-[#7c5ce8] text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <p>
                      <MoveRight />
                    </p>
                  </>
                )}
              </span>
            </button>
          </form>
          {/* <button
            onClick={() => navigate("/login/createAdmin")}
            className="group relative mt-10 h-13 w-full overflow-hidden rounded-xl bg-linear-to-r from-[#6552e0] to-[#7c5ce8] text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Create Admin
          </button> */}
          <div className="mt-8 border-t border-[#eeeaf5] pt-5 text-center">
            <p className="text-xs text-[#9995aa]">
              Suman Chaudhary · Portfolio Admin
            </p>
            <p className="mt-1 text-xs text-[#b0adba]">
              © 2026–2030 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};