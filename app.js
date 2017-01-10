import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {useTransitions, withTransition} from 'react-router-transitions'

import * as reducers from './reducers'
import { App, Home, Land, Dept, NotFound } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} >
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/land" component={Land}/>
          <Route path="/dept/:id" component={Dept}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
      {/* <DevTools /> */}
    </div>
  </Provider>,
  document.getElementById('mount')
)
