const container = document.querySelector(".container");
const DIMENSION = 16

// Sets up DIMENSION x DIMENSION grid
function makeGrid()
{
  for(let i = 0; i < DIMENSION * DIMENSION; i++)
  {
    makePlot();
  }
}

// Makes a single plot of grid
function makePlot()
{
  const gridPlot = document.createElement("div");
  const sides = 100 / DIMENSION;
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
