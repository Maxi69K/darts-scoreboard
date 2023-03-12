// Darts Scoreboard
const myBody = document.querySelector('body')
const myHeader = document.querySelector('.my-header')
const menuBtn = document.querySelector('.menu-btn')

const div = document.createElement('div')
const paragraph = document.createElement('p')

// Header
const header = `<header class="my-header"></header>`

// Close button
const closeBtn = `<div class="close">&#10540;</div>`

// All Players
allUsers = []
let newUser = {
  playerName: '',
  playerNickName: '',
  legs: 1,
  userScore: 501,
  toPlay: '',
  id: null,
}
// All selected players for game
let allSelectedPl = []
// All Selected Teams
let allSelectedTeams = []
// The player who currently plays
let currentPlayer = {}
let select = 0
let number = []

// Match Length
let matchLegs = 3

// Load in start
window.document.addEventListener('load', startFunction())
function startFunction() {
  if (localStorage.getItem('DartsUsers')) {
    allUsers = JSON.parse(localStorage.getItem('DartsUsers'))
  } else {
    allUsers = allUsers
  }
  if (localStorage.getItem('SelectedPlayers')) {
    allSelectedPl = JSON.parse(localStorage.getItem('SelectedPlayers'))
  } else {
    allSelectedPl = allSelectedPl
  }
  if (localStorage.getItem('SelectedTeams')) {
    allSelectedTeams = JSON.parse(localStorage.getItem('SelectedTeams'))
  } else {
    allSelectedTeams = allSelectedTeams
  }
}

// Menu button in home page
menuBtn.addEventListener('click', infoFunction)

// Info button functions in header
function infoFunction() {
  // Create info div
  div.setAttribute('class', 'info-div')
  myHeader.appendChild(div)
  // Select info div
  let infoDiv = document.querySelector('.info-div')
  infoDiv.style.display = 'block'
  // text in info div
  const infoText = `
  <div class="close">&#10540;</div>
  <p>Information</p>
  </br><p>Privacy Policy</p></br>
  <p>Help</p>
  `
  infoDiv.innerHTML = infoText

  // Select all paragraph elements in info div
  let allP = document.querySelectorAll('.info-div > p')
  // All information in three paragraph
  const informationText = `
    <h3>Information</h3>
    <p>Darts Scoreboard</p><br>
    <p>This applications is free.</p>
    <p>Version: 1.0.0</p><br>
    <p>Latest Changes:</p>
    <p>1.Deleting all players from the list at once.</p>
    <p>2.Minor cosmetic changes.</p>
    <p>3.Bug fixes.</p><br>
    <p>Additional explanations:</p>
    <p>The application was made for the purpose of testing candidates applying for the position of web developer at Videobolt.</p>
    <button class="infoContentBtn">OK</button>
    `
  const PrivacyPolicyText = `
    <h3>Privacy Policy</h3>
    <p>The application was made according to the task of the Videobolt company, and it is forbidden to copy the code and use it by presenting it to anyone as your own.</p><br>
    <p>All rights reserved.</p>
    <button class="infoContentBtn">OK</button>
    `
  const helpText = `
    <h3>Help</h3>
    <p>The application is designed to track the scores of players from 501 to zero.</p>
    <p>It is usually set to play 3 rounds, but you can set it as desired from 1 to 30 rounds.</p>
    <p>When the first player reaches zero and finishes the last round, the application presents the winner and ends the game.</p>
    <p>You can follow the score of one or more players.</p>
    <button class="infoContentBtn">OK</button>
    `
  allP.forEach((par) => {
    par.style.cursor = 'pointer'
    par.addEventListener('click', () => paragraphClickHandler(par))
  })

  // paragraphClickHandler function
  function paragraphClickHandler(par) {
    switch (par.innerHTML) {
      case 'Information':
        infoDiv.setAttribute('class', 'info-div-content')
        infoDiv.innerHTML = informationText
        document
          .querySelector('.infoContentBtn')
          .addEventListener('click', () => {
            infoDiv.style.display = 'none'
            infoDiv.setAttribute('class', '.info-div')
          })
        break
      case 'Privacy Policy':
        infoDiv.setAttribute('class', 'info-div-content')
        infoDiv.innerHTML = PrivacyPolicyText
        document
          .querySelector('.infoContentBtn')
          .addEventListener('click', () => {
            infoDiv.style.display = 'none'
            infoDiv.setAttribute('class', '.info-div')
          })
        break
      case 'Help':
        infoDiv.setAttribute('class', 'info-div-content')
        infoDiv.innerHTML = helpText
        document
          .querySelector('.infoContentBtn')
          .addEventListener('click', () => {
            infoDiv.style.display = 'none'
            infoDiv.setAttribute('class', '.info-div')
          })
        break
      default:
        break
    }
  }
}
// Info button functions in header END

