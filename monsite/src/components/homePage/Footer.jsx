import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {

    return (    

        <>
        
            <footer className="bg-neutral-950 text-gray-300 py-12 px-6 md:px-20 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Elie<span className="text-blue-500">LePlombier</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Dépannage, installation et entretien en plomberie et chauffage à Paris. 
                            Service rapide, professionnel et disponible 7j/7.
                        </p>
                    </div>

                    {/* Section 2 : Liens utiles */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Liens utiles</h3>
                        <ul className="space-y-2">
                            <li><a href="#cards" className="hover:text-blue-400 transition">Nos services</a></li>
                            <li><a href="#devis" className="hover:text-blue-400 transition">Demander un devis</a></li>
                            <li><a href="#aboutme" className="hover:text-blue-400 transition">À propos</a></li>
                            {/* <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li> */}
                        </ul>
                    </div>

                    {/* Section 3 : Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                            <span>07 85 45 26 51</span>
                            </li>
                            <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                            <span>contact@elieplombier.fr</span>
                            </li>
                            <li className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
                            <span>Paris, Île-de-France</span>
                            </li>
                        </ul>

                        {/* Réseaux sociaux */}
                        <div className="flex gap-5 mt-6">
                            <a href="#" className="hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm mt-10 border-t border-neutral-800 pt-6">
                    © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Elie Le Plombier</span>. 
                    Tous droits réservés. | 
                    <a href="/mentions-legales" className="ml-1 hover:text-blue-400 transition">
                    Mentions légales
                    </a>
                </div>
            </footer>
        
        </>

    )
}

export default Footer;