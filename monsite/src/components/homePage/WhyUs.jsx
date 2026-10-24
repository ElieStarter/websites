import { ShieldCheck, Clock, Wrench, Leaf } from "lucide-react";



const WhyUs = () => {

    return (

        <>
        
            <section className="bg-neutral-950 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-400 mb-4 uppercase tracking-wide">
                    Pourquoi nous choisir ?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
                    Nous mettons notre savoir-faire et notre réactivité au service de vos projets de plomberie, chauffage et rénovation, avec une approche basée sur la qualité et la confiance.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition transform duration-300 hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center text-center">
                                <ShieldCheck className="h-12 w-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Artisan qualifié</h3>
                                <p className="text-gray-400 text-sm">
                                    Un savoir-faire reconnu et une expérience solide pour garantir des installations fiables et durables.
                                </p>
                            </div>
                        </div>

                        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition transform duration-300 hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center text-center">
                                <Clock className="h-12 w-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Intervention rapide</h3>
                                <p className="text-gray-400 text-sm">
                                    Une disponibilité 7j/7 pour vos urgences et dépannages, avec des délais d’intervention rapides et précis.
                                </p>
                            </div>
                        </div>

                        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition transform duration-300 hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center text-center">
                            <Wrench className="h-12 w-12 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Devis gratuit et transparent</h3>
                            <p className="text-gray-400 text-sm">
                                Aucun frais caché, des estimations claires et détaillées pour chaque projet, sans engagement.
                            </p>
                            </div>
                        </div>

                        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition transform duration-300 hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center text-center">
                            <Leaf className="h-12 w-12 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Solutions éco-responsables</h3>
                            <p className="text-gray-400 text-sm">
                                Nous privilégions des solutions durables et économes en énergie pour un confort respectueux de l’environnement.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default WhyUs;