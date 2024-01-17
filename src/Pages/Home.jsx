import React from 'react'
// import Headerr from '../Components/Headerr'
import ProductCategory from '../Components/ProductCategory'
import CountdownTimer from '../Components/CountdownTimer'
import { FaTruck } from 'react-icons/Fa'
import { FaMoneyBill } from 'react-icons/Fa'
import { FaUndo } from 'react-icons/Fa'
import { FaClock } from 'react-icons/Fa'
function Home() {
  return (
    <>
      {/* <Headerr/>   */}
      <section className='main-banner'>
        <img src='./src/assets/images/banner.png'></img>
        <div className='banner-info'>
          <div className='container'>
            <h6>SPRING / SUMMER COLLECTION 2017</h6>
            <h2>Get up to 30% Off<br />New Arrivals</h2>
            <a href='./AllProduct' className='btn'>Shop Now</a>
          </div>
        </div>
      </section>
      <section className='category-sec'>
        <ProductCategory />
      </section>
      <section className='counter-sec'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-5'>
              <div className='deal-img'>
                <img src='./src/assets/images/deal.png' className='img-fluid w-100'></img>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='d-flex justify-content-end blk-time'>
                <div className='text-center'>
                  <h3>Deal Of The Week</h3>
                  <CountdownTimer />
                  <a href='./AllProduct' className='btn'>Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='option-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='mainn d-flex align-items-center'>
                <FaTruck size={30} color='#fe4c50' />
                <div className='info'>
                  <h5 className='m-0'>FREE SHIPPING</h5>
                  <p>Suffered Alteration in Some Form</p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='mainn d-flex align-items-center'>
                <FaMoneyBill size={30} color='#fe4c50' />
                <div className='info'>
                  <h5 className='m-0'>CASH ON DELIVERY</h5>
                  <p>The Internet Tend To Repeat</p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='mainn d-flex align-items-center'>
                <FaUndo size={30} color='#fe4c50' />
                <div className='info'>
                  <h5 className='m-0'>45 DAYS RETURN</h5>
                  <p>Making it Look Like Readable</p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='main d-flex align-items-center'>
                <FaClock size={30} color='#fe4c50' />
                <div className='info'>
                  <h5 className='m-0'>OPENING ALL WEEK</h5>
                  <p>8AM - 09PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-sec'>
        <div className='container'>
          <div className='row'>
            <div className='blog-head'>
              <h3>Latest Blogs</h3>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog1.png' className='w-100'></img>
                <div className='img-info'>
                  <h3>Here are the trends I see coming this fall</h3>
                  <p>BY ADMIN | DEC 01, 2017</p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog2.png' className='w-100'></img>
                <div className='img-info'>
                  <h3>Here are the trends I see coming this fall</h3>
                  <p>BY ADMIN | DEC 01, 2017</p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog3.png' className='w-100'></img>
                <div className='img-info'>
                  <h3>Here are the trends I see coming this fall</h3>
                  <p>BY ADMIN | DEC 01, 2017</p>
                  <a href='#'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sletter-sec'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <div className='sletter-info'>
                <h5>Newsletter</h5>
                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='txt-blk d-flex justify-content-end'>
                <input type='email' placeholder='Your Email'></input>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home