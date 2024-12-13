import "./index.css"

import { FaStar, FaCartArrowDown, FaHeart } from "react-icons/fa";

import MyContext from "../../Context/MyContext";

import { useContext } from "react";

function AllProduct(props) {

    const { title, description, image, price, category, rating } = props.eachDetails;

    const {addCartItems} = useContext(MyContext);

    const AddCartList = (data) => {
        addCartItems({...data, quantity : 1});
    }
    return (
        <li className="List_All_product_items">
            <img src={image} className="image" alt={title} width={250} />
            <h2 className="Heading">{title}</h2>
            <p className="description">{description}</p>
            <div className="product_container">
                <p className="category">{category}</p>
                <p className="price">Rs.{price}/-</p>
            </div>
            <div className="product_container">
                <p className="price">{rating.rate} <FaStar className="star" /></p>
                <p className="price">Review = {rating.count}</p>
            </div>
            <div className="Button_continer">
                <button type="button" className="Add_button" onClick={() => AddCartList(props.eachDetails)}>
                    Add Cart <FaCartArrowDown />
                </button>
                <button type="button" className="Add_button fav">
                    Favourite <FaHeart />
                </button>
            </div>
        </li>
    )
}

export default AllProduct;