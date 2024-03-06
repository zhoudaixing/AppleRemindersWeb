import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { initialList, initialListReminders } from "./moocdata";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";

function App() {
  const [list, setList] = useState(initialList);
  const [listReminders, setListReminders] = useState(initialListReminders);

  return (
    <>
      <div className="app-container">
        <Sidebar data={list} />
        <ListPage currentList={listReminders} setListReminders={setListReminders}/>
      </div>
    </>
  );
}

export default App;
