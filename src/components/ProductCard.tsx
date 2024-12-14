import { Product } from '../Entities/Product'

const ProductCard = (props:Product) => {
  return (
    <div className="card shadow-sm">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body product-card">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-0 text-secondary">{props.brand}</p>
        <p className="text-secondary mb-0 text-truncate">
          SKU: {props.sku}
          <span className="text-success">
            {props.sizeAvailable ? " Available in multiple size" : ""}
          </span>
        </p>
        <p className="card-text">
          <strong>${props.price}</strong>
        </p>
        <a href={props.viewProductLink} className="btn btn-warning">
          View Product
        </a>
      </div>
    </div>
  );
}

export default ProductCard
