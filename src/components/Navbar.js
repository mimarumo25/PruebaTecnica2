import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { searchAsyn } from "../actions/actionProduct";
import * as Yup from 'yup';

const Navbar = () => {

     const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            search: ''
        },
        validationSchema: Yup.object({
          search: Yup.string().required()
        }),
        onSubmit: ({search}) => {
            dispatch(searchAsyn(search))
           // console.log(search)
        }
    })
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="py-2 col-md-3 col-sm-12">
            <select className="form-select " aria-label="Selecione una Opción">
              <option selected>Selecione una Opción</option>
              <option value="1">Menor Precio</option>
              <option value="2">Mayor Precio</option>
             
            </select>
          </div>
          <form className="d-flex" onSubmit={formik.handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              name="search"
              onChange={formik.handleChange} 
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
