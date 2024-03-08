import "./index.css";
import add from '@/assets/svg/add.svg'
import classNames from "classnames";


const AddItemButton = ({ handleClick }) => {
  // console.log(data)
  return (
    <div className="add-item-bar" onClick={handleClick}>
      <img src={add} className={classNames('icon', 'icon-add')} />
      <div className="add-item-button">New Reminder</div>
    </div>
  );
};

export default AddItemButton;
