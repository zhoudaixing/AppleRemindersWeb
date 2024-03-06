import './index.css'

const Sidebar = ({data}) => {
  // console.log(data)
  return (
    <aside className='sidebar'>
      This is a Sidebar.
      {data.map((item) => (
        <div key={item.id}>{`${item.id} + ${item.title}`}</div>
      ))}
    </aside>
  )
}

export default Sidebar