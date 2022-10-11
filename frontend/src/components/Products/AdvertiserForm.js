import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Ads.css";
import swal from "sweetalert";
import product from "./img/add-product.png";

const AdvertiserForm = () => {
  const [listOfAds, setListOfAdvertisement] = useState([]);
  const [reqNo, setreqNo] = useState("");
  const [itemCode, setitemCode] = useState("");
  const [itemQty, setitemQty] = useState("");
  const [Cost, setCost] = useState("Select Category");
  const [tCost, settCost] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };

  const validate = () => {
    /*form validations*/
    const errors = {};
    const ne = /^[0-9\b]+$/;
    var re = /\S+@\S+\.\S+/;

    if (!reqNo) {
      errors.reqNo = "reqNo is required!";
    }

    if (!itemCode) {
      errors.itemCode = "itemCode is required!";
    }

    if (!itemQty) {
      errors.itemQty = "itemQty is required!";
    }

    if (!Cost) {
      errors.Cost = "Cost is required!";
    }

    if (!tCost) {
      errors.tCost = "tCost is required!";
    }

    if (!ne.test(tCost)) {
      errors.tCost = "This tCost is not valid!";
    }
    
    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createAd();
    }
  };

  const demo = () => {
    setreqNo("RQ1");
    setitemCode("IR122");
    setitemQty("5");
    setCost("12");
    settCost("1000");
    
  };

  const createAd = () => {
    axios
      .post("http://localhost:8000/api/Products/", {
        reqNo,
        itemCode,
        itemQty,
        Cost,
        tCost,
        
      })
      .then((response) => {
        setListOfAdvertisement([
          ...listOfAds,
          {
        reqNo,
        itemCode,
        itemQty,
        Cost,
        tCost,
          },
        ]);
      });
    swal({
      title: "Item Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.reload();
    });
  };

  return (
    <div style={{ width: "1000px" }}>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          marginBottom: "40px",
          marginTop: "200px",
          border: "2px solid #078282",
        }}
      >
        <div style={{ backgroundColor: "black" }}></div>
        <div
          className="col-md-8 mt-4 mx-auto"
          style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            backgroundColor: "white",
            borderRadius: "30px",
            paddingBottom: "10px",
            margin: "2px",
          }}
        >
          <center>
            <div style={{ marginLeft: "-500px" }}>
              <h4
                style={{
                  color: "#111",
                  fontFamily: "Helavetica Neue",
                  fontSize: "60px",
                  fontWeight: "bold",
                  letterSpacing: "-1px",
                  marginBottom: "50px",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                <span
                  className="p-1 px-4 rounded text-white"
                  style={{ backgroundColor: "#078282", marginLeft: "180px" }}
                >
                  Purchase Request Form
                </span>
              </h4>
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Request Number"
                required
                value={reqNo}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setreqNo(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.reqNo}
              </p>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Item Code"
                required
                value={itemCode}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setitemCode(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.itemCode}
              </p>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Item quantity"
                required
                value={itemQty}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setitemQty(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.itemQty}
              </p>
            </div>

            

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Item Cost"
                required
                value={Cost}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.Cost}
              </p>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Item Total cost"
                required
                value={tCost}
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                onChange={(e) => {
                  settCost(e.target.value);
                }}
              />
              <br />
              <p class="alert-txt" style={{ color: "red" }}>
                {formErrors.tCost}
              </p>
            </div>

          

            <div>
              <Link to="/Products">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn btn-success"
                  style={{ backgroundColor: "#078282" }}
                >
                  Submit
                </button>
              </Link>{" "}
              <button
                type="button"
                onClick={demo}
                class="btn store-order-form-button my-4"
              >
                Demo
              </button>
            </div>
          </center>
        </div>
      </div>
      <div
        style={{
          float: "right",
          marginTop: "-580px",
          marginRight: "-550px",
          border: "3px solid #FFFFFF",
        }}
      >
        
      </div>
    </div>
  );
};

export default AdvertiserForm;
