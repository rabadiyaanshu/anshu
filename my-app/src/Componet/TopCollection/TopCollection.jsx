import React from 'react'
import "./TopCollection.css"
import { FaStar } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        price: "$120",
        rating: 4.5,
        image: "https://miyamoto-fashion.infinityfreeapp.com/wp-content/uploads/2025/07/image-7-1.png",
    },
    {
        id: 2,
        name: "Gradient Graphic T-shirt",
        price: "$250",
        rating: 4.0,
        image: "https://miyamoto-fashion.infinityfreeapp.com/wp-content/uploads/2025/07/image-7-1.png",
    },
     {
    id: 3,
    name: "Gradient Graphic T-shirt",
    price: "$180",
    rating: 5.0,
    image: "https://miyamoto-fashion.infinityfreeapp.com/wp-content/uploads/2025/07/image-7-1.png",
  },
  {
    id: 4,
    name: "Gradient Graphic T-shirt",
    price: "$90",
    rating: 4.2,
    image: "https://miyamoto-fashion.infinityfreeapp.com/wp-content/uploads/2025/07/image-7-1.png",
  },
]
export default function TopCollection() {
  return (
    <div className='top-collection'>
        <h2 className='section-title'>TOP COLLECTION</h2>
        <div className="product-grid">
            {products.map((item) => (
                <div className="product-card" key={item.id}>
                    <img src={item.image} alt={item.name} className='product-img' />
                    <h3 className='product-name'>{item.name}</h3>
                    <div className="rating">
                         {Array.from({ length: 5 }, (_, index) => (
                            <FaStar
                             key={index}
                                className={index < Math.floor(item.rating) ? "star filled" : "star"}
                            />
                        ))}
                        <span className="rating-value">{item.rating}/5</span>
                    </div>
                    <p className='price'>{item.price}</p>
                    <button className='add-btn'>Add Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}
