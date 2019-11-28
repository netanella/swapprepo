import React, { useCallback} from 'react';
import styled from 'styled-components';
import {Card} from '@datorama/app-components';

import PRODUCTS from '../../mocks/products';

const Products = () => {
    const navigateToProduct = useCallback(() => {});

    return (
        <div>
            <ProductsContainer>
                {PRODUCTS.map(({name, imgSrc, condition, contact}) =>
                    <Card clickable onClick={navigateToProduct}>
                        <img src={imgSrc}></img>
                    </Card>
                )}
            </ProductsContainer>
        </div>
    );
};

const ProductsContainer = styled.div`
	display: flex;
	margin: auto;
	width: 500px;
	overflow-y: auto;
`;

export default Products;
