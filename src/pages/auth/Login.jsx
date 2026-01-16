

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHotel } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email && password) {
//       navigate("/dashboard");
//     } else {
//       console.log("Veuillez remplir tous les champs");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-800 flex justify-center items-center border-radius: 5.33px pb-32">
//       <div className=" w-[330px] "> {/* <-- réduit encore plus la largeur */}
//         {/* Logo RED Product */}
//         <div className="flex justify-center mb-6">
//           <div className="flex items-center gap-2">
//             <FaHotel size={24} className="text-white" />
//             <h1 className="text-2xl font-bold text-white tracking-wide">RED Product</h1>
//           </div>
//         </div>

//         {/* Card connexion */}
//         <div className="bg-white rounded-sm p-6 shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//             Connectez-vous
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Email */}
//             <div className="flex flex-col">
//               {/* <label htmlFor="email" className="text-gray-700 font-medium mb-1">
//                 E-mail
//               </label> */}
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Votre email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full  h-[55px] p-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//               />
//             </div>

//             {/* Mot de passe */}
//             <div className="flex flex-col">
//               {/* <label htmlFor="password" className="text-gray-700 font-medium mb-1">
//                 Mot de passe
//               </label> */}
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Votre mot de passe"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full  h-[55px] p-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//               />
//             </div>

//             {/* Garde-moi connecté */}
//             <div className="flex items-center text-sm text-gray-600 p-1">
//               <input type="checkbox" id="remember" className="mr-2" />
//               <label htmlFor="remember ">Gardez-moi connecté</label>
//             </div>

//             {/* Bouton connexion */}
//             <button
//               type="submit"
//               className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300 font-medium"
//             >
//               Se connecter
//             </button>
//           </form>
//         </div>

//         {/* Lien mot de passe oublié et inscription */}
//         <div className="mt-4 text-center text-gray-400 text-sm space-y-1">
//           <p>
//             <a href="/forgot-password" className="text-yellow-400 hover:underline">
//               Mot de passe oublié ?
//             </a>
//           </p>
//           <p>
//             Vous n'avez pas de compte ?{" "}
//             <a href="/signup" className="text-yellow-400 hover:underline">
//               S'inscrire
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login min-h-screen flex justify-center items-center p-4">
      
      {/* Conteneur global */}
      <div className="w-[340px] -mt-50 h-auto">
        
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
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Connectez-vous
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
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

            {/* Remember me */}
            <div className="flex items-center text-sm text-gray-600 p-2">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Gardez-moi connecté</label>
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full h-[48px] bg-gray-900 text-white rounded-lg 
              hover:bg-gray-800 transition font-medium"
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* Liens */}
        <div className="mt-5 text-center text-sm text-gray-400 space-y-1">
          <p>
            <a href="/forgot-password" className="text-yellow-400 hover:underline">
              Mot de passe oublié ?
            </a>
          </p>
          <p className="text-gray-10">
            Vous n'avez pas de compte ?{" "}
            <a href="/signup" className="text-yellow-400 hover:underline">
              S'inscrire
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
