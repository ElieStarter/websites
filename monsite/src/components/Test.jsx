import React from "react";

export default function Hero() {
  return (
    <section className="bg-neutral-950 text-white min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-24">
      {/* Texte de présentation */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Elie le <span className="text-blue-500">Plombier</span> à Paris
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Spécialiste en dépannage, installation et entretien de systèmes de chauffage, 
          pompes à chaleur et plomberie générale. 
          Rapidité, qualité et fiabilité — 7j/7 sur Paris et alentours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.05] duration-300">
            Demander un devis
          </button>
          <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.05] duration-300">
            Nos services
          </button>
        </div>
      </div>

      {/* Image du plombier */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/images/plombier-hero.png" // ✅ mets ton image dans /public/images/
          alt="Plombier professionnel à Paris"
          className="w-[300px] md:w-[450px] rounded-2xl shadow-2xl object-cover hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    </section>
  );
}
