import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, alt, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-2xl border border-slate-700/50"
        />
      </div>
    </div>
  );
}
