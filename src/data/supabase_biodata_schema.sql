-- Clean & Complete SQL Schema to create the "Biodata" table in Supabase
-- Copy and run this in Supabase Dashboard -> SQL Editor:

DROP TABLE IF EXISTS "Biodata";

CREATE TABLE "Biodata" (
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  "fullName" TEXT NOT NULL,
  "gender" TEXT NOT NULL,
  "dateOfBirth" TIMESTAMPTZ,
  "age" INTEGER,
  "maritalStatus" TEXT,
  "height" TEXT,
  "city" TEXT,
  "state" TEXT,
  "country" TEXT DEFAULT 'India',
  
  -- Education & Profession
  "highestEducation" TEXT,
  "profession" TEXT,
  "incomeRange" TEXT,
  
  -- Family Details
  "fatherOccupation" TEXT,
  "motherOccupation" TEXT,
  "siblings" TEXT,
  "familyType" TEXT DEFAULT 'Nuclear',
  "familyLocation" TEXT,
  
  -- Religious Details
  "religiousPractice" TEXT DEFAULT 'Practicing',
  "prayerPractice" TEXT DEFAULT 'Always Pray (5 Times Daily)',
  
  -- About & Preferences
  "shortIntro" TEXT,
  "prefAgeRange" TEXT,
  "prefLocation" TEXT,
  "prefEducation" TEXT,
  
  -- Contact & Media
  "phone" TEXT NOT NULL,
  "whatsapp" TEXT,
  "email" TEXT,
  "contactMethod" TEXT DEFAULT 'WhatsApp',
  "profileImageUrl" TEXT,
  
  -- Status & Timestamps
  "status" TEXT DEFAULT 'PENDING',
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

-- Disable Row Level Security so API inserts / fetches work seamlessly without permission issues
ALTER TABLE "Biodata" DISABLE ROW LEVEL SECURITY;
