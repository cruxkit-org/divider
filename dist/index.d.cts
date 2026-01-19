import { JSXElement } from '@minejs/jsx';

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    thickness?: 'super-thin' | 'thin' | 'medium' | 'thick';
    color?: '1' | '2' | '3' | 'brand' | 'current';
    opacity?: 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
    spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
    max?: number;
    className?: string;
    role?: string;
    'aria-orientation'?: 'horizontal' | 'vertical';
}

/**
 * Renders a visual divider line to separate content.
 *
 * @param props - Configuration for the divider’s appearance and behavior.
 * @param props.orientation - Direction of the divider: `"horizontal"` (default) or `"vertical"`.
 * @param props.variant - Border style: `"solid"` (default), `"dashed"`, or `"dotted"`.
 * @param props.thickness - Visual weight: `"thin"` (default), `"medium"`, or `"thick"`.
 * @param props.color - Color preset: `"1"`, `"2"` (default), `"3"`, `"brand"`, or `"current"`.
 * @param props.spacing - Optional spacing scale (0–12) applied as vertical/horizontal margin.
 * @param props.className - Additional CSS classes appended to the built-in styles.
 * @param props.role - ARIA role; defaults to `"separator"`.
 * @param props.restProps - Any other HTML attributes passed to the underlying `<div>`.
 * @returns A styled `<div>` acting as a horizontal or vertical separator.
 */
declare function Divider(props: DividerProps): JSXElement;

export { Divider, type DividerProps };
