import React from 'react';
import { Group, Path } from 'react-konva';

const SwitchIcon = ({ isOn = true, x = 0, y = 0, onToggle,deg }) => {
    const pathData = "M26.0139 32.7324C24.3337 32.7324 23.4936 32.7324 22.8519 32.4054C22.2874 32.1178 21.8285 31.6588 21.5408 31.0944C21.2139 30.4526 21.2139 29.6125 21.2139 27.9324L21.2139 26.2957C21.2139 24.6156 21.2139 23.7755 21.5408 23.1338C21.8285 22.5693 22.2874 22.1103 22.8519 21.8227C23.4936 21.4957 24.3337 21.4957 26.0139 21.4957L41.447 21.4957C42.4771 21.4957 43.3122 22.3308 43.3122 23.361C43.3122 24.3911 44.1473 25.2262 45.1774 25.2262H46.4639C46.6886 25.2262 46.801 25.2262 46.8321 25.2255C48.0245 25.2008 48.0896 25.1725 48.921 24.3173C48.9427 24.295 49.2333 23.9833 49.8147 23.3599C50.8197 22.2823 52.2521 21.6085 53.8418 21.6085C56.8824 21.6085 59.3473 24.0734 59.3473 27.114C59.3473 30.1546 56.8824 32.6194 53.8418 32.6194C52.2521 32.6194 50.8197 31.9456 49.8147 30.868C49.2333 30.2446 48.9427 29.9329 48.921 29.9106C48.0896 29.0554 48.0245 29.0271 46.8321 29.0024C46.801 29.0017 46.6886 29.0017 46.4639 29.0017L45.1775 29.0017C44.1473 29.0017 43.3122 29.8369 43.3122 30.8671C43.3122 31.8973 42.4771 32.7324 41.4469 32.7324L26.0139 32.7324Z";
    const scale = 0.7
    // Colors for different states
    const onColor = '#0A84FF';
    const offColor = '#393844'; // Change this to your desired "off" color
    return (
        <Group
            x={x}
            y={y}
            onClick={onToggle}
            onTap={onToggle}
            rotationDeg={deg}
            scale={{ x: scale, y: scale }}
        >
            {/* Gradient path (visible when on) */}
            <Path
                data={pathData}
                fillLinearGradientStartPoint={isOn ? { x: 0, y: 0.5 } : null}
                fillLinearGradientEndPoint={isOn ? { x: 1, y: 0.5 } : null}
                fillLinearGradientColorStops={isOn ? [0, onColor, 1, '#00D9FF'] : null}
                fill={isOn ? undefined : offColor}
            />

            {/* Solid color overlay (visible in both states) */}
            <Path
                data={pathData}
                fill={isOn ? onColor : offColor}
                opacity={0.7} // Adjust as needed to match original design
            />
        </Group>
    );
};

export default SwitchIcon;