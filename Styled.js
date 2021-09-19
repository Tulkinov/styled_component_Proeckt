import styled from "styled-components";
import { ReactComponent as User } from "./rasm/user.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: fit-content;
  border: 2px solid #445859;
  margin: 15px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
export const Title = styled.div`
  color: #e7c961;
  font-size: 28px;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  border-radius: 4px;
  margin-top: 20px;
  outline: none;
  padding-left: 35px;
  color: white;
  font-size: 22px;
`;

export const UserIcon = styled(User)`
  position: absolute;
  top: 50%;
  left: 10px;
  color: white;
  width: 25px;
`;
export const Button = styled.button`
  width: 123px;
  height: 45px;
  background-color: #00908d;
  color: white;
  font-weight: 700;
  font-size: 20px;
  margin-top: ${(props) => (props.select ? "0px" : "20px")};
  margin-left: auto;
  border: 0;
  outline: none;
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
export const ChekBox = styled.input`
  width: 35px;
  height: 35px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  margin-right: 15px;
`;
export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-radius: 4px;
  color: white;
`;

export const Forget = styled.div`
  margin-left: auto;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-weight: 500px;
`;
