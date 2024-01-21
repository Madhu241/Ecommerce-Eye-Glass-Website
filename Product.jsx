import '../App.css';
import Mens1 from '../Components/Mens1.png'
import Mens2 from '../Components/Mens2.png'
import womens1 from '../Components/womens1.png';
import womens2 from '../Components/womens2.png';
import kids1 from '../Components/kids1.jpg';
import kids2 from '../Components/kids2.jpg';
import offer1 from '../Components/offer1.webp';
import offer2 from '../Components/offer2.webp';
import frame1 from '../Components/frame1.webp';
import frame2 from '../Components/frame2.webp';
import frame3 from '../Components/frame3.webp';
import frame4 from '../Components/frame4.webp';
import frame5 from '../Components/frame5.jpg';

import './Product.css';
import { Outlet } from 'react-router-dom';
const Product=()=>{
return (
    <div>
        <div className="cards">
      <div>
        
                <img src={Mens1}  alt=""/>
                <h3>Mens Sunglasses</h3>
                </div>
             
                <div>
                <img src={Mens2}  alt=""/>
                <h3>Mens Eyewear</h3>
                </div>
                </div>

                <div>
                    <h1>Women's Collection</h1>
                </div>

                <div className='cards'>
                <div>
                    <img src={womens1} alt=""/>
                    <h3>Womens Sunglasses</h3>
                </div>

                <div className>
                    <img src={womens2} alt=""/>
                    <h3>Womens Eyewear</h3>
                </div>
                </div>

                <div>
                  <h1>Kids Collection</h1>
                </div>
                <div className='cards'>
                <div >
                    <img src={kids1} alt=""/>
                    <h3>Kids Sunglasses</h3>
                </div>

                <div>
                    <img src={kids2} alt=""/>
                    <h3> Eyewear</h3>
                </div>
                
                </div>
                <div>
                    <h1>Offer</h1>
                </div>
               <div className="cards">
                    <div >
                        <img src={offer1} alt=""/>
                    </div>
           
                    <div>
                        <img src={offer2} alt=""/>
                    </div>
                    </div>

                    <div>
                        <h1>Frames</h1>
                    </div>
             
                        <div className='frame'>
                            <img src={frame1} alt=""/>
                            <img src={frame2} alt=""/>
                            <img src={frame3} alt=""/>
                            <img src={frame4} alt=""/>
                            <img src={frame5} alt=""/>
                        </div>
                        <Outlet></Outlet>
                    </div>
                    
       
                
 

           
      
         


        
 
)
}




export default Product;