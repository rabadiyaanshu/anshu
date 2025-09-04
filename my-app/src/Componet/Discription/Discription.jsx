import React from "react";
import Slider from "react-slick";
import "./Discription.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discription = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      img: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
      name: "Emma Johnson",
      text: "Absolutely love the collection! The quality is excellent and delivery was super fast.",
      rating: 5,
    },
    {
      img: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
      name: "David Lee",
      text: "Customer support is very helpful. I am very happy with my purchase.",
      rating: 4,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lAsaRkY1bio7NHqRCtay8n-WZSMXHGBpcA&s",
      name: "Sophia Brown",
      text: "Great experience! Stylish designs and very comfortable products.",
      rating: 5,
    },
  ];

  return (
    <div className="discription">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="slide" key={index}>
            <div className="slide-content">
              <div className="user-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="user-text">
                <h2 className="heading">What Our Customer Says</h2>
                <p className="text">“{item.text}”</p>
                <div className="stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                  <span className="rating">{item.rating}.0/5</span>
                </div>
                <h3 className="name">— {item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Discription;
