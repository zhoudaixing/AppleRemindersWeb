import "./index.css";
// import Section from "../Section";
import AddItemButton from "../AddItemButton";
import { useRef } from "react";
import ItemCard from "../ItemCard";
import { v4 as uuidv4 } from "uuid";
import Toolbar from "../Toolbar";

const ListPage = ({
  currentList,
  appData,
  setAppData,
  showCompleted,
  setShowCompleted,
}) => {
  // console.log(currentList);
  // const listData = appData.filter((item) => item.list === currentList);
  const itemsRef = useRef(null);
  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const handleEditItem = (details, value) => {
    // const map = getMap();
    // const node = map.get(id);
    // node.focus();
    setAppData([
      ...appData.filter((item) => item.id !== details.id),
      {
        ...details,
        title: value,
      },
    ]);
  };

  const handleCheckItem = (details, checked) => {
    // const map = getMap();
    // const node = map.get(id);
    // node.focus();
    // console.log('check', details.completed)
    setAppData([
      ...appData.filter((item) => item.id !== details.id),
      {
        ...details,
        completed: checked,
      },
    ]);
  };

  const handleAddItem = async () => {
    console.log("click, add item");
    const id = uuidv4();
    await setAppData([
      ...appData,
      {
        id,
        title: "",
        list: currentList,
        completed: false,
        order: appData.length + 1,
      },
    ]);
    // console.log(appData)
    const map = getMap();
    const node = map.get(id);
    // console.log(map);
    node.focus();
  };

  return (
    <div className="listpage">
      <Toolbar
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      ></Toolbar>

      <div className="listpage-title">{currentList}</div>

      <div className="list-container">
        {appData
          .filter((item) => {
            let show = true;
            if (!showCompleted) show = show && item.completed === false;
            show = show && item.list === currentList;
            return show;
          })
          .sort((a, b) => {
            if(a.completed && b.completed) return 0
            if(a.completed) return 1
            if(b.completed) return -1
            return a.order - b.order;
          })
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
            />
          ))}
      </div>
      <AddItemButton handleClick={handleAddItem} />
    </div>
  );
};

export default ListPage;
