import { defineCollection, z } from "astro:content";

// z -> zod schema, se usa para validar los datos y objetos

const dashboards = defineCollection({
  schema: z.object({
    title: z.string(),
    dashboardUrl: z.string().url(),
  }),
});

export const collections = { dashboards };
