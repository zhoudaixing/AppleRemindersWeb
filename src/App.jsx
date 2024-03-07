import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { initialList, initialListReminders } from "./moocdata";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";

function App() {
  const [list, setList] = useState(initialList);
  const [listName, setlistName] = useState('reminders');
  const [appData, setAppData] = useState(initialListReminders);

  return (
    <>
      <div className="app-container">
        <Sidebar data={list} />
        <ListPage currentList={listName} setAppData={setAppData} appData={appData}/>
      </div>
    </>
  );
}

export default App;
