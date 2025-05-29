import React, { ReactNode } from 'react';
import {
  StyledLayout
} from './styled'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
)

export default Layout