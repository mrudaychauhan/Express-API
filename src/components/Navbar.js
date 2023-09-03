import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default function Navbar(props) {
  const { cartItems } = props;
  return (
    <nav className={`navbar ${styles.navbar} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className={`${styles.logoImg} d-inline-block`}
            src="https://w7.pngwing.com/pngs/307/189/png-transparent-logo-brand-font-design-text-logo-signage.png"
            alt="logo"
          />
          <span
            className={`ms-2 text-dark ${styles.siteName} d-none d-sm-inline-block `}
          >
            Lego Mart
          </span>
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-5 d-flex flex-row">
          <li className="nav-item ms-sm-5 mx-2">
            <Link
              className="nav-link fw-semibold text-dark"
              aria-current="page"
              to="/"
            >
              Products
            </Link>
          </li>
          <li className="nav-item ms-sm-5 mx-2">
            <Link
              className="nav-link fw-semibold text-dark"
              aria-current="page"
              to="/addProduct"
            >
              Add a product
            </Link>
          </li>
        </ul>

        <div className=""></div>

        <div
          className={`cartWrapper  position-relative me-md-5 ${styles.cartWrapper}`}
        >
          <Link to="/cart">
            <img
              src="https://e7.pngegg.com/pngimages/15/271/png-clipart-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-thumbnail.png"
              alt="cart"
            />
          </Link>
          {cartItems.length > 0 ? (
            <div
              className={`rounded-circle d-flex justify-content-center align-items-center position-absolute ${styles.itemsInCart}`}
            >
              <small className="text-light fw-semibold">
                {cartItems.length}
              </small>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
