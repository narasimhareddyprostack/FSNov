import React, { Component } from "react";

class ProductList extends Component {
  state = {
    product: {
      product_Name: "Philips BT40 Portable Bluetooth Speaker",
      product_Image:
        "https://rukminim1.flixcart.com/image/224/224/jb6tksw0/speaker/mobile-tablet-speaker/v/u/7/philips-in-bt40bk-94-original-imafyhffk49hxvga.jpeg?q=90",
      product_Price: 1299,
      product_QTY: 4,
    },
  };

  incrHandler = () => {
    console.log("Inside click Handler");
    this.setState({
      product: {
        product_Name: "Philips BT40 Portable Bluetooth Speaker",
        product_Image:
          "https://rukminim1.flixcart.com/image/224/224/jb6tksw0/speaker/mobile-tablet-speaker/v/u/7/philips-in-bt40bk-94-original-imafyhffk49hxvga.jpeg?q=90",
        product_Price: 1299,
        product_QTY: this.state.product.product_QTY + 1,
      },
    });
  };
  decrHandler = () => {
    this.setState({
      product: {
        ...this.state.product,
        product_QTY: this.state.product.product_QTY - 1,
      },
    });
  };
  render() {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Image</th>
              <th scope="col">No of Product</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.product.product_Name}</td>
              <td>
                <img
                  src={this.state.product.product_Image}
                  height="50px"
                  width="50px"
                />
              </td>
              <td>
                <i
                  className="fa fa-minus-circle"
                  aria-hidden="true"
                  onClick={this.decrHandler}
                ></i>
                {this.state.product.product_QTY}
                <i
                  className="fa fa-plus-circle"
                  aria-hidden="true"
                  onClick={this.incrHandler}
                ></i>
              </td>
              <td>{this.state.product.product_Price}</td>
              <td>
                {this.state.product.product_QTY *
                  this.state.product.product_Price}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductList;
