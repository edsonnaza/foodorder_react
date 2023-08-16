import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <div>
                <header className={classes.header} >
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick={props.onShowCart}/>
                </header>
                <div>
                    <div className={classes['main-image']}>
                        <img  src = {mealsImage} alt='A table full of deliciuos food!'/>
                    </div>
                </div>
           </div>
}

export default Header;