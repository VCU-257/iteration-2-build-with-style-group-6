import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const buttonRef = useRef();

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
  ];

  const toggleDropdown = () => setOpen(!open);

  const selectLanguage = (lang) => {
    setLanguage(lang.code);
    setOpen(false);
  };

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute dropdown position
  const [dropdownStyle, setDropdownStyle] = useState({});
  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'absolute',
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        minWidth: `${rect.width}px`,
        zIndex: 9999,
      });
    }
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        className="btn btn-outline-secondary d-flex align-items-center gap-1"
        onClick={toggleDropdown}
        type="button"
        style={{
            color:'white',
            border:'none'
        }}
      >
        {languages.find((l) => l.code === language)?.flag} {language}
      </button>

      {open &&
        createPortal(
          <ul className="dropdown-menu show" style={dropdownStyle}>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className="dropdown-item d-flex align-items-center gap-2"
                  onClick={() => selectLanguage(lang)}
                  type="button"
                >
                  {lang.flag} {lang.name}
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </>
  );
}