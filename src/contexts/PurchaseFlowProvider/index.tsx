import { createContext, ReactNode, useState } from 'react';

interface IPurchaseFlowContext {
  showModal: boolean;
  setShowModal: Function;
}

export const PurchaseFlowContext = createContext<IPurchaseFlowContext>({
  showModal: false,
  setShowModal: (_: boolean) => {},
});

export const PurchaseFlowProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return <PurchaseFlowContext.Provider value={{ showModal, setShowModal }}>{children}</PurchaseFlowContext.Provider>;
};
