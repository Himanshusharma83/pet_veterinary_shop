import React,{useState} from 'react'
import './Home.css'
import Slider from '../ProductCard/ProductCard';
import ProductList from '../ProductList/ProductList';
import products from '../../DummyData/data';

function Home() {

    const [sliderIndex, setSliderIndex] = useState(0);

  const moveSlider = (direction) => {
    if (direction === 'left') {
      setSliderIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    } else if (direction === 'right') {
      setSliderIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }
  };


 
  return (
    <>
    
    <section className="hero">
    <div className="hero-content">
     
    </div>
  </section>



<ProductList products={products} />


 <h3 className='service'>Our Services</h3>
<section className="cards">
  <div className="card">
    <img src="https://plus.unsplash.com/premium_photo-1664475109170-43301c44589f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwVmV0ZXJpbmFyaWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card 1" />
    <h3>Experienced Veterinarians</h3>
    <p>Our team of skilled veterinarians is dedicated to your pet's health.</p>
  </div>
  <div className="card">
    <img src="https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMEZhY2lsaXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Card 2" />
    <h3>State-of-the-Art Facilities</h3>
    <p>We provide modern facilities to ensure the best care for your pets.</p>
  </div>
  <div className="card">
    <img src="https://images.unsplash.com/photo-1625321150203-cea4bee44b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card 3" />
    <h3>Compassionate Care with love</h3>
    <p>We treat every pet with love and empathy, like they're our own.</p>
  </div>
</section>



    </>
  )
}

export default Home