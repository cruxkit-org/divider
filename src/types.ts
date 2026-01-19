// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface DividerProps {
        // Orientation
        orientation?        : 'horizontal' | 'vertical';

        // Variant
        variant?            : 'solid' | 'dashed' | 'dotted';

        // Thickness
        thickness?          : 'super-thin' | 'thin' | 'medium' | 'thick';

        // Color
        color?              : '1' | '2' | '3' | 'brand' | 'current';

        // Opacity
        opacity?            : 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;

        // Spacing
        spacing?            : 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;

        // Max dimension percentage
        max?                : number;

        // Styling
        className?          : string;

        // Accessibility
        role?               : string;
        'aria-orientation'? : 'horizontal' | 'vertical';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
