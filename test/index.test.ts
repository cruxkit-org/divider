// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { describe, expect, test } from 'bun:test';
    import { JSDOM } from 'jsdom';
    import { render } from '@minejs/jsx';
    import {
        DividerProps, 
        Divider,
    } from '../src';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const dom               = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document         = dom.window.document;
    global.window           = dom.window as any;
    global.HTMLElement      = dom.window.HTMLElement;
    global.Element          = dom.window.Element;
    global.Text             = dom.window.Text;
    global.DocumentFragment = dom.window.DocumentFragment;
    global.Node             = dom.window.Node;

    function renderDivider(props: DividerProps = {}): HTMLElement {
        document.body.innerHTML = '';
        const root = document.createElement('div');
        root.id = 'app';
        document.body.appendChild(root);
        const element = Divider(props);
        render(element, '#app');
        const rendered = root.firstElementChild as HTMLElement | null;
        if (!rendered) throw new Error('Divider did not render any element');
        return rendered;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/divider', () => {
        
        test('renders with default props', () => {
            const el = renderDivider();
            expect(el.tagName).toBe('DIV');
            expect(el.className).toContain('border-t'); // thin horizontal
            expect(el.className).toContain('border-solid');
            expect(el.className).toContain('border-2'); // color 2
            expect(el.className).toContain('w-full');
            expect(el.getAttribute('role')).toBe('separator');
            expect(el.getAttribute('aria-orientation')).toBe('horizontal');
        });

        test('renders vertical orientation', () => {
            const el = renderDivider({ orientation: 'vertical' });
            expect(el.className).toContain('border-s'); // thin vertical
            expect(el.className).toContain('h-full');
            expect(el.getAttribute('aria-orientation')).toBe('vertical');
        });

        test('applies default max 90% horizontally', () => {
            const el = renderDivider();
            expect(el.style.maxWidth).toBe('90%');
            expect(el.style.maxHeight).toBe('');
        });

        test('applies default max 90% vertically', () => {
            const el = renderDivider({ orientation: 'vertical' });
            expect(el.style.maxHeight).toBe('90%');
            expect(el.style.maxWidth).toBe('');
        });

        test('supports custom max value', () => {
            const el = renderDivider({ max: 50 });
            expect(el.style.maxWidth).toBe('50%');
        });

        test('renders variants', () => {
            expect(renderDivider({ variant: 'solid' }).className).toContain('border-solid');
            expect(renderDivider({ variant: 'dashed' }).className).toContain('border-dashed');
            expect(renderDivider({ variant: 'dotted' }).className).toContain('border-dotted');
        });

        test('renders thickness (horizontal)', () => {
            expect(renderDivider({ orientation: 'horizontal', thickness: 'super-thin' }).className).toContain('border-t-1/2');
            expect(renderDivider({ orientation: 'horizontal', thickness: 'thin' }).className).toContain('border-t');
            expect(renderDivider({ orientation: 'horizontal', thickness: 'medium' }).className).toContain('border-t-2');
            expect(renderDivider({ orientation: 'horizontal', thickness: 'thick' }).className).toContain('border-t-4');
        });

        test('renders thickness (vertical)', () => {
            expect(renderDivider({ orientation: 'vertical', thickness: 'super-thin' }).className).toContain('border-s-1/2');
            expect(renderDivider({ orientation: 'vertical', thickness: 'thin' }).className).toContain('border-s');
            expect(renderDivider({ orientation: 'vertical', thickness: 'medium' }).className).toContain('border-s-2');
            expect(renderDivider({ orientation: 'vertical', thickness: 'thick' }).className).toContain('border-s-4');
        });

        test('renders colors', () => {
            expect(renderDivider({ color: '1' }).className).toContain('border-1');
            expect(renderDivider({ color: '2' }).className).toContain('border-2');
            expect(renderDivider({ color: '3' }).className).toContain('border-3');
            expect(renderDivider({ color: 'brand' }).className).toContain('border-brand');
            expect(renderDivider({ color: 'current' }).className).toContain('border-current');
        });

        test('renders spacing (horizontal)', () => {
            expect(renderDivider({ orientation: 'horizontal', spacing: 0 }).className).toContain('my-0');
            expect(renderDivider({ orientation: 'horizontal', spacing: 4 }).className).toContain('my-4');
            expect(renderDivider({ orientation: 'horizontal', spacing: 12 }).className).toContain('my-12');
        });

        test('renders spacing (vertical)', () => {
            expect(renderDivider({ orientation: 'vertical', spacing: 0 }).className).toContain('mx-0');
            expect(renderDivider({ orientation: 'vertical', spacing: 4 }).className).toContain('mx-4');
            expect(renderDivider({ orientation: 'vertical', spacing: 12 }).className).toContain('mx-12');
        });

        test('applies custom className', () => {
            const el = renderDivider({ className: 'custom-class' });
            expect(el.className).toContain('custom-class');
        });

        test('passes through other props', () => {
            const el = renderDivider({ id: 'test-id', 'data-testid': 'divider' } as any);
            expect(el.id).toBe('test-id');
            expect(el.getAttribute('data-testid')).toBe('divider');
        });

        test('overrides role', () => {
            const el = renderDivider({ role: 'presentation' });
            expect(el.getAttribute('role')).toBe('presentation');
        });

    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
