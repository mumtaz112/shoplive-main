import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Products from '../Pages/Products';
// import { useParams } from 'react-router-dom';
function ProductCategory() {
  const [myData, setMyData] = useState([]);
  const [category, setCategory] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategory(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="container mt-5">
        <h2 className="text-center">Categories</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur dignissimos, in magni ducimus maiores molestias obcaecati est vitae tenetur.
        </p>
      </div>

      <div className="container category">
        <div className="row my-5">

          {

            category.map((val, key) => <div className='col-md-3 shadow-lg p-4 border rounded mx-4 my-2' key={key} >


              {/* {<Link to={`/Products/category/${category}`} className='text-decoration-none ' >{val.toUpperCase()}</Link>} */}

              <Link
                className="text-decoration-none"
                to={`/products/category/${val}`}>{val.toUpperCase()}</Link>

            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default ProductCategory