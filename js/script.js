let newButton = $("#pobierz");
newButton.after($("<div></div>").attr('id', 'dane-programisty'));

let output = $("#dane-programisty");

newButton.click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        console.log(data);
        let tekst = `
            Imię: ${data.imie} <br>
            Nazwisko: ${data.nazwisko} <br>
            Zawód: ${data.zawod} <br>
            Firma: ${data.firma} <br> `;
        output.html(tekst);
    });
});
