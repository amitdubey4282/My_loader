import React from 'react';
import './Loader.css';

interface LoaderProps {
    isLoading: boolean;
    children: React.ReactNode;
    width?: string;
    height?: string;
    variant?: 'rectangle' | 'circle';
    animation?: 'none' | 'wave';
}

const Loader: React.FC<LoaderProps> = ({ isLoading, children, width = '100%', height = '100%', variant = 'rectangle', animation = 'wave' }) => {
    if (isLoading) {
        return (
            <div className={`loader ${variant}`} style={{ width, height, minHeight: '16px' }}>
                <div className={`loader-gradient ${animation}`} style={{ width, height, minHeight: '16px' }}></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default Loader;
