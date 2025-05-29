import React, { ReactNode, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import UserLoginForm from '../_Common/UserForm/Login'
import { useSections } from '../../contexts/SectionContext';
import DropDownForm, { CaptionConfig, DropButtonPosition } from '../_Common/DropDownForm'
import { 
	MenuLogo,
	Text 
} from './styled';

interface MenuProps {
	logoOpacity: number;
	activeSection: string;
}

const scrollToSection = (sectionId:string) => {
	document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const isActive = (activeSection:string, sectionName:string):string => {
	return activeSection === sectionName ? 'active' : ''
}

const MenuBar: React.FC<MenuProps> = ({ logoOpacity, activeSection }) => {
	const { sections, titles, defaultTitle } = useSections();
	const styles = { opacity: logoOpacity, transition: 'opacity 0.5s ease' };

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	return (
		<AppBar position="fixed" sx={{ background: 'white', color: 'darkgrey' }}>
			<MenuLogo src="/logo.svg" alt={defaultTitle} style={styles} />
			<Container>
				<Toolbar disableGutters>
					<Text>O Pirulla PRECISA da sua ajuda!</Text>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default MenuBar;