import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./index.css"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function ProductComponentList({ products, setProducts, deleteProduct }) {
    const navigate = useNavigate()
    function removeProduct(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to proceed?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                const filteredProduct = products?.filter((data, index) => data?._id !== id)
                setProducts(filteredProduct);
                const isDeleted = deleteProduct(id);
                if (isDeleted) {
                    Swal.fire("Success", "Product Removed", "success");
                }
            } else {
                Swal.fire('Cancelled', 'Your action has been cancelled.', 'error');
            }
        });
    }
    return (
        <>
            <div className="flex place-content-end">
                <button className="border p-2 bg-black text-white m-2" onClick={() => { navigate(-1) }}>Back</button>
                <button className="border p-2  m-2 hover:bg-green-500" onClick={() => {
                    navigate("/product-create")
                }}>+ Add</button>
                {/* <button className="text-end border p-2 hover:bg-green-500 me-2 mt-2">+ Add</button> */}
            </div>
            <div className="p-4 grid place-items-center">
                <div className="font-bold text-xl my-5">
                    <u>
                        Product List
                    </u>
                </div>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                    {products?.length ? products?.map((data, index) => <>
                        <tr>
                            <td>{data?.name}</td>
                            <td>{data?.category}</td>
                            <td>{data?.price}</td>
                            <td>{data?.inStock}</td>
                            <td>
                                <img src={`http://localhost:3001/uploads/${data?.image}`} width={40} className="rounded-lg" />
                            </td>
                            <td className="flex gap-2">
                                <button className="border rounded-md p-1 bg-yellow-500" onClick={() => {
                                    navigate("/product-update", { state: data })
                                }}>update</button>
                                <button className="border rounded-md p-1 bg-red-500" onClick={() => {
                                    removeProduct(data?._id);
                                }}>delete</button>
                                <button className="border rounded-md p-1 bg-blue-500" onClick={() => {
                                    navigate("/product-card", { state: data })
                                }}>view</button>
                            </td>
                        </tr>
                    </>) : <div className="grid place-items-center">
                        <div className="text-sm text-red-400">No Data Found</div>
                    </div>}
                </table>
            </div>
        </>
    );
}

export default ProductComponentList;
