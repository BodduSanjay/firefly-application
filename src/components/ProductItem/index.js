import Popup from "reactjs-popup";
import "./index.css";
import PopupContainer from "../PopupContainer";

const ProductItem = ({ name }) => {
  return (
    <div className="product-item-cont">
      <img
        src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718617789/Beej-Patakha_3_1_gnyaus.png"
        alt="product"
        className="product-image"
      />
      <div className="name-btn-cont">
        <h1 className="product-name">{name}</h1>
        <Popup
          modal
          trigger={<button className="orange-button">QUICK VIEW</button>}
        >
          {(close) => <PopupContainer name={name} closeClicked={close} />}
        </Popup>
      </div>
    </div>
  );
};

export default ProductItem;
