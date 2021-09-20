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
import {useState, useEffect} from 'react'
import Loading from './Components/Loading';



function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(false)
  const [journals, setJournals] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch("/currentuser").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("user in use effect:", user)
          keepUserLoggedIn(user)
          setLoading(false)
          clearErrors()
        })
      } else {
        r.json().then((err) => {
          setErrors(err.errors)
          setLoading(false)
        })
      }
    })
  }, []);


  function clearErrors() {
    setErrors([])
  }

  function keepUserLoggedIn(user) {
    setUser(user)
  }

  function onLogin(user) {
    setUser(user)
  }

  function onLogout() {
    setUser("")
  }

  function addJournal(newJ) { 
    setJournals((mUJ) => [...mUJ, newJ])
  }



  return (
    <div className="App">
      {loading ? <Loading /> :
      <>
        <Header />
        {user ? <NavBar onLogout={onLogout}/> : null}
        <Switch>
          <Route exact path='/journals/:id/journal_posts/new'>
            <NewJournalPost user={user} />
          </Route>
          <Route exact path='/journals/new'>
            <NewJournal addJournal={addJournal} user={user}/>
          </Route>
          <Route exact path='/journals/:jid/journal_posts/:id'>
            <JournalPostPage user={user}/>
          </Route>
          <Route exact path='/journals/:id'>
            <JournalPage user={user}/>
          </Route>
          <Route exact path='/login'>
            <Login onLogin={setUser} clearErrors={clearErrors} user={user}/>
          </Route>
          <Route exact path='/'>
            <Homepage user={user} onLogout={onLogout} setJournals={setJournals} journals={journals}/>
          </Route>
          <Route exact path='/signup'>
            <SignUp onLogin={onLogin} user={user}/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
            <Redirect from="*" to="/" />
          </Route> 
        </Switch> 
      </>}
    </div>
  );
}

export default App;
