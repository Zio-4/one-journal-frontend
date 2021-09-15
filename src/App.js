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
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/journals/:id/journal_posts/new'>
            <NewJournalPost />
          </Route>
          <Route exact path='/journals/new'>
            <NewJournal />
          </Route>
          <Route exact path='/journals/:jid/journal_posts/:id'>
            <JournalPostPage />
          </Route>
          <Route exact path='/journals/:id'>
            <JournalPage />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
            <Redirect from="*" to="/" />
          </Route> 
        </Switch>
    </div>
  );
}

export default App;
