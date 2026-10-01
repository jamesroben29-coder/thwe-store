import Hero from '../components/Hero';
import Servicses from "../components/Servicses";
import ProductList from '../components/ProductList';
import Category from '../components/Category';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import DirectMessage from '../components/DirectMessage';
import { products } from "../data/products";
import ScrollReveal from "../context/ScrollReveal";

const Home = () => {

  return (
    <div className='home'>
        
        <div className="hero-section">
          <Hero/>
        </div>

        <ScrollReveal>
            <div className="services-section">
                <Servicses/>
            </div>
        </ScrollReveal>

        <ScrollReveal>
            <div className="product-list-section">
                <ProductList filteredProducts={products}/>
            </div>
        </ScrollReveal>

        <ScrollReveal>
            <div className="category-section">
                <Category/>
            </div>
        </ScrollReveal>

        <ScrollReveal>
            <div className="banner-section">
                <Banner/>
            </div>
        </ScrollReveal>

        <ScrollReveal>
            <div className="testimonial-section">
                <Testimonial/>
            </div>
        </ScrollReveal>

        <ScrollReveal>
            <div className="direct-message-section">
                <DirectMessage/>
            </div>
        </ScrollReveal>

    </div>
  )
}

export default Home;