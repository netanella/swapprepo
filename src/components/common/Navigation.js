import React, {useCallback} from 'react';
import styled from 'styled-components';
import logoImg from "../../images/logo.svg";
import avatarImg from "../../images/avatar.jpg";
import {useHistory} from 'react-router-dom';

const Navigation = () => {
	const history = useHistory();
	const handleClick = useCallback(() => {
		history.push('/');
	}, []);
	
	return (
		<Container>
			<Logo onClick={handleClick}/>
			<User>
				<Avatar/>
				<Label>1280</Label>
			</User>
		</Container>
	);
};

export default Navigation;

const Container = styled.div`
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
	cursor: pointer;
`;

const User = styled.div`
	display: flex;
	align-items: center;
	background: ${({theme}) => theme.a100};
	box-sizing: border-box;
	border-radius: 4px;
`;

const Label = styled.div`
	${({theme}) => theme.text.sm};
	padding: 0 10px;
`;

const Avatar = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 5px;
	background: url(${avatarImg}) no-repeat center center;
	background-size: cover;
`;
