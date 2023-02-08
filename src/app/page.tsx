import Image from "next/image";

import introPatternDesktop from "/public/images/bg-pattern-intro-desktop.svg";
import introPatternMobile from "/public/images/bg-pattern-intro-mobile.svg";
import hamburgerIcon from "/public/images/icon-hamburger.svg";
import logoImg from "/public/images/logo.svg";
import ImageSwitch from "/src/app/image-switch";

export default function Home() {
  return (
    <>
      <nav className="absolute right-0 left-0 top-0 z-10 flex items-center justify-between py-10 px-6">
        <Image src={logoImg} alt="logo" />
        <Image src={hamburgerIcon} alt="menu toggler" />
      </nav>

      <main>
        <section className="relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-bl-[7rem] bg-gradient-to-b from-gradient-red-100 to-gradient-red-200 text-white">
          {/* background */}
          <div className="absolute ml-60 mt-44 w-[80rem]">
            <ImageSwitch
              desktopSrc={introPatternDesktop}
              mobileSrc={introPatternMobile}
              alt=""
            />
          </div>

          {/* content */}
          <div className="absolute mx-auto mt-8 flex max-w-xs flex-col items-center px-6 text-center">
            <h2 className="mb-4 text-3xl font-semibold">
              A modern publishing platform
            </h2>
            <p className="mb-12">
              Grow your audience and build your online brand
            </p>

            <div className="flex w-full items-center justify-between">
              <button className="rounded-full bg-white py-3 px-4 font-black text-primary-red-200">
                Start for Free
              </button>
              <button className="rounded-full border border-white bg-transparent py-3 px-4 font-black">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
