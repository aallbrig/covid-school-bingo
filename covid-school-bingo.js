(() => {
  function shuffle(array) {
    const clonedArray = array.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
    }
    return clonedArray;
  }
  const bingoTable = document.getElementById('bingo_table');
  const possibleBingoCells = [
    'Kid ingests hand sanitizer',
    'Teacher retires or quits',
    'I.A. required to take over class',
    'Parent email complaining about COVID',
    'Teacher strike',
    'Government changes COVID guidelines',
    'F.M.L.A. rules brought up in meeting',
    'Administration messes up email',
    'Administration sends reassuring email',
    'Principal suggests "use hand sanitizer before"',
    'Administration sends contradicting guidelines',
    'Student spills hand sanitizer everywhere',
    'A student tests positive for COVID',
    'Student refuses to wear face mask',
    'Teacher sends positive COVID email to entire staff email list',
    'Teacher tests positive for COVID',
    'Principal uses phrase "jean ticket"',
    'News story produced for school over COVID',
    'Students do not recess appropriately',
    'Coach suggest guided reading strategy',
    'Kid throws up in face mask',
    'Too many kids in bathroom',
    'School runs out of cleaning equipment',
    'Whole bus is deemed infected with COVID'
  ];
  const randomizedBingoCells = shuffle(possibleBingoCells);
  const finalBingoCells = [
    ...randomizedBingoCells.slice(0, 12),
    'Free',
    ...randomizedBingoCells.slice(12, randomizedBingoCells.length)
  ];
  const bingoCellsHtml = finalBingoCells.reduce((tbody, bingoCell, i) => {
    const td = document.createElement('td');
    td.classList.add('py-5', 'align-middle');
    td.textContent = bingoCell;

    const previousTrs = tbody.getElementsByTagName('tr');
    const tr = (i % 5 === 0) ?
      document.createElement('tr') :
      previousTrs[previousTrs.length - 1]

    tr.appendChild(td);

    if (i % 5 === 0) {
      tbody.appendChild(tr);
    }
    return tbody;
  }, document.createElement('tbody'));
  bingoTable.appendChild(bingoCellsHtml);
})();
