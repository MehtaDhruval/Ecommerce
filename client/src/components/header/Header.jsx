

import {AppBar, Toolbar, Box, Typography ,styled} from '@mui/material';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`;

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return(
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{width: 75}} />
                    <Box style={{display: 'flex'}}>
                        <SubHeading>Explore&nbsp; 
                            <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;