"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image';
import { AppConstants } from "../../constants/constants";
export default function Product({ params }: { params: { id: string } }) {
  let productKeys = {
    full_image_path: "",
    product_name: "",
    price: "",
    discount_price: "",
    discount_percentage: "",
    description: "",
  };
  const [productDetail, setProductDetail] = useState(productKeys);
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    await axios.get(`${AppConstants.Api_BaseUrl}/product/` + params.id).then(
      (res) => {
        let productDeta = res.data.result ? res.data.result : {};
        console.log(params.id, res.data.result);

        setProductDetail(productDeta);
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
          <div className="row">
            <div className="col-lg-6">
              <div className="swiper productSliderTwo">
                <div className="swiper-wrapper">
                  <div className="swiper-slide text-center">
                     <img
                      src={productDetail?.full_image_path}
                      alt="product image"
                    /> 
                  </div>
                  {/* <div className="swiper-slide text-center">
                                <img
                                    src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png" />
                            </div>
                            <div className="swiper-slide text-center">
                                <img src="https://5.imimg.com/data5/ND/QJ/MY-12729036/wooden-ganesha.png" />
                            </div> */}
                </div>
              </div>
              <div className="swiper productSlider mt-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="productSmalSlider">
                      <div>
                        <img
                          src={productDetail?.full_image_path}
                          alt="product image"
                        />
                        <h6 className="text-center mt-2">
                          {productDetail?.product_name}
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <div className="swiper-slide">
                                <div className="productSmalSlider">
                                        <div>
                                            <img
                                            src="https://www.transparentpng.com/download/sri-ganesh/sri-ganesh-png-transparent-images-gold-11.png" />
                                            <h6 className="text-center mt-2">Medium</h6>
                                        </div>
                                    </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="productSmalSlider">
                                    <div>
                                        <img src="https://5.imimg.com/data5/ND/QJ/MY-12729036/wooden-ganesha.png" />
                                        <h6 className="text-center mt-2">  Large </h6>
                                    </div>
                                    
                                </div>
                            </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="KumbhSans">{productDetail?.product_name}</h2>

              <div className="productDetails">
                <div className="d-flex align-items-center mt-3">
                  <h3 className="yellow-color KumbhSans-Bold">
                    Rs {productDetail?.discount_price}
                  </h3>
                  <h3 className="mx-3 KumbhSans-Bold">
                    <del>Rs {productDetail?.price}</del>
                  </h3>
                  <h6 className="">
                    ( {productDetail?.discount_percentage}% OFF )
                  </h6>
                </div>
                <div className="mt-3">
                  <a href="" className="ratingStar">
                    <i className="fa fa-star"></i>
                  </a>
                  <a href="" className="ratingStar">
                    <i className="fa fa-star"></i>
                  </a>
                  <a href="" className="ratingStar">
                    <i className="fa fa-star"></i>
                  </a>
                  <a href="" className="ratingStar">
                    <i className="fa fa-star"></i>
                  </a>
                  <a href="" className="ratingStar">
                    <i className="fa fa-star"></i>
                  </a>
                  <span className="text-gray">(5)</span>
                  <span className="text-gray">25 Reviews</span>
                </div>

                <p className="productDec mt-md-4 mt-3">
                  {productDetail?.description}
                </p>

                <div className="mt-4 pt-2">
                  <Link href={`/checkout/${params.id}`} className="btn btn-yellow">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
