// slå dig løs her... 
const heroElement = document.querySelector(".hero");
const headerElement = document.querySelector(".header");
const wrapperElement = document.querySelector(".wrapper");
const servicesElement = document.querySelector(".services");
const facilitiesElement = document.querySelector(".facilities");
//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline));

function setHero() {
    const image = document.createElement("img");
    let headline = document.createElement("h1");
    let copy = document.createElement("p");
    let icon = document.createElement("img");

    image.setAttribute("src", hero.image);
    headline.textContent = hero.headline;
    copy = hero.copy;
    icon.setAttribute("src", hero.icon);

    heroElement.append(image, headline, copy, icon);
}

function setServices() {
    services.forEach(function (service) {
        const image = document.createElement("img");
        let headline = document.createElement("h1");
        let text = document.createElement("p");
        let linktext = document.createElement("a");

        image.setAttribute("src", service.illustration);
        headline.textContent = service.headline;
        text.textContent = service.text;
        linktext.textContent = service.linktext;

        servicesElement.append(image, headline, text, linktext);
    });
}

function setFacilities(){
    
}


setServices();
setHero();
