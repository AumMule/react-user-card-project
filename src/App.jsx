import Usercard from './components/Usercard';
import DarkModeToggle from './components/DarkModeToggle';
function App() {
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

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 dark:bg-gray-900 dark:text-white transition-colors duration-300">
    {/* Top bar for dark mode toggle */}
    <div className="flex justify-end mb-6">
      <DarkModeToggle />
    </div>

    {/* Grid of user cards */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {users.map((user, index) => (
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
