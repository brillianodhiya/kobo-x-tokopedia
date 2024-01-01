"use client";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Image from "next/image";
import { useIsMounted } from "./UseIsMounted";

// asumsikan Anda memiliki file audio di folder public/sounds
const audioFile = "/WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim.mp3";

const AudioPlayer = () => {
  // buat state untuk menyimpan status pemutaran audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isMounted = useIsMounted(); // Use the custom hook
  // gunakan use-sound untuk membuat fungsi play dan stop audio
  const [play, { stop, duration, pause }] = useSound(audioFile, {
    onload: () => {
      // console.log("audio loaded");
      setLoaded(true);
    },
    loop: true,
  });

  // buat fungsi untuk menangani klik tombol play/pause
  const handlePlayPause = () => {
    // jika audio sedang dimainkan, hentikan
    if (isPlaying) {
      pause();
    } else {
      // jika audio sedang dihentikan, mainkan
      play();
    }
    // ubah state isPlaying menjadi kebalikannya
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isMounted.current && loaded) {
      // Only run this code if the component is mounted and loaded
      const w = document.getElementById("page-koboxtokoped");
      // console.log(w, "W");
      w.onmousemove = () => {
        if (!isPlaying) {
          // // console.log("WWW");
          // play();
          // setIsPlaying(!isPlaying);
        }
      };
    }
    return () => {};
  }, [loaded, isMounted]);

  return (
    <div className="absolute z-20 bg-white w-[18vw] h-[17vw] bottom-[1.5vw] right-[1.5vw] radius-white">
      {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}

      <Image
        alt="disc"
        src={"/GBJScPKaQAAnabX-square.jpg"}
        width={200}
        height={200}
        title="Play Music WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim"
        className={
          isPlaying
            ? "w-[9.5vw] h-[9.5vw] rounded-full disc absolute bottom-[4.7vw] right-[3vw] spin-disc"
            : "w-[9.5vw] h-[9.5vw] rounded-full disc absolute bottom-[4.7vw] right-[3vw] spin-disc spin-disc-paused"
        }
        onClick={() => {
          handlePlayPause();
        }}
      />
      <h1 className="absolute bottom-[0.8vw] left-[2.2vw] text-[1vw] font-medium">
        WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim
      </h1>
    </div>
  );
};

export default AudioPlayer;
