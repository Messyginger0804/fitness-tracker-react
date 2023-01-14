// import PostView from "../components/PostView";
import RoutinesView from "../components/RoutinesView";
import LogMeOut from "../components/LogMeOut";


const MyRoutines = ({ token, setToken }) => {
  return (
    <div className="profile_page">
      {token &&
        <LogMeOut
          token={token}
          setToken={setToken} />
      }

      <RoutinesView token={token} />

    </div>
  );
};



export default MyRoutines;