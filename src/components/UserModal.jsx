import { motion } from 'framer-motion';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] max-w-md relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
        <img src={user.picture.large} alt="User" className="rounded-full mx-auto w-24 h-24" />
        <h2 className="text-xl font-semibold text-center mt-4">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">{user.email}</p>
        <p className="text-center text-gray-600 dark:text-gray-300">Phone: {user.phone}</p>
        <p className="text-center text-gray-600 dark:text-gray-300">Username: {user.login.username}</p>
        <p className="text-center text-gray-600 dark:text-gray-300">Country: {user.location.country}</p>
      </motion.div>
    </motion.div>
  );
};

export default UserModal;
