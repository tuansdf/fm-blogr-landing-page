"use client";

import Image from "next/image";
import { useState } from "react";
import ImageSwitch from "/src/app/image-switch";

import arrowDarkIcon from "public/images/icon-arrow-dark.svg";
import arrowLightIcon from "public/images/icon-arrow-light.svg";
import closeIcon from "/public/images/icon-close.svg";
import hamburgerIcon from "/public/images/icon-hamburger.svg";
import logoImg from "/public/images/logo.svg";

import circlePattern from "/public/images/bg-pattern-circles.svg";
import introPatternDesktop from "/public/images/bg-pattern-intro-desktop.svg";
import introPatternMobile from "/public/images/bg-pattern-intro-mobile.svg";
import editorIllustrationDesktop from "/public/images/illustration-editor-desktop.svg";
import editorIllustrationMobile from "/public/images/illustration-editor-mobile.svg";
import laptopIllustrationDesktop from "/public/images/illustration-laptop-desktop.svg";
import laptopIllustrationMobile from "/public/images/illustration-laptop-mobile.svg";
import phonesIllustration from "/public/images/illustration-phones.svg";

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);
  const toggleProduct = () => setIsOpenProduct((prev) => !prev);
  const toggleCompany = () => setIsOpenCompany((prev) => !prev);
  const toggleContact = () => setIsOpenContact((prev) => !prev);

  return (
    <>
      <nav className="absolute right-0 left-0 top-0 z-10 flex items-center justify-between py-10 px-6 desktop:mx-auto desktop:max-w-6xl desktop:px-0">
        <Image src={logoImg} alt="logo" />

        {isOpenMenu ? (
          <button onClick={closeMenu} className="desktop:hidden">
            <Image src={closeIcon} alt="close menu" />
          </button>
        ) : (
          <button onClick={openMenu} className="desktop:hidden">
            <Image src={hamburgerIcon} alt="open menu" />
          </button>
        )}

        <div
          className={`absolute top-full right-0 left-0 mx-6 rounded-md bg-white p-6 text-center text-primary-blue drop-shadow-xl transition-opacity desktop:relative desktop:z-0 desktop:flex desktop:flex-1 desktop:items-center desktop:justify-between desktop:bg-transparent desktop:text-start desktop:text-white desktop:opacity-100 ${
            isOpenMenu ? "" : "-z-50 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 desktop:flex-row desktop:gap-0">
            {/* product */}
            <li className="relative">
              <button
                onClick={toggleProduct}
                className="mx-auto flex items-center gap-2 font-medium desktop:px-4"
              >
                <span>Product</span>
                <span className={isOpenProduct ? "rotate-180" : ""}>
                  <ImageSwitch
                    mobileSrc={arrowDarkIcon}
                    desktopSrc={arrowLightIcon}
                    alt=""
                  />
                </span>
              </button>
              {isOpenProduct ? (
                <ul className="mt-4 space-y-4 rounded-md bg-neutral-700/30 p-6 text-primary-blue drop-shadow-xl desktop:absolute desktop:top-full desktop:w-40 desktop:space-y-3 desktop:bg-white desktop:py-8">
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              ) : null}
            </li>
            {/* company */}
            <li className="relative">
              <button
                onClick={toggleCompany}
                className="mx-auto flex items-center gap-2 font-medium desktop:px-4"
              >
                <span>Company</span>
                <span className={isOpenCompany ? "rotate-180" : ""}>
                  <ImageSwitch
                    mobileSrc={arrowDarkIcon}
                    desktopSrc={arrowLightIcon}
                    alt=""
                  />
                </span>
              </button>
              {isOpenCompany ? (
                <ul className="mt-4 space-y-4 rounded-md bg-neutral-700/30 p-6 text-primary-blue drop-shadow-xl desktop:absolute desktop:top-full desktop:w-40 desktop:space-y-3 desktop:bg-white desktop:py-8">
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              ) : null}
            </li>
            {/* contact */}
            <li className="relative">
              <button
                onClick={toggleContact}
                className="mx-auto flex items-center gap-2 font-medium desktop:px-4"
              >
                <span>Contact</span>
                <span className={isOpenContact ? "rotate-180" : ""}>
                  <ImageSwitch
                    mobileSrc={arrowDarkIcon}
                    desktopSrc={arrowLightIcon}
                    alt=""
                  />
                </span>
              </button>
              {isOpenContact ? (
                <ul className="mt-4 space-y-4 rounded-md bg-neutral-700/30 p-6 text-primary-blue drop-shadow-xl desktop:absolute desktop:top-full desktop:w-40 desktop:space-y-3 desktop:bg-white desktop:py-8">
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              ) : null}
            </li>
          </ul>

          <div className="my-6 h-[1px] bg-neutral-700/50 desktop:hidden"></div>

          <ul className="flex flex-col desktop:flex-row">
            <li className="mb-2 desktop:mb-0">
              <button className="rounded-full bg-white py-3 px-10 text-lg font-medium text-primary-blue desktop:bg-transparent desktop:text-base desktop:text-white">
                Login
              </button>
            </li>

            <li>
              <button className="rounded-full bg-gradient-to-r from-gradient-red-100 to-gradient-red-200 py-3 px-10 font-black text-white desktop:from-white desktop:to-white desktop:text-primary-red-200">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-bl-[6rem] bg-gradient-to-b from-gradient-red-100 to-gradient-red-200 text-white desktop:aspect-[5/2] desktop:bg-gradient-to-r">
          {/* background */}
          <div className="absolute ml-60 mt-44 w-[80rem] desktop:mt-0 desktop:mb-32 desktop:ml-[52rem] desktop:w-[200rem]">
            <ImageSwitch
              desktopSrc={introPatternDesktop}
              mobileSrc={introPatternMobile}
              alt=""
            />
          </div>

          {/* content */}
          <div className="absolute mx-auto mt-8 flex max-w-xs flex-col items-center px-6 text-center desktop:mt-20 desktop:max-w-none">
            <h2 className="mb-4 text-3xl font-semibold desktop:text-5xl">
              A modern publishing platform
            </h2>
            <p className="mb-12 desktop:text-lg">
              Grow your audience and build your online brand
            </p>

            <div className="flex w-full items-center justify-between gap-4 desktop:justify-center">
              <button className="rounded-full bg-white py-3 px-4 font-black text-primary-red-200">
                Start for Free
              </button>
              <button className="rounded-full border border-white bg-transparent py-3 px-4 font-black">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="pt-32 pb-24 desktop:py-32">
          <h2 className="mb-12 text-center text-3xl font-medium text-primary-blue desktop:mb-16 desktop:text-4xl">
            Designed for the future
          </h2>

          <div className="mx-auto max-w-6xl desktop:grid desktop:grid-cols-2 desktop:place-items-center desktop:gap-24">
            <div className="desktop:translate-x-56 desktop:-translate-y-2 desktop:scale-[1.7]">
              <ImageSwitch
                mobileSrc={editorIllustrationMobile}
                desktopSrc={editorIllustrationDesktop}
                alt=""
              />
            </div>

            <div className="order-first mx-auto mt-12 max-w-xs px-3 text-center desktop:mt-0 desktop:max-w-none desktop:text-start">
              <div>
                <h2 className="mb-6 text-3xl font-medium text-primary-blue desktop:text-2xl">
                  Introducing an extensible editor
                </h2>
                <p className="leading-relaxed text-neutral-800">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allow easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>

              <div className="mt-12 desktop:mt-20">
                <h2 className="mb-6 text-3xl font-medium text-primary-blue desktop:text-2xl">
                  Robust content management
                </h2>
                <p className="leading-relaxed text-neutral-800">
                  Flexible content management enables users to easily move
                  through posts. Increase the usuability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you&apos;re in full control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Image
            src={phonesIllustration}
            alt=""
            className="relative z-10 desktop:ml-40"
          />
          <div className="relative -mt-52 flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] bg-gradient-to-b from-gradient-blue-800 to-gradient-blue-900 desktop:-mt-[32rem] desktop:aspect-[3.5/1] desktop:justify-end">
            <div className="absolute -top-56 w-[36rem] desktop:-left-52 desktop:-top-[33rem] desktop:w-[65rem]">
              <Image src={circlePattern} alt="" className="w-full" />
            </div>

            <div className="absolute top-0 mx-auto mt-56 max-w-xs px-3 text-center desktop:top-auto desktop:mr-36 desktop:mt-0 desktop:w-1/2 desktop:max-w-lg desktop:px-0 desktop:text-start">
              <h2 className="mb-4 text-4xl font-medium leading-tight text-white">
                State of the Art Infrastructure
              </h2>
              <p className="leading-relaxed text-neutral-700">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl place-content-center py-16 desktop:grid-cols-2 desktop:gap-24 desktop:py-60">
          <div className="mb-8 w-[30rem] desktop:mb-0 desktop:flex desktop:-translate-x-44 desktop:-translate-y-2 desktop:scale-[2] desktop:items-center">
            <ImageSwitch
              mobileSrc={laptopIllustrationMobile}
              desktopSrc={laptopIllustrationDesktop}
              alt=""
            />
          </div>

          <div className="mx-auto max-w-xs px-2.5 text-center desktop:max-w-none desktop:text-start">
            <h2 className="mb-6 text-3xl font-medium text-primary-blue desktop:text-2xl">
              Free, open, simple
            </h2>
            <p className="leading-relaxed text-neutral-800">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and relatively easy to learn.
            </p>

            <h2 className="mb-6 mt-12 text-3xl font-medium text-primary-blue desktop:mt-20 desktop:text-2xl">
              Powerful tooling
            </h2>
            <p className="leading-relaxed text-neutral-800">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </section>
      </main>

      <footer className="rounded-tr-[6rem] bg-neutral-900 py-16">
        <div className="mx-auto grid max-w-6xl place-items-center gap-8 text-center desktop:grid-cols-4 desktop:place-items-start desktop:text-start">
          <Image src={logoImg} alt="logo" className="mb-8" />

          <div>
            <div className="mb-6 font-medium text-white desktop:mb-8">
              Product
            </div>
            <ul className="space-y-1.5 text-neutral-700 desktop:space-y-2">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <div className="mb-6 font-medium text-white desktop:mb-8">
              Company
            </div>
            <ul className="space-y-1.5 text-neutral-700 desktop:space-y-2">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <div className="mb-6 font-medium text-white desktop:mb-8">
              Connect
            </div>
            <ul className="space-y-1.5 text-neutral-700 desktop:space-y-2">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
