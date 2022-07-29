import React, { createContext, useContext, useState, useRef } from "react";

import { Modal } from "@/components";
import { ModalContextOpenOptions, ModalContextProps } from "./typings";

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider: React.FC = ({ children }) => {
  const modalProps = useRef<any>({});
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    if (typeof modalProps?.current?.onClose === "function") {
      modalProps?.current?.onClose();
    }
    modalProps.current = undefined;
    setTimeout(function () {
      setIsOpen(false);
    });
  };

  const openModal = (title: string, options?: ModalContextOpenOptions) => {
    const hasContent = typeof options?.content === "function";
    modalProps.current = {
      ...options,
      title,
      renderContent: hasContent ? options?.content : () => null,
    };
    setTimeout(function () {
      setIsOpen(true);
    });
  };

  return (
    <ModalContext.Provider value={{ open: openModal, close: closeModal }}>
      {isOpen === true && (
        <Modal
          title={modalProps?.current?.title || "unknown"}
          close={closeModal}
          show
        >
          {modalProps?.current?.renderContent({ close: closeModal })}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};
