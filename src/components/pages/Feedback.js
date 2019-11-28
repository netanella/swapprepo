import React, {useCallback, useState} from 'react';
import {Card, TextInput, Range, Button} from '@datorama/app-components';
import styled from 'styled-components';
import Confetti from 'react-dom-confetti';

const config = {
	angle: 90,
	spread: 45,
	startVelocity: 45,
	elementCount: 60,
	dragFriction: 0.1,
	duration: 4000,
	stagger: 0,
	width: "10px",
	height: "10px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Feedback = () => {
	const [active, setActive] = useState(false);
	const handleClick = useCallback(() => {
		setActive(true);
	}, [active]);
	
	return (
		<Container>
			<Title>Feedback form</Title>
			<StyledCard>
				<Label>Condition</Label>
				<StyledRange min={0} max={100} initialValue={50} onChange={console.log}/>
				
				<Label>Responsiveness</Label>
				<StyledRange min={0} max={100} initialValue={50} onChange={console.log}/>
				
				<Label>Trust worthy</Label>
				<StyledRange min={0} max={100} initialValue={50} onChange={console.log}/>
				
				<StyledInput label="Comments"/>
				<StyledButton onClick={handleClick}>Submit</StyledButton>
				<ConfettiContainer>
					<Confetti active={active} config={config}/>
				</ConfettiContainer>
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

const Label = styled.div`
	${({theme}) => theme.text.smBold}
`;

const StyledRange = styled(Range)`
	margin-bottom: 20px;
`;

const ConfettiContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
