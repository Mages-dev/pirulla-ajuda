import React, { ReactNode, useState } from 'react';
import Image from 'next/image'
import { Button, DropdownContent } from './styled';

export type DropButtonPosition = 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight';
export type CaptionConfig = 'ImageLeft' | 'ImageRight';

interface DropDownFormProps {
  buttonImage?: string;
  buttonText?: string;
  buttonImagePosition?: CaptionConfig;
  buttonForeColor: string;
  buttonBackColor: string;
  dropButtonPosition?: DropButtonPosition;
  children: ReactNode;
}

const DropDownForm: React.FC<DropDownFormProps> = ({
  buttonImage,
  buttonText,
  buttonImagePosition = 'ImageLeft', // Default position
  buttonForeColor,
  buttonBackColor,
  dropButtonPosition = 'TopRight', // Default drop position
  children,
}) => {
  if (!buttonImage && !buttonText) {
    throw new Error('At least one of buttonImage or buttonText must be provided');
  }

  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        onClick={toggleDropdown}
        foreColor={buttonForeColor}
        backColor={buttonBackColor}
        className={`rounded ${isOpen ? 'active' : ''}`} // Example of conditional class
      >
        {buttonImage && <Image src={buttonImage} alt="" className={buttonImagePosition === 'ImageLeft' ? 'mr-2' : 'ml-2'} />}
        {buttonText}
      </Button>
      {isOpen && (
        <DropdownContent
          position={dropButtonPosition}
          className="rounded"
          // Add your Tailwind classes for coloring and positioning based on props
        >
          {children}
        </DropdownContent>
      )}
    </div>
  );
};

export default DropDownForm;