import { useContext } from 'react'
import Button from './Button';
import Profile from './Profile';
// import Header from './Header'
import ThemeContext from '../context/ThemeContext'


function Container() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`app ${theme === "dark" ? theme : ""}`}>
            {/* `app ${theme}` */}
            {/* <Header /> */}
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container;