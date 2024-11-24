import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldmkdyucrulvdcdipthe.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkbWtkeXVjcnVsdmRjZGlwdGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyODE5MDUsImV4cCI6MjA0Nzg1NzkwNX0.x3caHyU2-fgM20lzGqJPFd_hoBRkNP1ApDUKjQxEeoI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
