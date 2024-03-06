import "./index.css";

const AddItemButton = ({ handleClick }) => {
  // console.log(data)
  return <div className="add-item-button" onClick={handleClick}>+ New Reminder</div>;
};

export default AddItemButton;
