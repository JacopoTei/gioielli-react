import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import jewelryData from '../jewelryData.json';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  material: string;
  description: string;
  image: string;
}

const App: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 1;
  const productDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const importedProducts = jewelryData as Product[];
    setAllProducts(importedProducts);
    setProducts(importedProducts);
    setProducts(importedProducts.slice(0, productsPerPage));
  }, []);

  const handleCategoryClick = (category: string) => {
    const filteredProducts = allProducts.filter((product: Product) => product.category === category);
    setProducts(filteredProducts);
  };

  const handleSearch = (searchTerm: string) => {
    const filteredProducts = allProducts.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleDetailsClick = (selectedProduct: Product) => {
    setSelectedProduct(selectedProduct);
    console.log('Dettagli del prodotto selezionato:', selectedProduct);

    // Scrolla verso l'elemento di dettaglio del prodotto su dispositivi mobili o piccoli
    if (window.innerWidth <= 912 && productDetailRef && productDetailRef.current) {
      productDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se il dispositivo è grande, scrolla verso l'alto della finestra per mostrare i dettagli
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const nextPage = () => {
    const nextPageProducts = allProducts.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
    if (nextPageProducts.length > 0) {
      setProducts(nextPageProducts);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const prevPageProducts = allProducts.slice((currentPage - 2) * productsPerPage, (currentPage - 1) * productsPerPage);
      setProducts(prevPageProducts);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <NavBar
        categories={['Collane', 'Bracciali', 'Orecchini', 'Anelli',]}
        handleCategoryClick={handleCategoryClick}
      />
      <SearchForm handleSearch={handleSearch} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="products">
              {products.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleDetailsClick={handleDetailsClick}
                />
              ))}
            </div>
            <div className="d-flex justify-content-around mt-3 mb-5">
              <button className="btn button" onClick={prevPage}>Previous</button>
              <button className="btn button" onClick={nextPage}>Next</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12" ref={productDetailRef}>
            {selectedProduct && <ProductDetail product={selectedProduct} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
