import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import { listProductAsync } from "../actions/actionProduct";

export const Home = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(listProductAsync());
  }, [dispatch]);
  return (
    <div>
      <div className="container mt-2">
               
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
        {
          product.map((data,i) => (
          <div key={i}>           
              <CardProduct data={data}/>
            </div> 
           ))
        }
        

          
        </div>
      </div>
    </div>
  );
};
