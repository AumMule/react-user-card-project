function Usercard({ name, title, imgUrl }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Usercard;
