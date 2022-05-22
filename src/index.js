import ReactDOM from 'react-dom';
import 'style/index.css';

import App from 'App'

import Home from 'routes/home/home.jsx';
import Shop from 'routes/shop/shop.jsx';
import SignIn from 'routes/sign-in/sign-in.jsx';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
