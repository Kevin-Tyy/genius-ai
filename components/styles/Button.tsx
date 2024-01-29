import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button`
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.87);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 48.05%, rgba(0, 0, 0, 0.20) 48.9%),
    linear-gradient(180deg, rgba(49, 58, 91, 0.00) -19.57%, #313A5B 98.8%, rgba(49, 58, 91, 0.22) 130.43%);
  box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.80);


`;


const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
