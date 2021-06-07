import React, {Fragment} from 'react'
import meals from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'


const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCardHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="meals imgs"/>
        </div>
    </Fragment>
}

export default Header;