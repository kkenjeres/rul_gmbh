"use client";
import React, { useState } from "react";
import Link from "next/link";
const PrivacyBanner = () => {
  const [isVisible, setIsVisible] = useState(true); // состояние для управления видимостью баннера

  const handleAcceptAll = () => {
    setIsVisible(false); // скрыть баннер
    // Здесь может быть ваша дополнительная логика по принятию всех cookies
  };

  const handleRejectAll = () => {
    setIsVisible(false); // скрыть баннер
    // Здесь может быть ваша дополнительная логика по отказу от всех cookies
  };

  if (!isVisible) return null; // если баннер не должен быть видимым, ничего не рендерим

  return (
    <section className="font-space fixed bottom-10 left-0 right-0 z-[99999999] m-auto w-[80%] md:w-[40%] border-2 border-black bg-white p-8">
      <p className="text-[14px]">
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic. By clicking{" "}
        <span className="underline">Allow all cookies</span>, you consent to our
        use of cookies.
        <Link
          href="/datenschutz"
          className="ml-2 border-b border-transparent pb-[0.5px] text-blue-500 hover:border-blue-500"
        >
          Datenschutz
        </Link>
      </p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleAcceptAll}
          className="ransform rounded-xl bg-black px-4 py-2 text-[14px] text-white transition-transform duration-200 hover:-translate-y-[2px]"
        >
          Allow all cookies
        </button>
        <button
          onClick={handleRejectAll}
          className="transform text-[14px] underline transition-transform duration-200 hover:-translate-y-[2px]"
        >
          Do not allow cookies
        </button>
      </div>
    </section>
  );
};

export default PrivacyBanner;
