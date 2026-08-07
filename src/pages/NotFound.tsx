import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import FloatingShapes from '@/components/FloatingShapes';

export default function NotFound() {
 return (
 <main className="relative grid min-h-screen place-items-center overflow-hidden bg-cream px-5 pt-20">
 <FloatingShapes />
 <div className="relative text-center">
 <p className="font-heading text-[7rem] font-800 leading-none text-coral md:text-[10rem]">404</p>
 <h1 className="mt-2 font-heading text-2xl font-700 text-ink md:text-3xl">
 Oops! This page wandered off
 </h1>
 <p className="mx-auto mt-3 max-w-md text-ink-soft">
 Like a curious little explorer, this page seems to have gone on a nature walk. Let's get you back home.
 </p>
 <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
 <Link
 to="/"
 className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-700 text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
 >
 <HomeIcon className="h-4 w-4"/> Back to Home
 </Link>
 <button
 onClick={() => window.history.back()}
 className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3.5 text-sm font-700 text-ink transition-colors hover:border-coral hover:text-coral"
 >
 <ArrowLeft className="h-4 w-4"/> Go Back
 </button>
 </div>
 </div>
 </main>
 );
}
