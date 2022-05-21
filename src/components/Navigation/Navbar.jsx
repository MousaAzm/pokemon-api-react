import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import styled from "styled-components";
import topLogo from "../../assets/images/top-logo.png";
import bottomLogo from "../../assets/images/bottom-logo.png";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
        <Sidebar>
          <Inner>
            <Topimg src={topLogo} alt="img-logo" />
            <Nav>
              <Ul>
                <Li>
                  <Link onClick={() => navigate(RoutingPath.pokemonView)}>
                    Pokemon
                  </Link>
                </Li>
                <Li>
                  <Link onClick={() => navigate(RoutingPath.aboutView)}>
                    About
                  </Link>
                </Li>
              </Ul>
            </Nav>
            <Bottomimg src={bottomLogo} alt="img-logo" />
          </Inner>
        </Sidebar>
    </>
  );
};

const Sidebar = styled.div`
  max-width: 200px;
  height: 100%;
  position: fixed;
  background-color: #333269;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;
const Nav = styled.nav`
  flex: 2 1 auto;
`;
const Ul = styled.ul`
  padding: 35px 0;
  list-style: none;
`;
const Li = styled.li`
  text-align: center;
`;
const Link = styled.span`
  display: flex;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 500;
  padding: 15px 0 15px 65px;
  width: 100%;
  text-decoration: none;
  line-height: 24px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  &:hover {
    color: #5855d6;
    background: #fff;
    text-decoration: none;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Topimg = styled.img`
  padding: 15px;
  flex: 0 1 auto;
`;
const Bottomimg = styled.img`
  padding: 8px;
  flex: 0 1 auto;
`;
