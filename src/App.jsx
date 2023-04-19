import Home from './pages/Home'
import 'antd/dist/reset.css'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import users from "./json/users.json";
import { feedImages } from './api';

// feedImages();

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home
          user={users[0]}
        />
      </div>
    </QueryClientProvider>
  )
}

export default App
