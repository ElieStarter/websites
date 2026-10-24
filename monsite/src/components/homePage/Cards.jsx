import { Droplets, Wrench, Flame, Bath, Snowflake } from "lucide-react";
// bg-neutral-900

export default function Cards() {
  const services = [
    {
      title: "Installation de pompe à chaleur (PAC)",
      description:
        "Installation et entretien de pompes à chaleur air/eau et air/air pour un confort optimal toute l’année.",
      icon: <Flame className="h-8 w-8 text-red-500" />,
       image: "/images/pompeachaleur.jpg", // ✅ à partir de /public
    },
    {
      title: "Remplacement de ballon d’eau chaude",
      description:
        "Pose et remplacement de chauffe-eaux électriques ou thermodynamiques, adaptés à vos besoins.",
      icon: <Droplets className="h-8 w-8 text-blue-400" />,
      image: "/images/chauffeeau.png",
    },
    // {
    //   title: "Rénovation de salle de bain",
    //   description:
    //     "Modernisation complète de votre salle de bain avec plomberie, carrelage et agencement clé en main.",
    //   icon: <Bath className="h-8 w-8 text-blue-400" />,
    //   image: "/images/sdb.jpg",
    // },
    // {
    //   title: "Pose de climatisation réversible",
    //   description:
    //     "Installation et maintenance de systèmes de climatisation et chauffage réversible pour votre confort toute l’année.",
    //   icon: <Snowflake className="h-8 w-8 text-blue-400" />,
    //   image: "/images/climatisation.png",
    // },
    {
    title: "Dépannage plomberie & chauffage",
    description:
      "Intervention rapide pour fuites d’eau, panne de chauffe-eau, radiateur ou canalisation bouchée — 7j/7 sur Paris et alentours.",
    icon: <Wrench className="h-8 w-8 text-gray-400" />,
    image: "/images/depannage.png",
  },
  ];

  return (
    <section id='cards' className="bg-neutral-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 font-cinzel">
          Mes services professionnels
        </h2>
        <p className="text-gray-400">
          Des installations fiables, un service rapide et un savoir-faire
          certifié à Paris et en Île-de-France.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-auto min-h-[14rem]">
              <div>
                <div className="flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
                <div className="flex justify-end mt-4 sm:mt-6 pr-2">
                  <button onClick={() => {
                    const section = document.querySelector("#devis");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }} 
                  className="bg-[#1e293b] hover:drop-shadow-[0_0_10px_#06a4ff] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#21c7a8] transition"
                  >
                    Demander un devis
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}