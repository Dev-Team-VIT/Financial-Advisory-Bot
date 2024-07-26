import React, { createContext, useState, useContext, ReactNode } from 'react';

type AlertType = 'success' | 'failure' | null;

interface AlertContextProps {
  alertType: AlertType;
  setAlert: (type: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alertType, setAlertType] = useState<AlertType>(null);

  const setAlert = (type: AlertType) => {
    setAlertType(type);
    setTimeout(() => {
      setAlertType(null);
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ alertType, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
