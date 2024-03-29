import classNames from "classnames"
import './index.css'
import upload from '@/assets/svg/upload.svg'
import more from '@/assets/svg/more.svg'
import left from '@/assets/svg/left.svg'



const Toolbar = ({showCompleted, setShowCompleted}) => {
  const handleClickMore = () => {
    setShowCompleted(!showCompleted)
  }
  return (
    <div className={classNames('toolbar')}>
      <div className={classNames('toolbar-left')}>
        <img src={left} className={classNames('icon', 'icon-left')} />
      </div>
      <div className={classNames('toolbar-mid')}></div>
      <div className={classNames('toolbar-right')}>
        <img src={upload} className={classNames('icon', 'icon-upload')} />
        <img src={more} className={classNames('icon', 'icon-more')} onClick={handleClickMore} />
      </div>
    </div>
  )
}

export default Toolbar