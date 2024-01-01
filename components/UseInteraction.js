import { useState, useEffect } from "react";
// Membuat custom hook bernama useInteraction
export const useInteraction = () => {
  // Membuat state untuk menyimpan status interaksi
  const [interaction, setInteraction] = useState(false);

  // Membuat fungsi untuk mengubah status interaksi menjadi true
  const handleInteraction = () => {
    setInteraction(true);
  };

  // Menggunakan useEffect untuk menambahkan event listener pada window
  useEffect(() => {
    // Menambahkan event listener untuk mousemove, keydown, dan touchstart
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    // Mengembalikan fungsi bersih untuk menghapus event listener
    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  // Mengembalikan status interaksi
  return interaction;
};
