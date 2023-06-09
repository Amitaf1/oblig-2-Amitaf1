"use strict";

let allTickets = [];
const ticketText = document.getElementById("billetter");

function saveInput() {
    const ticket = {
        film : document.getElementById("film"),
        amount : document.getElementById("amount"),
        fname : document.getElementById("fname"),
        lname : document.getElementById("lname"),
        telnr : document.getElementById("telnr"),
        email : document.getElementById("email"),
        },
        namePattern   = /^[a-zA-Z\s]+$/,
        telPattern    = /^\d{8}$/,
        emailPattern  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let error = false;

    if (ticket.film.value !== "Ant-Man and the Wasp: Quantumania" &&
        ticket.film.value !== "Folk og røvere i Kardemommeby" &&
        ticket.film.value !== "Puss in Boots: The Last Wish" &&
        ticket.film.value !== "John Wick: Chapter 4" &&
        ticket.film.value !== "The Little Mermaid (2023)" &&
        ticket.film.value !== "Cocaine Bear" &&
        ticket.film.value !== "Sword Art Online Progressive: Scherzo of Deep Night" &&
        ticket.film.value !== "Creed III"
    ) {
        const text = ticket.film.value === "" || ticket.film.value === null
            ? "Du må velge noe"
            : "Ugyldig film!";
        let errMsg = document.getElementById("filmError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "filmError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.film.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("filmError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }


    if (!isFinite(ticket.amount.value) || !ticket.amount.value) {
        const text = ticket.amount.value === "" || ticket.amount.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig antall billetter!";
        let errMsg = document.getElementById("amountError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "amountError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.amount.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("amountError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }

    if (!namePattern.test(ticket.fname.value)) {
        const text = ticket.fname.value === "" || ticket.fname.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig fornavn!";
        let errMsg = document.getElementById("fnameError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "fnameError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.fname.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("fnameError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }

    if (!namePattern.test(ticket.lname.value)) {
        const text = ticket.lname.value === "" || ticket.lname.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig etternavn!";
        let errMsg = document.getElementById("lnameError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "lnameError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.lname.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("lnameError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }

    if (!telPattern.test(ticket.telnr.value)) {
        const text = ticket.telnr.value === "" || ticket.telnr.value === null
            ? "Du må fylle feltet ut"
            : "Ugyldig telefonnummer!";
        let errMsg = document.getElementById("telnrError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "telnrError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.telnr.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("telnrError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }

    if (!emailPattern.test(ticket.email.value)) {
        const text = ticket.email.value === "" || ticket.email.value === null
            ? "Du må fylle feltet ut"
            : "E-post adressen er ugyldig!";
        let errMsg = document.getElementById("emailError");
        if (errMsg === null) {
            errMsg = document.createElement("span");
            errMsg.id = "emailError";
            errMsg.classList.add("error");
        }
        errMsg.textContent = text;
        ticket.email.after(errMsg);
        error = true;
    } else {
        const errMsg = document.getElementById("emailError");
        if (errMsg !== null && errMsg.parentNode) {
            errMsg.parentNode.removeChild(errMsg);
        }
    }


    if (!error) {
        allTickets.push(ticket);
        const text = `
            ${ticket.film.value},
            ${ticket.amount.value},
            ${ticket.fname.value},
            ${ticket.lname.value},
            ${ticket.telnr.value},
            ${ticket.email.value}`;

        const displayText = document.createElement("p");
        displayText.appendChild(document.createTextNode(text));

        ticketText.appendChild(displayText);
    }
}

function deleteAll() {
    allTickets = [];
    ticketText.textContent = "";
}

