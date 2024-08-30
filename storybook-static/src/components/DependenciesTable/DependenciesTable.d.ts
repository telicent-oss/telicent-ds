import { default as React } from 'react';

interface DependenciesTable {
    dependencies: {
        [key: string]: string;
    };
    className?: string;
}
declare const DependenciesTable: React.FC<DependenciesTable>;
export default DependenciesTable;
