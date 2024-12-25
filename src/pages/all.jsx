import axios from "axios";
import ProductComponent from "../components/book.component";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorsAndPatientList from "../components/all.component";

function DoctorsAndPatients() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [products, setProducts] = useState([]);
    async function getProducts() {
        const product = await axios.get(`http://localhost:3001/user`, {
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
    useEffect(() => {
        getProducts()
    }, [])
    return <>
        <DoctorsAndPatientList products={products} setProducts={setProducts} />
    </>
}

export default DoctorsAndPatients;