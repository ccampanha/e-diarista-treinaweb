import React from 'react';
import { Toolbar, Container } from '@mui/material';
import { HeaderAppBar, HeaderLogo } from './Header.styles';

const Header: React.FC = () => {
	return (
		<HeaderAppBar position={'sticky'}>
			<Toolbar component={Container}>
				<HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
			</Toolbar>
		</HeaderAppBar>
	);
};

export default Header;
