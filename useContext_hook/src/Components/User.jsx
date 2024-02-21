import { useContext } from "react";
 import UserContext from "../Context/UserContext";

const User = () => {
  const users = useContext(UserContext);
  // console.log(users)
  return (
    <>
      <div className="">
        <p className="user-text">Name:{users.name}</p>
        <p className="user-text">Email:{users.email}</p>
        <p className="user-text">Age:{users.age}</p>
      </div>
    </>
  );
};

export default User;
