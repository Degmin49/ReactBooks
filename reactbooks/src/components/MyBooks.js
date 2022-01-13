import React from "react";
import { Button, Table } from "react-bootstrap";
import { Container } from 'react-bootstrap';

var Books = [
    {bookid: 0,title: "Wiedźmin. Tom 3. Krew elfów",author: "Andrzej Sapkowski",description: '"Krew elfów" opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.'},
    {bookid: 1,title: "Diuna. Kroniki Diuny. Tom 1",author: "Frank Herbert",description: 'Arrakis, zwana Diuną, to jedyne we wszechświecie źródło melanżu. Z rozkazu Padyszacha Imperatora planetę przejmują Atrydzi, zaciekli wrogowie władających nią dotychczas Harkonnenów. Zwycięstwo księcia Leto Atrydy jest jednak pozorne – przejęcie planety ukartowano. W odpowiedzi na atak Imperium i Harkonnenów dziedzic rodu Atrydów Paul staje na czele rdzennych mieszkańców Diuny i sięga po imperialny tron.'},
    {bookid: 2,title: "Minecraft komiks. Tom 3",author: "Sarah Graley",description: 'Candace, Evan, Grace, Tobi i Tyler przeżywają liczne przygody w Świecie Podstawowym. Pewnego dnia trafiają na tajemniczy uszkodzony portal. Przenosi on ich do dziwnego i cudownego zakątka Netheru, którego wcześniej nie znali. W jego eksplorowaniu ma im pomóc ich specjalistka od Netheru, Grace. Jednak w obliczu nowych zagrożeń Grace odkrywa, że brzemię wiary, jaką pokładają w niej jej przyjaciele, zanadto ją przytłacza. Gracze trafiają do niesamowitego bastionu, w którym na każdym kroku czają się nowe zagrożenia… ale tym razem muszą im stawić czoła bez pomocy swojej ekspertki. Wygląda jednak na to, że aby poradzić sobie z nowymi zagrożeniami, przyjaciele będą musieli ponownie połączyć siły…'}
];
// Books = [];
const BooksList = Books.map((x,index) => 
    <tr key={x.bookid}>
        <td>{index+1}</td>
        <td>{x.title}</td>
        <td>{x.author}</td>
        <td>{x.description}</td>
        <td><Button variant="secondary">Edytuj</Button></td>
    </tr>);

const MyBooks = () => {
    let content;
    if (Books.length > 0) {
        content = 
            <div>
                <span className="MyTitle">Twoja lista ulubionych książek:<br /><br /></span>
                <Table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Notatka</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BooksList}
                    </tbody>
                </Table>
                <button type="button" className="btn btn-outline-success">Dodaj nową pozycję!</button>
            </div>
    }
    else {content = <div className="MyTitleGreen">Dodaj swoją pierwszą książkę do listy ulubionych!</div>}

    return(
        <Container className="MyContainer">
            {content}
        </Container>
    );
}

export default MyBooks