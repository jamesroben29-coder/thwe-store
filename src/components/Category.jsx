import { Link } from "react-router-dom";
import { categories } from "../data/products";
import { MoveRight } from 'lucide-react';

const Category = () => {

  return (
    <>
        <h2 className='category-head-text'>Our Categories</h2>
        <p className="category-second-head-text">Discover our curated collection of premium tech and gadgets.</p>
        <Link to="/products" className='category'>
                
                {categories.map((product) => 
                    <div key={product.id} className='category-card'>
                        <div className='cate-img-box'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="cate-desc">
                            <h3>{product.name}</h3>
                            <p>
                                Go To Shop 
                                <MoveRight className='move-right'/>
                            </p>
                        </div>
                    </div>
                )}
            
        </Link>
    </>
  )
}

export default Category