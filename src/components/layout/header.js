import styled from '@emotion/styled';
import logo from './EUTCHA.png';

const Header = () => {
  return (
    <Header_css>
      <div>
        <img src={logo} />
      </div>
    </Header_css>
  );
};

const Header_css = styled.header`
  margin-top: 0;
  padding: 10px 0;
  margin-bottom: 1.8em;
  background-color: black;
  z-index: 10;
  background-position: center;

  img {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Header;
