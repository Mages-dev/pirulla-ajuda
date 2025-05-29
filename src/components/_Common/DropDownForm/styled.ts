// Example pseudo-code for styled components with Tailwind CSS
import styled from 'styled-components';
import { DropButtonPosition } from './index';


export const Button = styled.button<{ foreColor: string; backColor: string }>`
  // Apply Tailwind classes dynamically based on props
  background-color: ${props => props.backColor};
  color: ${props => props.foreColor};
  // Add more styling as needed
`;

export const DropdownContent = styled.div<{ position: DropButtonPosition }>`
  /*
  Position the dropdown based on the position prop
  You may need to write custom CSS here or apply Tailwind classes dynamically
  Example: ${props => (props.position === 'TopRight' ? '...' : '...')}
  */
`;
