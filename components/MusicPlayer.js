"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useUserInteraction from "./UseUserInteraction";
import { useInteraction } from "./UseInteraction";

// Komponen untuk memutar musik dengan autoplay dan loop
function MusicPlayer() {
  // Ref untuk audio element
  const audioRef = useRef(null);
  // State untuk menyimpan status modal
  const [showModal, setShowModal] = useState(true);

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

  //   useEffect(() => {
  //     if (!playing && userInteracted) {
  //       setTimeout(() => {
  //         togglePlay();
  //       }, 2000);
  //     }
  //     return () => {};
  //   }, [userInteracted]);

  // Fungsi untuk menyembunyikan modal
  const closeModal = () => {
    setShowModal(false);
    togglePlay();
  };

  // Fungsi untuk menangani klik luar modal
  const handleClickOutside = (event) => {
    // Jika target klik adalah elemen dengan id modal-overlay, tutup modal
    if (event.target.id === "modal-overlay") {
      closeModal();
      togglePlay();
    }
  };
  return (
    <div className="absolute z-40 bg-white w-[18vw] h-[17vw] bottom-[1.5vw] right-[1.5vw] radius-white">
      {showModal && (
        <div
          id="modal-overlay"
          className="z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div className="w-[40vw] p-[1vw] bg-white rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-[2vw] font-bold">Attention!</h3>
              <button
                className="p-[0.2vw] text-[2vw] text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <div className="mt-[0.8vw]">
              <p className="text-[1.2vw] text-left">
                Project ini hanyalah sebatas hasil hobi bukan untuk commercial.{" "}
                <Image
                  alt="kobo-tokped2"
                  className="float-right w-[20vw] mr-[2vw] mt-[1.8vw]"
                  src={"/GBJScPKaAAAvqx-.jpg"}
                  width={240}
                  height={240}
                />
              </p>
              {/* <Image
                alt="kobo-tokped2"
                className="float-right absolute"
                src={"/GBJScPLbwAABSPt.jpg"}
                width={200}
                height={200}
              /> */}
              <p className="mt-[0.5vw] text-[1.2vw]"># Illustration By</p>
              <ul className="list-disc list-inside">
                <li className="text-[1.2vw]">
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href="https://twitter.com/anzailee1"
                  >
                    @anzailee1
                  </a>
                </li>
                <li className="text-[1.2vw]">
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href="https://twitter.com/keenbiscuit"
                  >
                    @keenbiscuit
                  </a>
                </li>
              </ul>
              <p className="mt-[0.5vw] text-[1.2vw]"># Design By</p>
              <ul className="list-disc list-inside">
                <li className="text-[1.2vw]">
                  <a
                    className="text-blue-600"
                    target="_blank"
                    href="https://www.instagram.com/lilia_sekai/"
                  >
                    @lilia_sekai{" "}
                  </a>
                </li>
              </ul>
              <p className="mt-[0.5vw] text-[1.2vw]"># Develop By</p>
              <ul className="list-disc list-inside">
                <li className="text-[1.2vw]">@kanrisha</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Audio element dengan autoplay dan loop */}
      <audio
        ref={audioRef}
        src={"/WAR DI TOKOPEDIA - Kobo Kanaeru & Heiakim.mp3"}
        // autoPlay
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
