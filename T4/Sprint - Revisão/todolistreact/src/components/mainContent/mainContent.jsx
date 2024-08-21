import React from 'react';
import './mainContent.css';
import Container from '../container/container';
import { NovaTarefa } from '../button/button';

const MainContent = () => {
    return (
        <main className='main-content' >
            <Container />
            <NovaTarefa />
        </main>
    );
};

export default MainContent;