import * as React from 'react';
import { useContext } from '../utils/context';

const Header = () => {
    const { currentQuestion, amount } = useContext();
    return (
        <header>
            <h2>Questionário</h2>
            {currentQuestion == null ?
                <p>Para iniciar, digite quantas questões deseja responder e clique em <b>Começar</b>.</p>
                :
                <h3>{currentQuestion + 1}/{amount}</h3>
            }

        </header>
    );
}

Header.propTypes = {}

export default Header;