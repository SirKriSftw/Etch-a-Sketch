const container = document.querySelector(".container");

// Sets up 16x16 grid
function makeGrid()
{
  for(let i = 0; i < 16*16; i++)
  {
    makePlot();
  }
}

function makePlot()
{
  const gridPlot = document.createElement("div");
  gridPlot.style.width = "6.25%";
  gridPlot.style.height = "100vh / 16";
  gridPlot.style.border = "1px solid black";
  container.appendChild(gridPlot);
}


makeGrid();
