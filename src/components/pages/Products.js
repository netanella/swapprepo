import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Card, Select, TextInput, Button} from '@datorama/app-components';
import {useHistory} from 'react-router-dom';

import PRODUCTS from '../../mocks/products';

const Products = () => {
	const history = useHistory();
	
	const condition = [
		{ value: '1', label: 'new' },
		{ value: '2', label: 'used' },
		{ value: '3', label: 'black' },
		{ value: '4', label: 'green' },
		{ value: '5', label: 'yellow' },
		{ value: '6', label: 'white' }
	];
	
	const category = [
		{ value: '1', label: 'toys' },
		{ value: '2', label: 'strollers' },
		{ value: '3', label: 'clothes' },
		{ value: '4', label: 'safety car seats' },
		{ value: '5', label: 'baby chairs' },
	];
	
	const location = [
		{ value: '1', label: 'Tel Aviv' },
		{ value: '2', label: 'Jerusalem' },
		{ value: '3', label: 'Beer Sheva' },
	];
	
	const navigateToProduct = useCallback(() => {
		history.push('/product');
	}, []);
	
	return (
		<Container>
			<Header>
				<StyledInput placeholder="baby clothes" />
				<StyledSelect
					placeholder="Condition"
					options={condition}
					onChange={() => null}
					values={[]}
				/>
				<StyledSelect
					placeholder="Category"
					options={category}
					onChange={() => null}
					values={[]}
				/>
				<StyledSelect
					placeholder="Location"
					options={location}
					onChange={() => null}
					values={[]}
				/>
				<Button onClick={() => null}>Search</Button>
			</Header>
			
			<ProductsContainer>
				{PRODUCTS.map(({name, imgSrc, condition, contact, rating}, i) =>
					<StyledCard clickable onClick={navigateToProduct} key={`card-${i}`}>
						<Image src={imgSrc}/>
						<Name>{name}</Name>
						<Condition>{condition}</Condition>
						<Contact>{contact} ({rating})</Contact>
					</StyledCard>
				)}
			</ProductsContainer>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Header = styled(Card)`
	width: calc(100vw - 100px);
	margin-left: 50px;
	margin-top: 60px;
	display: flex;
	height: 60px;
	box-sizing: border-box;
	align-items: center;
	padding: 0 40px;
`;

const ProductsContainer = styled.div`
	display: flex;
	margin: auto;
	width: 100vw;
	box-sizing: border-box;
	padding: 50px;
	overflow-y: auto;
	flex-wrap: wrap;
`;

const Image = styled.div`
	width: 100%;
	height: 200px;
	margin-bottom: 10px;
	background: url(${({src}) => src}) no-repeat center;
`;

const StyledCard = styled(Card)`
	width: calc((100vw - 100px) / 5 - 20px);
	min-height: calc((100vw - 100px) / 5 - 20px);
	margin: 10px;
`;

const Name = styled.div`
	${({theme}) => theme.text.smBold};
	font-size: 18px;
`;

const Condition = styled.div`
	${({theme}) => theme.text.smBold};
`;

const Contact = styled.div`
	${({theme}) => theme.text.smBold};
`;

const StyledSelect = styled(Select)`
	margin: 0 5px;
`;

const StyledInput = styled(TextInput)`
	margin: 0 5px;
`;

export default Products;
