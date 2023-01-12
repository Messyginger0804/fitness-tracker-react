// import PostView from "../components/PostView";
import RoutinesView from "../components/RoutinesView";
import LogMeOut from "../components/LogMeOut";

const Profile = ({token, setToken}) => {
    return (
      <div className="profile_page">
        { token &&
          <LogMeOut
            token={ token } 
            setToken={ setToken }/>
        }
        <h1>Profile</h1>
        <RoutinesView token={ token } />

      </div>
    );
  };
  
export default Profile;