import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Homepage from './Components/Homepage'
import JournalPage from './Components/JournalPage';
import JournalPostPage from './Components/JournalPostPage';
import NewJournal from './Components/NewJournal';
import NewJournalPost from './Components/NewJournalPost';


function App() {
  return (
    <div className="App">
        <Switch>
        <Header />
        <NavBar />
          <Route path='/newpost'>
            <NewJournalPost />
          </Route>
          <Route path='/newjournal'>
            <NewJournal />
          </Route>
          <Route path='/journal/:id/post/:id'>
            <JournalPostPage />
          </Route>
          <Route path='/journal/:id'>
            <JournalPage />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
            <Redirect from="*" to="/home" />
          </Route> 
        </Switch>
    </div>
  );
}

export default App;
