// feed
export const feedStackSx = { flexDirection: { sm: 'column', md: 'row' } };
export const feedBoxLeftSx = {
    height: { sx: 'auto', md: '92vh' },
    borderRight: '1px solid #3d3d3d',
    px: { sx: 0, md: 2 }
};
export const feedBoxRightSx = {
    overflowY: 'auto', height: '90vh', flex: 2
};
export const searchTextSx = { color: '#fff', mb: 2, ml: '4.5rem' }

// sidebar
export const sideBarSx = {
    overflowY: 'auto',
    height: { sx: 'auto', md: '95%' },
    flexDirection: { md: 'column' }
};

// navbar
export const navBarSx = {
    position: 'sticky',
    backgroundColor: '#272727',
    top: 0,
    justifyContent: 'space-between',
    zIndex: 15
};
export const searchBarSx = {
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    boxShadow: 'none',
    pl: 2, mr: { sm: 5 }
};
export const searchBarIconSx = { p: '10px', color: '#b242fc' };

// video card
export const videoCardSx = {
    width: { xs: '90vw', sm: '358px', md: '320px', },
    boxShadow: 'none',
    borderRadius: 0,
    display: { xs: 'flex', md: 'block' },
    flexDirection: { xs: 'row', sm: 'column' },
    alignItems: {xs: 'center', sm: 'flex-start'},
    backgroundColor:'#272727',
    cusor: 'pointer'
};
export const videoCardMediaSx = { height: 180, width: { xs: '55vw', sm: '358px', md: '320px' }};
export const VideoCardContentSx = { height: {xs: 160, sm: '80px'}, width: {xs: '30vw', sm: 'auto'}, pl: {xs: '3vw', sm: 0}, pr: 0, pt: {xs: '.5rem', sm: 0}, backgroundColor: '#272727',};
export const videoCardCheckSx = { fontSize: 12, color: '#808080', ml: '5px' };
export const videoCardTitleSx = { fontSize: {  xs: '.8rem', sm: '.9'}} ;
export const videoCardSubtitleSx = { fontSize: { xs: '.7rem', sm: '.8rem' }, color: '#808080' };

// channel card
export const channelCardSx = {
    boxShadow: 'none',
    borderRadius: '20px',
    width: { xs: '90vw', sm: '358px', md: '320px', },
    height: '260px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export const channelCardContentSx = { display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' };
export const channelCardMediaSx = { borderRadius: '50%', height: '180px', width: '180px' }

//videoDetail 
export const videoDetailSx = { ml: { sm: '2rem', md: '5rem' }, mr: { sm: '2rem', md: '5rem' } }
export const videoDetailBoxSx = { width: '100%', position: 'sticky', top: '86px' };
export const videoDetailTypoSx = { opacity: .6, fontSize: {xs: '.7rem', sm: '.8rem'} }