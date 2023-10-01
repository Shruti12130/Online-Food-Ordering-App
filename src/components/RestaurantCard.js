import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
      cloudinaryImageId,
      name,
      cuisines,
      sla,
      avgRating
  } = restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
      />
        <h5> {name} </h5>
        <p> {cuisines.join(", ")}  <br />
        {sla.deliveryTime} minutes <br />
        {avgRating} stars</p>

      </div>
  );
};

export const hasOffer = () => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-red-400 text-white ml-4">
					Exciting Offers
				</label>
				<RestaurantCard {...props}/>
			</div>
		);
	}
};

export default RestaurantCard;