import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Card, Progress, Button} from '@datorama/app-components';
import {useHistory} from 'react-router-dom';

const Product = () => {
	const history = useHistory();
	const navigateToFeedback = useCallback(() => {
		history.push('/feedback')
	}, []);
	
	return (
		<Container>
			<StyledCard>
				<Row>
					<Image/>
					<Description>
						<Row>
							<Title>Baby clothes - 6 months</Title>
							<StyledButton onClick={navigateToFeedback}>Get It</StyledButton>
						</Row>
						<Seller>John do</Seller>
						
						<Category>Clothes</Category>
						<Condition>Used</Condition>
						<Comments>
							My baby work it for a askdjas dklajshd klasjdkl asjdlkaj skldajsldk ajsl k
							ajklshdajksdhjkashdkjasdhkjasdhkajshdakjsdhkajsdhakjsdhaksj
						</Comments>
					</Description>
				</Row>
				
				<Divider/>
				
				<Column>
					<Title>Giver Profile</Title>
					<Seller>John do</Seller>
					
					<StyledProgress label="Condition" percentage={20}/>
					<StyledProgress label="Responsiveness" percentage={20}/>
					<StyledProgress label="Trust worthy" percentage={20}/>
				</Column>
			</StyledCard>
		
		</Container>
	);
};

export default Product;

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledCard = styled(Card)`
	width: 80vw;
	min-height: 500px;
	margin-top: 60px;
`;

const Row = styled.div`
	display: flex;
`;

const Image = styled.div`
	flex: 1;
	height: 400px;
	background: url("https://media.karousell.com/media/photos/products/2016/06/22/used_baby_clothes_1466573888_e4786b82.jpg") no-repeat center;
	border-radius: 5px;
`;

const Description = styled.div`
	flex: 1;
	box-sizing: border-box;
	padding: 40px;
`;

const Title = styled.div`
	${({theme}) => theme.text.smBold};
	font-size: 20px;
	margin-bottom: 20px;
`;

const Seller = styled.div`
	${({theme}) => theme.text.smBold};
	margin-bottom: 20px;
`;

const Category = styled.div`
	${({theme}) => theme.text.smBold};
	margin-bottom: 10px;
`;

const Condition = styled.div`
	${({theme}) => theme.text.smBold};
	margin-bottom: 10px;
`;

const Comments = styled.div`
	${({theme}) => theme.text.smBold};
`;

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background: #e0e0e0;
	margin: 40px 0;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
`;

const StyledProgress = styled(Progress)`
	margin: 10px 0;
	
	.label {
		width: 100px;
	}
`;

const StyledButton = styled(Button)`
	margin-left: auto;
`;
