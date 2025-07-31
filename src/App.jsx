import Usercard from './components/Usercard';
import DarkModeToggle from './components/DarkModeToggle';
import { useState, useEffect } from 'react';


function App() {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        const formattedUsers = data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          title: user.location.city,
          imgUrl: user.picture.large,
        }));
        setUsers(formattedUsers);
        setLoading(false);
      });
  }, []);




  const filterUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Top bar for dark mode toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <DarkModeToggle />

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grid of user cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 duration-300">
        {loading ? (
          <p className="text-center w-full col-span-full">Loading users...</p>
        ) : (
          filterUsers.map((user, index) => (
            <Usercard
              key={index}
              name={user.name}
              title={user.title}
              imgUrl={user.imgUrl}
            />
          ))
        )}

      </div>
    </div>
  );
}

export default App;
