import React from 'react'
import {FaFacebookF} from 'react-icons/Fa'
import {FaTwitter} from 'react-icons/Fa'
import {FaInstagram} from 'react-icons/Fa'
import {FaSkype} from 'react-icons/Fa'
import {FaPinterestP} from 'react-icons/Fa'
import {FaHeart} from 'react-icons/Fa'
function Footer() {
  return (
   <footer>
    <div className='container'>
    <div className='row'>
        <div className='col-md-6'>
        <div className='list'>
        <ul>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>FAQ'S</a></li>
            <li><a href='#'>Contact Us</a></li>
        </ul>    
        </div>
        </div>
        <div className='col-md-6'>
        <div className='social-icons d-flex justify-content-end'>
          <FaFacebookF size={15} color='#51545f'/>
          <FaTwitter size={15} color='#51545f'/>
          <FaInstagram size={15} color='#51545f'/>
          <FaSkype size={15} color='#51545f'/>
          <FaPinterestP size={15} color='#51545f'/>
         </div>    
        </div>
        <div className='col-md-12'>
            <div className='copyright'>
             <p>©2018 All Rights Reserverd. This template is made with <FaHeart/>  by <span>Colorlib</span></p>   
            </div>
        </div>
        </div>     
    </div>
   </footer>
  )
}

export default Footer