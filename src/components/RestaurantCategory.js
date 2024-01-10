import ItemList from "./ItemList";

// Uncontrolled component
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <h1 onClick={handleClick}> {data.title} </h1>
      <div>
        {showItems && (
          <div>
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
