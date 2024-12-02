import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

function ProductUpdateComponent({ submit }) {
    const location = useLocation()
    const [pre, setPre] = useState(null);
    const validation = Yup.object({
        name: Yup.string().required('Product name is required'),
        category: Yup.string().required("Category is required"),
        inStock: Yup.string().required("Stock is required"),
        price: Yup.string().required("Price is required"),
        image: Yup.mixed().required("Image required")
    });
    useEffect(() => {
        setPre(location.state);
    }, [])
    return (
        <div className="p-4 grid place-items-center">
            <div className="border border-black py-5 w-[50%] grid place-items-center">
                <div className="font-bold my-2 text-xl">Product Form</div>
                <Formik
                    initialValues={{ name: pre?.name, category: pre?.category, inStock: pre?.inStock, price: pre?.price, image: null }}
                    enableReinitialize
                    validationSchema={validation}
                    onSubmit={(values, { resetForm }) => {
                        const formData = new FormData();
                        formData.append("name", values.name);
                        formData.append("category", values.category);
                        formData.append("price", values.price);
                        formData.append("inStock", values.inStock);
                        formData.append("image", values.image);
                        console.log("values", values)
                        submit(formData, pre?._id);
                        resetForm()
                    }}
                >
                    {(props) => (
                        <Form>
                            <div>
                                <Field
                                    type="text"
                                    name="name"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="Enter Product Name"
                                />
                                <ErrorMessage component="div" name="name" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <Field
                                    type="text"
                                    name="category"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="Enter Category"
                                />
                                <ErrorMessage component="div" name="category" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <Field
                                    type="number"
                                    name="price"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="Enter Price"
                                />
                                <ErrorMessage component="div" name="price" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <Field
                                    type="number"
                                    name="inStock"
                                    className="border border-gray p-2 px-5 w-full"
                                    placeholder="Enter Stock"
                                />
                                <ErrorMessage component="div" name="inStock" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="file"
                                    name="image"
                                    className="border border-gray p-2 px-5"
                                    onChange={(e) => props.setFieldValue("image", e.target.files[0])} // Updating Formik field manually
                                />
                                <ErrorMessage component="div" name="image" className="text-xs text-red-500" />
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="border w-full py-1 border-black rounded-lg bg-green-500">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ProductUpdateComponent;