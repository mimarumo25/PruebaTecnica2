import React from "react";

const CardProduct = ({ data }) => {
  
  return (
    <div className="card">
      <div className="d-flex justify-content-center">
      <img src={data.imagen}  alt={data.nombre}/>
      </div>
      <div className="card-body text-center">
        <h5 className="fw-normal">{data.nombre}</h5>
        <b className="card-text ">
          {`R$ ${data.precio}`}
        </b>  
        <div class="d-grid">
        <button type="button" class="btn btn-dark btn-lg">Comprar</button>
          </div>      
      </div>
    </div>
  );
};

export default CardProduct;
