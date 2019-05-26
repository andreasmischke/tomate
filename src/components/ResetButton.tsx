import styled from 'styled-components';

const ResetButton = styled.div`
  display: inline-block;
  width: 10vw;
  height: 10vw;
  position: relative;
  padding: 0;
  background: none;
  border-top: 1vw solid #ffffff77;
  border-bottom: 1vw solid #ffffff78;
  border-right: 1vw solid #ffffff77;
  border-left: 1vw solid transparent;
  border-radius: 10vw;

  :after {
    content: "";
    display: block;
    position: absolute;
    border-top: 3vw solid transparent;
    border-bottom: 3vw solid transparent;
    border-right: 3vw solid #ffffff77;
    transform: rotate(-45deg) translate(-0.5vw,-1.3vw);
  }
`;

export default ResetButton;