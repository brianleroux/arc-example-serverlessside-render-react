import React, {Component} from 'react'
import Home from './pages/home'
import Login from './pages/login'
import NavLoggedIn from './components/nav-logged-in'
import NavLoggedOut from './components/nav-logged-out'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = props.state
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(event) {
    event.preventDefault()
    var self = this
    var data = new FormData(event.target)
    var body = {}
    for (var key of data.keys()) {
      body[key] = data.get(key)
    }
    fetch(this.state.api.login, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body),
    }).then(function _response(result) {
      return result.json()
    }).then(function _json(data) {
      self.setState({loggedIn:true})
      history.pushState({}, '', self.state.urls.home)
    }).catch(function _fail(err) {
      self.setState({loggedIn:false})
      console.log(err)
    })
  }  
  
  logout(event) {
    event.preventDefault()
    var self = this
    fetch(this.state.api.logout, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({}),
    }).then(function _response(result) {
      return result.json()
    }).then(function _json(data) {
      self.setState({loggedIn:false})
      history.pushState({}, '', self.state.urls.home)
    }).catch(function _fail(err) {
      console.log('failed to logout', err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Serverless Side Rendering Demo</h1>
        {this.state.loggedIn? <NavLoggedIn urls={this.state.urls} handler={this.logout} /> : <NavLoggedOut urls={this.state.urls}/>} 
        {this.state.loggedIn? <Home/> : <Login api={this.state.api} urls={this.state.urls} login={this.login} />}
      </div>
    )
  }
}

export default App
