import React from 'react'
import styles from './st.styl'
import Blocks from './Blocks'
import content from './content.json'

export default class Dept extends React.Component {
  getData(){
    return content[this.props.params.id] || {name:'', src: '', tasks: []};
  }
  render(){
    const listItems = this.getData().tasks.map((task) =>
      <li key={task.toString()}>
        {task}
      </li>
    );
    return (
      <div className={styles.dept}>
        <div className={styles.left}><img src={this.getData().img} />
          <h3>{this.getData().name}</h3>
          <ul>Задачи Отдела:
            {listItems}
          </ul>
          <p>Руководитель отдела:<br/> Соколова Юлия Андреевна<br/> +7 (499) 969-81-30, доб. 403<br/> E-mail: Yuliya.Sokolova@metaclay.com</p>
        </div>
        <div className={styles.right}>
          <Blocks />
        </div>
      </div>);
  }
}
