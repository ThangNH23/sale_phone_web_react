import ReactDOM from 'react-dom';
import "../../css/web.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Contents() {
    return (
        <div className='Container'>
            <ShowData/>
        </div>
    );  
}
export default Contents;

function ShowData(){
    const [data ,setData] = useState([]);
    useEffect( 
        ()=>{
            const FetchData = async () => {
                const dt = await axios.get('https://646b12ce7d3c1cae4ce3202c.mockapi.io/product').then(res =>{setData(res.data)})
                .catch(err=>{console.log(err);})
            }
            FetchData();
        },[]
    );
    return (
        <div>
            {data.map( item => 
                <div className='col-md-3 center'>
                    <div className="card" style={{width:"25rem", height:"35rem"}}>
                        <img src={item.avatar} className="card-img-top" alt="image" style={{width:"100%",height:"60%"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h5 className="card-title">{item.price} $</h5>
                          </div>
                        <div className="card-body">
                            <a href="#" className="card-link btn btn-primary"> <i class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#" className="card-link btn btn-success">BUY</a>
                        </div>
                        </div>
                </div>  
            )}
        </div>
    );
}
