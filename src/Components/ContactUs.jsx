import {React,useState} from 'react'
import { Button } from 'react-bootstrap'
import {FaFacebookF} from 'react-icons/Fa'
import {FaTwitter} from 'react-icons/Fa'
import {FaInstagram} from 'react-icons/Fa'
import Swal from 'sweetalert2'
function ContactUs() {
  const [detail, setdetail]=useState({  
    Name:"",
    Email:"",
    Website:"",
    Message:"",   
     });

   const handlechange=(e)=>{
   const name=e.target.name;
   const value =e.target.value
   setdetail((prev)=>{
   return{ ...prev,[name]: value };
   
   })
   };
   const handlesubmit=(e)=>{
   
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Form has been saved Succesfully',
      showConfirmButton: false,
      timer: 1500
    })
     e.preventDefault();
    console.log(detail)
   
   }
  return (
    <div className='contact'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
        <div className='contact-info'>
       <h5>Contact Us</h5>
        <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
        <a href='tel:8006866688'>(800) 686-6688</a>
        <a href="mailto:info.deercreative@gmail.com">info.deercreative@gmail.com</a>
        <p>mm</p>
        <p>Open hours: 8.00-18.00 Mon-Fri</p>
        <p>Sunday: Closed</p> 
        <div className='social'>
            <h5>Follow Us</h5>
         <FaFacebookF  color='#fff' style={{background:'#3a61c9',width:'30px',height:'30px',borderRadius:'38px',marginRight:'10px'}}/>
         <FaTwitter  color='#fff' style={{background:'#41a1f6',width:'30px',height:'30px',borderRadius:'38px',marginRight:'10px'}}/>
         <FaInstagram  color='#fff' style={{background:'#8f6247',width:'30px',height:'30px',borderRadius:'38px',marginRight:'10px'}}/>
      
        </div>
        </div>
        </div>
        <div className='col-md-6'>
        <div className='cntct-blk'>
        <h5>Get In Touch With Us!</h5>
        <p>Fill out the form below to recieve a free and confidential.</p>    
        </div>
        <div className='contact-frm'>
        <form onSubmit={handlechange}>
        <div className='col-md-12'>
         <input type='text' className='' placeholder=' Name' name='Name' onChange={handlechange}></input>    
         </div>
         <div className='col-md-12'>
         <input type='email' className='' placeholder=' Email' name='Email' onChange={handlechange}></input>    
         </div>    
         <div className='col-md-12'>
         <input type='text' className='' placeholder=' Website' name='Website' onChange={handlechange}></input>    
         </div>
         <div className='col-md-12'>
         <textarea className='' placeholder='Message' name='Message' onChange={handlechange}></textarea>    
         </div>
         <div className='col-md-12'>
         <Button  onClick={handlesubmit}  className='btn'>Send Message</Button>    
         </div>
        </form>

        </div>
        </div>
        </div>
        </div>    
    </div>
  )
}

export default ContactUs