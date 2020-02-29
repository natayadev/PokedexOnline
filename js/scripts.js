let lista = document.getElementById("listaPokemon")

  function consultarPokemon(id, num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
      response.json()
      .then(function(pokemon){
        crearPokemon(pokemon, num)
      })
    })
  }

  function pokemonRandom() {
    let numRandom = Math.round(Math.random()*20)
    consultarPokemon(numRandom, 1)
  }

  function crearPokemon(pokemon, num) {
    let item = lista.querySelector(`#pokemon-${num}`)

    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name

    let numero = item.getElementsByTagName("input")[0]
    numero.setAttribute("placeholder", pokemon.id)
  }

  pokemonRandom()


  $(".boton").click(function(){
    $.sweetModal({
	title: '💬 Instrucciones',
	content: "Utiliza la flecha 🔼 para subir de pokemon<br>Utiliza la flecha 🔽 para bajar de pokemon",
	theme: $.sweetModal.THEME_DARK
    });
  });
