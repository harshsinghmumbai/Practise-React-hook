import User from "./User";

const UserCard = () => {
  return (
    <>
      <div className="bg-white p-3 rounded-md border">
        <h1 className="text-black font-semibold text-lg ">User Card</h1>
        <User   />
      </div>
    </>
  );
};

export default UserCard;
