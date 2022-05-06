import React , { useState ,useEffect}  from 'react';
import Featurescar from '../Featurecars/Featurescar';
import Product from '../Product/Product';
import "./Service.css";
const Service = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch("./products.JSON")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <>
         <Featurescar/>
      
         <div className='servise-color '>
         <h1 className='p-5 text-center colors'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Our Showroom Some Cars</h1>
           <div className='container '>
           <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.key}></Product>
          ))}
        </div>
           </div>
        </div>
        </>
        
    );
};

export default Service;