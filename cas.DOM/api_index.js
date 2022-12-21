// Ovaj kod služi za dobavljanje podataka sa API-a  i prikazivanje tih podataka na stranici
const BASE_URL = "https://catfact.ninja";
let data = null;
// Funkcija za dobavljanje podataka
async function getFactData(fetch_url) {
// Ako je prosleđen URL za dobavljanje podataka, koristi se taj URL
// Inače, koristi se osnovni URL za dobavljanje podataka
    let res;
    if (fetch_url) {
        res = await fetch(fetch_url);
    } else {
        res = await fetch(`${BASE_URL}/facts`);
    }
// Pretvaranje odgovora API-ja u JSON format
    const resToJson = await res.json();
//Vraćanje podataka
    return { ...resToJson };
}

// Funkcija za prikazivanje podataka u karticama na stranici
function showFactsCards(factsArr) {
// Selektovanje kontejnera u koji će se prikazivati kartice sa podacima
    const cardContainer = document.getElementById("card-container");
// Prikazivanje svakog podatka u posebnom div-u
    factsArr.forEach((factEl) => {
        const factDiv = document.createElement("div");
        factDiv.textContent = factEl.fact;
        cardContainer.appendChild(factDiv);
    });
}
// Funkcija za prikazivanje dugmadi za paginaciju na stranici
function showBtnPagination(paginationLinks) {
// Selektovanje kontejnera u koji će se prikazivati dugmad za paginaciju
    const paginationContainer = document.getElementById("pagination-container");
// Prikazivanje svakog dugmeta za paginaciju u posebnom div-u
 // Prolazimo kroz niz sa linkovima za paginaciju
    paginationLinks.forEach((link) => {
        const linkBtn = document.createElement("button");
        linkBtn.textContent = link.label;
        if (link.active) {
            linkBtn.style.color = "black";
        }
 // Ako link postoji, dodaje se event listener za klik na dugme
// koji poziva funkciju za ponovno dobavljanje podataka sa novog URL-a
        if (link.url) {
            linkBtn.onclick = function () {
                refetchData(link.url);
            };
        // Ako link nema URL, onemogućavamo dugme
        } else {
            linkBtn.disabled = true;
        }
 // Dodajemo dugme za paginaciju u kontejner za dugmad za paginaciju
        paginationContainer.appendChild(linkBtn);
    });
}
// Asinhrona funkcija koja se koristi za ponovno dobavljanje podataka 
// i za ponovno prikazivanje tih podataka korisnicima na stranici
async function refetchData(newLink) {
     // Dohvatamo nove podatke koristeći URL iz prosleđenog linka
    const newRes = await getFactData(newLink);
 // Brišemo sadržaj kontejnera za dugmad za paginaciju
    document.getElementById("pagination-container").innerHTML = "";
// Brišemo sadržaj kontejnera za kartice sa činjenicama
    document.getElementById("card-container").innerHTML = "";
  // Prikazujemo nove podatke u obliku kartica
    showFactsCards(newRes.data);
// Prikazujemo nove linkove za paginaciju u obliku dugmadi
    showBtnPagination(newRes.links);
}
// Asinhrona funkcija koja se poziva prilikom učitavanja stranice
(async function () {
// Dohvatamo podatke
    data = await getFactData();
// Prikazujemo podatke  u obliku kartica
    showFactsCards(data.data);
        // Prikazujemo linkove za paginaciju u obliku dugmadi
    showBtnPagination(data.links);
})();