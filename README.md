# mkekez21-Vue.js-portal_novosti-zavrsni_rad
Repozitorij je namijenjen za sigurnosno kopiranje izvornog koda web aplikacije te isto tako olakšava mentoru i studentu praćenje napretka razvoja aplikacije koju podrazumijeva praktični dio završnog rada 'Razvoj web aplikacija korištenjem Vue.js'

Za svaku će se funkcionalnost stvarati nova grana te će se po završetku razvoja ta grana spajati s dev granom koja uključuje više spojenih funckionalnosti. Nakon što se na dev granu spoji dovoljno funkcionalnosti da bi se aplikacija mogla promatrati kao jedna funkcionalna cjelina, dev grana se spaja na main granu prilikom ćega će mentor odobravati spajanje ako mu se kod čini prihvatljivim za spajanje. Finalna verzija aplikacije bit će objavljena na main grani repozitorija. 

# Opis ideje praktičnog dijela završnog rada
## Opis aplikacije
Web aplikacija prezentira novosti/novinske članke koje dobiva u JSON formatu od API servisa newsdata.io ili newsapi.org. Jedino ograničenje spomenutih servisa je da oba dopuštaju oko 100 poziva dnevno, no smatram da bi to moglo biti dovoljno za potrebe razvoja i demonstriranja rješenja.
Aplikacija bi na početnoj stranici prikazivala u kontejneru sliku, naslov, autora i kratki opis novosti/članka. Svi gosti i korisnici bi klikom na gumb „Više“ mogli pregledati sve detalje o članku kao i njegov sadržaj.  
Proces registracije i prijave bio bi jednak kao i za prethodno opisanu ideju, samo bi registrirani korisnici imali mogućnost komentiranja, odgovaranja na komentare, ocjenjivanje komentara i odgovora ocjenama (sviđa mi se, ne sviđa mi se), te dodjeljivanje rezultata članku. Rezultat (eng. score) članka predstavlja njegovu ocjenu – slično kao i ocjene odgovora i komentara samo što bi korisnici mogli ostaviti isključivo pozitivnu ocjenu. Članak koji ima preko 10 pozitivnih ocjena sprema se u bazu podataka. Isto tako svaki članak s komentarom bi se spremao u bazu podataka. Oba API-ja ne dozvoljavaju povijesne članke u besplatnoj verziji. Svi komentirani članci i članci koji imaju više od 10 pozitivnih ocjena bili bi spremljeni u bazi i može im se uvijek pristupiti. Administrator bi imao ovlasti upravljanja korisnicima kao i u prethodno opisanoj ideji te bi također imao opciju dodavanja sebi zanimljivih članaka u bazu. U nastavku slijedi tablica s popisom funkcionalnih zahtjeva aplikacije.

## Specifikacija funkcionalnih zahtjeva aplikacije
| Oznaka | Naziv | Opis |
|--------|-------|------|
| F01    | Pregledavanje svih članaka | Svi gosti i korisnici stranice mogli bi pregledavati popis članaka na početnoj stranici. Ti bi se članci dohvaćali automatski kod učitavanja/osvježavanja stranice. Bili bi smješteni u kontejnere te bi sadržavali naslov, opis, autora i sliku članka. |
| F02    | Čitanje članka | Svi korisnici i gosti klikom na gumb „Više“ mogu čitati sadržaj članka i vidjeti sve ostale detalje o članku dohvaćene sa servisa. |
| F03    | Registracija i autentifikacija | Kao i u prethodnom primjeru |
| F05    | Dodavanje članka u bazu | Administrator ima mogućnost dodavanja njemu zanimljivih članaka u bazu. |
| F06    | Brisanje korisnika | Kao i u prethodnom primjeru. |
| F07    | Komentiranje/odgovaranje ocjenjivanje komentara i odgovora | Registrirani korisnici mogu komentirati članak i odgovarati na komentare ostalih korisnika. Isto tako mogu ostavljati ocjene na komentare i na odgovore. |
| F08    | Pretraživanje spremljenih članaka | Svi korisnici i gosti mogu pretraživati članke spremljene u bazu podataka putem tražilice. |
| F09    | Ocjenjivanje članka | Registrirani korisnici mogu ocijeniti članak kao pozitivan i tako utjecati na njegovo spremanje u bazu podataka. |

## ER dijagram aplikacije
![slika](https://github.com/MatkoKekez/mkekez21-Vue.js-portal_novosti-zavrsni_rad/assets/126814011/08345778-1b06-47c8-97cf-67db294acb8d)


