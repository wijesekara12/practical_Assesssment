import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import product from "./img/add-product.png";


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminUpdateAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      category: "",
      image: "",
      price: "",
      smallDes: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.params.id;

    const {
        name,
        brand,
        category,
        image,
        price,
        smallDes,
    } = this.state;

    const data = {
        name: name,
        brand: brand,
        category: category,
        image: image,
        price: price,
        smallDes: smallDes,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/Products/${id}`, data).then((res) => {
      alert("Ad updated successfully!");
      window.location.href = "/Product/admin";
    });
  };

  componentDidMount() {
    const {
        name,
        brand,
        category,
        image,
        price,
        smallDes,
    } = this.props.params;

    this.setState({
        name: name,
        brand: brand,
        category: category,
        image: image,
        price: price,
        smallDes: smallDes,
    });
  }

  render() {
    return (
      <div style={{width:"1000px"}}>
      <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"180px",marginTop:"200px", border:"2px solid #078282"}}>
        
        
        
        <form className="needs-validation" style={{marginLeft:"30px", marginRight:"30px",marginTop:"72px"}}>
        <div style={{marginLeft:"-500px"}}>
        <h1
          style={{
            color: "#111",
            fontFamily: "Helavetica Neue",
            fontSize: "60px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            marginBottom:"80px",
            marginTop:"-50px",
            lineHeight: "1",
            textAlign: "center",
          }}
        >
          <span className="p-1 px-4 rounded text-white" style={{backgroundColor:"#078282",marginLeft:"300px",marginBottom:"200px"}}>
          Edit Product
          </span>
        </h1>
        </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            
            <input
              type="text"
              className="form-control"
              name="brand"
              placeholder="Brand"
              value={this.state.brand}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>

          

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleInputChange}
              readOnly
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          
            <input
              type="text"
              className="form-control"
              name="image"
              placeholder="Image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </div>

          <center>
          <button
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: "15px",marginBottom:"30px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
          </center>
        </form>
      </div>
      <div
        style={{
          float: "right",
          marginTop: "-580px",
          marginRight: "-550px",
          border: "3px solid #FFFFFF",
        }}
      >
        <img
          width="400"
          height="400"
          style={{marginTop:"45px",marginRight:"140px"}}
          src={product}
        />
      </div>
      </div>
    );
  }
}

export default withParams(AdminUpdateAds);
