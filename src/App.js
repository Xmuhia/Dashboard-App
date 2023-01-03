import React from 'react';

import './App.css';

const App = () => {
  return (
    <h1 className=''>App</h1>
  )
}

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';


const App = () => {
  const activeMenu = true;

  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
      <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
        <TooltipComponent content='Settings' position='Top'>
            <button type='button'
            className='text-3xl p-3 
            hover:drop-shadow-xl 
            hover:bg-light-gray text-white'
            style={{ background: "linear-gradient(to right, blue, green)",
            borderRadius: '50%' }}>
            <FiSettings/>
            </button>
        </TooltipComponent>
        </div>
        {activeMenu ? (
        <div className='w-72 fixed sidebar 
        dark:bg-secondary-dark-bg 
        bg-white'>
          Sidebar
        </div>
      ) : (
        <div>
          Sidebar WWW
        </div>
      )}
        <div className ={`dark:bg-main-bg bg-main-bg 
        min-h-screen w-full ${activeMenu ? 
        'md:ml-72' : 'flex-2'}`}>
          <div className='fixed w-full sidebar
           dark:bg-secondary-dark-bg 
           bg-white '>
            NavBar
          </div>
        </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element='Ecommerce'/>
              <Route path='/ecommerce' element='Ecommerce'/>

              {/* Pages */}
              <Route path='/orders' element='Orders'/>
              <Route path='/employees' element='Employees'/>
              <Route path='/customers' element='Customers'/>

              {/* Apps */}
              <Route path='/kanban' element='Kanban'/>
              <Route path='/editor' element='Editor'/>
              <Route path='/calendar' element='Calendar'/>
              <Route path='/color-picker' element='ColorPicker'/>

              {/* Charts */}
              <Route path='/line' element='Line'/>
              <Route path='/area' element='Area'/>
              <Route path='/bar' element='Bar'/>
              <Route path='/pie' element='Pie'/>
              <Route path='/finacial' element='Finacial'/>
              <Route path='/color-mapping' element='Color-Mapping'/>
              <Route path='/pyramid' element='Pyramid'/>
              <Route path='/stacked' element='Stacked'/>
            </Routes>
          </div>

          </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
