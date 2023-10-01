import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CATEGORY } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {

	const { restaurantId }  = useParams();

	const restaurantInfo = useRestaurantMenu(restaurantId);

	const [showIndex, setShowIndex] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  const changeShowIndex = (index) => {
    showIndex == index ? setShowIndex(null) : setShowIndex(index);
  }

	if(restaurantInfo === null) {
		return (<ShimmerUI />);
	}
 
	const {name, cuisines, costForTwoMessage, avgRating} = 
		restaurantInfo?.data?.cards[0]?.card?.card?.info;

	const tempValue = 
	  restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;

	const categories = 
	restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
		(c) => 
		c.card?.card?.["@type"] == CATEGORY
	);

	//console.log(categories);

	// const { itemCards } = tempValue?.card || tempValue?.card.categories[0];
	const item = (tempValue?.card?.itemCards != undefined) ? tempValue?.card?.itemCards : tempValue?.card?.categories[0].itemCards;
	// console.log(item)
	
  return (
    <div className="restaurant-details">
			<div className="restaurant-details-container">
				<h1>{ name }</h1>
				<p> {cuisines.join(", ")} -  { costForTwoMessage } </p>
				<h6> Rating: {avgRating} </h6> <br />
				<h3>Menu</h3> 
			</div>

      <h4>
        <center>
          What would you like to have, {loggedInUser} ?
        </center>
      </h4>
      <br />
			
			<div className="menu-details">
				{
					categories.map( (category, index) => (

						//Controlled component
						<RestaurantCategory 
							key={category?.card?.title} 
							data = {category?.card?.card}
							showItems = {index == showIndex ? true : false}
              setShowIndex = {() => changeShowIndex(index)}
						/>
					))
				}
			</div>
    </div>
  );
};

export default RestaurantMenu;