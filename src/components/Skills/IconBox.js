import { MdLaptopChromebook } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0;
  margin: 8px;
  box-sizing: border-box;
  height: 67px;
  width: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  transition: color 0.25s, transform 0.25s;

  &:hover {
    color: ${(props) => props.color};
    transform: scale(1.2);
  }
`;

export default function IconBox(props) {
  return <Wrapper color={props.color}>{props.icon}</Wrapper>;
}
