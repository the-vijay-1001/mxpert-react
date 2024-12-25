import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./index.css"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Tags from "./tag";
function DoctorsAndPatientList({ products, setProducts }) {
    console.log('✌️products --->', products);
    const navigate = useNavigate()
    function dateFormat(pre) {
        const date = new Date(pre);
        const formattedDate = date.toISOString().split("T")[0];
        return formattedDate;
    }
    return (
        <>
            <div className="flex place-content-end">
                <button className="border p-2 bg-black text-white m-2" onClick={() => { navigate(-1) }}>Back</button>
                <button className="border p-2  m-2 hover:bg-green-500" onClick={() => {
                    navigate("/doctors-patients")
                }}>Doctors/Patients</button>
                <button className="border p-2  m-2 hover:bg-green-500" onClick={() => {
                    navigate("/book")
                }}>+ Book Slot</button>
            </div>
            <div className="p-4 grid place-items-center">
                <div className="font-bold text-xl my-5">
                    <u>
                        Appointments
                    </u>
                </div>
                <table>
                    <tr>
                        <th>Patient Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    {products?.length ? products?.map((data, index) => <>
                        <tr>
                            <td>{data?.name}</td>
                            <td>{data?.email}</td>
                            <td>{<Tags role={data?.role} />}</td>
                        </tr>
                    </>) : <div className="grid place-items-center">
                        <div className="text-sm text-red-400">No Data Found</div>
                    </div>}
                </table>
            </div>
        </>
    );
}

export default DoctorsAndPatientList;