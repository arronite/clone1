let dis;
let hide;

dis = document.getElementById("hiddenpanel");
const displaypanel = () => {
  console.log(dis);
  dis.style.display = "block";
};
const hidepanel = () => {
  console.log("hsss");
  dis.style.display = "none";
};
document
  .getElementById("subscribe")
  .addEventListener("mouseover", displaypanel);
document.getElementById("mainsection").addEventListener("mouseover", hidepanel);
