import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    const id=useParams();
    const[product,SetProduct]=useState();
    useEffect(() => {
      const url='https://dummyjson.com/products/'+ id;

    fetch(url)
    .then((response)=>{
    return response.json()    
    })
    .then((data)=>{
    SetProduct(data.products)    
    })
},[]);
    
  return (
    <>
   {product ? <p>{product.id}</p>
   
   
   
   :null}
    </>
  )
}

