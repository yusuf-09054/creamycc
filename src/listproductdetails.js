import { useEffect, useState } from 'react';
import './Images.css'
import { useNavigate, useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Deleteproduct,Displayallproductdetails} from "./connect"


export const ListallproductDetails=()=>
{
    const {count}=useParams();
    const navi=useNavigate();
    const[allvalues,setAllvalues]=useState([])

    const productvalue=async()=>
    {
        const temp=await Displayallproductdetails();
        setAllvalues(temp.data);
    }

    useEffect(()=>
    {
        productvalue();
    })

  
    return(
                <>
                <div className="container mt-5 bg-primary " >
                    <div className="row justify-content-center">
                                <div className="table-responsive-lg">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped ">
                                        <thead id="texting">
                                            <tr>
                                                <th>productCount</th>
                                                <th>productCategory</th>
                                                <th>productBrand</th>
                                                <th>ProductName</th>
                                                <th>productOffer</th>
                                                <th>productPrice</th>  
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {
                                                allvalues.map((data)=>(
                                                    <tr>
                                                        <td>
                                                            <a href={`reading/${data.productcount}`}  className="btn btn-outline-primary text-dark">{data.productcount}</a>
                                                        </td>
                                                        <td>{data.productCategory}</td>
                                                        <td>{data.productBrand}</td>
                                                        <td>{data.productName}</td>
                                                        <td>{data.productOffer}</td>
                                                        <td>{data.productPrice}</td>
                                                        <td>
                                                            <a className="btn btn-outline-secondary" href={`updating/${data.productcount}`}>UPDATE</a>
                                                            <button className="btn btn-outline-danger"
                                                             onClick={
                                                                 async()=>{
                                                                    const t=await Deleteproduct(data.productcount);
                                                                    alert(t.data+" has been deleted successfully");
                                                                    navi("/ListallproductDetails")
                                                            }
                                                            }>
                                                                DELETE
                                                            </button>
                                                         </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}