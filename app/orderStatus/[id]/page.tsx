"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { AppConstants } from "../../constants/constants";
import { useSearchParams } from 'next/navigation'
export default function OrderStatus({ params}: { params : { id: string } }) {
    const searchParams = useSearchParams()
 
  const paymentId = searchParams.get('payment_id')

  let productKeys = {
    "full_image_path" : "", 
    "product_name" : "", 
    "price":"",
    "phone":"",
    "address_line_1":"",
    "city" : "",
    "state" : "",
    "pin_code" : "",
    "discount_price":"",
    "discount_percentage":"",
    "description":"",
    "full_name":"",
    "_id" : "",
    "created" : ""
  }
  const [orderDetail, setOrderDetail] = useState(productKeys);
  useEffect(() => {
    getOrderDetail();
  }, []);


  /** Get order detail */
  const getOrderDetail = async () => {
    await axios
      .get(`${AppConstants.Api_BaseUrl}/order/${params.id}`)
      .then(
        (res) => {
          let orderDeta = (res.data.result) ? res.data.result : {};
          setOrderDetail(orderDeta);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <main>
            <section className="thankYouBg py-md-5 py-4" style={{backgroundImage: `url(${"/image/HometopBg.png"})`}}>
        <div className="container">
            <img src="/image/ThankYou.png" alt=""/>

            <h3 className="mt-3 KumbhSans-Regular">For Your Order</h3>

            <h4 className="mt-4 KumbhSans-SemiBold">Hello {orderDetail?.full_name},
            </h4>
            <h5 className="mt-2 KumbhSans-Regular">Your Order has been confirmed.</h5>

            <div className="row pt-md-4">
                <div className="col-lg-8 mt-4">
                    <h4>Order Summary</h4>
                    <div className="orderDetails mt-2">
                        <div className="row">
                            <div className="col-lg-6 col-6">
                                <h6>Order ID</h6>
                                <p>{orderDetail?._id}</p>
                            </div>

                            <div className="col-lg-6 col-6">
                                <h6>Order Date</h6>
                                <p>{orderDetail?.created}</p>
                            </div>

                            <div className="col-lg-6 col-6">
                                <h6>Payment ID</h6>
                                <p>{paymentId}</p>
                            </div>

                            {/* <div className="col-lg-6 col-6">
                                <h6>Delivery Date & Time</h6>
                                <p>21, July, 2023</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <h4>Billing Details</h4>
                    <div className="orderDetails mt-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <h6>{orderDetail?.full_name}</h6>
                                <p>{orderDetail?.phone}</p>
                                <p>{orderDetail?.address_line_1}</p>
                                 <p>{orderDetail?.city},  {orderDetail?.state}, {orderDetail.pin_code}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-5">
                <h4>Order Summary</h4>
                <div className="row">
                    <div className="col-lg-4 mt-2">
                        <img className="w-100" src={orderDetail?.full_image_path} alt=""/>
                    </div>

                    <div className="col-lg-8 mt-2">
                        <div className=" OrderSumyThankyo">

                            <ul className="list-unstyled">
                                <li>Base Price <span>{orderDetail?.price}</span></li>
                                <li>Discount <span>{orderDetail.discount_percentage}%</span></li>
                                <li>Price after discount<span>{orderDetail?.discount_price}</span></li>
                                <li>Quantity <span>01</span></li>
                                <li>Delivery Charge <span>50</span></li>
                                {/* <li>GST @18 % <span>324</span></li> */}
                                <li>Grand Total <span>{orderDetail?.discount_price+50}</span></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 pt-lg-4">
                <Link href="/product" className="btn btn-yellow">Go To Product</Link>
            </div>
        </div>
    </section>
    </main>
  );
}
