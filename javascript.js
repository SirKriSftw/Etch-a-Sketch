const container = document.querySelector(".container");
const DEFAULT_DIMENSION = 16;
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
    let dimension = getNewDimension();

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

makeGrid(DEFAULT_DIMENSION);
