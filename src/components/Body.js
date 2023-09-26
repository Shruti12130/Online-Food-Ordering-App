import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(API_URL);
        
      const json = await data.json();
       
      //Optional chaining
      const dataFromBackend = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(dataFromBackend);
      setFilteredRestaurants(dataFromBackend);
    };

    return listOfRestaurants.length === 0 ? <ShimmerUI /> : (
      <div className="body-container">
        <div className="filter">

          <div className="search-bar">

            <input 
              type="text" 
              className="form-control" 
              placeholder="Search" 
              value={ searchText }
              onChange={(e) => {
                const tempValue = e.target.value;
                setSearchText(e.target.value);

                const filteredRestaurant = listOfRestaurants.filter((restaurant) => 
                  tempValue.length === 0 
                  ? listOfRestaurants
                  : restaurant.info.name.toLowerCase().includes( tempValue.toLowerCase() ));
                console.log(e.target.value);

                setFilteredRestaurants(filteredRestaurant);
                console.log(filteredRestaurant);
              }}
            />

            <button  
              className="filter-btn" 
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((restaurant) => 
                  restaurant.info.name.toLowerCase().includes( searchText.toLowerCase() ));

                setFilteredRestaurants(filteredRestaurant);
              }}>
                Search
            </button>
          </div>

            <button 
              className="filter-btn" 

              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.0
                );

                setFilteredRestaurants(filteredList);
              }}>

                Top Rated Restaurants
             </button>

        </div>
        <div className="restaurant-container">
          {
            filteredRestaurants.map(restaurant => (
              <Link key={restaurant.info.id} to= {"/restaurant/" + restaurant.info.id}>
                <RestaurantCard restaurantData = {restaurant} />
              </Link>
              ))
          }; 
        </div>
      </div>
    );
};

export default Body;