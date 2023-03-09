import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the input be?
   */
  size?: '32' | '64' | '96';
  /**
   * Label String to enter?
   */
  label?: string;
  /**
   * Icon Boolean
   */
  icon?:boolean;

  /**
   * Additional Class
   */
  className?:string;

  /**
   * type contents
   */
  type: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
/**
   * Optional click handler
   */
  placeholder:string;
}

/**
 * Primary UI component for user interaction
 */
export const SimpleInput = ({
  primary = false,
  size = '64',
  placeholder,
  type,
  label,
  icon=true,
  className,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-Input--primary' : 'storybook-Input--secondary';
  return (
    <div className={`flex flex-col w-96`}>
      {label&&<label className='text-white text-2xl mb-2'>{label}</label>}
      <div className='relative'>
        <input
        type={type}
        className={[styles.storybookInput, `${primary?'border-white':'border-black'} w-full bg-transparent text-white border p-2 rounded-lg`, mode].join(' ')}
        placeholder={placeholder}
        ></input>
        {icon&&
          <span className="absolute inset-y-0 right-3 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </span>
        }
      </div>
      
    </div>
    
  );
};
