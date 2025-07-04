

import {Box} from '@mui/material';
import { navData } from '../../constants/data';

const NavBar = () => {
    return(
        <Box>
            {
                navData.map(data => (
                    <Box>
                        <img src={data.url} alt="nav" />
                        <p>{data.text}</p>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;