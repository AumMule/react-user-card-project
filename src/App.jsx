import Usercard from './components/Usercard';
import DarkModeToggle from './components/DarkModeToggle';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");

  const users = [
    {
      name: "Aum Mule",
      title: "Full Stack Developer",
      imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Priya Singh",
      title: "UI/UX Designer",
      imgUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Rohan Verma",
      title: "Data Scientist",
      imgUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
    }
  ];

  const filterUsers = users.filter(user=>
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
          value={ search }
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500"
        />
      </div>

    {/* Grid of user cards */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {filterUsers.map((user, index) => (
        <Usercard
          key={index}
          name={user.name}
          title={user.title}
          imgUrl={user.imgUrl}
        />
      ))}
    </div>
  </div>
  );
}

export default App;
