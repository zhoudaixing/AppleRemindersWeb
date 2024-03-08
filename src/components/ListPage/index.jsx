import "./index.css";
// import Section from "../Section";
import AddItemButton from "../AddItemButton";
import { useEffect, useRef, useState } from "react";
import ItemCard from "../ItemCard";
import Toolbar from "../Toolbar";
import {
  createItem,
  editItem,
  checkItem,
  listSortRule,
  getListWithoutItem,
} from "@/utils";

const ListPage = ({
  currentList,
  appData,
  setAppData,
  showCompleted,
  setShowCompleted,
}) => {
  const [addButtonActive, setAddButtonActive] = useState(true);
  const itemsRef = useRef(null);
  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const handleEditItem = (item, value) => {
    const editedItem = editItem(item, { title: value });
    setAppData([
      ...appData.filter((elment) => elment.id !== item.id),
      editedItem,
    ]);
  };

  const handleCheckItem = (item, checked) => {
    const checkedItem = checkItem(item, checked);
    setAppData([
      ...appData.filter((elment) => elment.id !== item.id),
      checkedItem,
    ]);
  };

  const handleAddItem = async () => {
    const item = createItem({
      title: "",
      list: currentList,
      manual: appData.length + 1,
    });
    await setAppData([...appData, item]);
    const map = getMap();
    const node = map.get(item.id);
    node.focus();
  };

  const handleDeleteItem = (itemID) => {
    setAppData(getListWithoutItem(appData, itemID));
    setAddButtonActive(true);
  };

  return (
    <div className="listpage">
      <Toolbar
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      ></Toolbar>

      <div className="listpage-title">{currentList}</div>

      <div className="list-container" onBlur={() => setAddButtonActive(true)}>
        {appData
          .filter((item) => {
            let show = true;
            if (!showCompleted) show = show && item.completed === false;
            show = show && item.list === currentList;
            return show;
          })
          .sort(listSortRule("manual"))
          .map((item) => (
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
              onCheck={handleCheckItem}
              onChange={handleEditItem}
              onkeyDown={handleAddItem}
              onDelete={handleDeleteItem}
              onFocus={() => setAddButtonActive(false)}
            />
          ))}
      </div>
      {addButtonActive && <AddItemButton handleClick={handleAddItem} />}
    </div>
  );
};

export default ListPage;
