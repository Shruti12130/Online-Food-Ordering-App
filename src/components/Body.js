import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return (
        <div className="body-container">
          {/* <div className="search-bar">Search</div> */}
          <div className="filter">
            <button 
              className="filter-btn" 
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4.0
                );
                setListOfRestaurants(filteredList);
              }}>
                Top Rated Restaurants
             </button>
          </div>
          <div className="restaurant-container">
              {listOfRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.info.id} restaurantData = {restaurant} />
              ))
              }; 
          </div>
        </div>
    );
};

export default Body;