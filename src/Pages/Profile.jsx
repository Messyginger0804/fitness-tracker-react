import PostView from "../components/PostView";
import PostViewMessageView from "../components/MessageView";
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
        <PostView token={ token } />
        <MessageView token={ token } />
      </div>
    );
  };
  
export default Profile;