import { useState } from "react";
import { ChevronDown } from "lucide-react";



const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
        question: "Proposez-vous des devis gratuits ?",
        answer:
            "Oui, tous nos devis sont 100% gratuits et sans engagement. Nous prenons le temps d’évaluer vos besoins avant toute intervention.",
        },
        {
        question: "Intervenez-vous en urgence ?",
        answer:
            "Absolument. Nous assurons un service de dépannage rapide 7j/7, pour les fuites d’eau, les pannes de chauffe-eau ou les problèmes de chauffage.",
        },
        {
        question: "Quels sont vos délais d’intervention ?",
        answer:
            "Dans la majorité des cas, nous intervenons sous 24 heures à Paris et en Île-de-France. Pour les urgences, une intervention peut être planifiée dans la journée.",
        },
        {
        question: "Travaillez-vous avec des marques spécifiques ?",
        answer:
            "Nous collaborons avec les plus grandes marques (Atlantic, Daikin, Thermor, Grohe, etc.) pour garantir qualité, performance et durabilité.",
        },
        {
        question: "Comment puis-je vous contacter ?",
        answer:
            "Vous pouvez nous joindre directement par téléphone, via notre formulaire de contact ou demander un devis depuis notre site web. Nous vous répondrons dans les plus brefs délais.",
        },
    ];


    return (

        <>
        
            <section className="bg-neutral-950 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center uppercase tracking-wide">
                    FAQ – Questions fréquentes
                    </h2>
                    <p className="text-gray-400 text-lg text-center mb-12">
                    Retrouvez ici les réponses aux questions les plus souvent posées par nos clients.
                    </p>

                    <div className="space-y-4">
                        {questions.map((item, index) => (
                            <div
                            key={index}
                            className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
                                >
                                    <span className="text-lg font-medium">{item.question}</span>
                                    <ChevronDown
                                    className={`h-6 w-6 text-blue-400 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? "max-h-40 px-6 pb-5" : "max-h-0 px-6"
                                    }`}
                                >
                                    <p className="text-gray-400 text-base">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Faq;