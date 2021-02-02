import { Link } from "react-router-dom";
import "../style/products.css";
const Products = () => {
    return ( 
        <main className="container mt-5" >
            <div className="row">
                <div className="col-md-3 d-block">
                    <Link to = "/product-about"><img src="./images/1.jpeg" alt=""/></Link>
                    <a href="#">Samsung Galaxy A51 6/128GB, Prism Crush Blue A515</a>
                    <p>⭐⭐⭐⭐⭐</p>
                    <span>391 000 so'm/oy</span>
                    <br/>
                    <br/>
                    <h2>3 165 000</h2>
                </div>
            </div>
        </main>
        
    );
}

export default Products;