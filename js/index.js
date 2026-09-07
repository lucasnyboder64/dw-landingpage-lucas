// slå dig løs her... 
const heroElement = document.querySelector(".hero");
const headerElement = document.querySelector(".header");
const wrapperElement = document.querySelector(".wrapper");
const servicesElement = document.querySelector(".services");
const facilitiesElement = document.querySelector(".facilities");
const sitesElement = document.querySelector(".sites");
const advantagesElement = document.querySelector(".advantages");
const footerElement = document.querySelector(".footer");
//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline));

function setHero() {
    const hero_container = document.createElement("div");
    hero_container.classList.add("hero_container");

    const hero_container_content = document.createElement("div");
    hero_container_content.classList.add("hero_container_content");

    const image = document.createElement("img");
    let headline = document.createElement("h1");
    let copy = document.createElement("p");
    let icon = document.createElement("img");
    let button = document.createElement("button");

    image.setAttribute("src", hero.image);
    headline.textContent = hero.headline;
    copy.textContent = hero.copy;
    icon.setAttribute("src", hero.icon);

    button.innerHTML = `<img src="${icon.getAttribute("src")}" />`;
    button.innerHTML += "Explore";

    hero_container.append(hero_container_content);
    hero_container_content.append(headline, copy, icon, button);

    heroElement.append(hero_container);
    headerElement.append(image);
}

function setServices() {
    services.forEach(function (service) {
        const card = document.createElement("div");
        card.classList.add("service_card");

        const image = document.createElement("img");
        let headline = document.createElement("h1");
        let text = document.createElement("p");
        let linktext = document.createElement("a");

        image.setAttribute("src", service.illustration);
        headline.textContent = service.headline;
        text.textContent = service.text;
        text.style.color = "rgba(0,0,0,0.5)";
        linktext.textContent = service.linktext;
        linktext.style.color = "#F78065";

        card.append(image, headline, text, linktext);

        //servicesElement.append(image, headline, text, linktext);
        servicesElement.append(card);
    });
}

function setFacilities() {
    let headline = document.createElement("h1");
    headline.textContent = facilities.headline;
    facilitiesElement.append(headline);

    const facilities_container = document.createElement("div");
    facilities_container.classList.add("facilities_container");
    facilities.options.forEach((option) => {
        const card = document.createElement("div");
        card.classList.add("facilitiy_card");

        let icon = document.createElement("img");
        let headline = document.createElement("h2");
        let text = document.createElement("p");
        let more_text = document.createElement("p");
        more_text.classList.add("more_text");
        more_text.textContent = "Show me more";

        icon.setAttribute("src", option.icon);
        headline.textContent = option.headline;
        text.textContent = option.text;
        card.append(icon, headline, text, more_text);

        facilities_container.append(card);
    });
    facilitiesElement.append(facilities_container);
}

function setSites() {
    const left_region = document.createElement("div");
    left_region.classList.add("start");
    let headline = document.createElement("h1");
    let text = document.createElement("p");
    let icon = document.createElement("img");
    let button = document.createElement("button");

    headline.textContent = sites.headline;
    text.textContent = sites.text;
    icon.setAttribute("src", sites.btnicon);

    button.innerHTML = `<img src="${icon.getAttribute("src")}" />`;
    button.innerHTML += "Start";

    left_region.append(headline, text, button, icon);
    sitesElement.append(left_region);

    sites.places.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("sites_card");
        const image = document.createElement("img");
        let name = document.createElement("h2");
        let city = document.createElement("p");

        let view_site = document.createElement("p");
        view_site.classList.add("view_site");
        view_site.textContent = "View the Site";

        image.setAttribute("src", place.img);
        name.textContent = place.name;
        city.textContent = place.city;
        city.classList.add("city");
        card.append(image, name, city, view_site);
        sitesElement.append(card);
    });
}

function setAdvantages() {
    let headline = document.createElement("h1");
    headline.textContent = "Our Advantages";
    headline.classList.add("our_advantages");
    advantagesElement.append(headline);
    advantages.forEach((advantage) => {
        let icon = document.createElement("img");
        let headline = document.createElement("h1");
        let text = document.createElement("p");
        let card = document.createElement("div");
        card.classList.add("advantage_card");

        icon.setAttribute("src", advantage.icon);
        headline.textContent = advantage.headline;
        text.textContent = advantage.text;
        card.append(icon, headline, text);
        advantagesElement.append(card);
    });
}

function setFooter(){
    let headline = document.createElement("h1");
    let smallHeadline = document.createElement("p");
    let infoContainer = document.createElement("div");
    let author = document.createElement("div");
    author.classList.add("author");

    infoContainer.classList.add("info_container");
    headline.textContent = footer.headline;
    smallHeadline.textContent = footer.smallHeadline;

    author.append(smallHeadline, headline);
    footerElement.append(author);

    footer.categories.forEach((category)=>{
        let info = document.createElement("div");
        info.classList.add("info");
        let categoryHeadline = document.createElement("h2");
        categoryHeadline.textContent = category.headline;
        info.append(categoryHeadline);
        infoContainer.append(info);
        category.lines.forEach((line)=>{
            let text = document.createElement("p");
            text.textContent = line.text;
            info.append(text);
            infoContainer.append(info);
            
        });
    });
    
    footerElement.append(infoContainer);
}

setServices();
setHero();
setFacilities();
setSites();
setAdvantages();
setFooter();