import Dashboard from "./Components/Dashboard";
import UserInfo from "./Context/UserInfo";

// const data = {
//   name: "Harsh Singh",
//   Email: "harshrsingh555@gmail.com",
//   Age: "30 years",
// };

const App = () => {
  return (
    <>
      <div className="app bg-red-500 border-2 border-black w-[14rem] h-[12rem] ml-20 mt-10 rounded-lg ">
        <h1 className="title">User Dashboard</h1>
        <UserInfo>
          <Dashboard />
        </UserInfo>
      </div>
    </>
  );
};

export default App;
