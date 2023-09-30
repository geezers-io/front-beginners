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
  height: 80px;
  margin-top: 0;
  background-color: black;
  z-index: 10;

  img {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Header;
