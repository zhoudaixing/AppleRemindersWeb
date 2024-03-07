import classNames from "classnames";
import "./index.css";

const ListCard = ({ title, active, onClick }) => {
  return (
    <div className={classNames("list-card", { active: active })} onClick={onClick}>
      <div className={classNames("icon", "list-icon")}></div>
      <div className={classNames("items-count")}>28</div>
      <div className={classNames("list-title")}>{title}</div>
    </div>
  );
};

export default ListCard;
