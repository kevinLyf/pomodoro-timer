import styled from "styled-components";

interface IProps {
  isStart: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
 
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 26rem;
  height: 20rem;
  background-color: #F48484;
  border-radius: 5px;
`;

export const Button = styled.button<IProps>`
  width: 16rem;
  height: 4rem;
  font-size: 24pt;
  border-radius: 5px;
  background-color: #e64848;
  color: #fff;  
  font-weight: 600;
  cursor: pointer;

  box-shadow: ${(props) => (props.isStart ? "#DdDdDd 0px 6px 0px" : "none")};

  &:hover {
    transition: all 0.2s ease;
    background-color: #e6484f;
  }
`;

export const Timer = styled.span`
  font-size: 69pt;
  font-weight: 700;
  color: #fff;
`;
