import { Link, Route } from "react-router-dom";

const Dashboard = () => {
    return ( 
        <div>
            <Link className="btn btn-success m-2" to="/admin/user">Users</Link>
            <Link className="btn btn-success m-2" to="/admin/profit">Profit</Link>
            
        </div>
     );
}
 
export default Dashboard;