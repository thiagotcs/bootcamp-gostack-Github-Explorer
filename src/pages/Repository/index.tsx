import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
     <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
            <FiChevronLeft size={16} />
            Voltar
        </Link>
     </Header>
     <RepositoryInfo>
         <header>
             <img src="https://avatars3.githubusercontent.com/u/53226663?s=460&u=ae4b0fbaf793c12c7c1018693a143784a1dbb5f5&v=4" alt="Rocketseat"/>
             <div>
                <strong>rocketseat/uniform</strong>
                <p>decrição do repositorio</p>
             </div>
         </header>
        <ul>
            <li>
                <strong>1808</strong>
                <span>Stars</span>
            </li>
            <li>
                <strong>48</strong>
                <span>Forks</span>
            </li>
            <li>
                <strong>67</strong>
                <span>Issues abertas</span>
            </li>
        </ul>
     </RepositoryInfo>
     <Issues>
     <Link  to={`aaaaaa`}>
                    <div>
               <strong>aaaaa</strong>
               <p>aaa</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
     </Issues>
        </>
    )
};

export default Repository;