// Close info box on click X
window.onclick = function (event) {
  let infoDiv = document.querySelector('.info-div')
  if (event.target.matches('.close') && infoDiv != null) {
    infoDiv.style.display = 'none'
  }
}

// Home page six contect texts sellected
const contentsText = document.querySelectorAll('.content')
contentsText.forEach((contentText) => {
  let targetText = contentText.children[1].innerText
  contentText.addEventListener('click', () => choiseNewPage(targetText))
})

// Select action in home page
function choiseNewPage(targetText) {
  switch (targetText) {
    case 'New Match':
      console.log('New Match')
      newMatch()
      break
    case 'Resume Match':
      console.log('Resume Match')
      break
    case 'Menage Players':
      console.log('Menage Players')
      break
    case 'Menage Teams':
      console.log('Menage Teams')
      break
    case 'Statistics':
      console.log('Statistics')
      break

    default:
      break
  }
}
// Select action in home page END

// New Match function
function newMatch() {
  myHeader.style.display = 'none'
  const newMatchHeaderContent = `
  <header id="new-match-header" class="my-header">
    <h1><a href="index.html">Match</a></h1>
    <div class="menu-content">
    <div class="svg-container">
      <svg id="select-player" fill="none" stroke="#fff" viewBox="0 0 24 24"><g fill="#fff"><rect/><path fill-rule="evenodd" d="M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8ZM5.43 16.902C7.057 16.223 9.224 16 12 16c2.771 0 4.935.22  6.559.898 1.742.727 2.812 1.963 3.382 3.76A1.03 1.03 0 0 1 20.959 22H3.035c-.69 0-1.188-.67-.978-1.335.568-1.797 1.634-3.033 3.374-3.762Z" clip-rule="evenodd"/></g></svg>
    </div>
    <div class="svg-container">
      <svg id="select-team" fill="none" stroke="#fff" viewBox="0 0 24 24"><g fill="#fff"><path d="M1.5 6.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM14.5 6.5c0 1.5-.44 2.898-1.2 4.07a5.5 5.5 0 1 0 0-8.14 7.465 7.465 0 0 1 1.2 4.07ZM0 18a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4ZM16 18v5h7a1 1 0 0 0 1-1v-4a4 4 0 0 0-4-4h-5.528A5.978 5.978 0 0 1 16 18Z"/></g></svg>
    </div>
    <div id="newMatch-btn" class="menu-btn">&#8285;</div>
    </div>
  </header>
  <main>
    <div class="new-match-page">
      <div class="new-match-body-header">
        <h3>501</h3>
        <h4>race to ${matchLegs} legs</h4>
        <p class="set-match-length">fixed match length</p>
      </div>
      <div class="new-match-body">
        <div class="match-players"></div>
        <buttom id="start-match-btn">START MATCH</buttom>
      </div>
    </div>
  </main>
  <footer id="myFooter">
    <small>
      &copy; 2023 Darts Scoreboard by <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights Reserved.
    </small>
  </footer>
  `
  myBody.innerHTML = newMatchHeaderContent

  let newMatchHeader = document.getElementById('new-match-header')
  let selectPlayer = document.getElementById('select-player')
  let selectTeam = document.getElementById('select-team')
  let newMatchBody = document.querySelector('.new-match-body')
  let matchPlayers = document.querySelector('.match-players')
  let newMatchBtn = document.getElementById('newMatch-btn')
  let startMatchBtn = document.getElementById('start-match-btn')
  let setMatchLength = document.querySelector('.set-match-length')

  selectPlayer.addEventListener('click', selectPlayerFunction)
  selectTeam.addEventListener('click', selectTeamFunction)
  startMatchBtn.addEventListener('click', startMatchBtnFunction)

  // Adding selected players in match page
  localStorage.setItem('SelectedPlayers', JSON.stringify(allSelectedPl))
  allSelectedPl.forEach((player, index) => {
    let addPlCont = `
    <p data-id="${index}">${index + 1}. ${player.playerNickName}</p>
    `
    matchPlayers.innerHTML += addPlCont
  })
  const allPlayersInMatchPage = document.querySelectorAll('.match-players > p')
  allPlayersInMatchPage.forEach((player) => (player.style.cursor = 'pointer'))

  // Select players to delete in match page
  allPlayersInMatchPage.forEach((player) =>
    player.addEventListener('click', (e) => deletePlayer(e))
  )
  function deletePlayer(e) {
    let index = e.target.getAttribute('data-id')
    allSelectedPl.splice(index, 1)
    newMatch()
  }

  // Set Match Length Function
  setMatchLength.addEventListener('click', selectMatchLengthFunction)
  function selectMatchLengthFunction() {
    let setLength = `
    <div class="length-div-content">
      <form action="#">
        <label for="set-length">Set Length:</label>
        <input type="number" id="set-length" min="1" max="30" value="${matchLegs}">
        <button class="setBtn">SET</button>
      </form>
    </div>
    `
    newMatchHeader.innerHTML += setLength
    let lengthDivContent = document.querySelector('.length-div-content')
    lengthDivContent.style.display = 'block'
    let input = document.getElementById('set-length')
    let setBtn = document.querySelector('.setBtn')
    setBtn.addEventListener('click', (e) => {
      e.preventDefault()
      matchLegs = Number(input.value)
      lengthDivContent.style.display = 'none'
      newMatch()
    })
  }

  // New match button function
  newMatchBtn.addEventListener('click', () => {
    div.setAttribute('class', 'info-div')
    newMatchHeader.appendChild(div)
    let infoDiv = document.querySelector('.info-div')
    infoDiv.style.display = 'block'
    const infoText = `
    <div class="close">&#10540;</div>
    <p>Clear all</p></br>
    <p>Help</p></br>
    <p><a href="index.html">&#10510; Back</a></p>
    `
    infoDiv.innerHTML = infoText
    let allP = document.querySelectorAll('.info-div > p')
    allP.forEach((par) => (par.style.cursor = 'pointer'))
    allP[0].addEventListener('click', clearPlayerFunction)
    allP[1].addEventListener('click', () => {
      const informationText = `
      <h3>Help</h3>
      <p>Only selected players who are ready to play are displayed on this page.</p><br>
      <p>By clicking the button at the bottom of the page, all players on the list enter the game.</p><br>
      <p>You can delete individual players from the list by clicking on the desired name, and to delete the entire list, click on clear all in the upper right corner.</p><br>
      <p>By clicking on fixed match length, you set the number of game rounds from 1 to 30.</p><br>
      <p>The default value is 3.</p><br>
      <p>On Back you return to the previous page</p>
      <button class="infoContentBtn">OK</button>
      `
      infoDiv.setAttribute('class', 'info-div-content')
      infoDiv.innerHTML = informationText
      document
        .querySelector('.infoContentBtn')
        .addEventListener('click', () => {
          infoDiv.style.display = 'none'
          infoDiv.setAttribute('class', '.info-div')
        })
    })
  })

  // Start match function
  function startMatchBtnFunction() {
    console.log('Starting match function')

    if (allSelectedPl.length !== 0) {
      let startMatchContent = `
    <header id="start-match-header" class="my-header">
      <h1><a href="index.html">In Game</a></h1>
      <div id="ingameBtn" class="menu-btn">&#8285;</div>
    </header>
    <main>
    <div class="start-match-page">
      <div class="start-match-body"></div>
      <div class="start-match-keyboard">
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>&#10540;</td>
            <td>0</td>
            <td>&larrhk;</td>
          </tr>
        </table>
      </div>
    </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `
      myBody.innerHTML = startMatchContent

      let startMatchHeader = document.getElementById('start-match-header')
      let ingameBtn = document.getElementById('ingameBtn')
      let startMatchBody = document.querySelector('.start-match-body')

      ingameBtn.addEventListener('click', () => {
        div.setAttribute('class', 'info-div')
        startMatchHeader.appendChild(div)
        let infoDiv = document.querySelector('.info-div')
        infoDiv.style.display = 'block'
        const startMatchText = `
      <div class="close">&#10540;</div>
      <p>Help</p></br>
      <p>&#10510; Back</p>
      `
        infoDiv.innerHTML = startMatchText

        let allP = document.querySelectorAll('.info-div > p')
        allP.forEach((par) => (par.style.cursor = 'pointer'))
        allP[0].addEventListener('click', () => {
          const informationText = `
      <h3>Help</h3>
      <p>1. This is the page where you follow the players who are in the game and everyone's starting score is 501.</p><br>
      <p>The player whose turn it is to play is marked in green.</p><br>
      <p>Enter the number of points won in the field below the players and by clicking the enter button, the number of points is subtracted from the total remaining number and transferred to the next player.</p><br>
      <p>If you entered the wrong number, simply delete it by clicking on the X and enter the correct number.</p><br>
      <p>The player who reaches zero first goes to the next round and continues the game.</p><br>
      <p>The player who reaches zero first and is in the last set circle is declared the winner and the game is stopped.</p><br>
      <p>Press the back button to return to the previous page.</p>
      <button class="infoContentBtn">OK</button>
      `
          infoDiv.setAttribute('class', 'info-div-content')
          infoDiv.innerHTML = informationText
          document
            .querySelector('.infoContentBtn')
            .addEventListener('click', () => {
              infoDiv.style.display = 'none'
              infoDiv.setAttribute('class', '.info-div')
            })
        })
        allP[1].addEventListener('click', newMatch)
      })

      // Scoreboard
      currentPlayer = allSelectedPl[0]
      allSelectedPl.forEach((player, index) => {
        let playerBox = `
      <div class="player-box" data-box-id="${index}">
      <div class="player-name-box">
      <h3>${player.playerNickName}</h3>
      </div>
      <div class="legs-box">
      <p>Legs ${player.legs}</p>
      </div>
      <div class="player-score-box">
      ${player.userScore}
      </div>
      <div class="to-play-box">${player.toPlay}</div>
      </div>
      `
        startMatchBody.innerHTML += playerBox
      })
    } else {
      newMatchBody.innerHTML = 'Please select players first!'
    }

    // Players in the game
    let players = document.querySelectorAll('.player-box')
    players[select].classList.add('current-player')
    players[select].children[3].innerHTML = `to start leg ${currentPlayer.legs}`

    // Keyboard functionality
    let startMatchKeyboard = document.querySelectorAll(
      '.start-match-keyboard > table td'
    )
    startMatchKeyboard.forEach((button) =>
      button.addEventListener('click', (e) => keyboard(e))
    )

    function keyboard(e) {
      switch (e.target.innerText) {
        case '1':
          number.push(1)
          break
        case '2':
          number.push(2)
          break
        case '3':
          number.push(3)
          break
        case '4':
          number.push(4)
          break
        case '5':
          number.push(5)
          break
        case '6':
          number.push(6)
          break
        case '7':
          number.push(7)
          break
        case '8':
          number.push(8)
          break
        case '9':
          number.push(9)
          break
        case '0':
          number.push(0)
          break
        case '⤬':
          console.log('⤬')
          number.pop()
          console.log(number)
          break
        case '↩':
          console.log('↩')
          result(number)
          number = []
          break
        default:
          break
      }
    }

    // Result funcion
    function result(number) {
      let num = Number(number.join(''))
      let playerBox = document.querySelectorAll('.player-box')
      let numberOfPlayers = allSelectedPl.length
      let playerId = currentPlayer.id
      let playerName = currentPlayer.playerName
      let playerNickName = currentPlayer.playerNickName
      let playerLegs = currentPlayer.legs
      let playerScore = currentPlayer.userScore
      playerScore = playerScore - num
      allSelectedPl[select].userScore = playerScore
      let playerToPlay = currentPlayer.toPlay
      playerToPlay = 'player to play'

      let playerBoxContent = `
      <div class="player-name-box">
      <h3>${playerNickName}</h3>
      </div>
      <div class="legs-box">
      <p>Legs ${playerLegs}</p>
      </div>
      <div class="player-score-box">
      ${playerScore}
      </div>
      <div class="to-play-box">${`leads by ${num}`}</div>
      `
      playerBox[select].innerHTML = playerBoxContent

      // Winner
      if (playerLegs === matchLegs && playerScore <= 0) {
        alert(`Winner is ${playerName} - ${playerNickName}`)
        location.reload()
      }

      switch (numberOfPlayers) {
        case 1:
          select = 0
          break
        case 2:
          if (select < 1) {
            playerBox[select].classList.remove('current-player')
            playerBox[select + 1].classList.add('current-player')
            playerBox[select + 1].childNodes[7].innerHTML = 'to play'
            select++
          } else {
            playerBox[select - (numberOfPlayers - 1)].classList.add(
              'current-player'
            )
            playerBox[select].classList.remove('current-player')
            playerBox[select - (numberOfPlayers - 1)].childNodes[7].innerHTML =
              'to play'
            select = 0
          }
          break
        case 3:
          if (select < 2) {
            playerBox[select].classList.remove('current-player')
            playerBox[select + 1].classList.add('current-player')
            playerBox[select + 1].childNodes[7].innerHTML = 'to play'
            select++
          } else {
            playerBox[select - (numberOfPlayers - 1)].classList.add(
              'current-player'
            )
            playerBox[select].classList.remove('current-player')
            playerBox[select - (numberOfPlayers - 1)].childNodes[7].innerHTML =
              'to play'
            select = 0
          }
          break
        case 4:
          if (select < 3) {
            playerBox[select].classList.remove('current-player')
            playerBox[select + 1].classList.add('current-player')
            playerBox[select + 1].childNodes[7].innerHTML = 'to play'
            select++
          } else {
            playerBox[select - (numberOfPlayers - 1)].classList.add(
              'current-player'
            )
            playerBox[select].classList.remove('current-player')
            playerBox[select - (numberOfPlayers - 1)].childNodes[7].innerHTML =
              'to play'
            select = 0
          }
          break

        default:
          break
      }

      if (playerScore > 0) {
        playerLegs = playerLegs
      } else {
        if (select === 0) {
          allSelectedPl[numberOfPlayers - 1].legs = playerLegs + 1
          allSelectedPl[numberOfPlayers - 1].userScore = 501
          startMatchBtnFunction()
        } else {
          allSelectedPl[select - 1].legs = playerLegs + 1
          allSelectedPl[select - 1].userScore = 501
          startMatchBtnFunction()
        }
      }

      // Switch Players for play
      currentPlayer = allSelectedPl[select]
      num = null
      number = []
    }
    // Result funcion END
  }
  // Start match function END

  // Select player function
  function selectPlayerFunction() {
    let selectPlayerPageContent = `
    <header id="select-player-header" class="my-header">
    <h1><a href="index.html">Select Player</a></h1>
    <div class="menu-content">
    <div class="svg-container">
      <svg id="add-player-btn" xml:space="preserve" width="200" height="200" fill="#fff" stroke="#fff" viewBox="0 0 512 512"><path d="M451.368 229.053v-60.632h-40.421v60.632h-60.631v40.421h60.631v60.631h40.421v-60.631H512v-40.421zM239.915 276.724c33.652-18.238 56.506-53.864 56.506-94.829 0-59.531-48.259-107.789-107.789-107.789s-107.79 48.258-107.79 107.789c0 40.965 22.854 76.591 56.506 94.829C66.732 283.298 0 352.877 0 437.895h377.263c0-85.018-66.732-154.597-137.348-161.171z"/></svg>
    </div>
    <div id="select-player-btn" class="menu-btn">&#8285;</div>
    </div>
    </header>
    <main>
      <div class="select-player-page">
        <div class="select-player-body"></div>
      </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `

    myBody.innerHTML = selectPlayerPageContent
    let selectPlayerHeader = document.getElementById('select-player-header')
    let addPlayerBtn = document.getElementById('add-player-btn')
    let selectPlayerBtn = document.getElementById('select-player-btn')
    addPlayerBtn.style.cursor = 'pointer'
    let selectPlayerBody = document.querySelector('.select-player-body')

    allUsers.forEach((user) => {
      let allUserToSet = `
    <div class="selected-player-box" data-select-id="${user.id}">
      <h4>${user.playerName}</h4>
      <p>${user.playerNickName}</p>
    </div>
    `
      selectPlayerBody.innerHTML += allUserToSet
    })

    //Select Player button function
    selectPlayerBtn.addEventListener('click', () => {
      div.setAttribute('class', 'info-div')
      selectPlayerHeader.appendChild(div)
      let infoDiv = document.querySelector('.info-div')
      infoDiv.style.display = 'block'
      const selectPlayerText = `
      <div class="close">&#10540;</div>
      <p>Delete all</p></br>
      <p>Help</p></br>
      <p>&#10510; Back</p>
      `
      infoDiv.innerHTML = selectPlayerText

      let allP = document.querySelectorAll('.info-div > p')
      allP.forEach((par) => (par.style.cursor = 'pointer'))
      allP[0].addEventListener('click', () => {
        allUsers = []
        allSelectedPl = []
        allSelectedTeams = []
        localStorage.setItem('DartsUsers', JSON.stringify(allUsers))
        newMatch()
      })
      allP[1].addEventListener('click', () => {
        const informationText = `
      <h3>Help</h3>
      <p>This page shows a saved list of players you have ever entered.</p><br>
      <p>Clicking on a certain player opens a window with options to add him to the play list or to permanently delete him from the list.</p><br>
      <p>By clicking on the add player icon, you are sent to the page for adding a new player.</p>
      <button class="infoContentBtn">OK</button>
      `
        infoDiv.setAttribute('class', 'info-div-content')
        infoDiv.innerHTML = informationText
        document
          .querySelector('.infoContentBtn')
          .addEventListener('click', () => {
            infoDiv.style.display = 'none'
            infoDiv.setAttribute('class', '.info-div')
          })
      })
      allP[2].addEventListener('click', newMatch)
    })

    // Select the player in the selected player page
    let allSelectedPlayerBox = document.querySelectorAll('.selected-player-box')
    allSelectedPlayerBox.forEach((playerBox) => {
      playerBox.style.cursor = 'pointer'
      playerBox.addEventListener('click', selectedPlayer)
    })

    function selectedPlayer() {
      let playerNickName = this.children[1].innerText
      div.setAttribute('class', 'info-div')
      selectPlayerHeader.appendChild(div)
      let infoDiv = document.querySelector('.info-div')
      infoDiv.style.display = 'block'

      let selectOrDeleteContent = `
      <div class="close">&#10540;</div>
      <p class="name-select-user">&#10100; ${playerNickName} &#10101; &#10004;</p>
      <p class="sel-players">select to play</p>
      <p class="sel-players">delete from list</p>
      `
      infoDiv.innerHTML = selectOrDeleteContent

      let allP = document.querySelectorAll('.info-div > p')
      allP[1].addEventListener('click', () => {
        let playerId = Number(this.getAttribute('data-select-id'))
        let selectedPl = allUsers[playerId]
        allSelectedPl.push(selectedPl)
        newMatch()
      })
      allP[2].addEventListener('click', () => {
        let playerId = Number(this.getAttribute('data-select-id'))
        allUsers.splice(playerId, 1)
        localStorage.setItem('DartsUsers', JSON.stringify(allUsers))
        newMatch()
      })
    }

    // Add player function
    addPlayerBtn.addEventListener('click', addPlayerFunction)
    function addPlayerFunction() {
      let addPlayerPageContent = `
     <header id="new-player-header" class="my-header">
      <h1><a href="index.html">New Player</a></h1>
      <div id="addPlayer-btn" class="menu-btn">&#8285;</div>
    </header>
    <main>
    <div class="add-player-page">
      <div class="add-player-body">
        <h4>NAME</h4>
        <hr>
        <form>
        <div class="add-player-box">
        <input type="text" id="user-name" placeholder="player full name">
        </div>
        <div  class="add-player-box">
        <input type="text" id="user-nickName" placeholder="player nickname">
        </div>
        <button id="cancelBtn" class="bottomBtn">CANCEL</button>
        <button id="okBtn" class="bottomBtn">OK</button>
        </form>
      </div>
    </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `
      myBody.innerHTML = addPlayerPageContent
      let newPlayerHeader = document.getElementById('new-player-header')
      let addPlBtn = document.getElementById('addPlayer-btn')
      addPlBtn.style.cursor = 'pointer'
      let userName = document.getElementById('user-name')
      let userNickName = document.getElementById('user-nickName')
      let okBtn = document.getElementById('okBtn')
      let cancelBtn = document.getElementById('cancelBtn')

      addPlBtn.addEventListener('click', () => {
        div.setAttribute('class', 'info-div')
        newPlayerHeader.appendChild(div)
        let infoDiv = document.querySelector('.info-div')
        infoDiv.style.display = 'block'
        const newPlayerText = `
      <div class="close">&#10540;</div>
      <p>Help</p></br>
      <p>&#10510; Back</p>
      `
        infoDiv.innerHTML = newPlayerText

        let allP = document.querySelectorAll('.info-div > p')
        allP.forEach((par) => (par.style.cursor = 'pointer'))
        allP[0].addEventListener('click', () => {
          const informationText = `
      <h3>Help</h3>
      <p>On this page, you add a new player by entering the player's full name and surname in the first field and the player's nickname in the second field below.</p><br>
      <p>When you have filled in all the fields, click OK.</p><br>
      <p>If you want to cancel the entry of players, click the cancel button.</p><br>
      <p>By clicking on the upper right "Back", you return to the previous page.</p>
      <button class="infoContentBtn">OK</button>
      `
          infoDiv.setAttribute('class', 'info-div-content')
          infoDiv.innerHTML = informationText
          document
            .querySelector('.infoContentBtn')
            .addEventListener('click', () => {
              infoDiv.style.display = 'none'
              infoDiv.setAttribute('class', '.info-div')
            })
        })
        allP[1].addEventListener('click', selectPlayerFunction)
      })

      cancelBtn.addEventListener('click', selectPlayerFunction)

      okBtn.addEventListener('click', () => {
        let playerName = userName.value
        let playerNickName = userNickName.value
        let userId = allUsers.length
        newUser = {
          playerName: playerName,
          playerNickName: playerNickName,
          legs: 1,
          userScore: 501,
          toPlay: '',
          id: userId,
        }
        if (newUser.playerName !== '' && newUser.playerNickName !== '') {
          let copyAllUsers = [...allUsers, newUser]
          allUsers = copyAllUsers
          newUser = {
            playerName: '',
            playerNickName: '',
            legs: 1,
            userScore: 501,
            toPlay: '',
            id: null,
          }
          localStorage.setItem('DartsUsers', JSON.stringify(allUsers))
          selectPlayerFunction()
        } else {
          addPlayerFunction()
        }
      })
    }
  }
  // Select player function END

  // Select team function
  function selectTeamFunction() {
    console.log('select team function')
    let selectTeamPageContent = `
   <header id="select-team-header" class="my-header">
    <h1><a href="index.html">Select Team</a></h1>
    <div class="menu-content">
    <div class="svg-container">
      <svg id="add-team-btn" fill="none" stroke="#fff" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M6.833 11.833A2.92 2.92 0 0 0 9.75 8.917 2.92 2.92 0 0 0 6.833 6a2.92 2.92 0 0 0-2.916 2.917 2.92 2.92 0 0 0 2.916 2.916ZM21 15.333v-2.5h2.5v-1.666H21v-2.5h-1.667v2.5h-2.5v1.666h2.5v2.5H21ZM6.833 13.292c-1.95 0-5.833.975-5.833 2.916v1.459h11.667v-1.459c0-1.941-3.884-2.916-5.834-2.916Zm0 1.666c-1.491 0-3.183.559-3.883 1.042h7.767c-.7-.483-2.392-1.042-3.884-1.042Zm1.25-6.041c0-.692-.558-1.25-1.25-1.25-.691 0-1.25.558-1.25 1.25 0 .691.559 1.25 1.25 1.25.692 0 1.25-.559 1.25-1.25ZM11 11.833a2.92 2.92 0 0 0 2.917-2.916 2.92 2.92 0 0 0-3.509-2.859 4.514 4.514 0 0 1-.017 5.708c.2.042.4.067.609.067Zm3.333 4.375c0-1.133-.566-2.016-1.4-2.691 1.867.391 3.9 1.283 3.9 2.691v1.459h-2.5v-1.459Z" clip-rule="evenodd"/></svg>
    </div>
    <div id="select-team-btn" class="menu-btn">&#8285;</div>
    </div>
  </header>
    <main>
    <div class="select-team-page">
      <div class="select-team-body"></div>
    </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `

    myBody.innerHTML = selectTeamPageContent
    let selectTeamHeader = document.getElementById('select-team-header')
    let addTeamBtn = document.getElementById('add-team-btn')
    let selectTeamBtn = document.getElementById('select-team-btn')
    addTeamBtn.style.cursor = 'pointer'
    let selectTeamBody = document.querySelector('.select-team-body')

    allSelectedTeams.forEach((team) => {
      let allTeamsToSet = `
    <div class="selected-player-box" data-select-id="${team.id}">
      <h4>${team.playerNickName}</h4>
      <p>${team.playerName}</p>
    </div>
    `
      selectTeamBody.innerHTML += allTeamsToSet
    })

    let selectedPlayerBox = document.querySelectorAll('.selected-player-box')
    selectedPlayerBox.forEach((playerBox) => {
      playerBox.style.cursor = 'pointer'
      playerBox.addEventListener('click', addTeamToMatch)
    })

    // Add team to match function
    function addTeamToMatch() {
      let teamId = Number(this.getAttribute('data-select-id'))
      let selectedTm = allSelectedTeams[teamId]
      let teamNickName = selectedTm.playerNickName

      div.setAttribute('class', 'info-div')
      selectTeamHeader.appendChild(div)
      let infoDiv = document.querySelector('.info-div')
      infoDiv.style.display = 'block'

      let selectOrDeleteTeamContent = `
      <div class="close">&#10540;</div>
      <p class="name-select-user">&#10100; ${teamNickName} &#10101; &#10004;</p>
      <p class="sel-players">select to play</p>
      <p class="sel-players">delete from list</p>
      `
      infoDiv.innerHTML = selectOrDeleteTeamContent

      let allP = document.querySelectorAll('.info-div > p')
      allP[1].addEventListener('click', () => {
        console.log(allSelectedPl)
        let teamId = Number(this.getAttribute('data-select-id'))
        let selectedTm = allSelectedTeams[teamId]
        allSelectedPl.push(selectedTm)
        newMatch()
      })
      allP[2].addEventListener('click', () => {
        let teamId = Number(this.getAttribute('data-select-id'))
        allSelectedTeams.splice(teamId, 1)
        allUsers.splice(teamId, 1)
        localStorage.setItem('SelectedTeams', JSON.stringify(allSelectedTeams))
        newMatch()
      })
    }

    //Select Player button function
    selectTeamBtn.addEventListener('click', () => {
      div.setAttribute('class', 'info-div')
      selectTeamHeader.appendChild(div)
      let infoDiv = document.querySelector('.info-div')
      infoDiv.style.display = 'block'
      const selectTeamText = `
      <div class="close">&#10540;</div>
      <p>Delete all</p></br>
      <p>Help</p></br>
      <p>&#10510; Back</p>
      `
      infoDiv.innerHTML = selectTeamText

      let allP = document.querySelectorAll('.info-div > p')
      allP.forEach((par) => (par.style.cursor = 'pointer'))
      allP[0].addEventListener('click', () => {
        allSelectedTeams = []
        localStorage.setItem('DartsUsers', JSON.stringify(allUsers))
        newMatch()
      })
      allP[1].addEventListener('click', () => {
        const informationText = `
      <h3>Help</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nisl mauris. Sed enim nulla, scelerisque at fermentum in, vulputate ac diam. Donec et dui felis. Duis aliquet euismod convallis.</p>
      <button class="infoContentBtn">OK</button>
      `
        infoDiv.setAttribute('class', 'info-div-content')
        infoDiv.innerHTML = informationText
        document
          .querySelector('.infoContentBtn')
          .addEventListener('click', () => {
            infoDiv.style.display = 'none'
            infoDiv.setAttribute('class', '.info-div')
          })
      })
      allP[2].addEventListener('click', newMatch)
    })
    //Select Player button function END

    // Add team function
    addTeamBtn.addEventListener('click', addTeamFunction)
    function addTeamFunction() {
      let addTeamPageContent = `
     <header id="new-team-header" class="my-header">
      <h1><a href="index.html">New Team</a></h1>
      <div id="addTeam-btn" class="menu-btn">&#8285;</div>
    </header>
    <main>
      <div class="add-team-page">
        <div class="add-team-body">
            <form>
            </form>
          <button id="cancelBtn" class="bottomBtn">CANCEL</button>
          <button id="okBtn" class="bottomBtn">OK</button>
        </div>
      </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajnmaxi.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `
      myBody.innerHTML = addTeamPageContent
      let newTeamHeader = document.getElementById('new-team-header')
      let addTeamBodyForm = document.querySelector('.add-team-body > form')
      let addTeamBtn = document.getElementById('addTeam-btn')
      addTeamBtn.style.cursor = 'pointer'
      let okBtn = document.getElementById('okBtn')
      let cancelBtn = document.getElementById('cancelBtn')

      allUsers.forEach((user) => {
        let allUserToSet = `
          <div class="selected-player-box" data-select-id="${user.id}">
          <form>
            <label for="playerName_${user.id}">${user.playerName}</label>
            <input type="checkbox" id="playerName_${user.id}">
            <p>${user.playerNickName}</p>
          </form>
          </div>
          `
        addTeamBodyForm.innerHTML += allUserToSet
      })

      addTeamBtn.addEventListener('click', () => {
        div.setAttribute('class', 'info-div')
        newTeamHeader.appendChild(div)
        let infoDiv = document.querySelector('.info-div')
        infoDiv.style.display = 'block'
        const newTeamText = `
      <div class="close">&#10540;</div>
      <p>Help</p></br>
      <p>&#10510; Back</p>
      `
        infoDiv.innerHTML = newTeamText

        let allP = document.querySelectorAll('.info-div > p')
        allP.forEach((par) => (par.style.cursor = 'pointer'))
        allP[0].addEventListener('click', () => {
          const informationText = `
      <h3>Help</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nisl mauris. Sed enim nulla, scelerisque at fermentum in, vulputate ac diam. Donec et dui felis. Duis aliquet euismod convallis.</p>
      <button class="infoContentBtn">OK</button>
      `
          infoDiv.setAttribute('class', 'info-div-content')
          infoDiv.innerHTML = informationText
          document
            .querySelector('.infoContentBtn')
            .addEventListener('click', () => {
              infoDiv.style.display = 'none'
              infoDiv.setAttribute('class', '.info-div')
            })
        })
        allP[1].addEventListener('click', selectTeamFunction)
      })

      cancelBtn.addEventListener('click', selectTeamFunction)

      okBtn.addEventListener('click', () => {
        let selectedPlayerBoxes = document.querySelectorAll(
          '.selected-player-box'
        )
        let selectedTeamNames = []
        let selectedTeamNickNames = []
        selectedPlayerBoxes.forEach((box) => {
          if (box.children[1].checked) {
            let playerIndex = Number(box.getAttribute('data-select-id'))
            let playerNameT = allUsers[playerIndex].playerName
            let playerNickNameT = allUsers[playerIndex].playerNickName
            selectedTeamNames.push(playerNameT)
            selectedTeamNickNames.push(playerNickNameT)
          }
        })

        if (selectedTeamNames.length > 1) {
          let teamName = selectedTeamNames.join(', ')
          let teamNickName = selectedTeamNickNames.join(' & ')
          let teamForPlay = {
            playerName: teamName,
            playerNickName: teamNickName,
            legs: 1,
            userScore: 501,
            toPlay: '',
            id: null,
          }

          let copyAllSelectedTeams = [...allSelectedTeams, teamForPlay]
          allSelectedTeams = copyAllSelectedTeams
          allSelectedTeams.forEach((team, index) => (team.id = index))
          localStorage.setItem(
            'SelectedTeams',
            JSON.stringify(allSelectedTeams)
          )
          selectTeamFunction()
        }
      })
    }
  }
  // Select team function END

  // Clear player function
  function clearPlayerFunction() {
    let infoDiv = document.querySelector('.info-div')
    infoDiv.style.display = 'none'
    allSelectedPl = []
    newMatch()
  }
}
// New Match function END
