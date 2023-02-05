import { Stack } from '@mui/material'
import { categories } from '../utils/constants';
import { sideBarSx } from '../styles/muiStyles';

const Sidebar = ({ selectedCategory, handleChange }) => {
  return (
    <Stack direction='row' sx={sideBarSx}>
      {categories.map(category => (
        <button
          key={category.name}
          onClick={() => { handleChange(category.name) }}
          className='sidebar__btn'
          style={{ background: category.name === selectedCategory && '#b242fc', color: '#fff' }}
        >
          <span className={`sidebar__icon ${category.name === selectedCategory ? 'white' : 'colored'}`}>
            {category.icon}
          </span>
          <span className={category.name === selectedCategory ? 'opacity-1' : 'sidebar__name'}>
            {category.name}
          </span>
        </button>
      ))}
      <p className='copyright'>
        Copyright 2023 MaiMedia
      </p>
    </Stack >
  )
};

export default Sidebar;