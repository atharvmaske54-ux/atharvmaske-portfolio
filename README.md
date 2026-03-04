# atharvmaske-portfolio
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Atharv Vasant Maske | Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#050816;
  --card:#0f172a;
  --accent:#6366f1;
  --accent2:#8b5cf6;
  --text:#f8fafc;
  --muted:#94a3b8;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Inter',sans-serif;
  scroll-behavior:smooth;
}

body{
  background:var(--bg);
  color:var(--text);
  overflow-x:hidden;
}

/* Animated Glow Background */
body::before{
  content:"";
  position:fixed;
  width:600px;
  height:600px;
  background:radial-gradient(circle,var(--accent),transparent);
  top:-200px;
  left:-200px;
  filter:blur(120px);
  opacity:0.25;
  animation:float 12s ease-in-out infinite alternate;
  z-index:-1;
}

@keyframes float{
  from{transform:translateY(0);}
  to{transform:translateY(60px);}
}

/* Navbar */
nav{
  position:fixed;
  width:100%;
  padding:20px 10%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  backdrop-filter:blur(20px);
  background:rgba(0,0,0,0.5);
  z-index:1000;
}

nav a{
  margin-left:25px;
  text-decoration:none;
  color:var(--muted);
  transition:0.3s;
}

nav a:hover{
  color:white;
}

/* Sections */
section{
  padding:160px 10%;
}

h1{
  font-size:56px;
  font-weight:800;
}

.gradient{
  background:linear-gradient(90deg,var(--accent),var(--accent2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

p{
  margin-top:20px;
  color:var(--muted);
  max-width:700px;
  line-height:1.7;
}

/* Hero Section with Background Image */
#about{
  background:
    linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),
    url("https://uploads.sitepoint.com/wp-content/uploads/2019/04/155530806117.jpg")
    center/cover no-repeat fixed;
  padding:200px 10%;
  color:white;
}

#about h1,
#about p{
  color:white;
}

/* Projects */
.projects{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  margin-top:60px;
}

.card{
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(12px);
  border-radius:20px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.08);
  cursor:pointer;
  transition:0.4s;
}

.card:hover{
  transform:translateY(-10px);
  box-shadow:0 30px 60px rgba(0,0,0,0.6);
}

.thumbnail{
  height:180px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  font-size:20px;
  background:linear-gradient(135deg,#6366f1,#8b5cf6);
}

.card-content{
  padding:25px;
}

.card-content p{
  font-size:14px;
}

/* Modal */
.project-modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.85);
  backdrop-filter:blur(8px);
  display:none;
  justify-content:center;
  align-items:flex-start;
  padding-top:120px;
  z-index:9999;
}

.project-modal.active{
  display:flex;
}

.modal-content{
  width:90%;
  max-width:900px;
  background:var(--card);
  border-radius:20px;
  padding:40px;
  position:relative;
  animation:fadeUp 0.4s ease;
  max-height:80vh;
  overflow-y:auto;
}

@keyframes fadeUp{
  from{opacity:0;transform:translateY(40px);}
  to{opacity:1;transform:translateY(0);}
}

.close-btn{
  position:absolute;
  top:20px;
  right:25px;
  font-size:28px;
  cursor:pointer;
  color:var(--muted);
  transition:0.3s;
}

.close-btn:hover{
  color:white;
  transform:rotate(90deg);
}

/* Responsive */
@media(max-width:768px){
  h1{font-size:38px;}
}
</style>
</head>

<body>

<nav>
  <div><strong>Atharv.</strong></div>
  <div>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
  </div>
</nav>

<section id="about">
  <h1>
    Atharv Vasant Maske <br>
    <span class="gradient">UI/UX Designer & Engineering Student</span>
  </h1>
  <p>
    I’m a 2nd year engineering student focused 60% on design and 40% on development.
    I build structured, clean and visually strong digital experiences with attention to detail.
  </p>
</section>

<section id="projects">
  <h1>Projects</h1>

  <div class="projects">

    <div class="card" onclick="openProject('natural')">
      <div class="thumbnail">Natural Breath</div>
      <div class="card-content">
        <p>Plant advertisement focused on freshness and eco branding.</p>
      </div>
    </div>

    <div class="card" onclick="openProject('juicy')">
      <div class="thumbnail">Juicy Drink</div>
      <div class="card-content">
        <p>High energy beverage campaign using bold visuals.</p>
      </div>
    </div>

    <div class="card" onclick="openProject('coffee')">
      <div class="thumbnail">Coffee Advertisement</div>
      <div class="card-content">
        <p>Warm toned premium coffee branding concept.</p>
      </div>
    </div>

    <div class="card" onclick="openProject('neurowave')">
      <div class="thumbnail">Neurowave</div>
      <div class="card-content">
        <p>Modern AI inspired SaaS website UI concept.</p>
      </div>
    </div>

  </div>
</section>

<div class="project-modal" id="projectModal" onclick="outsideClick(event)">
  <div class="modal-content">
    <span class="close-btn" onclick="closeProject()">✕</span>
    <div id="modalBody"></div>
  </div>
</div>

<script>
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

function openProject(project){
  document.body.style.overflow="hidden";
  modal.classList.add("active");

  if(project==="natural"){
    modalBody.innerHTML=`
      <h2>Natural Breath</h2>
      <p>This concept was created to promote plant-based lifestyle products.
      The design focuses on green tones, natural spacing and a calm visual hierarchy
      that reflects sustainability and freshness.</p>`;
  }

  if(project==="juicy"){
    modalBody.innerHTML=`
      <h2>Juicy Drink Advertisement</h2>
      <p>A vibrant and bold campaign designed to attract attention instantly.
      The layout highlights the product with high contrast colors and energetic typography.</p>`;
  }

  if(project==="coffee"){
    modalBody.innerHTML=`
      <h2>Coffee Advertisement</h2>
      <p>Designed with warm brown shades and minimal typography to create
      a premium café experience feeling clean and sophisticated.</p>`;
  }

  if(project==="neurowave"){
    modalBody.innerHTML=`
      <h2>Neurowave</h2>
      <p>An AI driven website UI concept built with modern gradients,
      structured layout grids and a strong digital identity.</p>`;
  }
}

function closeProject(){
  modal.classList.remove("active");
  document.body.style.overflow="auto";
}

function outsideClick(e){
  if(e.target===modal){
    closeProject();
  }
}

document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
    closeProject();
  }
});
</script>

</body>
</html>
