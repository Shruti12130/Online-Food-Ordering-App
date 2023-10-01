import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useListOfRestaurants = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    //Optional chaining
    const dataFromBackend = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(json);
  };

  return listOfRestaurants
};

export default useListOfRestaurants;