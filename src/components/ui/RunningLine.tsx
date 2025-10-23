import RunningLineHolyTraffSVG from '@/assets/RunningLineHolyTraffSVG';
import React from 'react';

interface RunningLineProps {
    speed?: number; // скорость в секундах
    className?: string;
    count?: number; // количество дубликатов SVG
}

const RunningLine: React.FC<RunningLineProps> = ({
    speed = 200, // Уменьшили в 2 раза для удвоения скорости
    className = '',
    count = 8 // количество дубликатов для бесшовного цикла
}) => {
    // Создаем массив дубликатов SVG для бесшовного цикла
    const svgElements = Array.from({ length: count }, (_, index) => (
        <div key={index} className="running-line__svg-item">
            <RunningLineHolyTraffSVG />
        </div>
    ));

    return (
        <div className={`running-line ${className}`}>
            <div
                className="running-line__content"
                style={{
                    animationDuration: `${speed}s`,
                    '--svg-width': '229px' // CSS переменная для ширины SVG
                } as React.CSSProperties}
            >
                {svgElements}
            </div>
        </div>
    );
};

export default RunningLine;
