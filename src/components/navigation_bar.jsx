import {Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../assets/crown.svg';
import 'style/navigation-bar.css'

const NavigationBar = () => (
    <div className='nav-bar'>
	<Link to="/"> 
		<CrwnLogo className='logo'/>
	</Link>
	<div className='nav-links-container'>
		<Link className='nav-link' to="/">Home</Link>
		<Link className='nav-link' to="/shop">Shop</Link>
	</div>
    </div>
)

export default NavigationBar;