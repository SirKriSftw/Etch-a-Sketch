const DEFAULT_DIMENSION = 16;
const MAX_DIMENSION = 100;
let opacityFlag = false;
let redFlag = false;
let blueFlag = false;
let greenFlag = false;


// Checks for user pressing "n" to reset grid OR RGB for colors
document.addEventListener("keypress", (e) => {
  if(e.code == "KeyN")
  {
    resetGrid();
  }
  else if (e.code == "KeyO")
  {
    opacityFlag = !opacityFlag;
  }
  else if (e.code == "KeyR")
  {
    redFlag = !redFlag;
    blueFlag = false;
    greenFlag = false;
  }
  else if (e.code == "KeyG")
  {
    greenFlag = !greenFlag;
    blueFlag = false;
    redFlag = false;
  }
  else if (e.code == "KeyB")
  {
    blueFlag = !blueFlag;
    redFlag = false;
    greenFlag = false;
  }
})

// Resets grid upon "n" being pressed
function resetGrid()
{
    let dimension = getNewDimension();
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    body.appendChild(newContainer);
    makeGrid(dimension);
}

function getNewDimension()
{
  let dimension = 0;
  do
  {
    dimension = prompt("What new dimensions would you like? (1 - 100)");
  }while(dimension <= 0 || dimension > MAX_DIMENSION || isNaN(dimension));

  return dimension;
}

// Sets up dimension x dimension grid
function makeGrid(dimension)
{
  for(let i = 0; i < dimension * dimension; i++)
  {
    makePlot(dimension);
  }
}

// Makes a single plot of grid
function makePlot(dimension)
{
  const container = document.querySelector(".container");
  const gridPlot = document.createElement("div");
  const sides = 100 / dimension;
  gridPlot.style.width = sides + "%";
  gridPlot.style.height = sides + "vh";
  gridPlot.classList.add("plot");

  gridPlot.addEventListener("mouseenter", (event) => {
    plotHovered(event)
  });

  container.appendChild(gridPlot);
}

function plotHovered(e)
{
  if(opacityFlag)
  {
    let newOpacity = +e.target.style.opacity + 0.1;
    e.target.style.opacity = newOpacity;
  }
  else
  {
    e.target.style.opacity = 1;
  }

  if (redFlag)
  {
      e.target.style.backgroundColor = "red";
  }
  else if (blueFlag)
  {
    e.target.style.backgroundColor = "blue";
  }
  else if (greenFlag)
  {
    e.target.style.backgroundColor = "green";
  }
  else
  {
    e.target.style.backgroundColor = "black";
  }
}

makeGrid(DEFAULT_DIMENSION);
