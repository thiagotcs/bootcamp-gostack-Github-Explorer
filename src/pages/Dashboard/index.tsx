import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
        <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
        <input placeholder="Digite o nome do Repositório." />
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        <a href="teste">
            <img src="https://avatars3.githubusercontent.com/u/53226663?s=460&u=ae4b0fbaf793c12c7c1018693a143784a1dbb5f5&v=4" alt="Thiago Carvalho" />
            <div>
              <strong>rocketseat/uniform</strong>
               <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

        <FiChevronRight size={20} />
        </a>

        <a href="teste">
            <img src="https://avatars3.githubusercontent.com/u/53226663?s=460&u=ae4b0fbaf793c12c7c1018693a143784a1dbb5f5&v=4" alt="Thiago Carvalho" />
            <div>
              <strong>rocketseat/uniform</strong>
               <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

        <FiChevronRight size={20} />
        </a>
        <a href="teste">
            <img src="https://avatars3.githubusercontent.com/u/53226663?s=460&u=ae4b0fbaf793c12c7c1018693a143784a1dbb5f5&v=4" alt="Thiago Carvalho" />
            <div>
              <strong>rocketseat/uniform</strong>
               <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>

        <FiChevronRight size={20} />
        </a>

    </Repositories>
    </>
    );
};

export default Dashboard;
