import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const applicationSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  state: z.string().min(1),
  district: z.string().min(2),
  address: z.string().min(10),
  householdType: z.string().min(1),
  ownership: z.string().min(1),
  monthlyUnits: z.string().min(1),
  proposedKw: z.string().min(1),
  discomNumber: z.string().optional(),
  category: z.string().min(1),
  referralSource: z.string().min(1),
  notes: z.string().optional(),
});

export type ApplicationData = z.infer<typeof applicationSchema>;

export interface Application extends ApplicationData {
  id: string;
  createdAt: Date;
}

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(20),
});

export type ContactData = z.infer<typeof contactSchema>;

export interface Contact extends ContactData {
  id: string;
  createdAt: Date;
}
