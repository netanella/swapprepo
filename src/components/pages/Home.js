import React from 'react';
import heroImg from '../../images/hero.jpg';
import styled from 'styled-components';

const Home = () => {
	return (
		<Content>
			<Hero/>
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
