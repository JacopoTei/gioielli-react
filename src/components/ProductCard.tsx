import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  // Aggiungi altre proprietà se necessario
}

interface ProductCardProps {
  product: Product;
  handleDetailsClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleDetailsClick }) => {
  const { name, image, price } = product;

  return (
    <div className="container-fluid mt-3">
        <div className="row justify-content-evenly ">
    <div className="col-12 col-lg-8" >
      <div className="card shadow h-100">
        <img src={image} className="card-image card-img-top" alt={name} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">Prezzo: {price}</p>
          <button className="btn button" onClick={() => handleDetailsClick(product)}>
            Dettagli
          </button>
        </div>
      </div>
    </div>

        </div>
    </div>
  );
};

export default ProductCard;
