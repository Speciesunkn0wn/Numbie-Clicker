var data = ["blue", "red", "green"];

function colorstructor(color) {
  this.makeDiv = document.createElement("div");
  this.makeDiv.innerHTML = 0;
  this.makeDiv.style.width = "200px";
  this.makeDiv.style.height = "100px";
  this.makeDiv.style.backgroundColor = color;
  this.makeDiv.style.fontSize = "18px";
  this.makeDiv.style.borderRadius = "10px";
  this.makeDiv.style.lineHeight="100px";
  this.makeDiv.style.textAlign="center";
  this.colorstructor();
  document.body.appendChild(this.makeDiv);
}

colorstructor.prototype.colorstructor = function(){
  this.makeDiv.addEventListener("click", bumpNum);
  function bumpNum(){
    this.innerHTML++;
  }
}

for (let color of data){
  new colorstructor(color);
}