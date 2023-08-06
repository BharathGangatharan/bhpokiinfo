$(function(){
    var appendContainer = document.getElementsByClassName('poke');
    var showPokeContainer = document.getElementsByClassName('showContain');

    var url = 'https://pokeapi.co/api/v2/generation/1';
    var pokeName='https://pokeapi.co/api/v2/pokemon/';
    var listPokemon = [];

    $.getJSON(url).done(function(data){
        $.each(data.pokemon_species,function(i,pokemon){
            // var name = pokemon.name;
            // var link = $("<a>").attr("id",name).attr("href","#").text(name);
            // var p = $('#pp').html("Pokemon Species no."+(i+1)+"is").append(link);
            listPokemon.push(pokemon);
        });

        createPokemonCard(listPokemon)
    });

    function createPokemonCard(data) {
        var pokeDiv = document.createElement('div');
        pokeDiv.classList.add('cardParent')
        var pokeInnerHtml = data.map((itm)=> {
            return (`
            <div class="card">
                <h5>${itm.name}</h5>
                <button data-url=${itm.url} class="eachBtn">View</button>
            </div>
            
            `)
        })

        pokeDiv.innerHTML = pokeInnerHtml.join('');
        appendContainer[0].append(pokeDiv);

        $(".cardParent .card").slice(10).hide();
        $('#pagination').pagination({
    
            // Total number of items present
            // in wrapper class
            items: 151,
    
            // Items allowed on a single page
            itemsOnPage: 10, 
            onPageClick: function (e) {
                $(".cardParent .card").hide().slice(10*(e-1), 10+ 10* (e - 1)).show();
            }
        });
    }


    $(document).on('click','.eachBtn',function(){
        var pokeId = $(this).attr('data-url');
        showEachPokemon(pokeId)
        console.log(pokeId)
    })

    function showEachPokemon(pokeId) {
        fetch(`${pokeId}`)
        .then(res=>res.json())
        .then(data=>showEachPokeCard(data))
    }
    
    function showEachPokeCard(data) {
        var innerDiv = document.createElement('div');
        var infoData = `

            <h4>Name: <span class="caps">${data.name}</span></h4>
            <h4>Color: <span class="caps">${data.color.name}</span></h4>
            <h4>Base Happiness: <span>${data.base_happiness}</span></h4>
            <h4>Capture Rate: <span>${data.capture_rate}</span></h4>
            <h4>Growth Rate: <span>${data.growth_rate.name}</span></h4>
            <h4>Habitat: <span>${data.habitat.name}</span></h4>
            <h4>Region: <span>${data.pal_park_encounters[0].area.name}</span></h4>
        
        `
        showPokeContainer[0].textContent = '';
        innerDiv.innerHTML = infoData
        showPokeContainer[0].appendChild(innerDiv);
    }

    $('#searchText').keyup(function(){
        let input = document.getElementById('searchText').value
        input=input.toLowerCase();
        let x = $('.card h5');
        
        for (i = 0; i < x.length; i++) { 
            if (x[i].innerHTML.toLowerCase().indexOf(input) > -1) {
                x[i].parentElement.style.display="";
            }
            else {
                x[i].parentElement.style.display="none";                 
            }
        }
    })

})















































   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*$(function(){
        $('#searchForm').on('submit',(e) => {
            let searchText= $('#searchText').val();
            getMovies(searchText)
            e.preventDefault();
        });
    })

    function getMovies(searchText){
        fetch('https://pokeapi.co/api/v2/pokemon/'+searchText)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            $('.poke').html(
                `
                <div class="container">
                    <div class="card w-25 h-50 mx-auto">
                        <img class="card-img-top" src="${data.sprites.back_shiny}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.height}</p>
                            <p class="card-text">${data.order}</p>
                        </div>
                    </div>
                </div>
                `
            ) 
        })
        .catch((err)=>{
            console.log(err)
        })
    } */
















































































/*$(function(){
    var url = 'https://pokeapi.co/api/v2/generation/1';
    var pokeName='https://pokeapi.co/api/v2/pokemon/';

    $.getJSON(pokeName).done(function(data){
        console.log(data)
        //$.each(data.pokemon_species,function(i,pokemon){
         //  console.log(pokemon.name)
        //})
    })
})*/



























































































































































/*
    $(function(){
        $('#searchForm').on('submit',(e) => {
            let searchText= $('#searchText').val();
            getMovies(searchText)
            e.preventDefault();
        });
    })

    function getMovies(searchText){
        fetch('https://pokeapi.co/api/v2/pokemon/'+searchText)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            $('.poke').html(
                `
                <div class="container">
                    <div class="card w-25 h-50 mx-auto">
                        <img class="card-img-top" src="${data.sprites.back_shiny}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.height}</p>
                            <p class="card-text">${data.order}</p>
                        </div>
                    </div>
                </div>
                `
            ) 
        })
        .catch((err)=>{
            console.log(err)
        })
    } */