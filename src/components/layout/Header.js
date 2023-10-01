import styled from '@emotion/styled';

const Header = () => {
  return (
    <SHeader>
      <img src="/EUTCHA.png" width={500} />
    </SHeader>
  );
};

const SHeader = styled.header`
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
