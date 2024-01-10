import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div key={item.card.info.id} style={{ margin: "8px" }}>
            <button
              onClick={() => handleAddItem(item)}
              style={{ position: "absolute" }}
            >
              Add +
            </button>
            <li>{item.card.info.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
