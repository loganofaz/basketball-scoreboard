let score = {
    home: {
        points: 0,
        fouls: 0
    },
    away: {
        points: 0,
        fouls: 0
    }
};

let period = 1;

// DOM elements
const appEl = document.querySelector("#app");
const homeScoreEl = document.querySelector("#home-score");
const awayScoreEl = document.querySelector("#away-score");
const homeFoulsEl = document.querySelector("#home-fouls");
const awayFoulsEl = document.querySelector("#away-fouls");
const periodEl = document.querySelector("#period-value");

appEl.addEventListener("click", (e) => {
    const target = e.target;
    const team = target.dataset.team;
    const increment = parseInt(target.dataset.increment, 10);

    switch (target.id) {
        case "reset":
            score.home.points = 0;
            score.home.fouls = 0;
            score.away.points = 0;
            score.away.fouls = 0;
            period = 1;
            render();
            break;
        case "period-1":
            if(period < 4) {
                period++;
            }
            render();
            break;
        case "home-fouls-1":
        case "away-fouls-1":
            if (team === "home") {
                score.home.fouls += increment;
            } else if (team === "away") {
                score.away.fouls += increment;
            }
            render();
            break;

        default:
            if (target.closest("#home-controls, #away-controls")) {
              if (team === "home") {
                score.home.points += increment;
            } else if (team === "away") {
                score.away.points += increment;
              }
              render();
            }
            break;
    }
});

function render() {
    homeScoreEl.textContent = score.home.points;
    awayScoreEl.textContent = score.away.points;
    homeFoulsEl.textContent = score.home.fouls;
    awayFoulsEl.textContent = score.away.fouls;
    periodEl.textContent = period;
}