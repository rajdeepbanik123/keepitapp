
import './App.css'
import Header from "./components/header/header"
import AddKeeper from "./components/addKeeper/addKeeper"
import ShowKeeper from './components/showKeeper/showKeeper'
import { useState, useEffect  } from "react"
import axios from "axios"

function App() {

  const [ keeperList, setKeeperList ] = useState([])

  useEffect(() => {
    axios.get("https://keepit-backend-app.onrender.com/api/getAll")
    .then(res => setKeeperList(res.data))
  }, [])

  return (
    <div className="App">
      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
