const HotelCard = ({ name, city, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />

      {/* Contenu */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500">{city}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">
            {price} FCFA / nuit
          </span>

          <button className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100 transition">
            Détails
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
