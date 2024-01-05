const RestaurantCard = (props) => {
  const CON_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CON_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3> {name} </h3>
      <h4> {cuisines} </h4>
      <h4> {avgRating} </h4>
      <h4> {costForTwo} </h4>
      <h4> {deliveryTime} </h4>
    </div>
  );
};

export default RestaurantCard;
