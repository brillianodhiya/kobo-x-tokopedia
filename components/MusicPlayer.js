"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useUserInteraction from "./UseUserInteraction";
import { useInteraction } from "./UseInteraction";

// Komponen untuk memutar musik dengan autoplay dan loop
function MusicPlayer() {
  // Ref untuk audio element
  const audioRef = useRef(null);

  // State untuk menyimpan status pemutaran
  const [playing, setPlaying] = useState(false);

  // Fungsi untuk memutar atau menjeda musik
  function togglePlay() {
    // Jika audio element ada
    if (audioRef.current) {
      // Jika sedang bermain, maka jeda
      if (playing) {
        audioRef.current.pause();
        setPlaying(!playing);
      } else {
        // Jika sedang berhenti, maka putar
        try {
          audioRef.current.play();
          setPlaying(!playing);
        } catch (error) {
          console.log(error);
        }
      }
      // Ubah state playing
    }
  }
  // Memanggil custom hook dan mendapatkan status interaksi user
  const userInteracted = useInteraction();

  useEffect(() => {
    if (!playing && userInteracted) {
      setTimeout(() => {
        togglePlay();
      }, 2000);
    }
    return () => {};
  }, [userInteracted]);

  return (
    <div className="absolute z-20 bg-white w-[18vw] h-[17vw] bottom-[1.5vw] right-[1.5vw] radius-white">
      {/* Audio element dengan autoplay dan loop */}
      <audio
        ref={audioRef}
        src={"/WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim.mp3"}
        autoPlay
        loop
        // Event listener untuk mengubah state playing sesuai dengan status audio
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={(e) => console.log(e.target)}
      />
      {/* Button untuk memutar atau menjeda musik */}
      {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}

      <Image
        alt="disc"
        src={"/GBJScPKaQAAnabX-square.jpg"}
        width={200}
        height={200}
        title="Play Music WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim"
        className={
          playing
            ? "w-[9.5vw] h-[9.5vw] rounded-full disc absolute bottom-[4.7vw] right-[3vw] spin-disc"
            : "w-[9.5vw] h-[9.5vw] rounded-full disc absolute bottom-[4.7vw] right-[3vw] spin-disc spin-disc-paused"
        }
        onClick={togglePlay}
      />
      <h1 className="absolute bottom-[0.8vw] left-[2.2vw] text-[1vw] font-medium">
        WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim
      </h1>
      {/* <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button> */}
    </div>
  );
}

export default MusicPlayer;
