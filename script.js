// Access Supabase correctly
const { createClient } = supabase;

// Your credentials
const supabaseUrl = "https://pufvuhulkttkzkxrconb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZnZ1aHVsa3R0a3preHJjb25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTg1ODMsImV4cCI6MjA5MDA3NDU4M30.0l8UnwSKCfqe5NYo70TFcQqCC2o-BNBJga2zFS_CrG4";

// Create client
const client = createClient(supabaseUrl, supabaseKey);

// Form
document.getElementById("form").addEventListener("submit", async function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const { error } = await client
    .from("FEEDBACK")
    .insert([{ NAME: name, EMAIL: email, MESSAGE: message }]);

  if(error){
    document.getElementById("form-status").textContent = "Error sending message";
    console.error(error);
  } else {
    document.getElementById("form-status").textContent = "Message sent!";
    document.getElementById("form").reset();
  }
});
