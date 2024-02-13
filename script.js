const header = document.getElementsByTagName("header");
const nav1 = document.createElement("nav");
const nav2 = document.createElement("nav");
const link1 = document.createElement("a");
const link2 = document.createElement("a");
const link3 = document.createElement("a");
const link4 = document.createElement("a");
const link5 = document.createElement("a");
const logoimg = document.createElement("img");
const logo = document.createElement("div");
const menuLinks = document.createElement("div");

link1.textContent = "Home";
link2.textContent = "About";
link3.textContent = "Blog";
link4.textContent = "Portfolio";
link5.textContent = "Contact";

header[0].append(nav2);
nav2.append(logo, menuLinks);
logo.classList.add("logo");
menuLinks.classList.add("menuLinks");
logoimg.src = "/logo.png";
logo.append(logoimg);
menuLinks.append(link1, link2, link3, link4, link5);

header[0].append(nav1);
nav1.innerHTML = `
<div class="logo">
<img src="/logo.png" alt="">
</div>
<div class="menuLinks">
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Blog</a>
<a href="#">Portfolio</a>
<a href="#">Contact</a>
</div>
`;
