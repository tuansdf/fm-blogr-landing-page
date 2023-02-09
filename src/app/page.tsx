import Image from "next/image";

import hamburgerIcon from "/public/images/icon-hamburger.svg";
import logoImg from "/public/images/logo.svg";
import ImageSwitch from "/src/app/image-switch";

import circlePattern from "/public/images/bg-pattern-circles.svg";
import introPatternDesktop from "/public/images/bg-pattern-intro-desktop.svg";
import introPatternMobile from "/public/images/bg-pattern-intro-mobile.svg";
import editorIllustrationDesktop from "/public/images/illustration-editor-desktop.svg";
import editorIllustrationMobile from "/public/images/illustration-editor-mobile.svg";
import laptopIllustrationDesktop from "/public/images/illustration-laptop-desktop.svg";
import laptopIllustrationMobile from "/public/images/illustration-laptop-mobile.svg";
import phonesIllustration from "/public/images/illustration-phones.svg";

export default function Home() {
  return (
    <>
      <nav className="absolute right-0 left-0 top-0 z-10 flex items-center justify-between py-10 px-6">
        <Image src={logoImg} alt="logo" />
        <Image src={hamburgerIcon} alt="menu toggler" />
      </nav>

      <main>
        <section className="relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-bl-[6rem] bg-gradient-to-b from-gradient-red-100 to-gradient-red-200 text-white">
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

        <section className="pt-16 pb-8">
          <h2 className="mb-8 text-center text-3xl font-medium text-primary-blue">
            Designed for the future
          </h2>
          <ImageSwitch
            mobileSrc={editorIllustrationMobile}
            desktopSrc={editorIllustrationDesktop}
            alt=""
          />
        </section>

        <section className="mx-auto max-w-xs px-3 py-8 text-center">
          <h2 className="mb-8 text-3xl font-medium text-primary-blue">
            Introducing an extensible editor
          </h2>
          <p className="text-neutral-800">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allow easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </section>

        <section className="mx-auto max-w-xs py-8 px-3 text-center">
          <h2 className="mb-8 text-3xl font-medium text-primary-blue">
            Robust content management
          </h2>
          <p className="text-neutral-800">
            Flexible content management enables users to easily move through
            posts. Increase the usuability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you&apos;re in full control.
          </p>
        </section>

        <section>
          <Image src={phonesIllustration} alt="" className="relative z-10" />
          <div className="relative -mt-52 flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] bg-gradient-to-b from-gradient-blue-800 to-gradient-blue-900">
            <div className="absolute -top-56 w-[36rem]">
              <Image src={circlePattern} alt="" className="w-full" />
            </div>

            <div className="absolute top-0 mx-auto mt-56 max-w-xs px-3 text-center">
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

        <section className="flex flex-col items-center justify-center py-16">
          <div className="mb-8 w-[30rem]">
            <ImageSwitch
              mobileSrc={laptopIllustrationMobile}
              desktopSrc={laptopIllustrationDesktop}
              alt=""
            />
          </div>

          <div className="mx-auto max-w-xs px-2.5 text-center">
            <h2 className="mb-6 text-3xl font-medium text-primary-blue">
              Free, open, simple
            </h2>
            <p className="leading-relaxed text-neutral-800">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and relatively easy to learn.
            </p>

            <h2 className="mb-6 mt-12 text-3xl font-medium text-primary-blue">
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

      <footer className="flex flex-col items-center rounded-tr-[6rem] bg-neutral-900 py-16 text-center">
        <Image src={logoImg} alt="logo" />

        <div className="mt-16 mb-6 font-medium text-white">Product</div>
        <ul className="space-y-1.5 text-neutral-700">
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>

        <div className="mt-8 mb-6 font-medium text-white">Company</div>
        <ul className="space-y-1.5 text-neutral-700">
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

        <div className="mt-8 mb-6 font-medium text-white">Connect</div>
        <ul className="space-y-1.5 text-neutral-700">
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </footer>
    </>
  );
}
