import React from 'react';
import {Card, TextInput, Range, Button} from '@datorama/app-components';
import styled from 'styled-components';

const Feedback = () => {
	return (
		<Container>
			<Title>Feedback form</Title>
			<StyledCard>
				<StyledInput label="" />
				<StyledInput label="" />
				<StyledInput label="" />
				<StyledInput label="" />
				<StyledInput label="" />
				<Range />
				<StyledButton>Submit</StyledButton>
			</StyledCard>
		</Container>
	);
};

export default Feedback;

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const StyledCard = styled(Card)`
	width: 500px;
	min-height: 300px;
`;

const Title = styled.div`
	${({theme}) => theme.text.headline};
	margin-bottom: 20px;
`;

const StyledInput = styled(TextInput)`
	margin-bottom: 20px;
	width: 100%;
	max-width: 100%;
	
	input {
		width: 100%;
	}
`;

const StyledButton = styled(Button)`
	width: 100%;
`;
