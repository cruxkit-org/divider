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
        thickness?          : 'thin' | 'medium' | 'thick';

        // Color
        color?              : '1' | '2' | '3' | 'brand' | 'current';

        // Spacing
        spacing?            : 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;

        // Styling
        className?          : string;

        // Accessibility
        role?               : string;
        'aria-orientation'? : 'horizontal' | 'vertical';
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
