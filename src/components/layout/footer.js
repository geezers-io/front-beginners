import styled from '@emotion/styled';

const Footer = () => {
  return (
    <SFooter>
      <div className="contents">
        <h2 className="title">푸터</h2>
      </div>
    </SFooter>
  );
};

const SFooter = styled.footer`
  height: 80px;
  margin-top: auto;
  background-color: grey;
`;

export default Footer;
