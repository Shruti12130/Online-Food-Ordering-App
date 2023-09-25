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

export default RestaurantCard;