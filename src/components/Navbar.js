import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { navBarSx } from '../styles/muiStyles';
import SearchBar from './SearchBar';
import logo from '../utils/cozy-logo.png';

const Navbar = () => {
    return (
        <Stack direction='row' alignItems='center' p={2} sx={navBarSx}>
            <Link className='navbar' to={'/'}>
                <img src={logo} alt='logo' height={50} />
            </Link>
            <SearchBar />
        </Stack>
    )
};

export default Navbar;