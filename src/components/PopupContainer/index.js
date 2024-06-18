import { useState } from "react";
import { MdClear } from "react-icons/md";

import ImageItem from "../ImageItem";
import "./index.css";

const imageList = [
  {
    id: 0,
    imgUrl:
      "https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718617789/Beej-Patakha_3_1_gnyaus.png",
  },
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638442/Frame_69_fbl6v8.png",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718617789/Beej-Patakha_3_1_gnyaus.png",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718638442/Frame_69_fbl6v8.png",
  },
];

const PopupContainer = ({ name, closeClicked }) => {
  const [activeDetails, setActiveDetails] = useState({
    activeId: imageList[0].id,
    imageUrl: imageList[0].imgUrl,
  });

  const handleImageClick = (id, imageUrl) => {
    setActiveDetails({ activeId: id, imageUrl });
  };

  const { activeId, imageUrl } = activeDetails;

  const handleClose = () => {
    closeClicked();
  };

  return (
    <div className="blurred-background">
      <div className="popup-bg-cont">
        <div className="image-cont">
          <img className="full-image" src={imageUrl} alt="product" />
          <div className="images-cont">
            {imageList.map((each) => {
              return (
                <ImageItem
                  key={each.id}
                  each={each}
                  isActive={each.id === activeId}
                  handleImageClick={handleImageClick}
                />
              );
            })}
          </div>
        </div>
        <div className="details-container">
          <div className="product-icon-cont">
            <h4 className="product-name-heading">{name}</h4>
            <MdClear color={"gray"} size={"24px"} onClick={handleClose} />
          </div>
          <p className="price-text">
            MRP:
            <br />
            <span className="price-span">2000/-</span>
          </p>
          <div class="dashed-line"> </div>
          <p className="heading-text">Product Description:</p>
          <p className="details-text-para">
            This product packs an extra punch, thanks to the literal blood,
            sweat and tears of a young boy.{" "}
          </p>
          <div class="dashed-line"> </div>
          <p className="heading-text">Product Contents:</p>
          <div className="details-col-cont">
            <div className="detail-row-cont">
              <img
                src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718708243/Frame_4_bi73qc.png"
                alt="star"
                className="star-image"
              />
              <p className="details-text-para">
                10 hand-hurting pieces of rassi bombs
              </p>
            </div>
            <div className="detail-row-cont">
              <img
                src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718708243/Frame_4_bi73qc.png"
                alt="star"
                className="star-image"
              />
              <p className="details-text-para">Jilled with great pain</p>
            </div>
            <div className="detail-row-cont">
              <img
                src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1718708243/Frame_4_bi73qc.png"
                alt="star"
                className="star-image"
              />
              <p className="details-text-para">Raju’s hopes</p>
            </div>
          </div>
          <div class="dashed-line"> </div>
          <p className="heading-text">Shipping Time:</p>
          <p className="details-text-para">
            Before Raju understands that his dreams do not matter.
          </p>
          <button className="choose-button">Choose Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopupContainer;
