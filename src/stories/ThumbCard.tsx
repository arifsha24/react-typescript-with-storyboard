import React from 'react';
import { Button } from './Button';

interface ThumbProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What Image content?
   */
  imgContent:string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Label String to enter?
   */
  label?: string;
  /**
   * Desc String to enter?
   */
  desc?: string;


  /**
   * Category String to enter?
   */
  category?: string;

  /**
   * Desc String to enter?
   */
  btnTxt: string;



}

/**
 * Primary UI component for user interaction
 */
export const ThumbCard = ({
  primary=false,
  size = 'medium',
  imgContent,
  label,
  desc,
  category,
  btnTxt,
  ...props
}: ThumbProps) => {
  return (
    <div className="card w-64 bg-base-100 drop-shadow-xl" >
        <figure className="px-5 pt-8">
            <img src={imgContent} alt="tablet" className="rounded-0" />
        </figure>
        <div className="card-body gap-0 p-4">
          <h2 className="card-title">{label}</h2>
          <p className='text-sm font-light'>{desc}</p>
          <div className='flex items-center'>
            <p className='text-md font-bold text-fuchsia-300'>{category}</p>
            <div className="card-actions">
                <Button
                  className='rounded-[50px] !bg-slate-600 text-white mx-2 p-2 px-6'
                  primary = {true}
                  backgroundColor={'#ddd'}
                  label={btnTxt}
                />  
            </div>
          </div>
            
        </div>
    </div>
    
  );
};
