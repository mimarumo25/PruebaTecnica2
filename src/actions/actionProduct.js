import  {typesProduct} from '../types/types';
import { db } from "../firebase/firebase";
import { collection,getDocs,query,where, orderBy, limit} from "@firebase/firestore";

//SEARCH

export const searchAsyn = (product) => {

    return async(dispatch) => {
       
        const productCollections = collection(db,"tecnica2");
        const q = query(productCollections,where("nombre","==",product))
        const datos = await getDocs(q);
        console.log(datos)
        const producto = [];
        datos.forEach((docu) => {
            producto.push(docu.data())
        }) 
        console.log(producto)
        dispatch(searchSync(producto))
    }
}


export const searchSync = (product) => {
    return{
        type: typesProduct.search,
        payload: product
    }
}

//READ

export const listProductAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "tecnica2"));
        const product = [];
        querySnapshot.forEach((doc) => {
            product.push({
                ...doc.data()
            })
        });
        dispatch(listSync(product));
    }
}

export const listSync = (product) => {
    return {
        type: typesProduct.list,
        payload: product
    }
}


