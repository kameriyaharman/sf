import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
           <div className="row footerSection defaultPaddingTB">
              <div className="col-xl-5 col-lg-6">
                 <a className="p-0 d-inline-block" href="index.html">
                    <img className="logo-top mb-3" src="/image/Logo.png" />
                 </a>
                 <p className="mb-3">Samridhi Frames empower you to embark on a journey of prosperity and growth. These exquisite frames serve as constant reminders of your limitless potential, igniting the spark of confidence within you. All rights reserved. J2D FASHIONS PRIVATE LIMITED
                 </p>
  
                 <div className="row mt-5">
                    {/* <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                       <h6>CALL OUR OFFICE</h6>
                       <h4 className="mt-1">+91 9070 108 108</h4>
                    </div> */}
                    <div className="col-lg-6 col-md-6">
                       <h6>SEND A MESSEGE</h6>
                       <h4 className="mt-1">support@samriddhiframes.com</h4>
                    </div>
                 </div>
              </div>
              <div className="col-xl-5 col-lg-6 ms-auto mt-4 mt-md-0">
                 {/* <h5>Subscribe To Our Newsletter</h5>
                 <div className="position-relative mt-2 footerInput">
                    <input className="form-control" type="text" placeholder="Email address" />
                    <a href="" className="subscribe">Subscribe <i className="fa fa-long-arrow-right"></i></a>
                 </div> */}
                 <div className="row pt-3">
                    <div className="col-lg-6 col-6 mt-4">
                       <ul className="list-unstyled">
                          <li><Link href="/">Home</Link></li>
                          <li><Link href="/about">About</Link></li>
                          <li><Link href="/contact">Contact</Link></li>
                          <li><Link href="/products">Products</Link></li>
                          <li><Link href="/privacy">Privacy Policy</Link></li>
                          <li><Link href="/terms">Terms & Conditions</Link></li>
                          <li><Link href="/cancellation-and-refund-policy">Return & Refund Policy</Link></li>
                          <li><Link href="/shipping-policy">Shipping & Delivery</Link></li>
                       </ul>
                    </div>
                    <div className="col-lg-6 col-6 mt-4">
                       <h5>Follow us at</h5>
                       <ul className="list-unstyled footerUser mt-2">
                          <li><a target="_blank" href="https://www.facebook.com/SamriddhiFrames" className="facebook"><i className="fa fa-facebook"></i></a></li>
                          <li><a target="_blank" href="https://www.instagram.com/samriddhi_frames/" className="instagram"><i className="fa fa-instagram"></i></a></li>
                          {/* <li><a href="" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="" className="twitter"><i className="fa fa-twitter"></i></a></li> */}
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <div className="row py-3 border-top footerBottom">
              <div className="col-xl-12 col-lg-12">
                 <p className="text-center text-lg-start">Copyright ©2023 J2D FASHIONS PRIVATE LIMITED. All rights reserved.</p>
              </div>
              {/* <div className="col-xl-8 col-lg-9">
                 <ul className="text-lg-end text-center mt-3 mt-md-0">
                    <li><a href="">Parvacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Retum & Refund Policy</a></li>
                    <li><a href="">Shipping & Delivery</a></li>
                    <li><a href="">FAQs</a></li>
                 </ul>
              </div> */}
           </div>
        </div>
     </footer>
    )
}