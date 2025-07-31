import Usercard from './components/Usercard';

function App() {
  const users = [
    {
      name: "Aum Mule",
      title: "Full Stack Developer",
      imgUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Singh",
      title: "UI/UX Designer",
      imgUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Rohan Verma",
      title: "Data Scientist",
      imgUrl: "https://randomuser.me/api/portraits/men/76.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {users.map((user, index) => (
        <Usercard
          key={index}
          name={user.name}
          title={user.title}
          imgUrl={user.imgUrl}
        />
      ))}
    </div>
  );
}

export default App;
