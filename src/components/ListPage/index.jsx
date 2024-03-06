import "./index.css";
// import Section from "../Section";
import AddItemButton from "../AddItemButton";
import { useRef } from "react";
import ItemCard from "../ItemCard";
import {v4 as uuidv4} from 'uuid'

const ListPage = ({ currentList, setListReminders }) => {
  // console.log(currentList);
  const itemsRef = useRef(null);
  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const handleEditItem = (itemId, value) => {
    // const map = getMap();
    // const node = map.get(id);
    // node.focus();
    setListReminders([
      ...currentList.filter((item) => item.id !== itemId),
      {
        id: itemId,
        title: value
      }
    ])
  };

  const handleAddItem = async () => {
    console.log("click, add item");
    const id = uuidv4()
    await setListReminders([...currentList,
      {
        id,
        title: ''
      }
    ])
    const map = getMap()
    const node = map.get(id)
    // console.log(node)
    node.focus()
  }

  return (
    <div className="listpage">
      <header>toolbar</header>
      <div className="title">This is a ListPage.</div>
      <div className="list-container">
        {currentList.map((item) => (
          <ItemCard
            key={item.id}
            details={item}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
            // onClick={() => handleEditItem(item.id)}
            onChange={handleEditItem}
          />
        ))}
      </div>
      <AddItemButton handleClick={handleAddItem} />
    </div>
  );
};

export default ListPage;
