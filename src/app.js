import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch } from 'react-router-dom'
import ViewBot from './components/ViewBot'

class App extends React.Component {
  get route() {
    return (
      <>  
        <ViewBot/>
        <div>33333</div>
      </>
    )
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          {this.route}
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'))
