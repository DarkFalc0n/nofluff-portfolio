import { z } from 'zod'

const text = z.string().trim().min(1)
const monthYear = z
  .string()
  .regex(
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/,
    'Use "Mon YYYY", e.g. "Jun 2025"',
  )
const endDate = z.union([monthYear, z.literal('Present')])

export const linkSchema = z.strictObject({
  label: text,
  url: z.url(),
})

export const experienceSchema = z.strictObject({
  company: text,
  role: text,
  location: text,
  start: monthYear,
  end: endDate,
  highlights: z.array(text).min(1),
})

export const projectSchema = z.strictObject({
  name: text,
  role: text.optional(),
  description: z.array(text).min(1),
  tech: z.array(text),
  url: z.url().optional(),
})

export const educationSchema = z.strictObject({
  institution: text,
  degree: text,
  field: text,
  gpa: z
    .string()
    .regex(
      /^\d{1,2}(\.\d{1,2})?\s*\/\s*\d{1,2}(\.\d{1,2})?$/,
      'Use the form "8.63/10"',
    )
    .optional(),
  location: text,
  start: monthYear,
  end: endDate,
})

export const skillGroupSchema = z.strictObject({
  category: text,
  items: z.array(text).min(1),
})

export const achievementSchema = z.strictObject({
  title: text,
  detail: text,
})

export const certificationSchema = z.strictObject({
  name: text,
  issuer: text.optional(),
  date: monthYear,
  credentialId: text.optional(),
  url: z.url().optional(),
})

export const portfolioSchema = z.strictObject({
  name: text,
  headline: text,
  email: z.email(),
  phone: z
    .string()
    .regex(/^\+?[0-9][0-9\s()-]{6,19}$/, 'Use a dialable phone number'),
  location: text.optional(),
  summary: text.optional(),

  /** Everywhere this person can be found online. */
  links: z.array(linkSchema).min(1),

  /** Short one-liners shown in the sidebar. */
  highlights: z.array(text).min(1),

  /** Call-to-action button in the sidebar. */
  resume: z.strictObject({
    label: text,
    url: z.url(),
  }),

  experience: z.array(experienceSchema),
  projects: z.array(projectSchema),
  education: z.array(educationSchema),
  skills: z.array(skillGroupSchema),
  achievements: z.array(achievementSchema),
  certifications: z.array(certificationSchema),
})

export type Portfolio = z.infer<typeof portfolioSchema>
export type Link = z.infer<typeof linkSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Project = z.infer<typeof projectSchema>
export type Education = z.infer<typeof educationSchema>
export type SkillGroup = z.infer<typeof skillGroupSchema>
export type Achievement = z.infer<typeof achievementSchema>
export type Certification = z.infer<typeof certificationSchema>
