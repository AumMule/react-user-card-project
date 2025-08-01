import { Heart, HeartOff } from "lucide-react";

const UserCard = ({
  name,
  title,
  imgUrl,
  phone,
  country,
  username,
  isBookmarked,
  onToggleBookmark,
  onClick, 
}) => {
  return (
    <div
      onClick={onClick}
       className="w-full max-w-xs mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer relative hover:shadow-xl transition-shadow duration-300"
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); // stop opening modal
          onToggleBookmark();
        }}
        className="absolute top-3 right-3 z-10"
      >
        {isBookmarked ? (
          <Heart className="fill-red-500" />
        ) : (
          <HeartOff className="text-gray-500" />
        )}
      </button>

      <img src={imgUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">{title}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">📞 {phone}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">🌍 {country}</p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">👤 {username}</p>
    </div>
  );
};

export default UserCard;
