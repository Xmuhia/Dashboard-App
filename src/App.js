import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, 
  Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, 
  ColorMapping, Editor } from './pages';


const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
        <TooltipComponent content='Settings' position='Top'>
            <button type='button'
            className='text-3xl p-3 @import url('https://cdn.syncfusion.com/ej2/material.css');

.sidebar {
  box-shadow: rgb(113 122 131 / 11%) 0px 7px 30px 0px;
}
.nav-item,
.navbar {
  z-index: 10000;
}
@media  screen and (max-width:800px) {
  .sidebar{
    z-index: 10000000;
  }
}

.e-dlg-center-center, .e-quick-popup-wrapper.e-device{
  z-index: 1000000 !important;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(216, 216, 216);
  border-radius: 40px;
}
::-webkit-scrollbar-track {import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, 
  Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, 
  ColorMapping, Editor } from './pages';


const App = () => {
  const activeMenu = true;

  return (
    <div>
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
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar/>
        </div>
      )}
        <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
          <div className="fixed md:static
           bg-main-bg dark:bg-main-dark-bg{<
           navbar w-full ">
            <Navbar/>
          </div>
        

          <div>
            <Routes>
              {/* Dashboard */}
              <Route  path="/" element={<Ecommerce/>}  />
              <Route path='/ecommerce' element={<Ecommerce/>}  />

              {/* Pages */}
              <Route path='/orders' element={<Orders/> } />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customers' element={<Customers/>} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />

              {/* Charts */}
              <Route path="/line" element={<Line/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/finacial' element={<Financial/>} />
              <Route path='/color-mapping' element={<ColorMapping/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/stacked' element={<Stacked/>} />
            </Routes>
          </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
  background-color: transparent;
}

/* color-picker style  */

 #preview {
  background: transparent
    url('https://ej2.syncfusion.com/react/demos/src/color-picker/images/pen.png')
    no-repeat;
  display: inline-block;
  height: 80px;
  margin: 10px 0;
  min-width: 300px;
  max-width: 600px;
  background-color: #008000;
}

.e-input-group:not(.e-float-icon-left), .e-input-group.e-success:not(.e-float-icon-left), .e-input-group.e-warning:not(.e-float-icon-left), .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-success:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-warning:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left){
  border: none;
}
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
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar/>
        </div>
      )}
        <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
          <div className="fixed md:static
           bg-main-bg dark:bg-main-dark-bg{<
           navbar w-full ">
            <Navbar/>
          </div>
        

          <div>
            <Routes>
              {/* Dashboard */}
              <Route  path="/" element={<Ecommerce/>}  />
              <Route path='/ecommerce' element={<Ecommerce/>}  />

              {/* Pages */}
              <Route path='/orders' element={<Orders/> } />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customers' element={<Customers/>} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />

              {/* Charts */}
              <Route path="/line" element={<Line/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/finacial' element={<Financial/>} />
              <Route path='/color-mapping' element={<ColorMapping/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/stacked' element={<Stacked/>} />
            </Routes>
          </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, 
  Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, 
  ColorMapping, Editor } from './pages';


const App = () => {
  const activeMenu = true;

  return (
    <div>
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
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar/>
        </div>
      )}
        <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
          <div className="fixed md:static
           bg-main-bg dark:bg-main-dark-bg{<
           navbar w-full ">
            <Navbar/>
          </div>
        

          <div>
            <Routes>
              {/* Dashboard */}
              <Route  path="/" element={<Ecommerce/>}  />
              <Route path='/ecommerce' element={<Ecommerce/>}  />

              {/* Pages */}
              <Route path='/orders' element={<Orders/> } />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customers' element={<Customers/>} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />

              {/* Charts */}
              <Route path="/line" element={<Line/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/finacial' element={<Financial/>} />
              <Route path='/color-mapping' element={<Color-Mapping/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/stacked' element={<Stacked/>} />
            </Routes>
          </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
