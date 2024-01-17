import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Swal from "sweetalert2";
// import { GlobalContext } from "../Context/context";

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  let { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((json) => setProduct(json.data));
  }, [productId]);

  const addToCart = () => {
    const item = { ...product, count };
    // console.log(item);

    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });


    // console.log(state)

    Swal.fire({
      title: "Success!",
      text: "Added to Cart Successfully",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="mt-5">{product.title}</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div>
              <Carousel>
                {product?.images?.map((val, key) => (
                  <Carousel.Item key={key}>
                    <img
                      className="d-block w-100"
                      src={val}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div>
              <h3 className="color-secondary">{product.description}</h3>
              <p>
                <del>{product.price}</del> -{" "}
                <ins>{product.discountPercentage}</ins>
              </p>
              <p>Rating: {product.rating}</p>
              <p>Stock Left: {product.stock}</p>
              <div>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => setCount(count - 1)}
                  disabled={count > 1 ? false : true}
                >
                  -
                </button>

                {count}

                <button
                  className="btn btn-primary ms-2"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <button className="btn btn-primary mt-5" onClick={addToCart}>
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
