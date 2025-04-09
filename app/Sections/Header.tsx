"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1
    max-lg:my-4 max-lg:h5"
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="text-p3"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500 max-lg:py-4",
        hasScrolled ? "py-2 bg-black-100/60 backdrop-blur-[8px]" : "py-10",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/images/xora.svg" alt="logo" width={115} height={115} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col
            max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 "
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12 ">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <Image
                      src="/images/xora.svg"
                      alt="logo"
                      width={165}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute right-0 top-1/2 h-[380px] w-[960px] translate-x-[290px] translate-y-[-50%] -rotate-[90deg]">
              <Image
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <Image
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            width={15}
            height={15}
            alt="menu"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
