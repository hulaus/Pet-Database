import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mduemnearpuqwcvpgnph.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdWVtbmVhcnB1cXdjdnBnbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjE4NTksImV4cCI6MTk5MjU5Nzg1OX0.isxVXK6eO8atjgq9_ODo-fPANh54MJs6p9iLwnaov20'

const supabase = createClient('https://mduemnearpuqwcvpgnph.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdWVtbmVhcnB1cXdjdnBnbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjE4NTksImV4cCI6MTk5MjU5Nzg1OX0.isxVXK6eO8atjgq9_ODo-fPANh54MJs6p9iLwnaov20')

export default supabase