import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({product}) {
  return (
    <div className="col-md-6 my-4 products">
      <Card>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}
          </Card.Text>
          <Link to={`/products/${product.id}`} className="btn w-100 pt-2 pb-2">Visit</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
