import React, { useEffect, useState } from 'react';
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import styled from 'styled-components';
import { Container } from './Container';
import {Link} from 'react-router-dom';

const HeaderEl = styled.div`
	box-shadow: 0 0 3px #000;
	background-color: var(--colors-ui-base);
	color: var(--colors-text);
	transition: all 300ms linear;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: '/',
})`
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
	color: var(--colors-text);
	cursor: pointer;
`;

const SwitcherMode = styled.div`
	font-weight: var(--fw-bold);
	text-transform: capitalize;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export default function Header() {
	const [theme, setTheme] = useState('light');
	
	useEffect(()=> {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Which country ?</Title>
					<SwitcherMode onClick={toggleTheme}>
						{
							theme === 'light' ? 
							<IoMoonOutline/>
							: 
							<IoMoonSharp/>
						}
						<span style={{marginLeft: 5}}>{theme} Theme</span>
					</SwitcherMode>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
