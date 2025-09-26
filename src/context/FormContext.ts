import { createContext } from 'react';

interface FormContextType {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export default FormContext;
