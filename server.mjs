import express from 'express';
import sesija from 'express-session';
import kolacic from 'cookie-parser';

const port = 3000;

function pokreniServer(){
    const server = express();
    server.use(express.urlencoded({extended: true}));
    server.use(express.json());
    server.use(kolacic());
    server.use(
        sesija({
            secret: konfiguracija.postaviKonf().tajniKljucSesije,
            saveUninitialized: true,
            cookie: { maxAge: 1000*60*60*3},
            resave: false
        })
    );

    server.use("/js", express.static("./aplikacija/js"));
    server.use("/css", express.static("./aplikacija/css"));

    server.use((zahtjev, odgovor) => {
        odgovor.status(404);
        let poruka = { opis: "nema resursa" };
        odgovor.json(poruka);
    });
    server.listen(port, () => {
        console.log(`Server pokrenut na portu: ${port}`);
    })
}