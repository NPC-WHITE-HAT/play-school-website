/*
# Create admission_enquiries table (single-tenant, no auth)

1. New Tables
- `admission_enquiries`
  - `id` (uuid, primary key)
  - `parent_name` (text, not null) — full name of the parent/guardian submitting the enquiry
  - `child_name` (text, not null) — name of the child the enquiry is about
  - `child_age` (text, not null) — age of the child, free-text to allow "3 years 6 months" style values
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email address
  - `program` (text, not null) — program of interest: Playgroup / Nursery / LKG / UKG
  - `preferred_visit_date` (date) — optional preferred date for a school tour
  - `message` (text) — optional message from the parent
  - `status` (text, not null default 'new') — enquiry status for staff workflow: new / contacted / visited / enrolled / declined
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `admission_enquiries`.
- Allow anon + authenticated INSERT only. Anyone visiting the site can submit an enquiry, but nobody (including anon) can read, update, or delete enquiries from the client — that prevents scraping of parent PII. Staff manage enquiries via the Supabase dashboard / service role.
*/

CREATE TABLE IF NOT EXISTS admission_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  child_name text NOT NULL,
  child_age text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  program text NOT NULL,
  preferred_visit_date date,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admission_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_admission_enquiries" ON admission_enquiries;
CREATE POLICY "anon_insert_admission_enquiries"
ON admission_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
