import React, { useState } from 'react';

interface TedxLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
  variant?: 'full' | 'compact';
  customImageSrc?: string;
}

export const TedxLogo: React.FC<TedxLogoProps> = ({
  theme = 'light',
  className = '',
  size = 'md',
  showSubtext = true,
  variant = 'full',
  customImageSrc,
}) => {
  const [imageError, setImageError] = useState(false);
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const subColor = isDark ? '#A3A3A3' : '#737373';

  // If a custom image was supplied or available and has not errored, render the graphic
  if (customImageSrc && !imageError) {
    const imgHeight = {
      sm: 'h-7',
      md: 'h-9',
      lg: 'h-12',
      xl: 'h-16',
    }[size];

    return (
      <div className={`inline-flex items-center select-none ${className}`} id="tedx-custom-logo">
        <img
          src={customImageSrc}
          alt="TEDx Universitas Negeri Makassar"
          className={`${imgHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Official Scaled Vector Brand Lockup
  const scaleSizes = {
    sm: {
      ted: 'text-lg sm:text-xl',
      x: 'text-xs sm:text-sm -translate-y-1',
      inst: 'text-xs sm:text-sm font-semibold ml-1.5',
      sub: 'text-[8px] tracking-wider',
    },
    md: {
      ted: 'text-xl sm:text-2xl',
      x: 'text-sm sm:text-base -translate-y-1.5',
      inst: 'text-sm sm:text-base font-semibold ml-2',
      sub: 'text-[9px] tracking-widest',
    },
    lg: {
      ted: 'text-2xl sm:text-3xl',
      x: 'text-base sm:text-lg -translate-y-2',
      inst: 'text-base sm:text-lg font-semibold ml-2.5',
      sub: 'text-[10px] tracking-widest',
    },
    xl: {
      ted: 'text-4xl sm:text-5xl',
      x: 'text-2xl sm:text-3xl -translate-y-3',
      inst: 'text-2xl sm:text-3xl font-semibold ml-3',
      sub: 'text-xs tracking-widest',
    },
  }[size];

  return (
    <div
      className={`inline-flex flex-col justify-center select-none group ${className}`}
      id={`tedx-logo-${theme}-${size}`}
      aria-label="TEDx Universitas Negeri Makassar"
    >
      <div className="flex items-baseline leading-none font-display">
        {/* TED */}
        <span className={`font-black tracking-[-0.04em] text-[#EB0028] ${scaleSizes.ted} drop-shadow-xs`}>
          TED
        </span>
        {/* x */}
        <span className={`font-extrabold text-[#EB0028] ${scaleSizes.x} ml-0.5 inline-block`}>
          x
        </span>
        {/* Organization Name */}
        {variant === 'full' ? (
          <span
            className={`tracking-tight transition-colors duration-200 ${scaleSizes.inst}`}
            style={{ color: textColor }}
          >
            Universitas Negeri Makassar
          </span>
        ) : (
          <span
            className={`tracking-tight transition-colors duration-200 ${scaleSizes.inst}`}
            style={{ color: textColor }}
          >
            UNM
          </span>
        )}
      </div>

      {showSubtext && (
        <span
          className={`font-mono uppercase font-normal mt-1 pl-0.5 opacity-75 ${scaleSizes.sub}`}
          style={{ color: subColor }}
        >
          x = independently organized TED event
        </span>
      )}
    </div>
  );
};

