function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-pulse">
      <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto mb-1" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-1" />
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto" />
    </div>
  );
}

export default SkeletonCard;
