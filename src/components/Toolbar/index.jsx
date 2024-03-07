import classNames from "classnames"
import './index.css'

const Toolbar = ({showCompleted, setShowCompleted}) => {
  const handleClickMore = () => {
    setShowCompleted(!showCompleted)
  }
  return (
    <div className={classNames('toolbar')}>
      <div className={classNames('toolbar-left')}></div>
      <div className={classNames('toolbar-mid')}></div>
      <div className={classNames('toolbar-right')}>
        <img src="src/assets/svg/upload.svg" className={classNames('icon', 'icon-upload')} />
        <img src="src/assets/svg/more.svg" className={classNames('icon', 'icon-more')} onClick={handleClickMore} />
      </div>
    </div>
  )
}

export default Toolbar