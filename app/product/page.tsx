"use client";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Link from "next/link";

import { AppConstants } from "../constants/constants";
export default function Product() {
  const [productsItems, setproductsItems] = useState([]);
  useEffect(() => {
    getProductList()
  }, []);

  //==== Product list by api =======
  const getProductList = async () => {
    await axios.get(`${AppConstants.Api_BaseUrl}/products`).then(
      (res) => {
        const dt = res.data.result ? res.data.result : [];
        setproductsItems(dt);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <main>
      <section className="defaultPaddingTB bg-lightYellow">
        <div className="container">
          <div className="col-xl-10 col-lg-11 mx-auto">
            <h2 className="KumbhSans-Bold">Our Product</h2>

            <div className="row">
              {productsItems.map((records: any, index) => {
                return (
                  <div className="col-lg-4 Our_Product mt-3" key={index}>
                    <Link href={"/productDetail/" + records?._id}>
                      <div className="bg-white text-center p-3 productImg">
                        <img
                          src={records.full_image_path}
                          className=""
                          alt="product image"
                        />
                      </div>
                      <div className="mt-3">
                        <div className="ps-xl-3">
                          <h2> {records?.product_name}</h2>

                          <h3 className="KumbhSans-Bold mt-2">
                            <span className="yellow-color">
                              Rs. {records?.discount_price}
                            </span>{" "}
                            <del className="ms-3">Rs. {records?.price}</del>
                          </h3>
                          <div className="mt-2 text-center">
                            <a href="">
                              <i className="fa fa-star ratingStar"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-star ratingStar"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-star ratingStar"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-star ratingStar"></i>
                            </a>
                            <a href="">
                              <i className="fa fa-star ratingStar"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
