import React, { useState } from "react";
import axios from "axios";

import nowLoading from "./nowLoading"

const Product =() => {
    const [Product, setProduct] = useState([])

    const URL = "http://localhost:3000/api"


// FORM

const [name,setName] = useState("")

const [image,setImage] = useState("")

const [price,setPrice] = useState(0)

const [stock, setStock] = useState(0)


    const getProducts = async ()=> {
        try {
            const urlGetProducts = "http://localhost:3000/api/product"
            let temp = await axios ({
                url : urlGetProducts,
                method : 'GET',
            })
            console.log (temp.data)
            setProduct(temp.data)
        }
        catch(err){
            alert(err)
        }
    }

    const addProduct = async ()=> {
        try{
            const link = "http://localhost:3000/api/store"

            let result = await axios({
              url : link,
              method : 'Add', 
            })
            console.log (result.data);
        }
        catch(err){
            alert(err)
        }
    }
    const getProductHandler = () => {
        alert("Get product here")
            getProducts();
    }



    return (
        <div className="container">
            <h2 className="text-center mt-2">Product Page</h2>
            <p className="text-center fs-1 fw-bold">Selamat datang, boleeee</p>
            <button 
            className="btn btn-sm btn-outline-success"
            onClick = {getProductHandler}
            >GET PRODUCT
            </button>
            <div className="row p-3">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>UserId</th>
                                <th>BrandId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Product.map(product => {
                                    const {id,Name,Price,Stock,UserId,BrandId} = product
                                    return (
                                        <tr>
                                            <td>{id}</td>
                                            <td>{Name}</td>
                                            <td>{Image}</td>
                                            <td>Rp{Price}</td>
                                            <td>{Stock}pcs</td>
                                            <td>{UserId}</td>
                                            <td>{BrandId}</td>
                                            <td>-</td>
                                        </tr>
                                    )
                                })
                    }</tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Product;