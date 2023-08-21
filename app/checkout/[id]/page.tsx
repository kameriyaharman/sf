"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import { Formik, FormikHelpers, FormikValues } from "formik";
import { AppConstants } from "../../constants/constants";

export default function Checkout({ params  }: { params : { id: string } }) {
  let productKeys = {
    "full_image_path" : "", 
    "product_name" : "", 
    "price":"",
    "discount_price":"",
    "discount_percentage":"",
    "description":""
  }
  const [productDetail, setProductDetail] = useState(productKeys);
  useEffect(() => {
    getProductDetail();
  }, []);


  /** Save order request */
  async function handleSubmit(
    values: FormikValues,
    helper: FormikHelpers<FormikValues>
  ) {
    helper.setSubmitting(true);
    try {
      values["price"] = productDetail.discount_price
      values["product_id"] = params.id
      const response = await axios.post(`${AppConstants.Api_BaseUrl}/checkout/${params.id}`,values);
      console.log("response sfdsfdsfds", response.data.result)
      helper.setSubmitting(false);
      if(response.data && response.data.result){
        window.location.replace(response.data.result.longurl);
      }
      //helper.resetForm();
      //if(response && response.result)
    } catch (error) {
      helper.setSubmitting(false);
      console.log(error);
    }
  }

  /** Get porduct detail */
  const getProductDetail = async () => {
    await axios
      .get(`${AppConstants.Api_BaseUrl}/product/${params.id}`)
      .then(
        (res) => {
          let productDeta = (res.data.result) ? res.data.result : {};
          setProductDetail(productDeta);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <main>
        <section className="py-md-5 py-3 bg-lightYellow">
            <div className="container">
                <div className="row">
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                        address_line_1: "",
                        address_line_2: "",
                        state: "",
                        city:"",
                        pincode :""
                    }}
                    validate={(values) => {
                        const errors: any = {};
                        if (!values.first_name) errors.first_name = "First name cannot be blank";
                        if (!values.last_name) errors.last_name = "last name cannot be blank";
                        if (!values.city) errors.city = "City cannot be blank";
                        if (!values.state) errors.state = "State cannot be blank";
                        if (!values.pincode) errors.pincode = "Pincode cannot be blank";
                        if (!values.phone) {
                            errors.phone = "Phone number cannot be blank";
                        } else if (values.phone.length < 8) {
                        errors.phone = "At least 8 digits are required";
                        }

                        if (!values.address_line_1) errors.address_line_1 = "Address cannot be blank";
                        if (!values.address_line_2) errors.address_line_2 = "Address cannot be blank";

                        if (!values.email) {
                        errors.email = "Email cannot be blank";
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = "Invalid email address";
                        }
                        return errors;
                    }}
                    onSubmit={(values, helper) => {
                        handleSubmit(values, helper);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                           
                            <div className="col-lg-8">
                                <h1 className="billingHeading">Billing Details</h1>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-floating billingForm">
                                            <input 
                                                name="first_name" 
                                                type="text" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.first_name}
                                                className="form-control" 
                                                id="first_name"
                                                placeholder="First name"
                                            />
                                            <label htmlFor="first_name">Fisrt name<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.first_name && touched.first_name && errors.first_name}
                                        </span>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-floating billingForm">
                                            <input 
                                                type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.last_name}
                                                className="form-control" 
                                                id="last_name" 
                                                placeholder="Last name" 
                                            />
                                            <label htmlFor="last_name">Last name<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.last_name && touched.last_name && errors.last_name}
                                        </span>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-floating billingForm">
                                            <input 
                                                type="text"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className="form-control" 
                                                id="email" 
                                                placeholder="" 
                                            />
                                            <label htmlFor="email">Email address<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.email && touched.email && errors.email}
                                        </span>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-floating billingForm">
                                            <input 
                                                type="text"
                                                name="phone"
                                                onChange={(e) => {
                                                    const regex = /^[0-9\b]+$/;
                                                    if (
                                                      e.currentTarget.value === "" ||
                                                      regex.test(e.currentTarget.value)
                                                    ) {
                                                      setFieldValue(
                                                        "phone",
                                                        e.currentTarget.value
                                                      );
                                                    }
                                                }}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                className="form-control" 
                                                id="phone"
                                                placeholder="Phone number" 
                                            />
                                            <label htmlFor="phone">Phone number<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.phone && touched.phone && errors.phone}
                                        </span>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-floating billingForm">
                                            <textarea
                                                name="address_line_1"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address_line_1}
                                                className="form-control field-orders-billing_address_1" 
                                                placeholder="Leave a comment here" 
                                                id="address_line_1"
                                            ></textarea>
                                            <label htmlFor="address_line_1">Address Line 1<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.address_line_1 && touched.address_line_1 && errors.address_line_1}
                                        </span>
                                        <div className="form-floating billingForm">
                                            <textarea 
                                                className="form-control field-orders-billing_address_1" 
                                                placeholder="Leave a comment here" 
                                                id="address_line_2"
                                                name="address_line_2"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address_line_2}
                                            ></textarea>
                                            <label htmlFor="address_line_2">Address Line 2<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.address_line_2 && touched.address_line_2 && errors.address_line_2}
                                        </span>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="selectCustoms form-floating billingForm ">
                                            <select
                                                name="state"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.state}
                                                className="form-select" 
                                                id="state"
                                                aria-label="Floating label select example"
                                            >
                                                <option selected>Select State</option>
                                                <option value="ANDHRA PRADESH">Andhra pradesh</option>
                                                <option value="ASSAM">Assam</option>
                                                <option value="ARUNACHAL PRADESH">Arunachal pradesh</option>
                                                <option value="GUJRAT">Gujrat</option>
                                                <option value="BIHAR">Bihar</option>
                                                <option value="HARYANA">Haryana</option>
                                                <option value="HIMACHAL PRADESH">Himachal pradesh</option>
                                                <option value="JAMMU &amp; KASHMIR">Jammu &amp; kashmir</option>
                                                <option value="KARNATAKA">Karnataka</option>
                                                <option value="KERALA">Kerala</option>
                                                <option value="MADHYA PRADESH">Madhya pradesh</option>
                                                <option value="MAHARASHTRA">Maharashtra</option>
                                                <option value="MANIPUR">Manipur</option>
                                                <option value="MEGHALAYA">Meghalaya</option>
                                                <option value="MIZORAM">Mizoram</option>
                                                <option value="NAGALAND">Nagaland</option>
                                                <option value="ORISSA">Orissa</option>
                                                <option value="PUNJAB">Punjab</option>
                                                <option value="RAJASTHAN">Rajasthan</option>
                                                <option value="SIKKIM">Sikkim</option>
                                                <option value="TAMIL NADU">Tamil nadu</option>
                                                <option value="TELANGANA">Telangana</option>
                                                <option value="TRIPURA">Tripura</option>
                                                <option value="UTTAR PRADESH">Uttar pradesh</option>
                                                <option value="WEST BENGAL">West bengal</option>
                                                <option value="DELHI">Delhi</option>
                                                <option value="GOA">Goa</option>
                                                <option value="PONDICHERY">Pondichery</option>
                                                <option value="LAKSHDWEEP">Lakshdweep</option>
                                                <option value="DAMAN &amp; DIU">Daman &amp; diu</option>
                                                <option value="DADRA &amp; NAGAR">Dadra &amp; nagar</option>
                                                <option value="CHANDIGARH">Chandigarh</option>
                                                <option value="ANDAMAN &amp; NICOBAR">Andaman &amp; nicobar</option>
                                                <option value="UTTARANCHAL">Uttaranchal</option>
                                                <option value="JHARKHAND">Jharkhand</option>
                                                <option value="CHATTISGARH">Chattisgarh</option>
                                            </select>
                                            <label htmlFor="state">State</label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.state && touched.state && errors.state}
                                        </span>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-floating billingForm">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="city"
                                                placeholder=""
                                                name="city"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                                <label htmlFor="city">City<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.city && touched.city && errors.city}
                                        </span>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className="form-floating billingForm">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="Pincode"
                                                placeholder=""
                                                name="pincode"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.pincode} 
                                            />
                                                <label htmlFor="Pincode">Pincode<span className="text-danger">*</span></label>
                                        </div>
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            {errors.pincode && touched.pincode && errors.pincode}
                                        </span>
                                    </div>


                                </div>

                                <h1 className="billingHeading mt-5">Additional Information</h1>

                                <div className="form-floating billingForm">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                        value=""></textarea>
                                    <label htmlFor="floatingTextarea2">Order notes (optional) </label>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="OrderSummary">
                                    <h5>Order Summary</h5>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li>Base Total <span>₹ {productDetail?.discount_price}</span></li>
                                        <li>Delivery Charge <span>₹ 50</span></li>
                                    </ul>
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="">Grand Total</h5>
                                        <h4>₹ {productDetail?.discount_price+50}</h4>
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-yellow btn-lg w-100 mt-4"
                                    disabled={isSubmitting}
                                >Pay Now</button>
                            </div>
                            </div>
                        </form>
                    )}
                </Formik>
                </div>
            </div>
        </section>
    </main>
  );
}
