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

// Players
allUsers = []
let newUser = {
  playerName: '',
  playerNickName: '',
  legs: 1,
  userScore: 501,
  toPlay: '',
  id: null,
}
let allSelectedPl = []
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula imperdiet magna, at accumsan dui lobortis ut. Ut tincidunt quis nulla quis sagittis. In pellentesque, purus id auctor sagittis, ligula.</p>
    <button class="infoContentBtn">OK</button>
    `
  const PrivacyPolicyText = `
    <h3>Privacy Policy</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper ultricies augue, sit amet malesuada diam rhoncus non. Sed id nisi a felis tristique ultrices. Donec non semper velit. Curabitur volutpat bibendum nulla at tincidunt. Vivamus lobortis tellus et mauris hendrerit, eu convallis sapien finibus. Vestibulum tempus volutpat justo, nec pellentesque dolor elementum a. Duis et fringilla tellus, in suscipit diam. Sed sodales nulla vitae cursus feugiat. Nunc nec justo id turpis lacinia ultrices. Etiam euismod ac risus accumsan venenatis. Suspendisse accumsan fermentum nibh. Fusce ut neque quis metus aliquam consequat at in dui. Nullam condimentum nisl odio, malesuada tincidunt tellus vulputate ac. Donec sapien ipsum, pharetra nec risus et, vulputate ultricies nunc. Maecenas tristique ac risus sed viverra.</p>
    <button class="infoContentBtn">OK</button>
    `
  const helpText = `
    <h3>Help</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dolor accumsan, ullamcorper ex sed, posuere sapien. Curabitur lobortis tempus quam, eget volutpat nisi luctus nec. Aenean tellus sapien, suscipit sit amet vulputate quis, commodo ac purus. Maecenas vestibulum vel sem pellentesque imperdiet. Curabitur faucibus condimentum sapien. Quisque eu sodales libero. Fusce a commodo orci, non condimentum purus. Suspendisse vitae eleifend dolor. Sed sed elit ac odio vestibulum sagittis. Pellentesque lobortis mi quis pulvinar malesuada. Ut nec cursus quam. Ut id lacus sed risus vulputate viverra. Vestibulum consectetur nibh non tellus sodales euismod. In et nunc ligula. Pellentesque finibus laoreet sem elementum fermentum.</p>
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

// Closse info box on click X
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
      <svg id="select-team" fill="none" stroke="#fff" viewBox="0 0 24 24"><g fill="#fff"><rect/><path fill-rule="evenodd" d="M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" clip-rule="evenodd"/><path d="M14.367 12.063a.197.197 0 0 0 .053.252 3.5 3.5 0 1 0 0-5.63.197.197 0 0 0-.053.252c.404.765.633 1.637.633 2.563 0 .926-.229 1.798-.633 2.563Z"/><path fill-rule="evenodd" d="M4.641 15.7c1.233-.536 2.85-.7 4.859-.7 2.011 0 3.63.165 4.862.7 1.343.585 2.16 1.58 2.587 2.984A1.02 1.02 0 0 1 15.974 20H3.028a1.02 1.02 0 0 1-.976-1.319c.428-1.404 1.245-2.398 2.59-2.982Z" clip-rule="evenodd"/><path d="M14.819 14.036c-.415.026-.439.582-.058.748 1.042.453 1.827 1.12 2.39 1.972.462.699 1.179 1.244 2.017 1.244h1.78c.707 0 1.224-.703.975-1.39a3.412 3.412 0 0 0-1.843-2.024c-.816-.38-1.837-.538-3.04-.585L17.02 14H17c-.71 0-1.45-.01-2.181.036Z"/></g></svg>
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
    //div.setAttribute('class', 'length-div')
    //myHeader.appendChild(div)
    //let lengthDiv = document.querySelector('.length-div')
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
    <p>Clear Players</p></br>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula imperdiet magna, at accumsan dui lobortis ut. Ut tincidunt quis nulla quis sagittis. In pellentesque, purus id auctor sagittis, ligula.</p>
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
    <header class="my-header">
      <h1><a href="index.html">In Game</a></h1>
      <div class="menu-btn">&#8285;</div>
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
      let startMatchBody = document.querySelector('.start-match-body')

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
    <div id="newMatch-btn" class="menu-btn">&#8285;</div>
    </div>
  </header>
    <main>
    <div class="select-player-page">
      <div class="select-player-body"></div>
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
    let addPlayerBtn = document.getElementById('add-player-btn')
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

    // Select the player in the selected player page
    let allSelectedPlayerBox = document.querySelectorAll('.selected-player-box')
    allSelectedPlayerBox.forEach((playerBox) => {
      playerBox.style.cursor = 'pointer'
      playerBox.addEventListener('click', selectedPlayer)
    })

    function selectedPlayer() {
      let playerId = this.getAttribute('data-select-id')
      let selectedPl = allUsers[playerId]
      allSelectedPl.push(selectedPl)
      newMatch()
    }

    // Add player function
    addPlayerBtn.addEventListener('click', addPlayerFunction)
    function addPlayerFunction() {
      let addPlayerPageContent = `
     <header class="my-header">
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
      <input type="text" id="user-name" placeholder="player name">
      </div>
      <div  class="add-player-box">
      <input type="text" id="user-nickName" placeholder="nickname">
      </div>
      <button id="cancelBtn" class="bottomBtn">CANCEL</button>
      <button id="okBtn" class="bottomBtn">OK</button>
      </form>
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
      let addPlBtn = document.getElementById('addPlayer-btn')
      addPlBtn.style.cursor = 'pointer'
      let userName = document.getElementById('user-name')
      let userNickName = document.getElementById('user-nickName')
      let okBtn = document.getElementById('okBtn')
      let cancelBtn = document.getElementById('cancelBtn')

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

  // Select team function
  function selectTeamFunction() {
    console.log('select team function')
  }

  // Clear player function
  function clearPlayerFunction() {
    let infoDiv = document.querySelector('.info-div')
    infoDiv.style.display = 'none'
    allSelectedPl = []
    newMatch()
  }
}
// New Match function END
