import React from "react";

function ProductShope() {
  return (
    <>
      <div>
        <div className="shope d-flex justify-content-center mt-4">
          <h2 style={{ fontWeight: "bold" }}>
            <img
              src={require("../Assets/shop-by-product-icon.png")}
              style={{ fontSize: "30px", marginRight: "15px" }}
            />
            Shop by Product
          </h2>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2 arrow_bottom">
        <img src={require("../Assets/org-brd-btm.gif")} />
      </div>
      <div className="container mt-5 Product_shope">
        <div className="row">
          <div className="col-md-4">
            <img src={require("../Assets/shop1.jpeg")} className="ajant_img" />
            <div class="org-bg sb text-uppercase fs18 text-center p-2  product_btn">
              <a
                href="https://www.ajantabottle.com/categories/glass-bottles/products"
                class="link-block text-white "
              >
                Clear Glass Bottles
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img src={require("../Assets/shope2.jpeg")} className="ajant_img" />
            <div class="dk-gray-bg sb text-uppercase fs18 text-center p-2 product_black">
              <a
                href="https://www.ajantabottle.com/categories/glass-jar/products"
                class="link-block text-white"
              >
                Clear Glass Jar
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img src={require("../Assets/shope3.jpeg")} className="ajant_img" />
            <div class="org-bg sb text-uppercase fs18 text-center p-2 product_btn">
              <a
                href="https://www.ajantabottle.com/categories/lug-cap-closure/products"
                class="link-block text-white"
              >
                Caps/Closure/Lids
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductShope;
