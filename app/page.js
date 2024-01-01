import LandscapeAlert from "@koboxtokped/components/LandscapeAlert";
import MusicPlayer from "@koboxtokped/components/MusicPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div
      id="page-koboxtokoped"
      className="max-h-[100vh] h-[100vh] overflow-hidden"
    >
      <LandscapeAlert />
      {/* <AudioPlayer /> */}
      <Image
        src="/GBIwkuEacAA5kIc.jpg"
        alt="background-kobo"
        // width={2400}
        // height={2400}
        layout="fill"
        className="z-0 absolute object-cover object-top"
      />
      <div className="h-full w-full bg-[#ABABAB] bg-opacity-[40%] backdrop-blur-[4rem] z-10 absolute"></div>
      <div className="absolute z-20 w-full">
        <div className="w-full px-[2%] pt-[2%] absolute">
          <Image
            alt="background-fill"
            src={"/Rectangle 17.svg"}
            width={1500}
            height={1500}
            className="w-full"
          />
        </div>
        <a
          href="https://www.tokopedia.com/"
          target="_blank"
          className="top-[32vw] right-[20vw] absolute z-30 bg-[#5EDE7C] shadow-lg text-white px-[2vw] py-[0.7vw] text-[1.5vw] rounded-full font-semibold hover:bg-[#4BCF6A] hover:scale-110 transition-transform duration-200 active:scale-90"
        >
          Go To Tokopedia
        </a>
      </div>
      <div className="w-full h-[100vh] overflow-hidden absolute">
        <Image
          alt="kobo-illustration"
          src={"/GBIwkuEacAA5kIc-removebg.png"}
          width={1200}
          height={1200}
          className="z-20 object-cover relative w-[44%] left-[10%] animated-updown2"
        />
      </div>
      <Image
        alt="circle-top"
        src={"/Ellipse 14.svg"}
        width={40}
        height={40}
        className="z-20 absolute left-[0.8%] top-[25%] animated-updown w-[8vw] h-[8vw]"
      />
      <div className="z-20 absolute right-[13vw] top-[8vw]">
        <h1 className="wardiskon font-bold">
          WAR <br /> DISKON
        </h1>
      </div>
      <Image
        alt="circle-right"
        src={"/Ellipse 14.svg"}
        width={40}
        height={40}
        className="z-20 absolute right-[0.5%] top-[35%] animated-updown-right w-[7vw] h-[7vw]"
      />
      <Image
        alt="circle-right"
        src={"/Ellipse 14.svg"}
        width={40}
        height={40}
        className="z-20 absolute right-[35%] bottom-[4%] animated-updown-bottom w-[5vw] h-[5vw]"
      />
      <MusicPlayer />
      <div className="flex gap-[3vw] absolute z-30 bottom-[0.8vw] left-[2vw]">
        <a
          href="https://www.tokopedia.com/divoomindonesia/divoom-ditoomic-pixel-art-karaoke-speaker-hijau?extParam=whid%3D3385966"
          target="_blank"
        >
          <div className="shadow-lg hover:scale-110 transition-transform duration-200 active:scale-90 bg-white p-[1vw] rounded-xl w-[16vw]">
            <Image
              alt="Divoom Ditoo Mic"
              width={250}
              height={250}
              className="w-full"
              src="/divoom-ditoo-mic-bluetooth-speaker-with-karaoke-function-33003521474756_1100x-584820645.png"
            />
            <p className="mt-[0.8vw] text-[1vw] font-medium">
              Divoom DitooMic Pixel Art Karaoke Speaker
            </p>
          </div>
        </a>

        <a
          href="https://www.tokopedia.com/mamasing/celengan-kucing-pencuri-koin-otomatis-mama-sing-cat-saving-box-ocelot-remover?extParam=ivf%3Dfalse&src=topads"
          target="_blank"
        >
          <div className="shadow-lg hover:scale-110 transition-transform duration-200 active:scale-90 bg-white p-[1vw] rounded-xl w-[16vw]">
            <Image
              alt="Divoom Ditoo Mic"
              width={250}
              height={250}
              className="w-full"
              src="/ca4493ab0f8bbfe30a9cfcdfd565a013-1724247356.jpg"
            />
            <p className="mt-[0.8vw] text-[1vw] font-medium">
              Celengan Kucing Pencuri Koin Otomatis
            </p>
          </div>
        </a>
        <a
          href="https://www.tokopedia.com/hololivepro/hololive-indonesia-summer-festival-mini-acrylic-figure?extParam=src%3Dshop%26whid%3D12545262"
          target="_blank"
        >
          <div className="shadow-lg hover:scale-110 transition-transform duration-200 active:scale-90 bg-white p-[1vw] rounded-xl w-[16vw]">
            <Image
              alt="Divoom Ditoo Mic"
              width={250}
              height={250}
              className="w-full"
              src="/ecff1c31-3797-4028-8ae8-35e45f777193.jpg.webp"
            />
            <p className="mt-[0.8vw] text-[1vw] font-medium">
              hololive Indonesia SUMMER FESTIVAL Mini...
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
