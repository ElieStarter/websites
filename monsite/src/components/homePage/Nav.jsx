import { Link } from "react-router-dom";
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    return (

        <>
        
            <header className="bg-neutral-950 text-white shadow-lg fixed top-0 left-0 w-full z-50">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-400 tracking-wide">
                    ClimA<span className="text-white">rtisan</span>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-10 text-lg font-medium">
                    <li onClick={() => {
                    const section = document.querySelector("#cards");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                    }} className="hover:text-blue-400 transition cursor-pointer">Dépannage</li>
                    <li onClick={() => {
                    const section = document.querySelector("#devis");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}  className="hover:text-blue-400 transition cursor-pointer">Devis</li>
                    <li onClick={() => {
                    const section = document.querySelector("#aboutme");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}  className="hover:text-blue-400 transition cursor-pointer">À propos</li>
                </ul>

                {/* Bouton Contact (desktop) */}
                <div className="hidden md:block relative">
                    <button
                    onClick={() => setContactOpen(!contactOpen)}
                    className="flex items-center gap-2 border border-transparent px-6 py-2 bg-red-600 hover:bg-red-700 transition transform hover:scale-[1.05] duration-300 text-white rounded-lg shadow-lg text-lg font-semibold"
                    >
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                    Contact
                    </button>

                    {/* Popup contact */}
                    {contactOpen && (
                    <div className="absolute right-0 mt-3 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl p-4 w-64 z-50 animate-fadeIn">
                        <p className="text-sm text-gray-400 mb-2">Appelez-moi :</p>
                        <a
                        href="tel:+33612345678"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition font-medium"
                        >
                        <FontAwesomeIcon icon={faPhone} /> 01 33 25 67 89
                        </a>

                        <div className="mt-3 border-t border-neutral-800 pt-3">
                        <p className="text-sm text-gray-400 mb-2">Ou écrivez-moi :</p>
                        <a
                            href="mailto:contact@climartisan.fr"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition font-medium"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> contact@climartisan.fr
                        </a>
                        </div>
                    </div>
                    )}
                </div>

                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
                </nav>

        {/* Menu Mobile */}
        <div
          className={`md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
            <li
              onClick={() => {
                setMenuOpen(false);
                const section = document.querySelector("#cards");
                if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                }
                }}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              Dépannage
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              
              className="hover:text-blue-400 cursor-pointer transition"
            >
              Devis
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                const section = document.querySelector("#aboutme");
                if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                }
                }}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              À propos
            </li>

            <div className="flex flex-col items-center gap-2">
              <a
                href="tel:+33612345678"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition text-white px-8 py-2 rounded-lg shadow-lg font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faPhone} /> 01 33 25 67 89
              </a>
              <a
                href="mailto:contact@climartisan.fr"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition text-sm"
              >
                <FontAwesomeIcon icon={faEnvelope} /> contact@climartisan.fr
              </a>
            </div>
          </ul>
        </div>
      </header>
        
        </>
    )
}


export default Nav;