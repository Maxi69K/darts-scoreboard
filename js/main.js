// Darts Scoreboard
const myBody = document.querySelector('body')
const myHeader = document.getElementById('my-header');
const homeBtn = document.getElementById('home-btn')
let allUsers = []
let newUser = null
let allSelectedPl = []

// Load in start
window.document.addEventListener('load',  startFunction())
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

homeBtn.addEventListener('click', infoFunction)

const div = document.createElement('div');
const paragraph = document.createElement('p');

// Info button functions in header
function infoFunction() {
    div.setAttribute('class', 'info-div');
    myHeader.appendChild(div)
    let infoDiv = document.querySelector('.info-div');
    infoDiv.style.display = 'block'
    const infoText = `
    <p>Information</p></br>
    <p>Privacy Policy</p></br>
    <p>Help</p>
    `
    infoDiv.innerHTML = infoText
    let allP = document.querySelectorAll('.info-div > p')
    const informationText = `
    <h3>Information</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula imperdiet magna, at accumsan dui lobortis ut. Ut tincidunt quis nulla quis sagittis. In pellentesque, purus id auctor sagittis, ligula.</p>
    <button class="infoContentBtn">OK</button>
    `
    const PrivacyPolicyText = `
    <h3>Privacy Policy</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper ultricies augue, sit amet malesuada diam rhoncus non. Sed id nisi a felis tristique ultrices. Donec non semper velit. Curabitur volutpat bibendum nulla at tincidunt. Vivamus lobortis tellus et mauris hendrerit, eu convallis sapien finibus. Vestibulum tempus volutpat justo, nec pellentesque dolor elementum a. Duis et fringilla tellus, in suscipit diam. Sed sodales nulla vitae cursus feugiat. Nunc nec justo id turpis lacinia ultrices. Etiam euismod ac risus accumsan venenatis. Suspendisse accumsan fermentum nibh. Fusce ut neque quis metus aliquam consequat at in dui. Nullam condimentum nisl odio, malesuada tincidunt tellus vulputate ac. Donec sapien ipsum, pharetra nec risus et, vulputate ultricies nunc. Maecenas tristique ac risus sed viverra.

    Quisque non porta nunc. Sed aliquam malesuada dui consectetur bibendum. Pellentesque congue congue dictum. Nulla a mauris sit amet urna hendrerit feugiat. Aenean ornare sapien eget condimentum mattis. Quisque euismod est blandit, feugiat massa in, dapibus mi. Integer rutrum faucibus iaculis. Donec id mollis sem. Aliquam erat nisi, semper ac arcu at, commodo efficitur nulla. Etiam tempus, ante sodales sodales facilisis, diam nisi pretium eros, eget convallis metus massa ut turpis. Nam mi justo, consequat ac purus ut, blandit lacinia tellus. Ut facilisis nisl nec ex laoreet, vitae vulputate purus condimentum.

    Proin dapibus vulputate nisi eu cursus. Curabitur auctor porttitor nisl eu scelerisque. Vivamus rutrum eget purus vitae efficitur. Vestibulum sed interdum erat, tempor mattis leo. Donec sagittis venenatis pretium. Proin non eros quis risus varius interdum. Duis nec aliquam velit. Nulla facilisi. Aenean id dapibus purus. Maecenas eget mattis ex. Nulla id ullamcorper ante. Mauris risus ipsum, aliquet vitae pharetra in, pretium et nisl. Pellentesque et neque lectus. Nam vestibulum leo id mauris interdum tincidunt. Aenean egestas nec risus ultricies pretium. Integer a eleifend ligula, at elementum tortor. Vivamus sodales.</p>
    <button class="infoContentBtn">OK</button>
    ` 
    const helpText = `
    <h3>Help</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae dolor accumsan, ullamcorper ex sed, posuere sapien. Curabitur lobortis tempus quam, eget volutpat nisi luctus nec. Aenean tellus sapien, suscipit sit amet vulputate quis, commodo ac purus. Maecenas vestibulum vel sem pellentesque imperdiet. Curabitur faucibus condimentum sapien. Quisque eu sodales libero. Fusce a commodo orci, non condimentum purus. Suspendisse vitae eleifend dolor. Sed sed elit ac odio vestibulum sagittis. Pellentesque lobortis mi quis pulvinar malesuada. Ut nec cursus quam. Ut id lacus sed risus vulputate viverra. Vestibulum consectetur nibh non tellus sodales euismod. In et nunc ligula. Pellentesque finibus laoreet sem elementum fermentum.

    Aliquam congue, arcu eget placerat tincidunt, mauris nisl ultrices lectus, nec ullamcorper dolor leo at eros. Vivamus ultricies, eros vitae auctor ornare, nisi nisl finibus tellus, a feugiat odio velit in mauris. Quisque sed quam turpis. Donec vel felis sit amet enim lobortis convallis eu ac elit. Donec lobortis sapien vel laoreet facilisis. Praesent condimentum purus at vestibulum accumsan. Aliquam volutpat elit at enim mollis, ut ullamcorper magna tempor. Etiam tortor libero, consectetur sit amet pretium in, tristique nec odio. Aliquam vel ultricies velit. Integer vel enim lacus. In vel neque vel tortor dictum laoreet. Donec eget.</p>
    <button class="infoContentBtn">OK</button>
    `
    allP.forEach(par => {
      par.style.cursor = 'pointer'
        par.addEventListener('click', () => {
            switch (par.innerHTML) {
              case 'Information':
                infoDiv.setAttribute('class', 'info-div-content')
                infoDiv.innerHTML = informationText
                document.querySelector('.infoContentBtn').addEventListener('click', () => {infoDiv.style.display = 'none'; infoDiv.setAttribute('class', '.info-div')})
                break
              case 'Privacy Policy':
                infoDiv.setAttribute('class', 'info-div-content')
                infoDiv.innerHTML = PrivacyPolicyText
                document.querySelector('.infoContentBtn').addEventListener('click', () => infoDiv.style.display = 'none')
                break
              case 'Help':
                infoDiv.setAttribute('class', 'info-div-content')
                infoDiv.innerHTML = helpText
                document.querySelector('.infoContentBtn').addEventListener('click', () => infoDiv.style.display = 'none')
                break

              default:
                break
            }
        })
    })
    
}

