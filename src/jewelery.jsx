import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Header from './header';
import { useParams } from 'react-router-dom';
import { notification} from 'antd';


function Jewelery() {
  const [products, setproduct] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `You bought it.`,
      description:
        'You will recive in your address soon',
      placement,
    });
  };

  const { min, max } = useParams()
  async function API() {
    const api = await fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(json => setproduct(json))
  }
  const filtered = products.filter((e, i) => {
    return e.price >= min & e.price <= max
  })
  useEffect(() => {
    API()

  }, [])

  return (
    <>
             {contextHolder}
      <Header />
      <div className='container '>
        <div className=' row '>
          {filtered.map((e, i) => {

            return (
              <div className=' text-center col-lg-4  col-md-6  ' >
                <div className="card mt-5 img-fluid " >
                  <img src={e.image} className='mt-5 images m-auto' />
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

export default Jewelery


