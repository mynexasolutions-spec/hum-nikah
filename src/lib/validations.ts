import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const biodataSchema = z.object({
  // Personal Information
  fullName: z.string().min(3, "Full name is required").max(100),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  maritalStatus: z.enum(["Never Married", "Divorced", "Widowed", "Separated", "Annulled"]),
  height: z.string().min(1, "Height is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),

  // Education & Profession
  highestEducation: z.string().min(2, "Highest education is required"),
  fieldOfStudy: z.string().min(2, "Field of study is required"),
  profession: z.string().min(2, "Profession is required"),
  company: z.string().optional(),
  incomeRange: z.string().optional(),

  // Family Information
  fatherOccupation: z.string().min(2, "Father's occupation is required"),
  motherOccupation: z.string().min(2, "Mother's occupation is required"),
  siblings: z.string().min(1, "Number of siblings is required"),
  familyType: z.enum(["Nuclear", "Joint"]),
  familyLocation: z.string().min(2, "Family location is required"),

  // Religious Information
  religiousPractice: z.enum(["Very Practicing", "Practicing", "Moderately Practicing", "Not Practicing"]),
  sect: z.string().min(2, "Sect/School of thought is required"),
  prayerPractice: z.enum(["Always Pray", "Sometimes Pray", "Rarely Pray", "Never Pray"]),
  hijab: z.enum(["Yes", "No", "Sometimes", "Not Applicable"]).optional(),

  // About Yourself
  shortIntro: z.string().min(20, "Introduction must be at least 20 characters").max(1000),
  personality: z.string().min(10, "Please describe your personality").max(500),
  interests: z.string().min(10, "Please list some interests").max(500),

  // Partner Preferences
  prefAgeRange: z.string().min(3, "Age range is required"),
  prefLocation: z.string().min(3, "Preferred location is required"),
  prefEducation: z.string().min(3, "Education preference is required"),
  prefProfession: z.string().min(3, "Profession preference is required"),
  prefOther: z.string().max(500).optional(),

  // Contact
  phone: z.string().min(10, "Valid phone number is required"),
  whatsapp: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Invalid email address"),
  contactMethod: z.enum(["WhatsApp", "Phone Call", "Email"]),

  // Image (We will just use a string for the URL after upload, but for the form it can be a file or just a string)
  // For this basic setup, we'll assume the form handles file upload and sets the URL
  profileImageUrl: z.string().optional(),

  // Consent
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export type BiodataFormValues = z.infer<typeof biodataSchema>;
