import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var Books = [
    {bookid: 0,title: "Wiedźmin. Tom 3. Krew elfów",author: "Andrzej Sapkowski",type: "private",description: '"Krew elfów" opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.'},
    {bookid: 1,title: "Diuna. Kroniki Diuny. Tom 1",author: "Frank Herbert",type: "official",description: 'Arrakis, zwana Diuną, to jedyne we wszechświecie źródło melanżu. Z rozkazu Padyszacha Imperatora planetę przejmują Atrydzi, zaciekli wrogowie władających nią dotychczas Harkonnenów. Zwycięstwo księcia Leto Atrydy jest jednak pozorne – przejęcie planety ukartowano. W odpowiedzi na atak Imperium i Harkonnenów dziedzic rodu Atrydów Paul staje na czele rdzennych mieszkańców Diuny i sięga po imperialny tron.'},
    {bookid: 2,title: "Minecraft komiks. Tom 3",author: "Sarah Graley",type: "waiting",description: 'Candace, Evan, Grace, Tobi i Tyler przeżywają liczne przygody w Świecie Podstawowym. Pewnego dnia trafiają na tajemniczy uszkodzony portal. Przenosi on ich do dziwnego i cudownego zakątka Netheru, którego wcześniej nie znali. W jego eksplorowaniu ma im pomóc ich specjalistka od Netheru, Grace. Jednak w obliczu nowych zagrożeń Grace odkrywa, że brzemię wiary, jaką pokładają w niej jej przyjaciele, zanadto ją przytłacza. Gracze trafiają do niesamowitego bastionu, w którym na każdym kroku czają się nowe zagrożenia… ale tym razem muszą im stawić czoła bez pomocy swojej ekspertki. Wygląda jednak na to, że aby poradzić sobie z nowymi zagrożeniami, przyjaciele będą musieli ponownie połączyć siły…'}
];
// Books = [];

class OfficialBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: Books,
            currentIndex: 0,
            showModalDelete: false,
            showModalEdit: false
        };
    }

    deleteItem() {
        let books = this.state.books;
        books.splice(this.state.currentIndex, 1);
        this.setState({ books: books });
    }

    deleteBook() {
        console.log("Usuwamy obiekt: "+this.state.books[this.state.currentIndex].title); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        this.deleteItem();
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    editBook() {
        var newBookTitle = document.getElementById("newBookTitle").value;
        var newBookAuthor = document.getElementById("newBookAuthor").value;
        var newBookDescription = document.getElementById("newBookDescription").value;
        let newBook = {bookid: this.state.books[this.state.currentIndex].bookid, type: this.state.books[this.state.currentIndex].type, title: newBookTitle, author: newBookAuthor, description: newBookDescription};

        console.log('Edytujemy obiekt z "bookid": '+this.state.books[this.state.currentIndex].bookid); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        console.log("Tymi danymi: "+newBookTitle); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        var currentId = this.state.books[this.state.currentIndex].bookid;
        this.setState(prevState => ({
            books: prevState.books.map(obj => (obj.bookid === currentId ? newBook : obj))
        }));
        
        this.setState({ showModalEdit: false });
    }

    render(){
        const BooksList = this.state.books.map((x,index) => {
            return (
                <tr key={x.bookid}>
                    <td>{index+1}</td>
                    <td>{x.title} {x.type === "official" ? <span title="Książka potwierdzona">✔</span> : ''}</td>
                    <td>{x.author}</td>
                    <td>{x.description}</td>
                    <td>
                        <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({showModalEdit: true, currentIndex: index})}}>Edytuj</Button>
                        <Button className="MyTableButton" variant="danger" onClick={() => {this.setState({showModalDelete: true, currentIndex: index})}}>Usuń</Button>
                    </td>
                </tr>
        )});
        let Content;
        if (this.state.books.length > 0){
            Content = 
            <div>
                <span className="MyTitle">Lista oficjalnych tytułów:<br /><br /></span>
                <Table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BooksList}
                    </tbody>
                </Table>
            </div>
        } else {Content = <div className="MyTitleGreen">Dodaj swoją pierwszą książkę do listy ulubionych!</div>}
        
        return(
            <Container className="MyContainer">
                {Content}

                <Modal show={this.state.showModalDelete} onHide={() => {this.setState({showModalDelete: false})}}>
                    <Modal.Header closeButton><Modal.Title>Usuwanie książki</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć książkę "{this.state.books[this.state.currentIndex].title}", autorstka {this.state.books[this.state.currentIndex].author}?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteBook()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalEdit} onHide={() => {this.setState({showModalEdit: false, currentIndex: 0})}}>
                    <Modal.Header closeButton><Modal.Title>Edytuj dane książki:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Control id="newBookTitle" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].title} />
                        <Form.Control id="newBookAuthor" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].author} />
                        <Form.Control id="newBookDescription" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].description} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalEdit: false, currentIndex: 0})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.editBook()}}>Tak, zmień!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default OfficialBooks