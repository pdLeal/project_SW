import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
`;

function Picture({
    mobileImg,
    pcImg,
    alt = 'Coloca esse alt mermão'}) {
    return (
        <picture>
            <source srcSet={pcImg} media='(min-width: 600px)' />
            <Img src={mobileImg} alt={alt} />
        </picture>
    )
}

export default Picture