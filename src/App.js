import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';
import logoImg from './images/logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages
import Home from './components/pages/Home';
import Products from './components/pages/Products';

const App = () => {
	return (
		<AppTheme theme={lightTheme} provider={ThemeProvider}>
			<Container>
				<Navigation>
					<Logo/>
					<User>
						<Avatar/>
					</User>
				</Navigation>

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={Products} />
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
`;

const Avatar = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #444;
`;
