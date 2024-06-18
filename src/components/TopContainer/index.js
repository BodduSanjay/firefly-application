import Popup from "reactjs-popup";
import Header from "../Header";
import PopupContainer from "../PopupContainer";
import "./index.css";

const TopContainer = () => {
  return (
    <div className="top-container">
      <Header />
      <div className="button-heading-cont">
        <h1 className="text-heading">Raju Rassibomb</h1>
        <Popup
          modal
          trigger={<button className="white-button">QUICK VIEW</button>}
        >
          {(close) => (
            <PopupContainer name="Raju Rassibomb" closeClicked={close} />
          )}
        </Popup>
      </div>
    </div>
  );
};

export default TopContainer;
