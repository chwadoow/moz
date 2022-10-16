import './App.css';
import {Routes,Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Rooms from './Components/Rooms'
import 'bootstrap/dist/css/bootstrap.min.css';
import Payments from './pages/Payments'

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import BasicExample from './Components/BasicExample'
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
  
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
<>
<BasicExample  user={user} setUser={setUser}/>
<Routes>

  <Route path="/"  element={<Dashboard />}/>


  <Route path="/payments" element={<Payments  />}/>
  <Route path="/:house_id"  element={<Rooms />}/>
    </Routes>
    </>
  );
}

export default App;
