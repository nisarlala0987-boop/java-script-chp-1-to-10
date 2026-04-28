import React from "react";

function ProductCard({ name, price, image, description }) {
  const cardStyle = {
    width: "260px",
    padding: "15px",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
    margin: "10px",
    display: "inline-block",
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "18px",
    margin: "10px 0 5px",
  };

  const priceStyle = {
    fontWeight: "bold",
    margin: "8px 0",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />

      <h2 style={titleStyle}>{name}nisar lalalalalallala</h2>

      <p style={priceStyle}>{price} 20$</p>

      <p style={descStyle}>{description} hello baby how are you? </p>
    </div>
  );
}

export default ProductCard;