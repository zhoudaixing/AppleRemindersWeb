import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { initialList, initialListReminders } from "./moocdata";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";

function App() {
  const [list, setList] = useState(initialList);
  const [listName, setlistName] = useState("reminders");
  const [appData, setAppData] = useState(initialListReminders);
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <>
      <div className="app-container">
        <Sidebar list={list} activeList={listName} setlistName={setlistName} />
        <ListPage
          currentList={listName}
          setAppData={setAppData}
          appData={appData}
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />
      </div>
    </>
  );
}

export default App;
