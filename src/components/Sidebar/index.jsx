import "./index.css";
import ListCard from "../ListCard";
import classNames from "classnames";

const Sidebar = ({ list, activeList, setlistName }) => {
  // console.log(list, activeList)
  const handleClick = (listTitle) => {
    setlistName(listTitle)
  }
  // console.log(handleClick('Today'))
  return (
    <aside className="sidebar">
      This is a Sidebar.
      <div className={classNames("list-card-list")}>
        {list.map((item) => (
          // <div key={item.id}>{`${item.id} + ${item.title}`}</div>
          <ListCard
            key={item.id}
            title={item.title}
            active={item.title === activeList}
            onClick={() => handleClick(item.title)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
