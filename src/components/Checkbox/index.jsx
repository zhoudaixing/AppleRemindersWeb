import classNames from "classnames"
import './index.css'

const Checkbox = ({checked, onChange}) => {
  return (
    <div className={classNames('checkbox-container')}>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  )
}

export default Checkbox