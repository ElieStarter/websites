import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const realisations = [
  {
    title: "Installation de pompe à chaleur",
    description:
      "Pose complète d’une PAC air/eau haute performance dans une maison individuelle à Paris 15e.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9f13d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Remplacement de ballon d’eau chaude",
    description:
      "Installation d’un chauffe-eau thermodynamique Atlantic dans un appartement haussmannien.",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d89e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rénovation complète de salle de bain",
    description:
      "Modernisation totale : plomberie, carrelage, meuble vasque et installation d’une douche à l’italienne.",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Installation de climatisation réversible",
    description:
      "Système performant installé dans un local professionnel à Boulogne-Billancourt.",
    image:
      "https://images.unsplash.com/photo-1590756264773-1d52c0b6e8b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Salle de bain moderne sur mesure",
    description:
      "Transformation complète avec douche italienne et plomberie rénovée.",
    image:
      "https://images.unsplash.com/photo-1628890923660-1e7c45a5b4e7?auto=format&fit=crop&w=1200&q=80",
  },
];

const duplicatedRealisations = [...realisations, ...realisations];

const Projects = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const resumeTimerRef = useRef(null); // <-- timer ref (pour relancer l'auto-scroll)
  const [isPaused, setIsPaused] = useState(false);
  const [speed] = useState(0.6); // ajuste la vitesse si besoin

  // auto-scroll infini, fluide
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let lastTime = performance.now();

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        el.scrollLeft += (speed * delta) / 16; // proportionnel au temps écoulé
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isPaused, speed]);

  // pause automatique au hover / touch
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleEnter = () => setIsPaused(true);
    const handleLeave = () => setIsPaused(false);

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointerdown", handleEnter);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("pointerup", handleLeave);
    el.addEventListener("touchstart", handleEnter, { passive: true });
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointerdown", handleEnter);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("pointerup", handleLeave);
      el.removeEventListener("touchstart", handleEnter);
      el.removeEventListener("touchend", handleLeave);
    };
  }, []);

  // scroll manuel via flèches (met en pause pendant l'action)
  const manualScroll = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;

    // pause auto-scroll immédiatement
    setIsPaused(true);

    // largeur d'une carte (base)
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.clientWidth : 520;
    const gap = parseInt(getComputedStyle(el).gap || 24, 10) || 24;
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

    el.scrollBy({ left: amount, behavior: "smooth" });

    // clear ancien timer si existant
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    // redémarre l’auto-scroll après 1600ms
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, 1600);
  }, []);

    return (
      <section className="bg-neutral-950 text-white py-20 px-6 relative overflow-hidden">
        <div className="max mx-auto">
          {/* titre */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-400 uppercase">Mes Réalisations</h2>
            <p className="text-gray-400 mt-3 text-lg">Découvrez quelques-uns de nos derniers chantiers</p>
          </div>

          <div className="relative">
            {/* flèche gauche */}
            <button
              onClick={() => manualScroll("left")}
              aria-label="Précédent"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-neutral-900/70 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-20 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* conteneur scroll */}
            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-hidden no-scrollbar sm:py-2 px-12"
              style={{ paddingRight: 48, paddingLeft: 48 }}
            >
              {duplicatedRealisations.map((item, idx) => (
                <motion.article
                  data-card
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="min-w-[420px] md:min-w-[520px] bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800"
                >
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{ transformOrigin: "center" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* flèche droite */}
            <button
              onClick={() => manualScroll("right")}
              aria-label="Suivant"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-900/70 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-20 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* cache scrollbar */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>
    );
}

export default Projects;