import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { searchBarSx, searchBarIconSx } from '../styles/muiStyles';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('');
        }
    };

    return (
        <Paper component='form' onSubmit={handleSubmit} sx={searchBarSx}>
            <input
                className='search-bar'
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}
            />
            <IconButton type='submit' sx={searchBarIconSx}>
                <Search />
            </IconButton>
        </Paper>
    )
};

export default SearchBar;