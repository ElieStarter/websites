// 🧠 Fonction d’envoi à Zapier

// const handleSubmit = async (e) => {
// e.preventDefault();
// setIsSending(true);
// setStatusMessage("");

// const formData = new FormData(e.target);
// const data = Object.fromEntries(formData.entries());

// try {
//     const response = await fetch("http://localhost:5000/api/sendToZapier", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
// });

//     const result = await response.text(); // <-- utile pour debug
//     console.log("Réponse Zapier:", result);

//     if (response.ok) {
//     setStatusMessage("✅ Votre demande a bien été envoyée !");
//     e.target.reset();
//     } else {
//     setStatusMessage("❌ Une erreur est survenue, veuillez réessayer.");
//     }
// } catch (error) {
//     console.error("Erreur d’envoi :", error);
//     setStatusMessage("❌ Impossible de contacter le serveur. Vérifiez votre connexion.");
// }

// setIsSending(false);
// };

import { useState, useEffect } from "react";
import { Info } from "lucide-react";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === "#devis") {
        setHighlight(true);
        setTimeout(() => setHighlight(false), 1500);
      }
    };

    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  // Envoi via Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkpqjpw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        alert("Votre demande de devis a bien été envoyée !");
        e.target.reset();
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l’envoi du formulaire.");
    }
  };

  return (
    <>
      <section
        id="devis"
        className={`bg-neutral-950 text-white py-20 px-6 transition-all duration-700 ${
          highlight ? "ring-4 ring-blue-500/40" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto bg-neutral-900/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 border border-neutral-800">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
            Demandez votre devis gratuit
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Nom / Prénom */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Nom</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* Téléphone / Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Ex : 06 12 34 56 78"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="exemple@email.com"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* Adresse / Type intervention */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">
                  Adresse / Code postal
                </label>
                <input
                  type="text"
                  name="adresse"
                  placeholder="Ex : 75000 Paris"
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">
                  Type d’intervention
                </label>
                <select
                  name="type_intervention"
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                >
                  <option value="">Sélectionnez un service</option>
                  <option>Pompe à chaleur</option>
                  <option>Ballon d’eau chaude</option>
                  <option>Fuite / Dépannage</option>
                  <option>Rénovation salle de bain</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            {/* Champs qualification */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Urgence</label>
                <select
                  name="urgence"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                >
                  <option value="">Votre demande est-elle urgente ?</option>
                  <option value="urgence">Oui – intervention urgente</option>
                  <option value="non_urgent">Non – pas urgent</option>
                </select>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm mb-2 text-gray-300">Vous êtes</label>
                <select
                  name="type_client"
                  required
                  className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
                >
                  <option value="">Sélectionnez votre profil</option>
                  <option value="particulier">Particulier occupant</option>
                  <option value="bailleur">Propriétaire bailleur</option>
                  <option value="agence">Agence / syndic</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-300">Budget estimé</label>
              <select
                name="budget"
                required
                className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3"
              >
                <option value="">Indiquez une fourchette</option>
                <option value="moins_150">Moins de 150 €</option>
                <option value="150_300">150 € – 300 €</option>
                <option value="300_plus">Plus de 300 €</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-300">
                Détails de votre demande
              </label>
              <textarea
                name="message"
                placeholder="Décrivez votre besoin (type de logement, problème rencontré, délais souhaités, etc.)"
                className="border border-gray-700 bg-neutral-950 rounded-lg px-4 py-3 h-32 resize-none"
              />
            </div>

            {/* RGPD */}
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <input type="checkbox" required className="mt-1 accent-blue-500" />
              <span>
                J’accepte que mes données soient utilisées pour être recontacté.
              </span>
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                className="text-blue-400"
              >
                <Info size={18} />
              </button>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg"
              >
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popup RGPD */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-neutral-900 p-6 rounded-xl max-w-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Protection des données (RGPD)
            </h3>
            <p className="text-sm text-gray-300">
              Vos données sont utilisées uniquement pour le traitement de votre
              demande de devis.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-full"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
