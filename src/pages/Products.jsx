import React, { useContext, useEffect } from 'react'
import ProductList from '../components/ProductList';
import NewProducts from "../components/NewProducts";
import { useSearch } from '../context/SearchContext';
import { products } from "../data/products";
import ScrollReveal from "../context/ScrollReveal";
import { useSearchParams } from "react-router-dom";

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { search, category, setSearch, setCategory, sort, setSort } = useSearch();

    const categoryFromUrl = searchParams.get("category") || "All";

    useEffect(() => {
        setCategory(categoryFromUrl);
    }, [categoryFromUrl, setCategory]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                              product.category.toLowerCase().includes(search.toLowerCase());
        
        const matchesCategory = category === "All" || product.category.toLowerCase() === category.toLowerCase();

    
        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [ ...filteredProducts ].sort((a,b) => {
        if(sort === "price-low-to-high"){
            return a.price - b.price;
        }else if (sort === "price-high-to-low"){
            return b.price - a.price;
        }else if(sort === "rating-high-to-low"){
            return b.rating - a.rating;
        }else if(sort === "alpha-a-to-z"){
            return a.name.localeCompare(b.name);
        }else{
            return 0;
        }
    })
    
  return (
    <div className='product-container'>
        <div className='search-box-section'>
            <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search your products...' 
            className='search-input'/>
            <select className='select-box' value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort - Defaults</option>
                <option value="price-low-to-high">Price - Low To High</option>
                <option value="price-high-to-low">Price - High To Low</option>
                <option value="rating-high-to-low">Rating - High To Low</option>
                <option value="alpha-a-to-z">Alpha - A to Z</option>
            </select>
        </div>

        <div className="filter-category-container">
            {["All","Phone","Watch","Tablet","Camera","Laptop","Headphone"].map((cate) => (
                    <button key={cate} className={`filter-cate-btn ${category.toLowerCase() === cate.toLowerCase() ? "active" : "" }`}
                        onClick={() => {
                        setCategory(cate);
                        if (cate === "All") {
                            setSearchParams({});
                        } else {
                            setSearchParams({ category: cate.toLowerCase() });
                        }
                    }}
                    >{cate}
                    </button>
            ))}
        </div>

        <div>
            <ProductList filteredProducts={sortedProducts}/>
        </div>

        <ScrollReveal>
            <div className="new-arrival-products">
                <h2>New Arrival Products</h2>
                <p className='new-arri-second-head'>The Most Popular products an best price for our clients</p>
                <NewProducts sortedProducts={sortedProducts}/>
            </div>
        </ScrollReveal>
    </div>
  )
}

export default Products;