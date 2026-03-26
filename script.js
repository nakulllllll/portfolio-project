const supabaseUrl = "https://pufvuhulkttkzkxrconb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZnZ1aHVsa3R0a3preHJjb25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTg1ODMsImV4cCI6MjA5MDA3NDU4M30.0l8UnwSKCfqe5NYo70TFcQqCC2o-BNBJga2zFS_CrG4";

const client = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("form").addEventListener("submit", async function(e){
  e.preventDefault();

  const { error } = await client
    .from("FEEDBACK")
    .insert([
      {
        NAME: document.getElementById("name").value,
        EMAIL: document.getElementById("email").value,
        MESSAGE: document.getElementById("message").value
      }
    ]);

  if(error){
    alert("Error saving data");
    console.log(error);
  } else {
    alert("Message sent successfully!");
  }
});
