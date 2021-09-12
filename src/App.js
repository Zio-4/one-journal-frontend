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
import {useEffect} from 'react'


function App() {

  useEffect(() => {
    fetch("/journal_posts")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}, [])

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/newpost'>
            <NewJournalPost />
          </Route>
          <Route exact path='/newjournal'>
            <NewJournal />
          </Route>
          <Route exact path='/journal/:id/post/:id'>
            <JournalPostPage />
          </Route>
          <Route exact path='/journal/:id'>
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
