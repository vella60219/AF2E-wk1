import Home from './pages/Home'
import 'antd/dist/reset.css'
import './App.css'
import user from "./json/users.json";


function App() {
  return (
    <div className="App">
      <Home
        user={user[0]}
      />
    </div>
  )
}

export default App
