import React, { useState, useEffect, useRef } from 'react';
import { Upload } from 'lucide-react';

interface GrozixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  light?: boolean;
  stacked?: boolean;
  allowUpload?: boolean;
}

const PRIMARY_LOGO_PATH = '/Logo Variations-04.jpg';
const FALLBACK_LOGO_PATH = '/logo.jpg';

/**
 * Official Grozix Brand Logo Component
 * Displays the official logo asset from Logo Variations-04 as is,
 * with zero modifications, vector distortions, or alterations.
 * Also supports direct drag & drop or file upload for brand asset updates.
 */
export const GrozixLogo: React.FC<GrozixLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  light = false,
  stacked = false,
  allowUpload = true,
}) => {
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('grozix_custom_logo');
      if (stored) return stored;
    }
    return PRIMARY_LOGO_PATH;
  });

  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleLogoUpdate = () => {
      const stored = localStorage.getItem('grozix_custom_logo');
      if (stored) {
        setLogoSrc(stored);
        setHasError(false);
      }
    };
    window.addEventListener('grozix-logo-changed', handleLogoUpdate);
    window.addEventListener('storage', handleLogoUpdate);
    return () => {
      window.removeEventListener('grozix-logo-changed', handleLogoUpdate);
      window.removeEventListener('storage', handleLogoUpdate);
    };
  }, []);

  const handleImageError = () => {
    if (logoSrc !== FALLBACK_LOGO_PATH) {
      setLogoSrc(FALLBACK_LOGO_PATH);
    } else {
      setHasError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        localStorage.setItem('grozix_custom_logo', result);
        setLogoSrc(result);
        setHasError(false);
        window.dispatchEvent(new Event('grozix-logo-changed'));
      }
    };
    reader.readAsDataURL(file);
  };

  const sizeClasses = {
    sm: 'h-8 max-h-8',
    md: 'h-10 sm:h-11 max-h-11',
    lg: 'h-14 max-h-14',
    xl: 'h-20 max-h-20',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center group/logo select-none ${className}`}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            const res = evt.target?.result as string;
            if (res) {
              localStorage.setItem('grozix_custom_logo', res);
              setLogoSrc(res);
              setHasError(false);
              window.dispatchEvent(new Event('grozix-logo-changed'));
            }
          };
          reader.readAsDataURL(file);
        }
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <img
        src={logoSrc}
        alt="Grozix Logo"
        onError={handleImageError}
        className={`${sizeClasses} w-auto object-contain rounded-md transition-all duration-200 group-hover/logo:scale-[1.02]`}
        referrerPolicy="no-referrer"
      />

      {/* Discrete hover upload badge to drop or replace logo file directly */}
      {allowUpload && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="opacity-0 group-hover/logo:opacity-100 transition-opacity absolute -top-1.5 -right-1.5 bg-slate-900/90 text-white hover:bg-[#13617e] p-1 rounded-full shadow-md text-[10px] cursor-pointer"
          title="Upload or replace Logo file (Logo Variations-04.jpg)"
          aria-label="Upload custom logo file"
        >
          <Upload className="w-2.5 h-2.5" />
        </button>
      )}
    </div>
  );
};
