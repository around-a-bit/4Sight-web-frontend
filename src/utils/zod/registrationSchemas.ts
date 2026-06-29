import { z } from "zod";
import { businessNameSchema, fullNameSchema, phoneSchema, productServiceNameSchema } from "../../lib/validations/commonSchemas";
// export const step1Schema = z
//   .object({
//     fullName: z
//       .string()
//       .trim()
//       .min(3, "Full name must be at least 3 characters"),

//     username: z
//       .string()
//       .trim()
//       .min(3, "Username must be at least 3 characters"),

//     email: z
//       .string()
//       .trim()
//       .min(1, "Email is required")
//       .email("Invalid email address"),

//     emailVerified: z.literal(true, {
//       errorMap: () => ({
//         message: "Email must be verified",
//       }),
//     }),

//     businessName: z
//       .string()
//       .trim()
//       .min(3, "Business name must be at least 3 characters"),

//     websiteUrl: z
//       .string()
//       .trim()
//       .url("Invalid website URL")
//       .optional()
//       .or(z.literal("")),

//     businessDescription: z
//       .string()
//       .trim()
//       .min(10, "Business description must be at least 10 characters")
//       .max(500, "Maximum 500 characters allowed"),

//     businessType: z.enum(["service", "product", "both"], {
//       message: "Select a business type",
//     }),

//     primaryCategory: z
//       .string()
//       .trim()
//       .min(1, "Primary category is required"),

//     isManagedByAgency: z.boolean(),

//     agencyId: z.string().nullable().optional(),

//     agencyName: z.string().optional(),
//   })

//   .superRefine((data, ctx) => {
//     if (data.isManagedByAgency) {
//       if (
//         !data.agencyId &&
//         (!data.agencyName || data.agencyName.trim().length < 3)
//       ) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           path: ["agencyName"],
//           message: "Agency selection or agency name is required",
//         });
//       }
//     }
//   });


export const step1Schema = z.object({
  fullName: fullNameSchema.min(3, "Full name must be at least 3 characters"),

  username: z.string().trim().min(3, "Username must be at least 3 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .refine((val) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) return false;
      if (/\.([a-zA-Z]{2,})\.\1$/.test(val)) return false; // Catches .com.com
      if (/\.\./.test(val)) return false;
      return true;
    }, "Please enter a valid email address"),

  emailVerified: z.literal(true, {
    errorMap: () => ({
      message: "Email must be verified",
    }),
  }),

  businessName: businessNameSchema.min(3, "Business name must be at least 3 characters"),

  websiteUrl: z
    .string()
    .trim()
    .regex(/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, "Invalid website URL")
    .optional()
    .or(z.literal("")),

  businessDescription: z
    .string()
    .trim()
    .min(10, "Business description must be at least 10 characters")
    .max(500, "Maximum 500 characters allowed"),

  businessType: z.enum(["service", "product", "both"], {
    message: "Select a business type",
  }),

  primaryCategory: z
    .string()
    .trim()
    .min(3, "Primary category must be at least 3 characters")
    .refine((val) => val !== "Other", {
      message: "Enter your custom business category",
    }),

  isManagedByAgency: z.boolean(),

  agencyNotListed: z.boolean(),

  agencyName: z.string().trim().optional(),

  agencyId: z.string().nullable().optional(),

  agencyEmail: z.string().trim().optional(),

  agencyContactName: fullNameSchema.optional().or(z.literal("")),

  agencyPhone: z.string().trim().optional(),

  agencyWebsite: z.string().trim().optional(),
})
  .superRefine((data, ctx) => {
    const isAgencyEnabled = data.isManagedByAgency;
    const isManualAgency = data.isManagedByAgency && data.agencyNotListed;

    /**
     * CASE 1: Agency selected (but not manual)
     * → no agencyId anymore
     * → nothing required here unless you add dropdown validation later
     */
    if (isAgencyEnabled && !data.agencyNotListed) {
      if (!data.agencyId || data.agencyId.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyId"],
          message: "Please select an agency from the list",
        });
      }
    }

    /**
     * CASE 2: Manual agency entry
     */
    if (isManualAgency) {
      if (!data.agencyName || data.agencyName.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyName"],
          message: "Agency name is required",
        });
      } else if (data.agencyName.trim().length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyName"],
          message: "Agency name must be at least 3 characters",
        });
      }

      if (!data.agencyEmail || data.agencyEmail.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyEmail"],
          message: "Agency email is required",
        });
      } else {
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.agencyEmail) &&
          !(/\.([a-zA-Z]{2,})\.\1$/.test(data.agencyEmail)) &&
          !(/\.\./.test(data.agencyEmail));
        if (!isValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["agencyEmail"],
            message: "Enter a valid agency email",
          });
        }
      }

      if (!data.agencyContactName || data.agencyContactName.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyContactName"],
          message: "Contact person name is required",
        });
      } else if (data.agencyContactName.trim().length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["agencyContactName"],
          message: "Contact person name must be at least 3 characters",
        });
      }

      if (data.agencyPhone && data.agencyPhone.trim().length > 0) {
        const digitsOnly = data.agencyPhone.replace(/\D/g, '');
        if (digitsOnly.length !== 10) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["agencyPhone"],
            message: "Phone number must have exactly 10 digits",
          });
        }
      }

      if (data.agencyWebsite && data.agencyWebsite.trim().length > 0) {
        if (!/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(data.agencyWebsite)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["agencyWebsite"],
            message: "Enter a valid website URL",
          });
        }
      }
    }
  });


