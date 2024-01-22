(function () {
  const doms = {
    container: document.querySelector(".container"),
    inputRow: document.querySelector("input#row"),
    inputCol: document.querySelector("input#col"),
    inputMine: document.querySelector("input#mine"),
    btnEnter: document.querySelector("button#enter"),
  };
  let checkerBoardRowLength = 10;
  let checkerBoardColLength = 10;
  let mineNumber = 10;
  let checkerBoardContext = [];
  let isOnce = true;
  let isGameOver = false;
  let isVictory = false;
  let difficultyLevel = 3;

  function main() {
    bindArgs();
    // setDifficulty();
    initElement();
    bindEvent();
  }
  function initElement() {
    initCheckerBoardContext();
    renderCheckerBoard(checkerBoardContext);
  }
  function bindEvent() {
    doms.btnEnter.addEventListener("click", bindArgs);
  }
  function bindArgs() {
    checkerBoardRowLength = +doms.inputRow.value || 10;
    checkerBoardColLength = +doms.inputCol.value || 10;
    mineNumber = +doms.inputMine.value || 20;
    checkerBoardContext = [];
    isOnce = true;
    isGameOver = false;
    isVictory = false;
    initElement();
  }
  function renderCheckerBoard(checkerBoardContext) {
    const tempContainer = document.createDocumentFragment();
    for (let i = 0; i < checkerBoardContext.length; i++) {
      const line = document.createElement("div");
      line.className = "line";
      for (let j = 0; j < checkerBoardContext[i].length; j++) {
        const cellContext = checkerBoardContext[i][j];
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cellContext.isUnknown && cell.classList.add("unknown");
        cellContext.isMine && cell.classList.add("mine");
        cellContext.isExploded && cell.classList.add("exploded");
        cellContext.isFlag && cell.classList.add("flag");
        cellContext.nearbyMineCount &&
          cell.classList.add(`number-${cellContext.nearbyMineCount}`);
        cell.addEventListener("click", function () {
          clickHandle(cellContext);
        });
        cell.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          rightClickHandle(cellContext);
        });
        line.appendChild(cell);
      }
      tempContainer.appendChild(line);
    }
    doms.container.innerHTML = "";
    doms.container.append(tempContainer);
  }
  function initCheckerBoardContext() {
    checkerBoardContext = [];
    for (let i = 0; i < checkerBoardRowLength; i++) {
      checkerBoardContext[i] = [];
      for (let j = 0; j < checkerBoardColLength; j++) {
        const cellContext = {
          line: i,
          cell: j,
          isExploded: false,
          isMine: false,
          isUnknown: true,
          isFlag: false,
          nearbyMineCount: 0,
        };
        checkerBoardContext[i][j] = cellContext;
      }
    }
    buildMine();
  }
  function setDifficulty() {
    switch (difficultyLevel) {
      case 0:
        mineNumber = checkerBoardRowLength * checkerBoardColLength * 0.2;
        break;
      case 1:
        mineNumber = checkerBoardRowLength * checkerBoardColLength * 0.3;
        break;
      case 2:
        mineNumber = checkerBoardRowLength * checkerBoardColLength * 0.5;
        break;
    }
  }
  function buildMine(filterFn = () => true) {
    const allMines = new Set();
    for (let i = 0; i < checkerBoardRowLength; i++) {
      for (let j = 0; j < checkerBoardColLength; j++) {
        checkerBoardContext[i][j].isMine = false;
        if (filterFn(i, j)) {
          allMines.add({ line: i, cell: j });
        }
      }
    }
    const mineArr = new Set();
    do {
      const mineIndex = Math.floor(Math.random() * allMines.size);
      const minePosition = [...allMines][mineIndex];
      allMines.delete(minePosition);
      const { line, cell } = minePosition;
      mineArr.add({ line, cell });
    } while (mineArr.size < mineNumber);
    for (const { line, cell } of mineArr) {
      checkerBoardContext[line][cell].isMine = true;
    }
    buildNearbyMineCount();
  }
  function buildNearbyMineCount() {
    for (let i = 0; i < checkerBoardRowLength; i++) {
      for (let j = 0; j < checkerBoardColLength; j++) {
        const cellContext = checkerBoardContext[i][j];
        if (cellContext.isMine) {
          cellContext.nearbyMineCount = 0;
          continue;
        }
        cellContext.nearbyMineCount = getNearbyMineCount(cellContext);
      }
    }
  }

  function clickHandle(cell) {
    if (isGameOver) {
      return;
    }
    if (isOnce) {
      buildMine((l, c) => !(l === cell.line && c === cell.cell));
      isOnce = false;
    }
    if (cell.isUnknown) {
      mineSweeping(cell);
    }

    renderCheckerBoard(checkerBoardContext);
  }
  function rightClickHandle(cell) {
    if (isGameOver) {
      return;
    }
    if (cell.isUnknown) {
      cell.isFlag = !cell.isFlag;
    }
    renderCheckerBoard(checkerBoardContext);
  }

  function mineSweeping(cellContext) {
    if (cellContext.isFlag && cellContext.isUnknown) {
      cellContext.isFlag = false;
      return;
    }
    if (cellContext.isUnknown) {
      cellContext.isUnknown = false;
      if (!cellContext.isMine) {
        function _sweepNoMine(cell) {
          if (cell.nearbyMineCount === 0) {
            selectNearbyCells(cell, (c) => {
              if (c.isUnknown) {
                if (!c.isMine && !c.isFlag) {
                  c.isUnknown = false;
                  _sweepNoMine(c);
                }
              }
            });
          }
        }
        _sweepNoMine(cellContext);
        isVictory = checkForVictory(checkerBoardContext);
        if (isVictory) {
          isGameOver = true;
          checkerBoardContext.forEach((line) => {
            line.forEach((cell) => {
              if (cell.isMine) {
                cell.isFlag = true;
              }
            });
          });
        }
      } else {
        cellContext.isExploded = true;
        isGameOver = true;
        checkerBoardContext.forEach((line) => {
          line.forEach((cell) => {
            if (cell.isMine) {
              cell.isUnknown = false;
            }
          });
        });
      }
    }
  }
  function checkForVictory(checkerBoardContext) {
    for (let i = 0; i < checkerBoardContext.length; i++) {
      for (let j = 0; j < checkerBoardContext[i].length; j++) {
        const cellContext = checkerBoardContext[i][j];
        if (!cellContext.isMine && cellContext.isUnknown) {
          return false;
        }
      }
    }
    return true;
  }
  function getNearbyMineCount(cellContext) {
    return selectNearbyCells(cellContext, (cell) => cell.isMine, true).length;
  }

  function selectNearbyCells(cellContext, fn, isFilter = false) {
    const { line, cell } = cellContext;
    const nearbyCells = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        const lineIndex = line + i;
        const cellIndex = cell + j;
        if (
          lineIndex >= 0 &&
          lineIndex < checkerBoardRowLength &&
          cellIndex >= 0 &&
          cellIndex < checkerBoardColLength
        ) {
          const curCellContext = checkerBoardContext[lineIndex][cellIndex];
          const fnResult = fn(curCellContext, cellContext);
          if (isFilter) {
            if (fnResult) {
              nearbyCells.push(curCellContext);
            }
          } else {
            nearbyCells.push({ curCellContext, fnResult });
          }
        }
      }
    }
    return nearbyCells;
  }
  main();
})();
