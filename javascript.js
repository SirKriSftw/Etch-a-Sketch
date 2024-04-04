const container = document.querySelector(".container");
let dimension = 16
const MAX_DIMENSION = 100;

// Checks for user pressing "r" to reset grid
document.addEventListener("keypress", (e) => {
  if(e.code == "KeyR")
  {
    resetGrid();
  }
})

// Resets grid upon "r" being pressed
function resetGrid()
{
    getNewDimension();
}

function getNewDimension()
{
  do
  {
    dimension = prompt("What new dimensions would you like? (1 - 100)");
  }while(dimension <= 0 || dimension > MAX_DIMENSION || isNaN(dimension));
  return dimension;
}

// Sets up DIMENSION x DIMENSION grid
function makeGrid()
{
  for(let i = 0; i < dimension * dimension; i++)
  {
    makePlot();
  }
}

// Makes a single plot of grid
function makePlot()
{
  const gridPlot = document.createElement("div");
  const sides = 100 / dimension;
  gridPlot.style.width = sides + "%";
  gridPlot.style.height = sides + "vh";
  gridPlot.style.border = "1px solid rgb(161, 164, 190)";
  gridPlot.style.backgroundColor = "rgb(180, 164, 161)";

  gridPlot.addEventListener("mouseenter", (event) => {
    plotHovered(event)
  });

  container.appendChild(gridPlot);
}

function plotHovered(e)
{
  e.target.style.backgroundColor = "black";
}

makeGrid();
