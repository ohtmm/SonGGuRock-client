import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  type?: 'primary' | 'secodnary';
  size?: 'small' | 'medium' | 'large';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
};

const Button = ({
  type = 'primary',
  size = 'medium',
  text,
  onClick,
  disabled = false,
  icon,
}: ButtonProps) => {
  const buttonClasses = clsx(
    'font-bold',
    'rounded-lg',
    'py-[14px]',
    'px-[12px]',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-1',
    'text-sm',
    'h-fit',
    {
      'py-[6px]': size === 'small',
      'px-3': (size = 'small'),
      'text-xs': (size = 'small'),
    },
    {
      'bg-sand': type === 'primary',
      'text-white': type === 'primary' || disabled,
    },
    {
      'bg-white': type === 'secodnary',
      'text-grey900': type === 'secodnary',
      border: type === 'secodnary',
      'border-sand': type === 'secodnary',
      'border-solid': type === 'secodnary',
    },
    {
      'bg-grey200': disabled,
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
