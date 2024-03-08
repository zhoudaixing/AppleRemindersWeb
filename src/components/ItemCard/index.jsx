import "./index.css";
import { forwardRef } from "react";
import classNames from "classnames";
import Checkbox from "../Checkbox";

const ItemCard = forwardRef(function ItemCard(props, ref) {
  const { details, onChange, onCheck, onkeyDown, onDelete, onFocus } = props;
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      if (details.title.length > 0) onkeyDown();
      else {
        onDelete(details.id);
      }
    }
  };
  return (
    <div className="item-card">
      <div className={classNames("check-box")}>
        <Checkbox
          checked={details.completed}
          onChange={(e) => onCheck(details, e.target.checked)}
        />
      </div>

      <div className={classNames("item-box")}>
        <input
          className={classNames("input", { completed: details.completed })}
          ref={ref}
          value={details.title}
          onChange={(e) => onChange(details, e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
});

export default ItemCard;
