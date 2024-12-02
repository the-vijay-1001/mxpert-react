import axios from "axios";
import ProductComponent from "../components/product.component";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductComponentList from "../components/productList.component";

function ProductList() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [products, setProducts] = useState([]);
    async function getProducts() {
        const product = await axios.get("http://localhost:3001/products", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (product?.data?.status) {
            setProducts(product?.data?.data)
        }
        else {
            setProducts([])
        }
    }
    async function deleteProduct(id) {
        const data = await axios.delete(`http://localhost:3001/products/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        if (data)
            return true
        return false
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <>
        <ProductComponentList products={products} setProducts={setProducts} deleteProduct={deleteProduct} />
    </>
}

export default ProductList;