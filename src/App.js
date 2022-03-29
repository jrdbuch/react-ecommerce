import './style/App.css';
import NavigationBar from "components/navigation_bar";
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Outlet/>
    </div>
  );
}

export default App;