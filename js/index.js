// slå dig løs her... 
const heroElement = document.querySelector(".hero");
const headerElement = document.querySelector(".header");
const wrapperElement = document.querySelector(".wrapper");
const servicesElement = document.querySelector(".services");
const facilitiesElement = document.querySelector(".facilities");
const sitesElement = document.querySelector(".sites");
const advantagesElement = document.querySelector(".advantages");
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

function setFacilities() {
    let headline = document.createElement("h1")
    headline.textContent = facilities.headline;
    facilitiesElement.append(headline);
    facilities.options.forEach((option) => {
        let icon = document.createElement("img");
        let headline = document.createElement("h2");
        let text = document.createElement("p");

        icon.setAttribute("src", option.icon);
        headline.textContent = option.headline;
        text.textContent = option.text;

        facilitiesElement.append(icon, headline, text);
    });
}

function setSites() {
    let headline = document.createElement("h1");
    let text = document.createElement("p");
    let icon = document.createElement("img");

    headline.textContent = sites.headline;
    text.textContent = sites.text;
    icon.setAttribute("src", sites.btnicon);

    sitesElement.append(headline, text, icon);

    sites.places.forEach((place) => {
        const image = document.createElement("img");
        let name = document.createElement("h2");
        let city = document.createElement("p");

        image.setAttribute("src", place.img);
        name.textContent = place.name;
        city.textContent = place.city;
        sitesElement.append(image,name,city);
    });
}

function setAdvantages(){
    advantages.forEach((advantage) => {
        let icon = document.createElement("img");
        let headline = document.createElement("h1");
        let text = document.createElement("p");

        icon.setAttribute = advantage.icon;
        headline.textContent = advantage.headline;
        text.textContent = advantage.text;

        advantagesElement.append(icon, headline, text);
    });
}

setServices();
setHero();
setFacilities();
setSites();
setAdvantages();