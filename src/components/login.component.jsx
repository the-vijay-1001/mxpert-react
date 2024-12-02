import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"

function LoginComponent({ submit }) {
    const validation = Yup.object({
        password: Yup.string().required('Password is required'),
        email: Yup.string().email("Please enter a valid email").required("Email Required")
    })

    return <>
        <div className="p-4 grid place-items-center">
            <div className="border border-black py-5 w-[50%] grid place-items-center">
                <div className="font-bold my-2 text-xl">Login Form</div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    enableReinitialize
                    validationSchema={validation}
                    onSubmit={(data) => {
                        submit(data)
                    }}
                >
                    <Form>
                        <div>
                            <Field type="text" name="email" className="border border-gray p-2 px-5" placeholder="Enter Email" />
                            <ErrorMessage component="div" name="email" className="text-xs text-red-500" />
                        </div>
                        <div className="mt-3">
                            <Field type="password" name="password" className="border border-gray p-2 px-5" placeholder="Enter Password" />
                            <ErrorMessage component="div" name="password" className="text-xs text-red-500" />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="border w-full py-1 border-black rounded-lg bg-green-500">
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </>
}

export default LoginComponent;