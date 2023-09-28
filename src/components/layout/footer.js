import styled from '@emotion/styled';

const Footer = () => {
  return (
    <SFooter>
      <div>
        <h2>푸터</h2>
      </div>
    </SFooter>
  );
};

const SFooter = styled.footer`
  height: 80px;
  margin-top: auto;
  background-color: grey;

  h2 {
  }
`;

export default Footer;
