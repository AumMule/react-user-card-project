function Usercard() {
  return (
    <div className="max-w-sm mx-auto mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Aum Mule</h2>
        <p className="text-gray-600">Full Stack Developer</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Usercard;
