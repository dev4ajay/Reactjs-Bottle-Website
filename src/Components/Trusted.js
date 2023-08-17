import React from 'react'
import {AiFillCheckCircle  } from "react-icons/ai";
import {AiFillContainer} from "react-icons/ai";
import {AiFillContacts} from "react-icons/ai";
import {AiFillClockCircle} from "react-icons/ai";
import {AiFillBank} from "react-icons/ai";
import {AiFillControl} from "react-icons/ai";

function Trusted() {
  return (
    <div className='container mt-5 '>
        <div className='row'>
            <div className='col-md-2 '>

            <h6 className='trusted'><AiFillCheckCircle style={{fontSize:'27px',marginRight:'10px'}}/>Trusted for </h6>
            <p style={{paddingLeft:'35px' , color:'gray'}} >4 Decades</p>
            </div>
        
            <div className='col-md-2'>
            <h6 className='trusted'><AiFillContainer  style={{fontSize:'29px',marginRight:'5px'}}/>Highest <span style={{paddingLeft:'30px'}}>Quality</span> </h6>
            <p style={{paddingLeft:'33px' , color:'gray'}}>Lowest Price</p>
            </div>
            <div className='col-md-2'>
            <h6 className='trusted'><AiFillContacts  style={{fontSize:'29px',marginRight:'5px'}}/>Fast Despatch </h6>
            <p style={{paddingLeft:'30px' , color:'gray'}}>Guaranteed</p>
            </div>
           

            <div className='col-md-2'>
            <h6 className='trusted'><AiFillBank  style={{fontSize:'29px',marginRight:'5px'}}/>Hassle Free <span style={{paddingLeft:'32px'}}>Return</span> </h6>
            <p style={{paddingLeft:'33px' , color:'gray'}}>Money Back Guarantee</p>
            </div>
            <div className='col-md-2'>
            <h6 style={{marginLeft:'15px' , color:'gray'}} className='trusted'><AiFillClockCircle  style={{fontSize:'29px',marginRight:'5px'}}/>Safe </h6>
            <p  style={{paddingLeft:'44px'}}>Safe </p>
            </div>


            <div className='col-md-2'>
            <h6 className='trusted'><AiFillControl  style={{fontSize:'29px',marginRight:'5px'}}/>One Stop </h6>
            <p style={{paddingLeft:'33px'  , color:'gray'}}>Solution</p>
            </div>
        </div>
    </div>
    
  )
}

export default Trusted