"use client"; // This is a client component
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Carousel } from "primereact/carousel";
import { AppConstants } from "./constants/constants";

export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [productsItems, setproductsItems] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const listOfCarouselProduct = [
    {
      imgUrl: "image/demoImg1.png",
      description:
        " It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking views.",
      name: "Liam Gordon",
      place: "Austin, TX",
    },
    {
      imgUrl: "image/demoImg1.png",
      description:
        " It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking views.",
      name: "Liam Gordon",
      place: "Austin, TX",
    },
    {
      imgUrl: "image/demoImg1.png",
      description:
        " It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking views.",
      name: "Liam Gordon",
      place: "Austin, TX",
    },
    {
      imgUrl: "image/demoImg1.png",
      description:
        " It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking views.",
      name: "Liam Gordon",
      place: "Austin, TX",
    },
  ];
  useEffect(() => {
    axios.get(`${AppConstants.Api_BaseUrl}/home_data`).then((response) => {
      let result = response.data && response.data ? response.data : {};
      if (result) {
        let faqList = result.faqs ? result.faqs : [];
        setFaqs(faqList);
      }
    });
  }, []);

  const productTemplate = (
    carouselProduct: (typeof listOfCarouselProduct)[0]
  ) => {
    return (
      <div>
        <div>
          <img
            className="customerUserProfile"
            src={carouselProduct.imgUrl}
            alt={carouselProduct.name}
          />
        </div>
        <p className="">{carouselProduct.description}</p>
        <h3>{carouselProduct.name}</h3>
        <h6 className="">{carouselProduct.place}</h6>
      </div>
    );
  };
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
      <section className="HometopBg pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last mb-4 mb-lg-0">
              <img className="w-100" src="image/demoImg1.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="">
                <h1> Welcome Prosperity into your life!</h1>
                <p>
                  Place the pomegranate tree image in your home or office and it
                  will attract prosperous environment into your life.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/product" className="btn btn-yellow">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="PrayersTemple defaultPaddingTB">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="">
                <img className="w-100" src="image/2nd-Image.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-xl-3">
                <h1>Are you also facing slow business growth?</h1>
                <p className="">
                  Are you fed up with seeing your business growth stuck at one
                  point? Do you feel frustrated with the slow progress of your
                  ventures? It's time to break free from this stagnant situation
                  and inspire new life into your business!
                </p>
                <p className="">
                  Welcome the magical pomegranate tree Samriddhi Frame - a
                  symbol of prosperity that opens your business's full
                  potential. Watch your ventures flourish like never before with
                  this attractive frame! Say goodbye to the usual routine and
                  welcome a thriving future with the enchanting allure of the
                  pomegranate tree. Your journey to success begins now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="BenefitsSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 pe-xl-5 ">
              <div className="benefits_CardM">
                <h1 className="px-3 px-lg-0">
                  Experience Abundance
                  <br />
                  with Samridhi Frames
                </h1>
                <div className="benefitsCard">
                  <div>
                    <h3>1. Prosperity Visualization</h3>
                    <p className="">
                      The pomegranate tree image serves as a powerful
                      visualization tool, manifesting prosperity and abundance
                      into your business endeavors.
                    </p>
                  </div>
                </div>
                <div className="benefitsCard">
                  <div>
                    <h3>2. Magnetic Attraction</h3>
                    <p className="">
                      Attract clients and customers like never before,
                      magnetized by the captivating aura of the pomegranate tree
                      image.
                    </p>
                  </div>
                </div>
                <div className="benefitsCard">
                  <div>
                    <h3>3. Mindset Transformation</h3>
                    <p className="">
                      Experience a paradigm shift in your business mindset for
                      achievement and prosperity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-4 my-lg-0 ps-xl-3">
              <div className="swiper BenefitsSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img className="" src="image/c.png" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img className="" src="image/c.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="userAreSaying defaultPaddingTB">
        <div className="container">
          <div className="CustomersSayingText text-center">
            <h1>What Our Customers Are Saying</h1>
            <p>
              Discover the profound impact of spiritual frames and join the many
              satisfied customers who have found spiritual solace and
              inspiration through the <br />
              Samriddhi Frames.
            </p>
          </div>
          <div className="swiper CustomersSaying mt-4 pt-1 swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-a90709a9d15bf462"
              aria-live="off"
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                data-swiper-slide-index="0"
                style={{ width: "256.5px", marginRight: "40px" }}
              >
                <div>
                  <img
                    className="customerUserProfile"
                    src=" image/demoImg1.png"
                    alt=""
                  />
                </div>
                <p className="">
                  It was the best tour ever! I got a lot of impressions of
                  beautiful places and breathtaking views.
                </p>
                <h3>Aranab J</h3>
                {/* <Carousel
                  value={listOfCarouselProduct}
                  numScroll={1}
                  numVisible={2}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={productTemplate}
                /> */}
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                data-swiper-slide-index="0"
                style={{ width: "256.5px", marginRight: "40px" }}
              >
                <div>
                  <img
                    className="customerUserProfile"
                    src=" image/demoImg1.png"
                    alt=""
                  />
                </div>
                <p className="">
                  It was the best tour ever! I got a lot of impressions of
                  beautiful places and breathtaking views.
                </p>
                <h3>Aranab J</h3>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                data-swiper-slide-index="0"
                style={{ width: "256.5px", marginRight: "40px" }}
              >
                <div>
                  <img
                    className="customerUserProfile"
                    src=" image/demoImg1.png"
                    alt=""
                  />
                </div>
                <p className="">
                  It was the best tour ever! I got a lot of impressions of
                  beautiful places and breathtaking views.
                </p>
                <h3>Aranab J</h3>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                data-swiper-slide-index="0"
                style={{ width: "256.5px", marginRight: "40px" }}
              >
                <div>
                  <img
                    className="customerUserProfile"
                    src=" image/demoImg1.png"
                    alt=""
                  />
                </div>
                <p className="">
                  It was the best tour ever! I got a lot of impressions of
                  beautiful places and breathtaking views.
                </p>
                <h3>Aranab J</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marqueeNew">
        <Marquee scroll-amount="22">
          <ul className="">
            <li>Welcome Prosperity into your life! </li>
            <li>Welcome Prosperity into your life! </li>
            <li>Welcome Prosperity into your life! </li>
          </ul>
        </Marquee>
      </section>

      <section className="OurProductSection defaultPaddingTB">
        <div className="container">
          <div className="CustomersSayingText text-center">
            <h1>Our Product in different sizes</h1>
            <p>
              Samridhi frames offer Quality frames, diverse styles, satisfaction
              guarantee, and wide range of sizes.
            </p>
          </div>
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
            ;
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="container">
          <div className="row align-items-center whySamridhiFrames">
            <div className="col-lg-6 order-lg-last mb-4 mb-lg-0">
              <div className="whySamridhiFramesimgOveraly">
                <img className="w-100" src="../image/s-m.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="">
                <h1>Why Samridhi Frames is the Best</h1>
                <p>
                  The pomegranate tree image consists of 108 powerful bhagwad
                  geeta mantras, which further enhances its energy and impact.
                </p>
                <p>
                  Business mantras from the Bhagavad Gita can have a profound
                  and positive effect on individuals engaged in business and
                  entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="frequeltyAsked defaultPaddingTB">
        <div className="container">
          <h1>Frequltly Asked Questions</h1>
          <div className="col-lg-10 mx-auto mt-md-4">
            <div className="accordion" id="accordionExample">
              {faqs.map((records: any, index) => {
                return (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={"heading" + index}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + index}
                        aria-expanded="true"
                        aria-controls={"collapse" + index}
                      >
                        <span className="frequltyNumber">{index + 1}.</span>
                        {records.question}
                      </button>
                    </h2>
                    <div
                      id={"collapse" + index}
                      className={
                        index === 0
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse"
                      }
                      aria-labelledby={"heading" + index}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row align-items-center">
                          <div className="col-lg-12">
                            <p
                              className="mb-3"
                              dangerouslySetInnerHTML={{
                                __html: records.faq_ans,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="makeAStrong">
        <div className="container">
          <div className="col-lg-10 text-center mx-auto">
            <h1>Transform Your Business Success with Samriddhi Frames.</h1>
          </div>
          <center>
            <Link href="/products" className="btn btn-white">
              Buy Now
            </Link>
          </center>
        </div>
      </section>
    </main>
  );
}
