-- Clean & Minimal SQL Schema to create the "Lead" table in Supabase:
-- Run this in Supabase Dashboard -> SQL Editor:

DROP TABLE IF EXISTS "Lead";

CREATE TABLE "Lead" (
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "name" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "email" TEXT,
  "gender" TEXT,
  "status" TEXT DEFAULT 'NEW',
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

-- Disable Row Level Security so API inserts work without permission issues
ALTER TABLE "Lead" DISABLE ROW LEVEL SECURITY;
