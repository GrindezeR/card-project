import React from 'react'
import commonStyles from "../../../common/styles/commonStyles.module.css";
import s from './Error404.module.css';
import {NavLink} from "react-router-dom";
import error from './404.png';

function Error404() {
    return (
        <div className={commonStyles.wrapper}>
          <div className={`${commonStyles.section} ${s.section}`}>
            <div className={s.error}>
              <span>4</span>
              <img className={s.image} src={error} alt="404" width={'200px'}/>
              <span>4</span>
            </div>
            <p className={s.text}>
              The page you are looking <span>NOT FOUND!</span> So sad...
            </p>
            <NavLink to={'/'} className={s.home}>Return Home</NavLink>
          </div>
        </div>
    )
}

export default Error404
