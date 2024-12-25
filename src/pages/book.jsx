import axios from "axios";
import ProductComponent from "../components/book.component";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate()
    const submit = async (data) => {
        const token = localStorage.getItem("token");
        const product = await axios.post("http://localhost:3001/book", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (product?.data?.status) {
            Swal.fire({
                title: product?.data?.message,
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            })
            setTimeout(() => {
                navigate("/appointments")
            }, 2000);
        }
        else {
            Swal.fire({
                title: product?.data?.message,
                icon: "error"
            })
        }
    }
    return <>
        <button className="border p-2 bg-black text-white m-2" onClick={() => { navigate(-1) }}>Back</button>
        <ProductComponent submit={submit} />
    </>
}

export default Product;