import React from 'react';
import { X } from 'lucide-react';
import styled from 'styled-components';

const MobileNavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background: white;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
  overflow-y: auto;
  display: none;

  @media (max-width: 768px) {
    display: block;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const MenuButton = styled.button`
  display: none;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1a1a1b;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1a1a1b;
`;

const MobileNav = ({ isOpen, onClose, children }) => {
  return (
    <>
      <MobileNavOverlay isOpen={isOpen} onClick={onClose} />
      <MobileNavContent isOpen={isOpen}>
        <MobileNavHeader>
          <h2 className="text-lg font-semibold">Menu</h2>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </MobileNavHeader>
        {children}
      </MobileNavContent>
    </>
  );
};

export { MobileNav, MenuButton };