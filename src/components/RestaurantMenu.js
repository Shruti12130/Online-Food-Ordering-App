import { useState, useEffect } from "react";
import { MENU_URL_A, MENU_URL_B, DISH_IMG } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

	const [restaurantInfo, setRestaurantInfo] = useState(null);

	const { restaurantId }  = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_URL_A + restaurantId + MENU_URL_B);
		const json = await data.json();

		console.log(json);
		setRestaurantInfo(json);
	};

	if(restaurantInfo === null) {
		return (<ShimmerUI />);
	}
 
	const {name, cuisines, costForTwoMessage, avgRating} = 
		restaurantInfo?.data?.cards[0]?.card?.card?.info;

	const tempValue = 
	  restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;

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
			
			<div className="menu-details">
				<ul>
					{ item.map( (currItem) => (
						<li >
							<div className="menu-items">
								<div className="menu-text">
									<b> { currItem.card.info.name } </b> - Rs { currItem.card.info.price/100 || currItem.card.info.defaultPrice/100 }
								</div>
							</div>
							
						</li>
						)) 
					}
				</ul>
			</div>
    </div>
  );
};

export default RestaurantMenu;