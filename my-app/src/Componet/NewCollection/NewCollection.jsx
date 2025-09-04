import React from "react";
import { FaStar } from "react-icons/fa"; 
import "./NewCollection.css";

export default function NewCollection() {
  const products = [
    {
      id: 1,
      name: "T-Shirt with Tape Details",
      price: "$120",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtkOEH7rSSZdqAmgiqP40EqfoFNLrSMsxBCDCjjk-ne6eFbW_W",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: "$240",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtkOEH7rSSZdqAmgiqP40EqfoFNLrSMsxBCDCjjk-ne6eFbW_W",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$180",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtkOEH7rSSZdqAmgiqP40EqfoFNLrSMsxBCDCjjk-ne6eFbW_W",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "$130",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtkOEH7rSSZdqAmgiqP40EqfoFNLrSMsxBCDCjjk-ne6eFbW_W",
      rating: 4.8,
    },
  ];

  return (
    <section className="collection">
      <h2 className="collection-title">NEW COLLECTION</h2>

      <div className="collection-grid">
        {products.map((item) => (
          <div className="collection-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>

        
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className="star"
                  style={{ color: i < Math.floor(item.rating) ? "#f5c518" : "#ddd" }}
                />
              ))}
              <span className="rating-text">{item.rating}/5</span>
            </div>

            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="collection-btn">View All</button>
    </section>
  );
}
