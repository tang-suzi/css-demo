function generateRandomContributionStats() {
  const contributions = [];

  for (let i = 0; i < 52; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      week.push(Math.floor(Math.random() * 7));
    }
    contributions.push(week);
  }
  return contributions;
}

function makeGraph() {
  const graph = document.querySelector(".graph");
  const contributions = generateRandomContributionStats();

  for (let i = 0; i < contributions.length; i++) {
    let graphWeek = document.createElement("ul");
    graphWeek.classList.add(`week=${i + 1}`);

    contributions[i].forEach((level) => {
      let square = document.createElement("li");
      square.classList.add(`square`);
      square.dataset.level = level;
      graphWeek.appendChild(square);
      graph.appendChild(graphWeek);
    });
  }
}

makeGraph();
