const categories = [
  {
    name: "GPlay JSC",
    games: [
      
      {
        name: "Tile Aqua Girl",
        thumbnail: "thumbnails/tile-aqua-girl.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.gplay.tile.aqua.girl",
          Video: "https://drive.google.com/file/d/157bNtH8slIj66grvAjQsIrfiRWOJ1D1a/view"
        }
      },
      {
        name: "Wool Pull Girl 3D",
        thumbnail: "thumbnails/wool-pull-girl-3d.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.gplay.wool.pull.girl3d",
          Video: "https://drive.google.com/file/d/1W3WXT0grpd2VGvq6lwMQmdytQSWhU8qs/view"
        }
      },
      {
        name: "Wood Cube Out",
        thumbnail: "thumbnails/wood-cube-out.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.gplay.wood.cube.out",
          iOS: "https://apps.apple.com/vn/app/wood-cube-out-3d/id6742124552",
          Video: "https://www.youtube.com/watch?v=98OUQxE58Fs"
        }
      }
      
    ]
  },

  {
    name: "Se7en Game",
    games: [
      {
        name: "Slap Tower: Climb Troll Obby",
        thumbnail: "thumbnails/slap-tower.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.push.tower.troll.brain2025"
        }
      },
      {
        name: "Scary World of Danny",
        thumbnail: "thumbnails/scary_world_of_danny.png",
        links: {
          Video: "https://drive.google.com/file/d/1asjIE0zP6HyD3B1qauOuPeGzVDlS8yy_/view?usp=drive_link"
        }
      }
    ]
  },

  {
    name: "Gabros team",
    games: [
      {
        name: "Cat Block Puzzle",
        thumbnail: "thumbnails/cat-block-puzzle.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.gb.block.puzzle.catpuzzle.sudoku.woodoku.tetris",
          iOS: "https://apps.apple.com/vn/app/cat-block-puzzle/id6504985074",
          Video: "https://drive.google.com/file/d/1Bpf-PmEpwZejrxjboNEaWNapO5HYuhnm/view"
        }
      },
      {
        name: "DIY Paper Doll: Dream House",
        thumbnail: "thumbnails/diy_paper_doll_dream_house.png",
        links: {
          Android: "https://play.google.com/store/apps/details?id=com.gb.diy.paper.doll.dressup.decoration.home",
          iOS: "https://apps.apple.com/vn/app/diy-paper-doll-dream-house/id6480329405",
        }
      },
    ]


  },
  {
    name: "Game Jams",
    games: [
      {
        name: "Blood Dungeon (GMTK 2025)",
        thumbnail: "thumbnails/blood-dungeon.png",
        links: {
          Itch: "https://namphuthuy.itch.io/blood-dungeon",
          Video: "https://youtu.be/UdEwljzyADc?si=zLRVywcmXRYtpe1i"
        }
      },
      {
        name: "Bubseidon (GGJ VN 2025)",
        thumbnail: "thumbnails/bubseidon.png",
        links: {
          Itch: "https://namphuthuy.itch.io/bubseidon",
          Video: "https://www.youtube.com/watch?v=8PO7MGplLQI"
        }
      }
    ]
  }
];

const portfolio = document.getElementById("portfolio");

categories.forEach(category => {
  const section = document.createElement("section");
  section.className = "category-section";

  const heading = document.createElement("h2");
  heading.className = "category-title";
  heading.textContent = category.name;
  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "portfolio-grid";

  category.games.forEach(game => {
    const card = document.createElement("div");
    card.className = "card";

    let linksHTML = "";
    for (let key in game.links) {
      linksHTML += `<a href="${game.links[key]}" target="_blank">${key}</a>`;
    }

    card.innerHTML = `
      <div class="thumbnail" style="background-image:url('${game.thumbnail}')"></div>
      <div class="card-content">
        <h3>${game.name}</h3>
        <div class="links">
          ${linksHTML}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  section.appendChild(grid);
  portfolio.appendChild(section);
});
