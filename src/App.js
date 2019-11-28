import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';


const App = () => {
	return (
		<AppTheme theme={lightTheme} provider={ThemeProvider}>
			<Container>
			
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
