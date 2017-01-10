import React from 'react'
import { Link, browserHistory } from 'react-router'
import styles from './style.styl'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //this.handleClick = this.handleClick.bind(this);
  }
  render(){
    let nav = <div></div>;
    if(this.props.location.pathname != '/')
      nav = <div className={styles.nav}><Link to="/">⟵</Link><Link to="/land">О нас</Link></div>;  //<button onClick={() => browserHistory.push('/')}>Go to /foo</button></div>;
    if(this.props.location.pathname == '/land')
      nav = <div className={styles.nav}><Link to="/">⟵</Link></div>;
    return (
        <div className={styles.main} >
          {nav}
          <div>{this.props.children}</div>
        </div>
    )
  }
}
