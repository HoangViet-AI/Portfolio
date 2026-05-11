"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { div as MDiv } from "motion/react-m";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const NAV_LINKS = [
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.sectionId);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(false);
    }
  }, [isDesktop]);

  // Focus trap when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu) return;

      const focusableEls = [
        hamburgerRef.current,
        ...Array.from(
          mobileMenu.querySelectorAll<HTMLElement>("a, button")
        ),
      ].filter(Boolean) as HTMLElement[];

      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }
      setMenuOpen(false);
    },
    [reducedMotion]
  );

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 right-0 left-0 z-100 h-16 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* Site title */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: reducedMotion ? "auto" : "smooth",
            });
          }}
          className="font-heading text-xl text-foreground transition-colors hover:text-primary"
        >
          Portfolio
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.sectionId}>
              <a
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={`relative pb-1 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.sectionId
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.sectionId && (
                  <MDiv
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          ref={hamburgerRef}
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <MDiv
            id="mobile-menu"
            className="fixed inset-0 top-16 z-100 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={`font-heading text-3xl min-h-[44px] flex items-center transition-colors ${
                  activeSection === link.sectionId
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </MDiv>
        )}
      </AnimatePresence>
    </nav>
  );
}
