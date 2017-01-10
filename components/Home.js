import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { Link, browserHistory } from 'react-router'
import styles from './Home.styl'

function Home({ number, increase, decrease }) {
  return (
    <div className={styles.body}>
      <div className={styles.block} onClick={() => browserHistory.push('/land')}>
        <h1>метаклэй</h1>
        <p>научно технологическая лаборатория</p>
      </div>
      <div className={styles.main}>
        <div className={styles.left} onClick={() => browserHistory.push('/Dept/one')}><img src="http://test-polymer.ru/images/oitd.gif"/>
          <p>Отдел Иновационных Технологий</p>
        </div>
        <div className={styles.right} onClick={() => browserHistory.push('/Dept/two')}><img src="http://test-polymer.ru/images/omtpd.gif"/>
          <p>Отдел Масштабирования Технологических Процессов</p>
        </div>
        <div className={styles.left} onClick={() => browserHistory.push('/Dept/three')} ><img src="http://test-polymer.ru/images/michd.gif"/>
          <p>Отдел Тонкого Аналитического Оборудования</p>
        </div>
        <div className={styles.right} onClick={() => browserHistory.push('/Dept/four')}><img src="http://test-polymer.ru/images/ofmid.gif"/>
          <p>Отдел Физико Механических Испытаний</p>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home)


/*
return (
  <div>
    <Link to="/dept/one">one</Link>
    <br/>
    <Link to="/dept/two">two</Link>
    <br/>
    <Link to="/dept/three">three</Link>
    <br/>
    <Link to="/dept/four">four</Link>
    <br/>
    Some state changes:
    {number}
    <button onClick={() => increase(1)}>Increase</button>
    <button onClick={() => decrease(1)}>Decrease</button>
  </div>
)
*/
