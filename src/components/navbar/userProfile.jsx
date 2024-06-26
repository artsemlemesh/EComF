import { CiUser } from "react-icons/ci";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const UserProfile = () => {
  const { isAuthenticated, user } = useContext(GlobalContext);

  return(
  <div className="user_profile">
    <div className="icon">
      <CiUser />
    </div>
    <div className="info">
      {isAuthenticated ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  </div>
)}

export default UserProfile;
