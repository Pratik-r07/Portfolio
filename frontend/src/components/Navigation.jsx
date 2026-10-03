import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, navItems } from "../portfolioData";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("portfolio-theme") || "dark";
};

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header className="site-header" data-testid="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a
          className="brand-mark"
          href="#top"
          aria-label="Go to top"
          data-testid="nav-home-link"
          onClick={(event) => scrollTo(event, "#top")}
        >
          PR<span>/SYSTEMS</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              onClick={(event) => scrollTo(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "light"}
            data-testid="theme-toggle-button"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <a
            className="pill-button pill-button--small"
            href={contact.resumeUrl}
            download
            data-testid="nav-resume-button"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            data-testid="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            data-testid="mobile-menu"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                onClick={(event) => scrollTo(event, item.href)}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
