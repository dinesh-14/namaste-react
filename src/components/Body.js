import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./Restaurant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  [listOfRestaurants, setListOfRestaurants] = useState([]);
  [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { userName, setUsername } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [searchText]);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4392432&lng=73.8580788&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(url);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <div> You are offline!</div>;
  }

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((a) => {
      return a.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredRestaurants(filtered);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return (
    <div className="body">
      <div className="search">
        Search
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        User name :
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="res-container">
        {filteredRestaurants.map((rest) => {
          return (
            <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
              {rest.info.aggregatedDiscountInfoV3.header ? (
                <RestaurantCardPromoted
                  resData={rest}
                  header={rest.info.aggregatedDiscountInfoV3.header}
                />
              ) : (
                <RestaurantCard resData={rest} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
