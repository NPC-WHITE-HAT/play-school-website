import { Link } from 'react-router-dom';

export default function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`.trim()} aria-label="Nest & Nurture Play School and Child Care home">
      <img
        src="/images/logo/nest-nurture-logo.png"
        alt="Nest & Nurture Play School and Child Care logo"
        className="h-10 w-auto object-contain md:h-12"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
