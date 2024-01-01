"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function LandscapeAlert() {
  // State untuk menyimpan orientasi perangkat
  const [orientation, setOrientation] = useState("landscape");

  // Menggunakan useTheme untuk mendeteksi tema yang aktif
  const { theme } = useTheme();

  // Menggunakan window.matchMedia untuk mendeteksi orientasi perangkat
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    console.log(mediaQuery.matches);
    if (mediaQuery.matches) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
    const handler = (e) => {
      if (e.matches) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Membuat markup HTML untuk pesan "Gunakan mode landscape"
  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 ${
        orientation === "portrait" ? "block" : "hidden"
      }`}
    >
      <div className="w-96 p-4 bg-white rounded shadow-lg">
        <div className="flex items-center justify-center">
          <h3 className="text-lg font-bold text-gray-900">
            Gunakan mode landscape
          </h3>
        </div>
      </div>
    </div>
  );
}
