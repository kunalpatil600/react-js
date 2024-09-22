// This code sets up a React application with routing and authentication 
// using React Router and context. It includes components like Login, Dashboard,
//  and SingleProductPage that fetch data using axios and display it conditionally
//   based on authentication state. The AuthContext provides login and logout 
//   functionality, while PrivateRoute ensures that protected routes are only 
//   accessible to authenticated users. The ProductsTable and ProductCard components 
//   render product data in a table, with individual product details linked to the 
//   SingleProductPage. Finally, a Loader component handles loading states.
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import Loader from "../Components/Loader";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const{logoutUser,authState}=useContext(AuthContext)
  const [data,setdata]=useState([])
  const [loading,setloading]=useState(false)
  const navigate = useNavigate();
  useEffect(()=>{
    setloading(true)
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setloading(false)
      setdata(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handlelogout=()=>{
    logoutUser();
    navigate("/login");
  }
  return loading ? <Loader/> : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handlelogout} >Logout</button>
        <p >
          Token:
          <b data-testid="user-token" >{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable  data={data} />
      </div>
    </div>
  );
}

export default Dashboard;