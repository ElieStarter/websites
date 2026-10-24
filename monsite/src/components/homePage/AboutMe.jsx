import aboutme from './aboutme.png';



const AboutMe = () => {

    return (

        <>
        
            
            <section id="aboutme" className="bg-neutral-950 text-white py-20 px-6 md:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 text-blue-400">À PROPOS DE NOUS</h2>
                    <span className="text-lg text-gray-400">Plombier chauffagiste expérimenté à Paris</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
                    <div className="flex-shrink-0">
                        <img
                            src={aboutme}
                            alt="Elie le plombier à l'œuvre"
                            className="w-[320px] md:w-[600px] rounded-2xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                    <div className="text-gray-300 text-lg leading-relaxed md:w-1/2 space-y-6">
                        <p>
                            Fort de plusieurs années d’expérience dans le domaine de la plomberie et du chauffage, 
                            <span className="text-white font-semibold"> Elie Le Plombier </span>
                            met son savoir-faire au service des particuliers et des professionnels à Paris et en Île-de-France.  
                            Que ce soit pour un dépannage urgent, une installation de pompe à chaleur, ou une rénovation complète, 
                            chaque intervention est réalisée avec rigueur et passion.
                        </p>

                        <p>
                            Notre objectif est simple : vous garantir une installation durable, conforme aux normes, 
                            tout en assurant votre confort et votre tranquillité.  
                            Transparence, réactivité et qualité sont au cœur de notre métier.
                        </p>

                        <button onClick={() => {
                        const section = document.querySelector("#devis");
                        if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        }
                        }}    className="bg-[#1e293b] hover:drop-shadow-[0_0_10px_#06a4ff] text-[#21c7a8] transition px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.05] duration-300">
                            Demander un devis
                        </button>
                    </div>
                </div>
            </section>
        
        </>

    )


}

export default AboutMe;