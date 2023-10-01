import { useEffect, useState } from "react";
import { MENU_URL_A, MENU_URL_B } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL_A + restaurantId + MENU_URL_B);
    const json = await data.json();
		setRestaurantInfo(json);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;