import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ProductComponent({ submit }) {
    const validation = Yup.object({
        description: Yup.string().required('Description is required'),
        date: Yup.date().required("date is required")
    });

    return (
        <div className="p-4 grid place-items-center">
            <div className="border border-black py-5 w-[50%] grid place-items-center">
                <div className="font-bold my-2 text-xl">Book Appointment</div>
                <Formik
                    initialValues={{ date: "", userId: localStorage.getItem("userId"), description: "" }}
                    enableReinitialize
                    validationSchema={validation}
                    onSubmit={(values, { resetForm }) => {
                        console.log('✌️values --->', values);
                        submit(values);
                        resetForm()
                    }}
                >
                    {(props) => (
                        <Form>
                            <div>
                                <Field
                                    type="text"
                                    name="description"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="Fill Description"
                                />
                                <ErrorMessage component="div" name="description" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <Field
                                    type="date"
                                    name="date"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="date"
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <ErrorMessage component="div" name="date" className="text-xs text-red-500" />
                            </div>

                            <div className="mt-3">
                                <button type="submit" className="border w-full py-1 border-black rounded-lg bg-green-500">
                                    Book Now
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ProductComponent;
