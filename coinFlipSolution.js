class Game {
    constructor(){
      this.wins = 0;
      this.losses = 0 ; 
      this.headCounts = 0 ;
      this.tailCounts = 0 ;

      this.options = [
        {value: 0, name: "Heads", img: "http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg"},
        {value: 1, name: "Tails", img: "http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg"}
      ]

      this.CompGuess
      this.setCompGuess()
      this.checkGame()
      this.registryMyChoice()

    }


    setCompGuess (){
      this.CompGuess = parseInt(Math.round(Math.random()))
    }

    registryMyChoice() {
      var game = this
      $('#heads').on('click', function(){
        game.headCounts++
        $('#heads-chosen').html(game.headCounts)
      })
      $('#tails').on('click', function(){
        game.tailCounts++
        $('#tails-chosen').html(game.tailCounts)
      })
    }

    incrementWins(){
      this.wins++
    }

    incrementLosses (){
      this.losses++
    }


    checkGame (){
      var game = this
      $('button').on('click', function(){
        if (game.options[game.CompGuess].name == $(this).text()){
          game.incrementWins()
          $('#wins').html(game.wins)
          $('#guess').html('<strong>'+$(this).text()+'</strong>')
          $('#coin-image').html('<img src="' + game.options[game.CompGuess].img + '">')
          $('#win-lose').html('<h2>Winner!<h2>')

        } else {
          game.incrementLosses()
          $('#losses').html(game.losses)
          $('#guess').html('<strong>'+$(this).text()+'</strong>')
          $('#coin-image').html('<img src="' + game.options[game.CompGuess].img + '">')
          $('#win-lose').html('<h2>Loser!<h2>')
        }
        game.resetGame()

      })
      }

    resetGame(){
     this.setCompGuess()
    }
 
  }

  let startGame  = new Game()