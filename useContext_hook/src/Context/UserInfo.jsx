import UserContext from "./UserContext";

const UserInfo = ({ children }) => {
  const user = {
    name: "harsh singh",
    email: "harshrsingh555@gmail.com",
    age: 18,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserInfo;
