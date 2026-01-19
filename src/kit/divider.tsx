// src/kit/divider.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement   } from '@minejs/jsx';
    import type { DividerProps } from '../types';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

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
    export function Divider(props: DividerProps): JSXElement {
        const {
            orientation     = 'horizontal',
            variant         = 'solid',
            thickness       = 'thin',
            color           = '2',
            opacity         = 50,
            spacing,
            className      : className,
            role            = 'separator',
            ...restProps
        } = props;

        // Thickness classes
        const thicknessClasses = {
            horizontal: {
                'super-thin': 'border-t border-1',
                thin        : 'border-t',
                medium      : 'border-t-2',
                thick       : 'border-t-4'
            },
            vertical: {
                'super-thin': 'border-s border-1',
                thin        : 'border-s',
                medium      : 'border-s-2',
                thick       : 'border-s-4'
            }
        };

        // Variant classes
        const variantClasses = {
            solid           : 'border-solid',
            dashed          : 'border-dashed',
            dotted          : 'border-dotted'
        };

        // Color classes
        const colorClasses = {
            '1'             : 'border-c1',
            '2'             : 'border-c2',
            '3'             : 'border-c3',
            'brand'         : 'border-brand',
            'current'       : 'border-current'
        };

        const opacityClasses = {
            0               : 'opacity-0',
            5               : 'opacity-5',
            10              : 'opacity-10',
            20              : 'opacity-20',
            25              : 'opacity-25',
            30              : 'opacity-30',
            40              : 'opacity-40',
            50              : 'opacity-50',
            60              : 'opacity-60',
            70              : 'opacity-70',
            75              : 'opacity-75',
            80              : 'opacity-80',
            90              : 'opacity-90',
            95              : 'opacity-95',
            100             : 'opacity-100'
        };

        // Spacing classes
        const spacingClasses = spacing !== undefined ? {
            horizontal: {
                0           : 'my-0',
                1           : 'my-1',
                2           : 'my-2',
                3           : 'my-3',
                4           : 'my-4',
                6           : 'my-6',
                8           : 'my-8',
                12          : 'my-12'
            },
            vertical: {
                0           : 'mx-0',
                1           : 'mx-1',
                2           : 'mx-2',
                3           : 'mx-3',
                4           : 'mx-4',
                6           : 'mx-6',
                8           : 'mx-8',
                12          : 'mx-12'   
            }
        }[orientation][spacing] : '';

        // Base classes
        const baseClasses = [
            thicknessClasses[orientation][thickness],
            variantClasses[variant],
            colorClasses[color],
            opacityClasses[opacity],
            spacingClasses,
            orientation === 'horizontal' ? 'w-full' : 'h-full',
            className
        ]
            .filter(Boolean)
            .join(' ');

        const { style, max = 90, ...restPropsWithoutStyle } = restProps as { style?: Record<string, unknown>; max?: number };
        const dimensionKey = orientation === 'horizontal' ? 'maxWidth' : 'maxHeight';
        const mergedStyle = {
            ...style,
            [dimensionKey]: `${max}%`
        };

        return (
            <div
                className={baseClasses}
                role={role}
                aria-orientation={orientation}
                style={mergedStyle}
                {...restPropsWithoutStyle}
            />
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
