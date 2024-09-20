import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"



function SingleProductPage(){
    const {id}=useParams()
    const [data,setdata]=useState({})
    const [loading,setloading]=useState(false)
 
    useEffect(()=>{
        setloading(true)
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then((res)=>{
            setloading(false)
            setdata(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return loading ? <Loader/> : (
        
        <div data-testid="products-container" >   
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img src={data.img}data-testid="product-image" style={{height:"400px"}}/>
            </div>
            <div data-testid="product-category">{data.category}
            </div>
           
            <div data-testid="product-details">{data.details}
            </div>
            <div data-testid="product-price">{data.price}
            </div>
          
            </div>
    )
}
export default SingleProductPage