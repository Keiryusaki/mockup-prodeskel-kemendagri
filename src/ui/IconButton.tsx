import { forwardRef } from 'react';
import { Button, type ButtonProps } from '@bynara-id/ui';

const SQUARE_SIZE: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
};

export interface IconButtonProps extends Omit<ButtonProps, 'iconLeft' | 'iconRight' | 'fullWidth' | 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
}

/**
 * Local wrapper — Nara's Button ships no square icon-only variant, so this
 * forces equal width/height via inline style (wins over both stylesheets
 * regardless of load order) rather than touching Nara's button.css.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, size = 'md', style, ...rest },
  ref,
) {
  const dimension = SQUARE_SIZE[size];
  return (
    <Button
      ref={ref}
      size={size}
      style={{ width: dimension, padding: 0, ...style }}
      {...rest}
    >
      {icon}
    </Button>
  );
});
