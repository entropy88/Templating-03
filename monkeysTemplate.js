function showInfo(id) {
    document.getElementById(id).style.display = "block"
}

(() => {

    renderMonkeyTemplate();

    async function renderMonkeyTemplate() {

        let source = await fetch("http://127.0.0.1:5500/monkey.hbs")
            .then(res => res.text())
        const template = Handlebars.compile(source);
        const context = getMonkeys() //always an object!why though??
        const monkeysHtml = template(context);
        let contentSection = document.getElementsByClassName("monkeys")[0];
        contentSection.innerHTML = monkeysHtml;
    }

})()