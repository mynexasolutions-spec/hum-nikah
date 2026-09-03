import * as z from "zod";

export const biodataSchema = z.object({
  // Essential Personal Information
  fullName: z.string().min(2, "Full name is required").max(100),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  maritalStatus: z.enum(["Never Married", "Divorced", "Widowed", "Separated", "Annulled"]),
  city: z.string().min(2, "City / State is required"),
  height: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),

  // Direct Biodata Document Upload (PDF, JPG, PNG, DOCX)
  biodataDocUrl: z.string().optional(),
  biodataDocName: z.string().optional(),

  // Education & Profession (Optional / Quick)
  highestEducation: z.string().optional(),
  profession: z.string().optional(),
  incomeRange: z.string().optional(),

  // Family Information (Optional)
  fatherOccupation: z.string().optional(),
  motherOccupation: z.string().optional(),
  siblings: z.string().optional(),
  familyType: z.enum(["Nuclear", "Joint"]).optional(),
  familyLocation: z.string().optional(),

  // Religious & Additional Preferences (Optional)
  religiousPractice: z.string().optional(),
  prayerPractice: z.string().optional(),
  shortIntro: z.string().max(1000).optional(),
  prefAgeRange: z.string().optional(),
  prefLocation: z.string().optional(),
  prefEducation: z.string().optional(),

  // Contact Information
  phone: z.string().min(7, "Valid phone number is required"),
  whatsapp: z.string().optional(),
  email: z.string().email("Valid email address is required").or(z.literal("")).optional(),
  contactMethod: z.enum(["WhatsApp", "Phone Call", "Email"]).optional(),

  // Profile Image URL
  profileImageUrl: z.string().optional(),

  // Consent
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export type BiodataFormValues = z.infer<typeof biodataSchema>;
