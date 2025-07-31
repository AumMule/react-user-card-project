import { useState, useEffect } from 'react';
import Usercard from './components/Usercard';
import DarkModeToggle from './components/DarkModeToggle';
import SkeletonCard from './components/skeletonCard';
import Pagination from './components/Pagination';
import UserModal from './components/userModal';

import { AnimatePresence } from 'framer-motion';


function App() {
  const [search, setSearch] = useState("");//for search functionality
  const [users, setUsers] = useState([]); //for setting users
  const [loading, setLoading] = useState(true); //for loading users
  const [sortOrder, setSortOrder] = useState("asc") //order of user according to names
  const [selectedUser, setSelectedUser] = useState(null); //select specific user

  
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
    return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  const filterUsers = sortedUsers.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
  );

  // for more users
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filterUsers.slice(indexOfFirstUser, indexOfLastUser);


  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results); // store full user objects
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);





  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 dark:bg-gray-900 dark:text-white transition-colors duration-300">

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">



        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border text-black border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500"
        />
        <div className='flex flex-row gap-1.5'>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 mx-0.5 py-2 rounded-md bg-gray-200 border-none dark:border-gray-700 dark:bg-gray-800 focus:outline-none dark:text-white"
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
          {/* Top bar for dark mode toggle */}
          <DarkModeToggle />
        </div>

      </div>

      {/* Grid of user cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 duration-300">
        {loading ? (
          // Show 8 placeholder skeletons
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          filterUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <Usercard
                key={index}
                name={`${user.name.first} ${user.name.last}`}
                title={user.email}
                imgUrl={user.picture.large}
                phone={user.phone}
                country={user.location.country}
                username={user.login.username}
                onClick={() => setSelectedUser(user)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No users found.</p>
          )
        )}

        <AnimatePresence>
          {selectedUser && (
            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
          )}
        </AnimatePresence>




      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filterUsers.length / usersPerPage)}
        onPageChange={setCurrentPage}
      />


    </div>
  );
}

export default App;
