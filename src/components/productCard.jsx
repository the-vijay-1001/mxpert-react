import { useLocation, useNavigate } from "react-router-dom";
import "./index.css"
import { useEffect, useState } from "react";

function ProductCard() {
    const location = useLocation();
    const [data, setData] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        setData(location.state);
    }, [])
    return <>
        <button className="border p-2 bg-black text-white m-2" onClick={() => { navigate(-1) }}>Back</button>
        <div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
                <img src={`http://localhost:3001/uploads/${data?.image}`} alt="" />
            </div>
            <div class="product-details">
                <span class="product-catagory">{data?.category}</span>
                <h4><a href="">{data?.name}</a></h4>
                <div class="product-bottom-details">
                    <div class="product-price"> &#x20b9;{data?.price}</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard;