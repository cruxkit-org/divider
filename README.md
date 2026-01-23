<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.6-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/divider?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/divider?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀
    - #### Why ?
        > Clean visual separation without extra CSS.

    - #### When ?
        > Between sections, cards, or list items.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/divider
    ```

    ```ts
    // in your ts files
    import { Divider } from '@cruxkit/divider';
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>

    - ### Basic usage

        ```typescript
        export default () => (
            <div>
                <h1>Section 1</h1>
                <Divider />
                <p>Content goes here...</p>
            </div>
        );
        ```

    - ### Variants and utilities

        ```typescript
        export default () => (
            <div className="flex flex-col gap-4">
                {/* Variants */}
                <Divider variant="dashed" />
                <Divider variant="dotted" />

                {/* Colors and Thickness */}
                <Divider color="brand" thickness="super-thin" />
                <Divider color="brand" thickness="thick" />

                {/* Vertical Divider with max */}
                <div className="flex h-10">
                    <span>Left</span>
                    <Divider orientation="vertical" max={90} />
                    <span>Right</span>
                </div>
                
                {/* Spacing */}
                <Divider spacing={4} />
            </div>
        );
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```typescript
            // Renders a visual divider line to separate content.
            export function Divider(props: DividerProps): JSXElement
            ```

        - #### Types

            ```typescript
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
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/..](https://github.com/cruxkit-org)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
