import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard.js';
import Login from './components/views/Login/Login.js';
import Tables from './components/views/Tables/Tables.js';
import Waiter from './components/views/Waiter/Waiter.js';
import Kitchen from './components/views/Kitchen/Kitchen';
import OrderNew from './components/views/Waiter/OrderNew';
import BookingNew from './components/views/Tables/BookingNew';
import EventsNew from './components/views/Tables/EventsNew';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="App">
          <header className="App-header">
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew}/>
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/active`} component={OrderActive}/>
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew}/>
            <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew}/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
