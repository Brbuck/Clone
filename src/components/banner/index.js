import React from 'react';
import Button from '../button';
import { Container } from './styles';

function banner() {
    return (
        <Container>
            <div>
                <h2>Existimos para você atingir o seu</h2>
                <h3>objetivo no mercado financeiro.</h3>
                <p>Desenvolvemos tecnologias diferenciadas,
                 pois entendemos o que realmente é preciso para um trading de alta performance.</p>
                <div>
                    <Button title="Testar Agora" />
                    <Button title="Conheça o Profit" />
                </div>
            </div>

        </Container>
    );
}

export default banner;