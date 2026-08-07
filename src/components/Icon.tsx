import {
  ShieldCheck, GraduationCap, Puzzle, MonitorSmartphone, Users, Apple,
  Bus, MessageCircleHeart, BookOpen, Palette, Music, Drum, Trophy,
  BookMarked, FlaskConical, Trees, Cctv, Baby, Heart, Smile, Star,
  Clock, MapPin, Phone, Mail, Send, ArrowRight, Check, Sparkles,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  ShieldCheck, GraduationCap, Puzzle, MonitorSmartphone, Users, Apple,
  Bus, MessageCircleHeart, BookOpen, Palette, Music, Drum, Trophy,
  BookMarked, FlaskConical, Trees, Cctv, Baby, Heart, Smile, Star,
  Clock, MapPin, Phone, Mail, Send, ArrowRight, Check, Sparkles,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Sparkles;
  return <C className={className} />;
}
