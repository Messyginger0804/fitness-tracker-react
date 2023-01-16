// import PostView from "../components/PostView";
import RoutinesView from "../components/RoutinesView";
import RoutinesForm from "../components/RoutinesForm";


const MyRoutines = ({ token }) => {
  return (
    <div className="myRoutines_page">
      {
      token &&
      <RoutinesForm token={token} />
            }      
      <RoutinesView token={token} />

    </div>
  );
};



export default MyRoutines;