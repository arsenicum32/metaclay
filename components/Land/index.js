
import React, { Component } from 'react';

import markdownFile from './land.md';
import s from './land.styl'

console.log(markdownFile);

export default class Land extends Component {
    rawMarkup(){
     return { __html: markdownFile };
    }
    render(){
     return(
       <div className={s.land}>
      <div className={s.top}>
        <h1>метаклэй</h1>
        <p>Научно-Технологическая Лаборатория «Метаклэй» является многопрофильным испытательным центром, созданным по современным международным стандартам</p><img className="o" src="http://test-polymer.ru/min/images/%D0%9E%D0%9C%D0%A2%D0%9F/%D0%9E%D0%9C%D0%A2%D0%9F_2.png"/><img className="t" src="http://test-polymer.ru/min/images/oit/oit_1.png"/><img className="f" src="http://test-polymer.ru/min/images/OTAO/%D0%9E%D0%A2%D0%90%D0%9E_3.png"/><img className="r" src="http://test-polymer.ru/min/images/%D0%9E%D0%9C%D0%A2%D0%9F/%D0%9E%D0%9C%D0%A2%D0%9F_3.png"/><img src="http://test-polymer.ru/min/images/ofmi/ofmi_1.png"/>
      </div>
      <div className={s.two}>
        <p>По вопросам заключения договора оказания услуг Лаборатории Метаклэй и для получения подробной информации об оборудовании и реализуемых методиках испытаний просим обращаться к Руководителю Научно-Технологической Лаборатории АО "МЕТАКЛЭЙ"<br/><b>Скворцову Ивану Николаевичу</b><br/>по телефону: <b><phone>+7-905-743-69-58</phone></b><br/> или почте: <b>ivan.skvorczov@metaclay.com</b></p><br/><a href="#">скачать прайс-лист</a>
      </div>
      <div className={s.sh}>
        <h2>штат</h2>
        <ul>
          <li>
            <div><img src="http://test-polymer.ru/people/%D0%A1%D0%BA%D0%B2%D0%BE%D1%80%D1%86%D0%BE%D0%B2.JPG"/>
              <div className={s.name}>Скворцов Иван Николаевич</div>
            </div>
            <div className={s.desc}>
              <p><b>Руководитель НТЛ.</b> Государственное образовательное учреждение высшего профессионального образования «Московская государственная академия тонкой химической технологии им. М.В. Ломоносова». Год окончания: 2008. Магистр химической технологии и биотехнологии. Почетный Диплом ВМА 0089470 от 25.06.2008г.</p>
            </div>
          </li>
          <li>
            <div><img src="http://test-polymer.ru/people/%D0%A1%D0%BA%D0%B2%D0%BE%D1%80%D1%86%D0%BE%D0%B2.JPG"/>
              <div className={s.name}>Скворцов Иван Николаевич</div>
            </div>
            <div className={s.desc}>
              <p><b>Руководитель НТЛ.</b> Государственное образовательное учреждение высшего профессионального образования «Московская государственная академия тонкой химической технологии им. М.В. Ломоносова». Год окончания: 2008. Магистр химической технологии и биотехнологии. Почетный Диплом ВМА 0089470 от 25.06.2008г.</p>
            </div>
          </li>
          <li>
            <div><img src="http://test-polymer.ru/people/%D0%A1%D0%BA%D0%B2%D0%BE%D1%80%D1%86%D0%BE%D0%B2.JPG"/>
              <div className={s.name}>Скворцов Иван Николаевич</div>
            </div>
            <div className={s.desc}>
              <p><b>Руководитель НТЛ.</b> Государственное образовательное учреждение высшего профессионального образования «Московская государственная академия тонкой химической технологии им. М.В. Ломоносова». Год окончания: 2008. Магистр химической технологии и биотехнологии. Почетный Диплом ВМА 0089470 от 25.06.2008г.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={s.block}>
        <h2>аттестаты</h2>
        <div className={s.att}>
          <div className={s.at}><img src="http://test-polymer.ru/images/att/metas.jpg"/>
            <p>Сертификат Метаклэй 2016</p>
          </div>
          <div className={s.at}><img src="http://test-polymer.ru/images/att/metas.jpg"/>
            <p>Сертификат Метаклэй 2016</p>
          </div>
          <div className={s.at}><img src="http://test-polymer.ru/images/att/metas.jpg"/>
            <p>Сертификат Метаклэй 2016</p>
          </div>
        </div>
      </div>
      <div className={s.block}>
        <h2>расположение</h2>
        <div className={s.mapid}></div>
      </div>
      </div>
      );
   }
}
