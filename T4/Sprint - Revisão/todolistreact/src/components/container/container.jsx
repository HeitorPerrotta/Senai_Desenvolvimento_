import React from 'react';
import './container.css';
import Input from '../input/input';
import Toggle from '../toggle/toggle';
import CheckBox from '../checkbox/checkbox';
import Title from '../title/title';
import { DeleteButton, EditButton } from '../button/button';

const Container = ( { children } ) => {
    return (
        <div className='container'>
            {children}
            <Title />
            <Input />
            <Toggle>
            <CheckBox />
            <p className='textoToggle'>Aqui eu vou inserir o meu Lorem Ipsum</p>
            <EditButton />
            <DeleteButton />
            </Toggle>
        </div>
    );
};

export default Container;