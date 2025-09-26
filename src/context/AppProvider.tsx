'use client';

import { ReactNode, useState } from 'react';
import FormContext from './FormContext';

export default function AppProvider({ children }: { children: ReactNode }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </FormContext.Provider>
  );
}
