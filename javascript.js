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

function makePlot()
{
  const gridPlot = document.createElement("div");
  const sides = 100 / DIMENSION;
  gridPlot.style.width = sides + "%";
  gridPlot.style.height = sides + "vh";
  gridPlot.style.border = "1px solid black";
  container.appendChild(gridPlot);
}


makeGrid();
