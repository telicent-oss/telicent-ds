import { default as React } from 'react';

declare const useTheme: () => {
    setTheme: (theme: string) => void;
    storedTheme: string | null;
    toggleTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useTheme;