export const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .refine((val) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) return false;
      if (/\.([a-zA-Z]{2,})\.\1$/.test(val)) return false;
      if (/\.\./.test(val)) return false;
      return true;
    }, "Please enter a valid email address"),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .trim()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});


const optionalString = z.string().optional();

export const step2Schema = z.object({
  businessReach: z.enum(["local", "national", "global"], {
    errorMap: () => ({ message: "Select a business reach" }),
  }),

  localLocations: z.array(z.string()),
  nationalOption: z.string().nullable().optional(),
  nationalCities: z.array(z.string()).optional(),

  audienceType: z.enum(["B2B", "B2C", "both"], {
    errorMap: () => ({ message: "Select an audience type" }),
  }),

  physicalPresence: z.enum(["yes", "no", "both"], {
    errorMap: () => ({ message: "Select physical presence" }),
  }),

  competitors: z.array(z.object({
    name: z.string().trim(),
    website: z.string().trim(),
    insights: z.string().optional(),
  })).superRefine((val, ctx) => {
    const filledCount = val.filter(c => c.name || c.website || (c.insights && c.insights.trim())).length;
    if (filledCount === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "You must add at least one competitor",
        path: []
      });
    } else {
      const seenNames = new Map<string, number>();
      const seenWebsites = new Map<string, number>();

      val.forEach((c, i) => {
        const isFilled = c.name || c.website || (c.insights && c.insights.trim());
        if (isFilled) {
          if (!c.name || c.name.trim().length === 0) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Competitor brand name is required",
              path: [i, "name"]
            });
          } else if (c.name.trim().length < 3) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Competitor brand name must be at least 3 characters",
              path: [i, "name"]
            });
          } else {
            const lowerName = c.name.toLowerCase();
            if (seenNames.has(lowerName)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "This brand name is already used for another competitor",
                path: [i, "name"]
              });
            } else {
              seenNames.set(lowerName, i);
            }
          }

          if (!c.website) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Competitor website is required",
              path: [i, "website"]
            });
          } else if (!/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\/?$/.test(c.website)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Please enter a valid root domain (e.g., example.com) without paths or deep links",
              path: [i, "website"]
            });
          } else {
            const normalizedWebsite = c.website.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
            if (seenWebsites.has(normalizedWebsite)) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "This website URL is already used for another competitor",
                path: [i, "website"]
              });
            } else {
              seenWebsites.set(normalizedWebsite, i);
            }
          }
        }
      });
    }
  }),
}).superRefine((data, ctx) => {
  if (data.businessReach === "local" && data.localLocations.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["localLocations"],
      message: "At least one location is required for local business",
    });
  }
  if (data.businessReach === "national" && data.nationalOption === "cityOrCountry" && (!data.nationalCities || data.nationalCities.length === 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["nationalCities"],
      message: "At least one city or country is required",
    });
  }
});

const optionalUrlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\/?$/;
const optionalUrl = z.string().trim().refine(val => !val || optionalUrlRegex.test(val), "Please enter a valid root domain (e.g., example.com) without paths or deep links");

export const step3Schema = z.object({
  products: z.array(z.object({
    name: productServiceNameSchema,
    url: optionalUrl
  })),
  services: z.array(z.object({
    name: productServiceNameSchema,
    url: optionalUrl
  })),
  homePageUrl: optionalUrl,
  productPageUrl: optionalUrl,
  servicePageUrl: optionalUrl,
  contactPageUrl: optionalUrl,
  aboutPageUrl: optionalUrl,
  blogPageUrl: optionalUrl,
  customPageUrls: z.array(z.object({
    name: z.string().trim(),
    url: optionalUrl
  })),
  socialPlatforms: z.array(z.object({
    platform: z.string(),
    url: optionalUrl
  }))
}).superRefine((data, ctx) => {
  const hasValidProduct = data.products.some(p => p.name.trim().length > 0);
  const hasValidService = data.services.some(s => s.name.trim().length > 0);

  if (!hasValidProduct && !hasValidService) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least one product or service must be provided.",
      path: ["portfolio"]
    });
  }
});