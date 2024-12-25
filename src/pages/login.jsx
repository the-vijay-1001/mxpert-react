import Swal from "sweetalert2";
import LoginComponent from "../components/login.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const submit = async (data) => {
        const login = await axios.post("http://localhost:3001/user/login", data);
        if (login?.data?.status) {
            localStorage.setItem("token", login?.data?.token)
            localStorage.setItem("role", login?.data?.data?.role)
            localStorage.setItem("userId", login?.data?.data?._id)
            Swal.fire({
                title: login?.data?.message,
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            })
            setTimeout(() => {
                navigate("/appointments")
                window.location.reload()
            }, 2000);
        }
        else {
            Swal.fire({
                title: login?.data?.message,
                icon: "error"
            })
        }
    }
    return <>
        <LoginComponent submit={submit} />
    </>
}

export default Login;