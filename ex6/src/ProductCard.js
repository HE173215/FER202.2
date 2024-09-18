// ProductCard.js
import React from 'react';

const ProductCard = ({ imageSrc, title, originalPrice, discountedPrice, hasSale }) => (
  <div className="col-md-3 mb-4">
    <div className="card position-relative">
      {hasSale && <div className="position-absolute top-0 start-0 m-2 badge bg-danger text-white">Sale</div>}
      <img src={imageSrc} className="card-img-top" alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <span className="text-muted text-decoration-line-through">{originalPrice}</span>
          <span className="fw-bold">{discountedPrice}</span>
        </p>
        <div className="d-flex justify-content-start gap-1">
          <button className="btn btn-primary">
            <i className="bi bi-cart"></i>
          </button>
          <button className="btn btn-secondary">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
