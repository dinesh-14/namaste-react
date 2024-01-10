import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${RESTAURANT_DETAILS}${resId}`;
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
