import "./index.css";

const AddItemButton = ({ handleClick }) => {
  // console.log(data)
  return (
    <div className="add-item-bar" onClick={handleClick}>
      <div className="add-item-button">+ New Reminder</div>
    </div>
  );
};

export default AddItemButton;
