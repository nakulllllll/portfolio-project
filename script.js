// Supabase
const supabaseUrl = "https://pufvuhulkttkzkxrconb.supabase.co";
const supabaseKey = "YOUR_KEY_HERE";
const client = Supabase.createClient(supabaseUrl, supabaseKey);

// Toggle sections
function toggleSection(element) {
  const section = element.parentElement;

  document.querySelectorAll("section").forEach(sec => {
    if (sec !== section) {
      sec.classList.remove("active");
    }
  });

  section.classList.toggle("active");
}

// Form submit
document.getElementById("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const { error } = await client.from("FEEDBACK").insert([
    { NAME: name, EMAIL: email, MESSAGE: message }
  ]);

  if (error) {
    document.getElementById("form-status").textContent = "Error sending message";
  } else {
    document.getElementById("form-status").textContent = "Message sent!";
    document.getElementById("form").reset();
  }
});
