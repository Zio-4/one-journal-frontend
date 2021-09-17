import './App.css';
import {Switch, Route, Redirect, useEffect} from 'react-router-dom'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Homepage from './Components/Homepage'
import JournalPage from './Components/JournalPage';
import JournalPostPage from './Components/JournalPostPage';
import NewJournal from './Components/NewJournal';
import NewJournalPost from './Components/NewJournalPost';
import {useState} from 'react'



function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [journals, setJournals] = useState([])

  useEffect(() => {
    fetch("/journals")
    .then(res => res.json())
    .then(data => {
      setJournals(data)
    })
}, [])

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          keepUserLoggedIn(user)
          clearErrors()
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }, []);

  function clearErrors() {
    setErrors([])
  }

  function keepUserLoggedIn(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function onLogin(user) {
    setUser(user)
    setLoggedIn(true)
  }

  function onLogout() {
    setUser("")
    setLoggedIn(false)
  }

  function addJournal(newJ) { 
    setJournals((mUJ) => [...mUJ, newJ])
  }

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/journals/:id/journal_posts/new'>
            <NewJournalPost />
          </Route>
          <Route exact path='/journals/new'>
            <NewJournal addJournal={addJournal}/>
          </Route>
          <Route exact path='/journals/:jid/journal_posts/:id'>
            <JournalPostPage />
          </Route>
          <Route exact path='/journals/:id'>
            <JournalPage />
          </Route>
          <Route exact path='/'>
            {loggedIn ? <Redirect to="/home" /> : <Login onLogin={onLogin} clearErrors={clearErrors}/>}
          </Route>
          <Route exact path='/home'>
            <Homepage user={user} onLogout={onLogout} journals={journals}/>
          </Route>
          <Route exact path='/signup'>
            <SignUp onLogin={onLogin}/>
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
