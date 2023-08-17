import React from 'react'

function LATEST() {
  return (
   <>
        <div className="shope d-flex justify-content-center mt-4">
        <h2 style={{ fontWeight: "bold" }} className="main_inter">
          <img
            src={require("../Assets/international-coverage-icon.png")}
            style={{ fontSize: "30px", marginRight: "15px" }}
          />
        LATEST BLOGS

        </h2>
      </div>

      <div className="d-flex justify-content-center mt-2 arrow_bottom">
        <img src={require("../Assets/org-brd-btm.gif")} />
      </div>


      <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-3'>
                <div className='latest-image-box'>
                <a href="https://www.ajantabottle.com/blog/power-of-custom-glass-bottle-printing">
                <img src={require("../Assets/free-Delivery-2200-×-1260-px-1.jpg")}/>
                </a>
                <div  className='latest_m'><a href="https://www.ajantabottle.com/blog/power-of-custom-glass-bottle-printing">Boasting Brand Visibility: Power of Custom Glass Bottle Printing</a></div>
                </div>
            </div>

            <div className='col-md-3'>
            <div className='latest-image-box'>

                <a href="https://www.ajantabottle.com/blog/glass-packaging-in-product-marketing">
                <img src={require("../Assets/free-Delivery-2.jpg")}/>
                </a>
                <div  className='latest_m'><a href="https://www.ajantabottle.com/blog/glass-packaging-in-product-marketing">The Power of Glass Packaging in Product Marketing: Case Studies and Examples</a></div>
</div>
            </div>
            <div className='col-md-3'>
            <div className='latest-image-box'>
                <a href="https://www.ajantabottle.com/blog/best-practices-storing-glass-packaging">
                <img src={require("../Assets/free-Delivery-3.jpg")}/>
                </a>
                <div  className='latest_m'><a href="https://www.ajantabottle.com/blog/best-practices-storing-glass-packaging">Protect Your Products: Best Practices for Storing and Transporting Glass Packaging</a></div>
           </div>
            </div>
            <div className='col-md-3'>
            <div className='latest-image-box'>
                <a  href="https://www.ajantabottle.com/blog/glass-bottles-strength-glass-mallakhamb">
                <img src={require("../Assets/free-Delivery-4.jpg")}/>
                </a>
                <div  className='latest_m'><a href="https://www.ajantabottle.com/blog/glass-bottles-strength-glass-mallakhamb">Beyond Packaging: Exploring the Strength and Beauty of Glass Bottles</a></div>
          </div>

          <div class="col-md-12 text-center mb-5  Blogs_btn">
                  <a
                    href="https://hbsp.harvard.edu/product/W18241-PDF-ENG"
                    class=" btn-org"
                  >
                    View Blogs
                  </a>
                </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default LATEST