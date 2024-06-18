import "./index.css";

const ImageItem = ({ isActive, each, handleImageClick }) => {
  const { id, imgUrl } = each;
  const imageClicked = () => {
    handleImageClick(id, imgUrl);
  };

  return (
    <img
      className={isActive ? "active-image" : "normal-image"}
      src={imgUrl}
      alt="item-pic"
      onClick={imageClicked}
    />
  );
};
export default ImageItem;
