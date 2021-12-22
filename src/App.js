import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav/Nav';
import HomeComponent from './views/Home/HomeComponent';
import ToDoListComponent from './views/Todos/TodoListComponent';
import ListUserComponent from './views/Axios/ListUserComponent';
import DetailUserComponent from './views/Axios/DetailUserComponent';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Routes, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>
              App.js: Demo react js!
            </p>
            ===============================
          </div>

          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="todo" element={<ToDoListComponent />} />
            <Route path="users" element={<ListUserComponent />} />
            <Route path="users/:id" element={<DetailUserComponent />} />
          </Routes>

          {/* <Switch>
            <Route path="/" exact>
              <HomeComponent/>
            </Route>
            <Route path="/todo">
              <ToDoListComponent />
            </Route>
            <Route path="/users" exact>
              <ListUserComponent />
            </Route>
            <Route path="/users/:id">
              <DetailUserComponent />
            </Route>
          </Switch> */}

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
