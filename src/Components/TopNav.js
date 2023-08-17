import React from "react";
import { BiSearchAlt2} from "react-icons/bi";
import { BiSolidUser} from "react-icons/bi";
import {BsFillCartFill } from "react-icons/bs";
function TopNav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-3 menu_top">
          <a  href="https://www.ajantabottle.com">
          <img src={require("../Assets/logo (1).png")} />
          </a>
          <a href="https://www.ajantabottle.com">
          <img src={require("../Assets/40-years-trust2.png")} />
          </a>
        </div>

        <div className="col-md-4">
          <div className="search_bar mt-4">

          <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" autocomplete="off" placeholder=" Search for products"/>
    <label class="form-label" for="form1 "></label>
 
  </div>
  <button type="button " class="btn SearchBtn" style={{backgroundColor: '#f25c29'}}>
  <BiSearchAlt2 style={{color:'#fff'}}/>
  </button>

</div>
          </div>
        </div>

        <div className="col-md-4 mt-4 main_nav">
          <div className="nav-top mt-2">
            <ul className=" nav_ul">
              <li className="Login">
              <BiSolidUser style={{color:'f25c29' ,fontSize:'25px'}} />
                <a href="https://www.ajantabottle.com/login">Login</a>
              </li>

              <li className="Register">
                <a href="https://www.ajantabottle.com/register">Register</a>
              </li>
           
              <li class="cart cartclc" >    <BsFillCartFill style={{color:'f25c29' ,fontSize:'25px',marginRight:'5px'}}/>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
