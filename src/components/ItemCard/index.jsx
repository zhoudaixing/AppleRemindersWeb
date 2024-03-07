import "./index.css";
import { forwardRef} from "react";
import classNames from "classnames";
import Checkbox from "../Checkbox";

const ItemCard = forwardRef(function ItemCard(props, ref) {
  // const [completed, setCompleted] = useState(false);
  const { details, onChange, onCheck } = props;
  function handleCheck(e) {
    // console.log(details);
    onCheck(details, e.target.checked);
  }
  function handleChange(e) {
    // console.log(e.target.value)
    onChange(details, e.target.value);
  }
  return (
    <div className="item-card">
      <div className={classNames('check-box')}>
        <Checkbox checked={details.completed} onChange={handleCheck}/>
        {/* <input
          type="checkbox"
          // className={classNames("checkbox")}
          checked={details.completed}
          onChange={handleCheck}
        /> */}
      </div>

      {/* {completed ? <s>{details.title}</s> : details.title} */}
      <div className={classNames("item-box")}>
        <input
          className={classNames("input", { completed: details.completed })}
          ref={ref}
          value={details.title}
          onChange={handleChange}
        />
      </div>

    </div>
  );
});

export default ItemCard;
