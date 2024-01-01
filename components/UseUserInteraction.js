import { useState, useEffect } from "react";

// Membuat custom hook dengan nama useUserInteraction
const useUserInteraction = () => {
  // Membuat state untuk menyimpan status interaksi user
  const [userInteracted, setUserInteracted] = useState(false);

  // Membuat fungsi untuk mengubah status interaksi user menjadi true
  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  // Menggunakan useEffect untuk menambahkan event listener pada window object
  useEffect(() => {
    // Menambahkan event listener untuk mousemove, keydown, dan touchstart
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    // Mengembalikan fungsi untuk membersihkan event listener
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Mengembalikan status interaksi user
  return userInteracted;
};

export default useUserInteraction;
