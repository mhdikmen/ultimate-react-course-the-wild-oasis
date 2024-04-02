import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rzohnatlpsmhnqaarxig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b2huYXRscHNtaG5xYWFyeGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwODk1MjQsImV4cCI6MjAyNzY2NTUyNH0.B_iAN01sgKwbpAM7x7MG-c8F41lkyC5s54o7SdzZyAw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
