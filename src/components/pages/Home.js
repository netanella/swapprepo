import React, {useCallback} from 'react';
import heroImg from '../../images/hero.jpg';
import styled from 'styled-components';
import {TextInput, Button} from '@datorama/app-components';
import TextLoop from 'react-text-loop';
import {useHistory} from 'react-router-dom';


const Home = () => {
	const history = useHistory();
	const handleClick = useCallback(() => {
		history.push('/products');
	}, []);
	
	return (
		<Content>
			<Hero/>
			<Text>
				Give your
				<LoopWrapper>
					<TextLoop>
						<span>newborn clothes</span>
						<span>kid's toys</span>
						<span>baby stroller</span>
					</TextLoop>
				</LoopWrapper>
				and XXXXZ XXXXX
			</Text>
			<Card>
				<StyledTextInput large label="What"/>
				<StyledTextInput large label="Where"/>
				<StyledButton onClick={handleClick}>Search</StyledButton>
			</Card>
		</Content>
	);
};

export default Home;

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
`;

const Hero = styled.div`
  width: 100%;
  height: 700px;
  background: url(${heroImg}) no-repeat center center;
  background-size: cover;
`;

const Card = styled.div`
	position: absolute;
	width: 700px;
	left: calc(50vw - 700px / 2);
	height: 100px;
	background: #fff;
	top: calc(450px - 50px);
	border-radius: 4px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const StyledTextInput = styled(TextInput)`
margin: 0 10px;
`;

const StyledButton = styled(Button)`
	margin-top: 20px;
	width: 120px;
	margin-left: 10px;
`;

const Text = styled.div`
	width: 100vw;
	position: absolute;
	top: 300px;
	left: 0;
	display: flex;
	justify-content: center;
	font-size: 40px;
	color: #fff;
	text-align: center;
	text-shadow: 2px 4px rgba(0, 0, 0, 0.5);
`;

const LoopWrapper = styled.span`
	margin: 0 10px;
`;
