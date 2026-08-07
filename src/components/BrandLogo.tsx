import { Link } from 'react-router-dom';

export default function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center ${className}`.trim()} aria-label="Nest & Nurture Preschool home">
      <img
        src="/images/logo/nest-nurture-logo.png"
        alt="Nest & Nurture Preschool logo"
        className="h-10 w-auto object-contain md:h-12"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
