import styled, { css } from 'styled-components';

// Default track colors
const defaultUnselectedColor = '#b3b3b3';
const defaultHighlightedColor = '#404040';

const getTrackColor = (
    {
        value,
        theme,
        highlightedTrackColor = defaultHighlightedColor,
        unselectedTrackColor = defaultUnselectedColor,
    },
    useTheme = false
) => {
    const selectedColor = useTheme ? theme.primary : highlightedTrackColor;

    return css`
        background: linear-gradient(
            to right,
            ${selectedColor} 0%,
            ${selectedColor} ${value}%,
            ${unselectedTrackColor} ${value}%,
            ${unselectedTrackColor} 100%
        );
    `;
};

export const StyledSlider = styled.input.attrs()`
    appearance: none;
    width: 100%;
    background: transparent;

    &::-webkit-slider-thumb {
        appearance: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 1.3px;

        ${getTrackColor}
    }

    &:hover::-webkit-slider-thumb {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary};
        cursor: pointer;
        margin-top: -4px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }

    &:focus {
        outline: none;
    }

    &:hover {
        &::-webkit-slider-runnable-track {
            ${props => getTrackColor(props, true)}
        }
    }
`;
