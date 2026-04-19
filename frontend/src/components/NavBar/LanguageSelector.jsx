import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// 🇺🇸 🇪🇸 🇫🇷 SVG flags
import US from "country-flag-icons/react/3x2/US";
import ES from "country-flag-icons/react/3x2/ES";
import FR from "country-flag-icons/react/3x2/FR";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const buttonRef = useRef();

  const languages = [
    { code: "EN", name: "English", Flag: US },
    { code: "ES", name: "Español", Flag: ES },
    { code: "FR", name: "Français", Flag: FR },
  ];

  const toggleDropdown = () => setOpen(!open);

  const selectLanguage = (lang) => {
    setLanguage(lang.code);
    setOpen(false);
  };

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [dropdownStyle, setDropdownStyle] = useState({});

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        minWidth: `${rect.width}px`,
        zIndex: 9999,
      });
    }
  }, [open]);

  const currentLang = languages.find((l) => l.code === language);
  const CurrentFlag = currentLang?.Flag;

  return (
    <>
      <button
        ref={buttonRef}
        className="btn btn-outline-secondary d-flex align-items-center gap-2"
        onClick={toggleDropdown}
        type="button"
        style={{ color: "white", border: "none" }}
      >
        {CurrentFlag && <CurrentFlag style={{ width: 20, height: 15 }} />}
        {currentLang?.code}
      </button>

      {open &&
        createPortal(
          <ul className="dropdown-menu show" style={dropdownStyle}>
            {languages.map((lang) => {
              const FlagIcon = lang.Flag;

              return (
                <li key={lang.code}>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={() => selectLanguage(lang)}
                    type="button"
                  >
                    <FlagIcon style={{ width: 20, height: 15 }} />
                    {lang.name}
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body
        )}
    </>
  );
}