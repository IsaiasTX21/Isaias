import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Header from './header';
import { useParams } from 'react-router-dom';
import { notification } from 'antd';


function Searchfiltered() {
  const [products,setproducts ] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `You bought it.`,
      description:
        'You will recive in your address soon',
      placement,
    });
  };

  const {search} = useParams()
  const {min,max} = useParams()
 async function API () {
  const api = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setproducts(json))
 }



 useEffect(()=>{
  API()

 },[])
  const strings = search.toString()
 const filtered = products.filter((e)=>{ 
  return  e.title.toLowerCase().match(strings)}
   )
   const price = filtered.filter((e)=>{
    return e.price >= min && e.price <= max
   })

  return (
    <>
    {contextHolder}
<Header/>
<div className='container '> 
<div className=' row '>
  {price.map((e,i)=>{
    
  return (
     <div className=' text-center col-lg-4  col-md-6  ' > 
    <div className="card mt-5 img-fluid " >
      <img src={ e.image} className='  images  mt-5 m-auto' />
     
  <div className="card-body">
  
    <h6 className="card-title">{e.title}</h6>
    <button  onClick={()=> openNotification("top")}  className="btn btn-outline-dark  w-50 ms-auto me-auto "   > USD$ {e.price}</button>
   
  </div>
</div>
</div>
   )


  })}
  
  </div>
      </div>
    </>

  )
}

export default Searchfiltered


