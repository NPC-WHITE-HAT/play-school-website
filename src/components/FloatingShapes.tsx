// Soft floating background shapes — decorative blobs in the pastel palette
export default function FloatingShapes({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-16 -left-16 h-64 w-64 rounded-[var(--radius-blob)] bg-soft-green/50 blur-2xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-[var(--radius-blob)] bg-sky-blue/50 blur-2xl animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-10 left-1/4 h-56 w-56 rounded-[var(--radius-blob)] bg-coral/20 blur-2xl animate-blob" />
      <div className="absolute top-1/2 left-1/2 h-40 w-40 rounded-[var(--radius-blob)] bg-soft-yellow/40 blur-xl animate-float [animation-delay:-6s]" />
    </div>
  );
}
