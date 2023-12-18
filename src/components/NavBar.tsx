import React from 'react';

interface NavBarProps {
  categories: string[];
  handleCategoryClick: (category: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ categories, handleCategoryClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  ">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="/"><img className='diamond mx-2' src="https://cdn-icons-png.flaticon.com/512/4305/4305611.png" alt="" />DIAMONDS</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            {categories.map((category, index) => (
              <li key={index} className="nav-item mx-3">
                <a className="nav-link text-white" href="#" onClick={() => handleCategoryClick(category)}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
