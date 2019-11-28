import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';
import logoImg from './images/logo.svg';
import avatarImg from './images/avatar.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages
import Home from './components/pages/Home';

const App = () => {
	return (
		<AppTheme theme={lightTheme} provider={ThemeProvider}>
			<Container>
				<Navigation>
					<Logo/>
					<User>
						<Avatar/>
						<Label>1280</Label>
					</User>
				</Navigation>
				
				<Router>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
					</Switch>
				</Router>
			
			</Container>
		</AppTheme>
	);
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  width: 100vw;
  height: 60px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
	width: 120px;
	height: 50px;
	background: url(${logoImg}) no-repeat center center;
	background-size: contain;
`;

const User = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.a100};
	box-sizing: border-box;
	border-radius: 4px;
`;

const Label = styled.div`
	${({ theme }) => theme.text.sm};
	padding: 0 10px;
`;

const Avatar = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 5px;
	background: url(${avatarImg}) no-repeat center center;
	background-size: cover;
`;
