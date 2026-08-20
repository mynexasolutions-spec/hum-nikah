import * as z from "zod";

export const biodataSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, "Full name is required").max(100),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  maritalStatus: z.enum(["Never Married", "Divorced", "Widowed", "Separated", "Annulled"]),
  height: z.string().min(1, "Height is required"),
  city: z.string().min(2, "City / State is required"),
  state: z.string().optional(),
  country: z.string().optional(),

  // Education & Profession
  highestEducation: z.string().min(2, "Highest education is required"),
  profession: z.string().min(2, "Profession is required"),
  incomeRange: z.string().optional(),

  // Family Information
  fatherOccupation: z.string().min(2, "Father's occupation is required"),
  motherOccupation: z.string().optional(),
  siblings: z.string().optional(),
  familyType: z.enum(["Nuclear", "Joint"]).optional(),
  familyLocation: z.string().min(2, "Family location is required"),

  // Religious Information
  religiousPractice: z.string().optional(),
  prayerPractice: z.string().optional(),

  // About Yourself
  shortIntro: z.string().min(5, "Please write a brief intro").max(1000),

  // Partner Preferences
  prefAgeRange: z.string().min(2, "Age range is required"),
  prefLocation: z.string().min(2, "Preferred location is required"),
  prefEducation: z.string().min(2, "Education preference is required"),

  // Contact
  phone: z.string().min(7, "Valid phone number is required"),
  whatsapp: z.string().optional(),
  email: z.string().email("Valid email address is required"),
  contactMethod: z.enum(["WhatsApp", "Phone Call", "Email"]).optional(),

  // Profile Image URL
  profileImageUrl: z.string().optional(),

  // Consent
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export type BiodataFormValues = z.infer<typeof biodataSchema>;
