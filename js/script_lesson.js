let pageNumber = 0;
let texts = [
    {
        title: "Przygotowanie do wyjazdu",
        text1: "Czy rowerzysta może wjechać na autostradę? <br> Ogumienie – prawidłowo napompowa na opona nie powinna się ugiąć pod wpływem nacisku więcej niż do 1/3 jej wysokości. ",
        text2: "Należy sprawdzać hamulce, gdyż zależy od nich twoja ochrona. <br> Podczas jazdy w dzień przy dobrej widoczności dopuszcza się, aby światła pozycyjne roweru, były zdemontowane, natomiast na stałe musi być zamontowane obowiązkowe światło odblaskowe. ",
        text3: "Dobrze jednak zawsze mieć je przy sobie, ponieważ światła pozycyjne (lampki) muszą być włączone, gdy przejeżdżamy przez tunel i w warunkach słabej widoczności, takich jak śnieg, deszcz, zmierzch czy mgła. <br> Rowerzysto, kask i kamizelka odblaskowa nie są obowiązkowe, jednak warto je mieć na sobie podczas jazdy na rowerze. Kask chroni głowę podczas ewentualnego upadku, natomiast kamizelka odblaskowa zwiększa Twoją widoczność na drodze.",
        image1: "img/rower.przygotowanie.do.wyjazdu.png",
        //image2: "",
        //image3: "",
    },
    {
        title: "Podstawowe elementy budowy roweru",
        text1: "Szkielet roweru stanowi rama. Do niej przytwierdzone są pozo-stałe elementy roweru, takie jak: kierownica, koła czy siodełko. Aby wprawić rower w ruch, nie-zbędny jest łańcuch rozpięty na kołach łańcuchowych.",
        text2: "<p> <b>Każdy, kto porusza się rowerem po drogach, powinien wiedzieć, że rower, tak jak samochód czy inny pojazd, musi spełniać wymagania związane z bezpieczeństwem. Powinien być sprawny i posiadać obowiązkowe wyposażenie, na które należy zwrócić uwagę najlepiej już na etapie kupna roweru.</b></p>                    <p> <b> Rower powinien być wyposażony:</b></p>                    <ul>                        <li>z przodu – w co najmniej jedno światło pozycyjne barwy białej lub żółtej selektywnej (może być migające)</li>                        <li>z tyłu – w co najmniej jedno światło odblaskowe barwy czerwonej o kształcie innym niż trójkąt oraz w co najmniej jedno światło pozycyjne barwy czerwonej (może być migające);</li>                        <li>w co najmniej jeden skutecznie działający hamulec</li>                        <li>w dzwonek lub inny sygnał ostrzegawczy o nieprzeraźliwym dźwięku.</li>                    </ul>",
        //text3: "",
        image1: "img/szkielet_roweru_aplikacja.png",
        //image2: "",
        //image3: "",
    },
    {
        title: "Karta rowerowa",
        text1: "Karta rowerowa – zgodnie z ustawą o kierujących pojazdami jeden z dokumentów stwierdzających uprawnienie osoby, która nie ukończyła 18 lat do kierowania rowerem. <br> Dzieci powyżej 10 lat mogą już samodzielnie prowadzić rower po publicznych drogach. Jedyne wymaganie formalne (poza wiekiem) to posiadanie Karty Rowerowej. <br> Aby zdobyć kartę rowerową osoba niepełnoletnia musi:",
        text2:"<ul><li>Zdobyć odpowiednią wiedzę</li><li> Zdać egzamin teoretyczny w formie testu pisemnego</li><li> Zdać egzamin praktyczny polegający na przejeździe na rowerze wyznaczonej trasy zgodnie z zasadami ruchu drogowego</li><li> Zyskać pisemną zgodę rodziców</li><li> Mieć ukończone 10 lat</li>",
        text3:"Na koniec, po zaliczeniu egzaminu teoretycznego i praktycznego, nieletni w wieku 10-18 lat otrzymuje kartę rowerową <br> Od tego momentu nieletni może poruszać się rowerem samodzielnie.",
        image1:"img/karta_rowera_aplikacja.png",
        //image2: "",
        //image3: "",
    }

];
    function main() {
        document.getElementById("title").innerHTML = texts[pageNumber].title
        document.getElementById("text1").innerHTML = texts[pageNumber].text1
        document.getElementById("text2").innerHTML = texts[pageNumber].text2
        document.getElementById("text3").innerHTML = texts[pageNumber].text3
        document.getElementById("image1").src = texts[pageNumber].image1
        document.getElementById("image2").src = texts[pageNumber].image2
        document.getElementById("image3").src = texts[pageNumber].image3
    }

    function nextPage() {
        pageNumber = pageNumber + 1;
        main();
    }

    function previousPage() {
        pageNumber = pageNumber - 1;
        main();
    }