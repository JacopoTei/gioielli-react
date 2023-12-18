import React, { useEffect, useRef } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  material: string;
  // Aggiungi altre proprietà se necessario
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { name, image, price, description, material } = product;
  const productDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Effettua lo scroll verso l'elemento di dettaglio del prodotto al caricamento del componente
    if (productDetailRef.current) {
      productDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Questo effetto viene eseguito solo al caricamento iniziale del componente

  return (
    <div className="container-fluid mt-3 mb-5" ref={productDetailRef}>
      <div className="row ">
        <div className="col-12 col-lg-8">
          <div className="card shadow text-center">
            <img src={image} className="card-img-top card-image" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Prezzo: {price}</p>
              <p className="card-text">Materiale: {material}</p>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
