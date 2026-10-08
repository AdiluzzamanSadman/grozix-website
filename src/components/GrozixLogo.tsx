import React from 'react';

interface GrozixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  light?: boolean;
  stacked?: boolean;
  allowUpload?: boolean;
}

export const GrozixLogo: React.FC<GrozixLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Configured with proportional container sizes so the brand mark renders crisply
  // with prominent visibility across headers, footers, and modal titles.
  const sizeConfig = {
    sm: {
      container: 'h-10 sm:h-12 w-32 sm:w-40',
      imgClass: 'h-full w-auto max-h-full',
    },
    md: {
      container: 'h-14 sm:h-16 w-44 sm:w-56',
      imgClass: 'h-full w-auto max-h-full',
    },
    lg: {
      container: 'h-20 sm:h-24 w-60 sm:w-72',
      imgClass: 'h-full w-auto max-h-full',
    },
    xl: {
      container: 'h-28 sm:h-32 w-80 sm:w-96',
      imgClass: 'h-full w-auto max-h-full',
    },
  }[size];

  return (
    <div className={`relative inline-flex items-center overflow-hidden ${sizeConfig.container} ${className}`}>
      <img
        src="https://i.postimg.cc/zvcttqT1/Logo-Variations-06.png"
        alt="User Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: 'scale(3.2)',
          transformOrigin: 'center center',
        }}
        className="transition-transform duration-200"
      />
    </div>
  );
};