// window.onclick = function (event) {
//   let infoDiv = document.querySelector('.info-div');
//   console.log(event.target.getAttribute("class"));
//   if (event.target.getAttribute("class") !== null) {
//     infoDiv.style.display = "none"
//   }
// }

// Home page six contect texts sellected
const contentsText = document.querySelectorAll('.content')
contentsText.forEach(contentText => {
  let targetText = contentText.children[1].innerText
  contentText.addEventListener('click', () => choiseNewPage(targetText))
})

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

// New Match function
function newMatch() {
  myHeader.style.display = 'none'
  const newMatchHeaderContent = `
  <header id="new-match-header">
      <h1><a href="index.html">Match</a></h1>
      <div class="new-match-svg">
      <svg id="select-player" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <rect fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="#ffffff"></path> </g></svg>
          <svg id="select-team" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <rect fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z" fill="#ffffff"></path> <path d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z" fill="#ffffff"></path> <path d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z" fill="#ffffff"></path> </g></svg>
          <svg id="newMatch-btn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#ffffff"></path></g></svg>
      </div>
    </header>
    <main>
    <div class="new-match-page">
      <div class="new-match-body-header">
      <h3>501</h3>
      <h4>race to 3 legs</h4>
      <p>fixed match length</p>
      </div>
      <div class="new-match-body">
      <div class="match-players"></div>
      <buttom id="start-match-btn">START MATCH</buttom>
      </div>
    </div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajn.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
  `
  myBody.innerHTML = newMatchHeaderContent

  let newMatchHeader = document.getElementById('new-match-header')
  let selectPlayer = document.getElementById('select-player')
  let selectTeam = document.getElementById('select-team')
  let matchPlayers = document.querySelector('.match-players')
  let newMatchBtn = document.getElementById('newMatch-btn')
  let startMatchBtn = document.getElementById('start-match-btn')

  selectPlayer.addEventListener('click', selectPlayerFunction)
  selectTeam.addEventListener('click', selectTeamFunction)
  startMatchBtn.addEventListener('click', startMatchBtnFunction)

  // Adding selected players in match page
  localStorage.setItem('SelectedPlayers', JSON.stringify(allSelectedPl))
  allSelectedPl.forEach((player, index) => {
    let addPlCont = `
    <p data-id="${index}">${index + 1}. ${player}</p>
    `
    matchPlayers.innerHTML += addPlCont
  })
  const allPlayersInMatchPage = document.querySelectorAll('.match-players > p')
  allPlayersInMatchPage.forEach(player => player.style.cursor = 'pointer')


  // Select players to delete in match page
  allPlayersInMatchPage.forEach(player => player.addEventListener('click', (e) => deletePlayer(e)))
  function deletePlayer(e) {
    let index = e.target.getAttribute('data-id')
    allSelectedPl.splice(index, 1)
    newMatch()
  }



  // New match button function
  newMatchBtn.addEventListener('click', () => {
    div.setAttribute('class', 'info-div')
    newMatchHeader.appendChild(div)
    let infoDiv = document.querySelector('.info-div')
    infoDiv.style.display = 'block'
    const infoText = `
    <p>Clear Players</p></br>
    <p>Help</p>
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
}

// Start match function
function startMatchBtnFunction() {
  console.log('Starting match function')
  let startMatchContent = `
    <header id="start-match-header">
      <h1><a href="index.html">501</a></h1>
      <div class="start-match-svg">
      <svg id="startMatch-btn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#ffffff"></path></g></svg>
      </div>
    </header>
    <main>
    <div class="start-match-page">
      <div class="start-match-body"></div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajn.eu.org">Maxi</a>. All Rights
        Reserved.</small
      >
    </footer>
    `
    myBody.innerHTML = startMatchContent
    let startMatchBody = document.querySelector('.start-match-body')

    allSelectedPl.forEach((player, index) => {
      let playerBox = `
      <div class="player-box" data-box-id="${index}">
      <div class="player-name-box">
      <h3>${player}</h3>
      </div>
      <div class="legs-box">
      <p>LEGS 0</p>
      </div>
      <div class="player-score-box">
      501
      </div>
      <div class="to-play-box">
      to play
      </div>
      </div>
      `
      startMatchBody.innerHTML += playerBox
    })
}

// Select player function
function selectPlayerFunction() {
  let selectPlayerPageContent = `
    <header id="select-player-header">
      <h1><a href="index.html">Select Player</a></h1>
      <div class="select-player-svg">
      <svg id="add-player-btn" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <title>user_add_fill</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-336.000000, -48.000000)" fill-rule="nonzero"> <g transform="translate(336.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" fill-rule="nonzero"> </path> <path d="M16,14 C18.7614,14 21,16.2386 21,19 L21,20 C21,21.1046 20.1046,22 19,22 L5,22 C3.89543,22 3,21.1046 3,20 L3,19 C3,16.2386 5.23858,14 8,14 L16,14 Z M20,8 C20.5523,8 21,8.44772 21,9 L21,10 L22,10 C22.5523,10 23,10.4477 23,11 C23,11.5523 22.5523,12 22,12 L21,12 L21,13 C21,13.5523 20.5523,14 20,14 C19.4477,14 19,13.5523 19,13 L19,12 L18,12 C17.4477,12 17,11.5523 17,11 C17,10.4477 17.4477,10 18,10 L19,10 L19,9 C19,8.44772 19.4477,8 20,8 Z M12,2 C14.7614,2 17,4.23858 17,7 C17,9.76142 14.7614,12 12,12 C9.23858,12 7,9.76142 7,7 C7,4.23858 9.23858,2 12,2 Z" fill="#ffffff"> </path> </g> </g> </g> </g></svg>
      <svg id="newMatch-btn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#ffffff"></path></g></svg>
      </div>
    </header>
    <main>
    <div class="select-player-page">
      <div class="select-player-body"></div>
    </main>
    <footer id="myFooter">
      <small
        >&copy; 2023 Darts Scoreboard by
        <a target="_blank" href="https://webdizajn.eu.org">Maxi</a>. All Rights
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
    <div class="selected-player-box">
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
    let selectedPl = this.children[1].innerText
    allSelectedPl.push(selectedPl)
    newMatch()
  }

  // Add player function
  addPlayerBtn.addEventListener('click', addPlayerFunction)
  function addPlayerFunction() {
    let addPlayerPageContent = `
    <header id="add-player-header">
      <h1><a href="index.html">New Player</a></h1>
      <div class="add-player-svg">
      <svg id="addPlayer-btn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" fill="#ffffff"></path></g></svg>
      </div>
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
        <a target="_blank" href="https://webdizajn.eu.org">Maxi</a>. All Rights
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
      newUser = { playerName: playerName, playerNickName: playerNickName }
      if (newUser.playerName !== '' && newUser.playerNickName !== '') {
        let copyAllUsers = [...allUsers, newUser]
        allUsers = copyAllUsers
        newUser = ''
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

