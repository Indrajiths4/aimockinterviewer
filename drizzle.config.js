import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://ai-interviewer-mock_owner:Z0Uz8SHuBGqj@ep-old-surf-a53run12.us-east-2.aws.neon.tech/ai-interviewer-mock?sslmode=require'
  }
});
