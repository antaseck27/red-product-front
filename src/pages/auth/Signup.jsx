// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const Signup = () => {
//   const [firstName, setFirstName] = useState("")  // Champ Prénom
//   const [lastName, setLastName] = useState("")    // Champ Nom
//   const [email, setEmail] = useState("")          // Champ Email
//   const [phone, setPhone] = useState("")          // Champ Téléphone
//   const [password, setPassword] = useState("")    // Champ Mot de passe
//   const navigate = useNavigate()                  // Pour rediriger après l'inscription

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Simuler l'inscription et rediriger
//     if (firstName && lastName && email && phone && password) {
//       console.log("Inscription réussie", firstName, lastName, email, phone, password)

//       // Rediriger vers la page Dashboard après inscription
//       navigate("/dashboard")  // La redirection vers le Dashboard
//     } else {
//       console.log("Veuillez remplir tous les champs.")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-500 flex justify-center items-center p-6">
//       <div className="bg-gray-900 p-10 rounded-3xl shadow-lg w-full max-w-md text-center text-white">
//         <h2 className="text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-1s">
//           S'inscrire
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Champ Prénom */}
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Votre prénom"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* Champ Nom */}
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Votre nom"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* Champ Email */}
//           <div className="mb-6">
//             <input
//               type="email"
//               placeholder="Votre email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* Champ Téléphone */}
//           <div className="mb-6">
//             <input
//               type="tel"
//               placeholder="Votre numéro de téléphone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* Champ Mot de passe */}
//           <div className="mb-6">
//             <input
//               type="password"
//               placeholder="Mot de passe"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* Bouton S'inscrire */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
//           >
//             S'inscrire
//           </button>
//         </form>

//         {/* Lien vers la page de connexion */}
//         <div className="mt-6">
//           <p className="text-gray-400">
//             Déjà un compte ? 
//             <a href="/login" className="text-blue-500 hover:underline">Se connecter</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && acceptedTerms) {
      // Ici, tu peux appeler ton API pour l'inscription
      console.log("Inscription réussie");
      navigate("/dashboard"); // Redirection après succès
    } else {
      console.log("Veuillez remplir tous les champs et accepter les termes");
    }
  };

  return (
    <div className="min-h-screen login flex justify-center items-center p-4">
      <div className="w-[340px] -mt-[50px] h-auto">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <FaHotel size={26} className="text-white" />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              RED Product
            </h1>
          </div>
        </div>

        {/* Card formulaire */}
        <div className="bg-white rounded-md p-8 shadow-xl">
          <h2 className="text-gray-800  mb-4 m-2">
            Créer un compte
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Nom */}
            <input
              type="text"
              placeholder="Votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 
              focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 
              focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />

            {/* Mot de passe */}
            <input
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 
              focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />

            {/* Acceptation termes */}
            <div className="flex items-center text-sm text-gray-600 p-2">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                Accepte les <span className="">termes et la politique</span>
              </label>
            </div>

            {/* Bouton inscription */}
            <button
              type="submit"
              className="w-full h-[48px] text-white rounded-lg 
              hover:bg-gray-800 transition font-medium" style={{ backgroundColor: '#494C4F' }}
            >
              S’inscrire
            </button>
          </form>
        </div>

        {/* Liens */}
        <div className="mt-5 text-center text-sm text-white space-y-1">
          <p>
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-yellow-400 hover:underline">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
