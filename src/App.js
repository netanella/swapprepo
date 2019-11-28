import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// common
import Navigation from './components/common/Navigation';

// pages
import Home from './components/pages/Home';
import Feedback from './components/pages/Feedback';
import Products from './components/pages/Products';
import Product from './components/pages/Product';

const App = () => {
	return (
		<AppTheme theme={lightTheme} provider={ThemeProvider}>
			<Container>
				<Router>
					<Navigation/>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						
						<Route exact path="/products">
							<Products/>
						</Route>
						
						<Route exact path="/product">
							<Product/>
						</Route>
						
						<Route exact path="/feedback">
							<Feedback/>
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
