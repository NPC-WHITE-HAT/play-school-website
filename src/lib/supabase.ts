import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!url || !anonKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars are missing. Admission form will not submit.');
}

export const supabase = createClient(url ?? '', anonKey ?? '', {
  auth: { persistSession: false },
});

export type AdmissionEnquiry = {
  parent_name: string;
  child_name: string;
  child_age: string;
  phone: string;
  email: string;
  program: string;
  preferred_visit_date?: string;
  message?: string;
};
