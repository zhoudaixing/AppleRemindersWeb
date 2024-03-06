import "./index.css";
import { forwardRef, useState } from "react";

const ItemCard = forwardRef(function ItemCard(props, ref) {
  const [completed, setCompleted] = useState(false);
  const {onClick, details, onChange} = props
  function handleChange(e) {
    // console.log(e);
    setCompleted(e.target.checked);
  }
  function handleTextChange(e) {
    // console.log(e.target.value)
    onChange(details.id, e.target.value)
  }
  return (
    <div className="item-card" onClick={onClick}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {completed ? <s>{details.title}</s> : details.title}
      <input ref={ref} value={details.title} onChange={handleTextChange}/>
    </div>
  );
});

export default ItemCard;
