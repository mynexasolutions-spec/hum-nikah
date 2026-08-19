export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Admin: {
        Row: {
          id: string
          name: string
          email: string
          passwordHash: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          passwordHash: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          passwordHash?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Biodata: {
        Row: {
          id: string
          fullName: string
          gender: string
          dateOfBirth: string
          age: number
          maritalStatus: string
          height: string
          city: string
          state: string
          country: string
          highestEducation: string
          fieldOfStudy: string
          profession: string
          company: string | null
          incomeRange: string | null
          fatherOccupation: string
          motherOccupation: string
          siblings: string
          familyType: string
          familyLocation: string
          religiousPractice: string
          sect: string
          prayerPractice: string
          hijab: string | null
          shortIntro: string
          personality: string
          interests: string
          prefAgeRange: string
          prefLocation: string
          prefEducation: string
          prefProfession: string
          prefOther: string | null
          phone: string
          whatsapp: string
          email: string
          contactMethod: string
          profileImageUrl: string | null
          status: 'PENDING' | 'APPROVED' | 'REJECTED'
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          fullName: string
          gender: string
          dateOfBirth: string
          age: number
          maritalStatus: string
          height: string
          city: string
          state: string
          country: string
          highestEducation: string
          fieldOfStudy: string
          profession: string
          company?: string | null
          incomeRange?: string | null
          fatherOccupation: string
          motherOccupation: string
          siblings: string
          familyType: string
          familyLocation: string
          religiousPractice: string
          sect: string
          prayerPractice: string
          hijab?: string | null
          shortIntro: string
          personality: string
          interests: string
          prefAgeRange: string
          prefLocation: string
          prefEducation: string
          prefProfession: string
          prefOther?: string | null
          phone: string
          whatsapp: string
          email: string
          contactMethod: string
          profileImageUrl?: string | null
          status?: 'PENDING' | 'APPROVED' | 'REJECTED'
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          fullName?: string
          gender?: string
          dateOfBirth?: string
          age?: number
          maritalStatus?: string
          height?: string
          city?: string
          state?: string
          country?: string
          highestEducation?: string
          fieldOfStudy?: string
          profession?: string
          company?: string | null
          incomeRange?: string | null
          fatherOccupation?: string
          motherOccupation?: string
          siblings?: string
          familyType?: string
          familyLocation?: string
          religiousPractice?: string
          sect?: string
          prayerPractice?: string
          hijab?: string | null
          shortIntro?: string
          personality?: string
          interests?: string
          prefAgeRange?: string
          prefLocation?: string
          prefEducation?: string
          prefProfession?: string
          prefOther?: string | null
          phone?: string
          whatsapp?: string
          email?: string
          contactMethod?: string
          profileImageUrl?: string | null
          status?: 'PENDING' | 'APPROVED' | 'REJECTED'
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Lead: {
        Row: {
          id: string
          name: string
          phone: string
          email: string | null
          message: string | null
          source: string
          status: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'CONVERTED' | 'CLOSED'
          gender: string | null
          dob: string | null
          country: string | null
          city: string | null
          maritalStatus: string | null
          profession: string | null
          education: string | null
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email?: string | null
          message?: string | null
          source?: string
          status?: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'CONVERTED' | 'CLOSED'
          gender?: string | null
          dob?: string | null
          country?: string | null
          city?: string | null
          maritalStatus?: string | null
          profession?: string | null
          education?: string | null
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string | null
          message?: string | null
          source?: string
          status?: 'NEW' | 'CONTACTED' | 'IN_PROGRESS' | 'CONVERTED' | 'CLOSED'
          gender?: string | null
          dob?: string | null
          country?: string | null
          city?: string | null
          maritalStatus?: string | null
          profession?: string | null
          education?: string | null
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Blog: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          featuredImage: string | null
          category: string
          author: string
          seoTitle: string | null
          seoDescription: string | null
          published: boolean
          publishedAt: string | null
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          featuredImage?: string | null
          category: string
          author: string
          seoTitle?: string | null
          seoDescription?: string | null
          published?: boolean
          publishedAt?: string | null
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          featuredImage?: string | null
          category?: string
          author?: string
          seoTitle?: string | null
          seoDescription?: string | null
          published?: boolean
          publishedAt?: string | null
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      GalleryImage: {
        Row: {
          id: string
          title: string | null
          description: string | null
          imageUrl: string
          publicId: string | null
          published: boolean
          order: number
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          title?: string | null
          description?: string | null
          imageUrl: string
          publicId?: string | null
          published?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          title?: string | null
          description?: string | null
          imageUrl?: string
          publicId?: string | null
          published?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      ContactMessage: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string | null
          message: string
          status: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject?: string | null
          message: string
          status?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string | null
          message?: string
          status?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
