import React from "react";


function CUSTOMERS() {
  return (
    <>
      <div className="shope d-flex justify-content-center mt-5">
        <h2 style={{ fontWeight: "bold" }} className="main_inter">
          <img
            src={require("../Assets/google-reviews-icon.png")}
            style={{ fontSize: "30px", marginRight: "15px" }}
          />
          GOOGLE REVIEWS BY REAL CUSTOMERS
        </h2>
      </div>

      <div className="d-flex justify-content-center mt-1 arrow_bottom">
        <img src={require("../Assets/org-brd-btm.gif")} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 google-company-details mt-4">
            <h3 className="txt-333">Ajanta Bottle Pvt Ltd</h3>
            <ul class="pb-4">
              <li class="txt-gray fs32 pr-2 align-middle">4.8</li>{" "}
              <li>
                <img src={require("../Assets/google-star-big.jpg")} />
              </li>{" "}
              <li>
                <img src={require("../Assets/google-star-big.jpg")} />
              </li>{" "}
              <li>
                <img src={require("../Assets/google-star-big.jpg")} />
              </li>{" "}
              <li>
                <img src={require("../Assets/google-star-big.jpg")} />
              </li>{" "}
              <li>
                <img src={require("../Assets/google-star-big.jpg")} />
              </li>{" "}
              <li class="txt-gray align-content-center">815 reviews</li>
            </ul>
            <div class="   Blogs_btns">
            <a
              href="https://hbsp.harvard.edu/product/W18241-PDF-ENG"
              class=" btn-google"
            >
              {" "}
              <img src={require("../Assets/vision-icon.png")} class="pr-2 " />
              See More Reviews
            </a>
          </div>

          </div>


          <div className="col-md-8 mt-4">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../Assets/slider2.jpg")} class="d-block w-100" alt="..."/>


    </div>
    <div class="carousel-item">
      <img src={require("../Assets/slider2.jpg")} class="d-block w-100" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src={require("../Assets/slider2.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          </div>
        </div>




      </div>
    </>
  );
}

export default CUSTOMERS;
