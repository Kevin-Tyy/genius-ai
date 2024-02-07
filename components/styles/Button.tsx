import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button`
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 48.05%, rgba(0, 0, 0, 0.2) 48.9%),
    linear-gradient(180deg, rgba(49, 58, 91, 0) -19.57%, #313a5b 98.8%, rgba(49, 58, 91, 0.22) 130.43%);
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
