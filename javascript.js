const DEFAULT_DIMENSION = 16;
const MAX_DIMENSION = 100;
let opacityFlag = true;

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

  useOpacity();

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
  gridPlot.style.border = "1px solid rgb(161, 164, 190)";
  gridPlot.style.backgroundColor = "rgb(180, 164, 161)";
  gridPlot.style.opacity = 1;
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
    e.target.style.opacity = e.target.style.opacity - 0.1;
  }
  else
  {
    e.target.style.backgroundColor = "black";
  }

}

function useOpacity()
{
  let input = "";
  do
  {
    input = prompt("Would like to use opacity? (y/n)");
  }while(input != "y" && input != "n");

  if (input == "y")
  {
    opacityFlag = true;
  }

  else
  {
    opacityFlag = false;
  }
}

makeGrid(DEFAULT_DIMENSION);
