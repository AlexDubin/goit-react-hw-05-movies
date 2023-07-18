import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SiThemoviedatabase } from 'react-icons/si';
import { ColorRing } from 'react-loader-spinner';
import style from './Layout.module.css'

const Layout = () => {
  const StyledLink = styled(NavLink)`
    color: white;

    &.active {
      color: rgb(242, 115, 4);
    }
  `;

  return (
    <div>
      <header>
        <div className={style.navContainer}>
        <nav >
          <ul className={style.naviList}>
            <li className={style.logo}>
              <StyledLink to="/">
                <SiThemoviedatabase
                  style={{
                    color: 'rgb(242, 115, 4)',
                    
                    width: '40',
                    height: '40',
                  }}
                />
              </StyledLink>
            </li>
            <li className={style.home}>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li className={style.movies}>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
          </nav>
          </div>
      </header>
      <main>
        <div className={style.navContainer}>
        <Suspense fallback={<ColorRing type="Puff" color="#00BFFF" height={100} width={100} />}>
          <Outlet />
          </Suspense>
          </div>
      </main>
    </div>
  );
};

export default Layout;
