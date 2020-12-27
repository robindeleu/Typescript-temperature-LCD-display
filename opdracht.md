# Examenopdracht 2020 - Temperatuur LCD Display

Bouw aan de hand van TypeScript een bibliotheek dat temperatuur gegevens in de
console kan weergeven in LCD stijl volgens volgende formaat:

```text
 ___________________________
|    _     _        _   _   |
|  | _|    _||_|   |_| |    |
|  ||_  /  _|  |       |_   |
|___________________________|
```

## Digits

Volgende tekens zouden ondersteund moeten worden:

```text
      _  _     _  _  _  _  _   _          _    _
 _  | _| _||_||_ |_   ||_||_| | |        |_|  |
    ||_  _|  | _||_|  ||_| _| |_|  /          |_
```

- Cijfers 0 tot 9
- `-` teken
- Graden teken
- Letter `C`
- Komma: voorgesteld door een `/`
- Spatie: voorgesteld door 3 spaties

(elk digit is 3 lijnen hoog)

## Kader

De gebruiker van de bibliotheek moet ook de mogelijkheid krijgen om al of niet een
kader te tekenen rond het resultaat.

```text
 ___________________________
|    _     _        _   _   |
|  | _|    _||_|   |_| |    |
|  ||_  /  _|  |       |_   |
|___________________________|
```

Zonder kader:

```text
  _     _        _   _
| _|    _||_|   |_| |
||_  /  _|  |       |_
```

## Formaat

De gebruiker van de bibliotheek moet ook de keuze hebben tussen twee verschillende
formaten. Bovenstaande voorbeeld toont het resultaat in `normaal` formaat. Hieronder
zie je een voorbeeld van het `groot` formaat. Elk karakter wordt 2 keer groter.

```text
 ___
    |
    |
 ___
|
|
 ___
```

## Uitwerking

Je bent vrij om dit te implementeren. Pak dit slim aan maar zorg dat de verschillende
karakters _niet 'hard coded'_ in de code aanwezig zijn. Dit los je best op door
de structuur van een 7 segment display te volgen en te implementeren.

![7 segment](img/7-segment.jpg)

Er zijn met andere woorden 7 segmenten die ofwel aan ofwel uitgeschakeld kunnen
worden om de verschillende getallen te gaan voorstellen.

In het beste geval kan je elk karakter dus voorstellen aan de hand van een 7 bit
getal. Merk op dat de komma niet als één van de segmenten voorgesteld wordt. Hiervoor
zou een achtste bit gebruikt kunnen worden om de komma te gaan voorstellen.

## Vereisten

Bij het toekennen van scores zal rekening gehouden worden met volgende vereisten.

### Single Responsibility en Dependency Inversion

Hou in je ontwerp rekening met de SOLID principes SRP en DI. Probeer deze principes
zo veel mogelijkt te respecteren. Ontwerp je oplossing direct in zijn correcte vorm
zodat het nadien refactoren niet meer nodig is.

### Unit Testen

Gebruik Unit Testen om je code zoveel mogelijk te testen. Eventueel pas je het TDD
principe toe om je code te bouwen.

Door het correct toepassen van Unit Testen is er geen nood aan een `index.ts` bestand
om de werking van de code aan te tonen.

### `README.md`

Voorzie je bibliotheek op GitHub van een `README.md` bestand waarin dat de gebruiker
van je bibliotheek op weg helpt en waarin alle nodige documentatie aanwezig is.

### Open Source licentie

Breng je oplossing uit onder een Open Source Licentie. Kies een licentie dat niet
vereist dat aanpassingen aan de code gedocumenteerd moeten worden, en dat toelaat
dat afgeleide werken onder een andere licentie te verspreiden.

### NPM Package

Publiceer je bibliotheek op npmjs.org zodat andere ontwikkelaars jouw project
kunnen integreren in nieuwe projecten.

### Linter

Configureer en gebruik een linter om de code stijl te controlleren en te valideren
op eventuele schendingen van de geconfigureerde stijl.

### Documentatie op GitHub Pages

Voorzie je code van documentatie en publiceer deze op GitHub Pages. Vergeet de link
naar deze documentatie niet te integreren in je README bestand.

## Individuele opdracht

**Deze opdracht is strikt individueel**. Dit betekent dat geen enkele directe of indirecte
manier samenwerken of communicatie over de opdrachten of oplossingen tussen studenten
mag plaatsvinden. Bij vragen mag je **enkel** de docent contacteren.

Indien enige vorm van samenwerking (door directe of indirecte communicatie) vastgesteld
kan worden verdienen alle betrokken partijen automatisch een 0 score voor de betrokken
vraag.

Verder blijft voor de opdracht elke vorm van informatie verwerven beschikbaar. Je mag
en kan dus gerust op het internet informatie opzoeken om een oplossing te bouwen,
indien dit niet ingaat tegen bovenstaande richtlijn. Vermeld altijd je bronnen.

## Indienen

Indien doe je door jouw oplossing via git te pushen in de master branch naar je
persoonlijke GitHub repository waarvan je deze opdracht gecloned hebt, origin.

De deadline voor deze opdracht ligt op **vrijdag 29 mei 16u00**. Zorg dat je voldoende
ruim voor de deadline indient zodat bij eventuele problemen nog ondersteuning kan
gegeven worden. Commits die na deze deadline ingediend worden zullen niet verbeterd
of nagekeken worden.

## Hulp of vragen

Indien jullie vragen hebben over de opdrachten kunnen jullie deze stellen via Teams
door rechtstreeks naar de docent (Sille Van Landschoot) een chat bericht te sturen.
Plaats geen vragen in een publiek channel!

Indien er nog algemene zaken verduidelijkt dienen te worden voor iedereen zal dit
meegedeeld worden via Teams in het algemene Software Engineering channel.

## Ziekte, technische problemen of praktische problemen

Indien je niet in staat bent om de opdracht te maken door ziekte, technische problemen,
praktische problemen of welke reden dan ook, dien je de docent **onmiddelijk** te
verwittigen. Meldingen na datum of na de feiten zullen niet geaccepteerd worden.
Motiveer ook grondig en duidelijk te problemen of situatie.

## Scores

De verschillende onderdelen zullen op volgende manier van een score voorzien worden.

Onderdeel | Punten
---|---
Functionele uitwerking | 20
Single Responsibility Principe en Dependency Inversion | 20
Unit testen | 20
README en licentie | 10
NPM Package | 10
Linter | 10
Documentatie | 10
**Totaal** | **100**

[![Examenopdracht Software Engineering 2020](https://img.youtube.com/vi/VrnO_HEcD34/0.jpg)](https://www.youtube.com/watch?v=VrnO_HEcD34)
