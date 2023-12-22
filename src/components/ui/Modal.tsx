import React, { useEffect, useRef } from 'react';

interface ModalProps {
  children: any;
  visible: boolean;
  setVisible: (newValue: boolean) => void;
  width: string;
  height: string;
  className?: string;
}
const Modal = ({ children, visible, setVisible, width, height = 'initial', className }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick: (event: MouseEvent) => void = (event: MouseEvent) => {
      if (modalRef.current && !modalRef?.current?.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setVisible]);

  return (
    visible && (
      <div className={`modal ${visible ? 'is-open' : 'is-closing'}`}>
        <div
          className={`modal-container ${className || ''}`}
          style={{ width: width, height: height }}
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
