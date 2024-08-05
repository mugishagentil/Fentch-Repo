fetchData();
async function fetchData(){
    try{
        const PokmonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/typhlosion ${PokmonName}`);
        if(!response.ok){
            throw new Error('Could not fetch resources')
        }
        const data = await response.json();
        const PokmonSprit = data.sprites.front_default;
        const imageElement = document.getElementById('PokemonSprit')
        imageElement.src = PokmonSprit;
        imageElement.style.display = 'block';
    }
    catch(error){
        console.error(error);
    }
}