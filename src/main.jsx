import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
// @ts-ignore
} from "react-router-dom";
import App from './App';
import Dashboard from './pages/Dashboard/dashboard';
import Team from './pages/team/team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Profile from './pages/Profile/Profile';
import Calender from './pages/Calender/Calender';
import Faq from './pages/faq/Faq';
import Bar from './pages/Bar/Bar';
import Pie from './pages/Pie/Pie';
import Line from './pages/Line/Line';
import Geography from './pages/Geography/Geography';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Dashboard />}/>
    <Route path="/contacts" element={<Contacts />}/>
    <Route path="/invoices" element={<Invoices />}/>
    <Route path="/Profile" element={<Profile />}/>
    <Route path="/team" element={<Team />}/>
    <Route path="/Calender" element={<Calender />}/>
    <Route path="/faq" element={<Faq />}/>
    <Route path="/Bar" element={<Bar />}/>
    <Route path="/Pie" element={<Pie/>}/>
    <Route path="/Line" element={<Line />}/>
    <Route path="/Geography" element={<Geography />}/>
    
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
