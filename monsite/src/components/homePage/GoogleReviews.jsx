import React from "react";
import { Star } from "lucide-react";
import google from './google.png';


const GoogleReviews = () => {

     const reviews = [
    {
      name: "Marc Dupont",
      text: "Intervention rapide et très professionnelle ! Mon ballon d’eau chaude a été remplacé dans la journée. Je recommande vivement.",
      rating: 5,
      date: "Octobre 2025",
    },
    {
      name: "Sophie Bernard",
      text: "Service impeccable, technicien ponctuel et travail propre. Très satisfaite du résultat pour l’installation de ma pompe à chaleur.",
      rating: 5,
      date: "Septembre 2025",
    },
    {
      name: "Lucas Martin",
      text: "Un plombier sérieux et réactif. Dépannage fait en urgence un dimanche, prix honnêtes et communication fluide.",
      rating: 4,
      date: "Août 2025",
    },
  ];


    return (

        <>
        
            <section className="bg-neutral-950 text-white py-20 px-6 md:px-16">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3">Avis Google</h2>
                    <p className="text-gray-400 text-lg">
                    Ce que nos clients disent de nous
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-neutral-900/70 p-6 rounded-2xl shadow-lg border border-neutral-800 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                            key={i}
                            size={18}
                            className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                            fill={i < review.rating ? "currentColor" : "none"}
                            />
                        ))}
                        </div>

                        <p className="text-gray-300 italic mb-4">“{review.text}”</p>

                        <div className="flex flex-col">
                        <span className="font-semibold text-white">{review.name}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                    href="#"
                    className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.05] duration-300"
                    >
                    Voir tous les avis sur Google
                    </a>
                </div>
            </section>
        
        </>
    )
}

export default GoogleReviews;