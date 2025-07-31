function Usercard({ name, title, imgUrl, phone, country, username }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300">
      <img src={imgUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">{title}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">📞 {phone}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">🌍 {country}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">👤 {username}</p>
    </div>
  );
}


export default Usercard;
