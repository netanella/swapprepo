import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Card, Progress, Button, Tag} from '@datorama/app-components';
import {useHistory} from 'react-router-dom';
import coin from "../../images/coin.png";
import PRODUCTS from "../../mocks/products";
import {withRouter} from 'react-router';


class Product extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            request: false
        };

        this.handleClick = this.handleClick.bind();
    }

    navigateToFeedback = () => {
        this.props.history.push('/feedback');
    };

    handleClick = () => {
        this.setState({request: !this.state.request});
    };

    render() {

        const requested = this.state.request? 'Pending...' : 'Request Now';

        return (
            <Container>
                <StyledCard>
                    <Row>
                        <Image/>
                        <Description>
                            <Row>
                                <Title>Baby clothes - 6 months</Title>
                                <StyledButton onClick={this.handleClick}>{requested}</StyledButton>
                            </Row>

                            <Category>Categories:
                                <StyledTag label="Cloths"/>
                                <StyledTag label="Infant"/>
                                <StyledTag label="Used"/>
                            </Category>
                            <Price> Price: 6 <Coin/>
                            </Price>
                            <ItemDetails>
                                My baby is all grown up now and these cloths no longer fit. They are in excellent condition
                                and would be happy to have a new loving home!
                            </ItemDetails>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.7309685994387!2d34.78288668608647!3d32.076524526680224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA0JzM1LjUiTiAzNMKwNDYnNTAuNSJF!5e0!3m2!1siw!2sus!4v1574955224944!5m2!1siw!2sus"
                                    width="600" height="230" frameBorder="0" allowFullScreen=""/>
                        </Description>
                    </Row>

                    <Divider/>

                    <Column>
                        <Title>Giver Profile</Title>

                        <Seller>
                            <Avatar onClick={this.navigateToFeedback}/>
                            <SellerLabel onClick={this.navigateToFeedback}>John Doe</SellerLabel>
                        </Seller>

                        <StyledProgress label="Condition" percentage={20}/>
                        <StyledProgress label="Responsiveness" percentage={20}/>
                        <StyledProgress label="Trust worthy" percentage={20}/>
                    </Column>
                </StyledCard>

            </Container>
        );
    }
};

export default withRouter(Product);

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
	height: 500px;
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
	font-size: 30px;
	margin-bottom: 20px;
`;

const Seller = styled.div`
	${({theme}) => theme.text.smBold};
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	box-sizing: border-box;
	border-radius: 4px;
`;

const Avatar = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: url("https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg") no-repeat center center;
	background-size: cover;
	cursor: pointer;
`;

const SellerLabel = styled.div`
	${({theme}) => theme.text.sm};
	padding: 0 10px;
	font-size: 20px;
	cursor: pointer;
`;


const Category = styled.div`
	margin-bottom: 10px;
	display: flex;
    flex-direction: row;
`;

const Price = styled.div`
	margin-bottom: 10px;
	display: flex;
    flex-direction: row;
`;

const ItemDetails = styled.div`
    margin: 20px 0;
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

const StyledTag = styled(Tag)`
	margin: 0 4px;
`;

const Coin = styled.span`
	background: url(${coin}) no-repeat center;
	height: 25px;
	width: 25px;
	background-size: contain;
	margin: 0 3px;
`;
