"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RouteTransition() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Router.push ishlaganda "loading"ni o'zing boshqarasan
  // AppRouter'da event listener yo‘q => qo‘lda handle qilinadi

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    // Har 500ms dan so‘ng loadingni yo‘q qilish
    // (Simulyatsiya uchun, backendga so‘rov yo‘q)
    router.prefetch('/about-us') // oldindan yuklab qo‘yish
    return () => {
      handleStop(); // component unmounted
    };
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
  ) : null;
}
