import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ image, category, describition, handleAddtoCart }) {
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={category}
        className="h-48 width-img"
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <p>{describition}</p>
        <Button variant="primary" className="w-100" onClick={handleAddtoCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCards;
