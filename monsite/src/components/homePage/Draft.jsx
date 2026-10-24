

const Draft = () => {

    return (

        <>
        
            <section className="bg-neutral-900 text-white py-16 px-6">
                <div className="max-w-3xl mx-auto bg-neutral-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                    Contactez-nous
                    </h2>

                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col w-full">
                            <label
                                htmlFor="nom"
                                className="text-sm font-medium mb-2 text-gray-200"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                placeholder="Votre nom"
                                className="border border-gray-600 bg-neutral-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            </div>

                            <div className="flex flex-col w-full">
                            <label
                                htmlFor="prenom"
                                className="text-sm font-medium mb-2 text-gray-200"
                            >
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="prenom"
                                name="prenom"
                                placeholder="Votre prénom"
                                className="border border-gray-600 bg-neutral-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col w-full">
                            <label
                                htmlFor="telephone"
                                className="text-sm font-medium mb-2 text-gray-200"
                            >
                                Numéro de téléphone
                            </label>
                            <input
                                type="tel"
                                id="telephone"
                                name="telephone"
                                placeholder="Ex: 06 12 34 56 78"
                                className="border border-gray-600 bg-neutral-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            </div>

                            <div className="flex flex-col w-full">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium mb-2 text-gray-200"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="exemple@email.com"
                                className="border border-gray-600 bg-neutral-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg"
                            >
                            Soumettre
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        
        </>
    )
}