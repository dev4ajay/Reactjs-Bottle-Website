import React from "react";
import { MdArrowDropDown } from "react-icons/md";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light header_h mt-3 ">
        <div className="container d-flex main_header">
          <div className="navbar_m"> 
          <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto  header_top">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle  nav_link"
                href="javascript:void(0);"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop By Industry
                <MdArrowDropDown style={{fontSize:'20px'}}/>
              </a>
              <ul class="dropdown-menu menu_hover">
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/glass-bottle-jar-food-processing/products"
                  >
                    Food Processing and Beverage
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.ajantabottle.com/categories/glass-bottle-pharmaceutical/products"
                  >
                    Pharmaceutical & Nutraceutical
                  </a>
                </li>

                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/kitchen-product/products"
                  >
                    Kitchen Products
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/cosmetic-menu/products"
                  >
                    Cosmetics
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle  nav_link"
                href="javascript:void(0);"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop By Product
                <MdArrowDropDown style={{fontSize:'20px'}}/>
              </a>
              <ul class="dropdown-menu menu_hover">
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/glass-bottles/products"
                  >
                    Clear Glass Bottles
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.ajantabottle.com/categories/glass-jar/products"
                  >
                    Clear Glass Jar
                  </a>
                </li>

                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/lug-cap-closure/products"
                  >
                    Caps/Closure/Lids
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/amber-glass-jar/products"
                  >
                    Amber Glass Jar
                  </a>
                </li>

                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/amber-glass-bottle/products"
                  >
                    Amber Glass Bottle
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/blue-glass-bottle/products"
                  >
                    Blue Glass Bottles
                  </a>
                </li>

                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/D2C-Box/products"
                  >
                    D2C Ecommerce Box
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item "
                    href="https://www.ajantabottle.com/categories/new-launches/products"
                  >
                  

                New Launches

              
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active  nav_link"
                aria-current="page"
                href="https://www.ajantabottle.com/decoration-services"
              >
                {" "}
                Decoration Services{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active  nav_link"
                aria-current="page"
                href="https://www.ajantabottle.com/categories/popular-bottles/products"
              >
                {" "}
                Popular Bottles{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active  nav_link"
                aria-current="page"
                href="https://ajantabottle.com/blog/"
              >
                {" "}
                Blogs and Videos{" "}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active  nav_link"
                aria-current="page"
                href="https://www.ajantabottle.com/contact"
              >
                {" "}
                Contact Us{" "}
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;
