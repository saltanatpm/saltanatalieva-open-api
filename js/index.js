const baseURL = "https://hp-api.onrender.com/api";
const content = document.getElementById("content");

async function loadCharacters(){
    content.innerHTML = "Loading characters...";
    
    const res = await fetch(`${baseURL}/characters`);
    const data = await res.json();
    const characters = data.filter(c => c.image);
    
    content.innerHTML = "";
    characters.slice(0,12).forEach(char => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${char.image}"><h3>${char.name}</h3><p>${char.house || "No house"}</p>`;
        content.appendChild(card);
    });
}


async function loadSpells(){
    content.innerHTML = "Loading spells...";
    const res = await fetch(`${baseURL}/spells`);
    const spells = await res.json();
    content.innerHTML = "";
    spells.slice(0,20).forEach(spell => {
        const div = document.createElement("div");
        div.className = "spell";
        div.innerHTML = `<h3>${spell.name}</h3><p>${spell.description}</p>`;
        content.appendChild(div);
    });

}

function startQuiz(){
    content.innerHTML = `
    <div class="card">
    <h2>What faculty are you in?</h2>
    <button onclick="result('Gryffindor')">Brave</button>
    <button onclick="result('Ravenclaw')">Smart</button>
    <button onclick="result('Hufflepuff')">Loyal</button>
    <button onclick="result('Slytherin')">Ambitious</button>
    </div>
    `;
}

function result(house){
    content.innerHTML = `
    <div class="card">
    <h2>You belong to</h2>
    <h1>${house}</h1>
    </div>
    `;
}
