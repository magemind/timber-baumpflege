// Deep-Dive-Artikel Kategorie "Baumkrankheiten & Schädlinge"
// Fachlicher, sachlicher Ton — kein Verkaufsspin. Norddeutschland-Bezug wo möglich.

export interface KrankheitsArtikel {
  slug: string;
  title: string;
  short: string;
  meta: string;
  hero: {
    erreger: string;
    wirtsbaum: string;
    risiko: string;
    verbreitung: string;
  };
  intro: string;
  sections: { h: string; p: string[] }[];
  fazit: string;
}

export const BAUMKRANKHEITEN: KrankheitsArtikel[] = [
  {
    slug: 'massaria-platanen',
    title: 'Massaria bei Platanen — der stille Ast-Killer',
    short: 'Warum die Massaria-Krankheit besonders in Städten gefährlich wird — und wie man betroffene Platanen erkennt, bevor der nächste Ast fällt.',
    meta: 'Massaria bei Platanen erkennen: Symptome, Gefährlichkeit, richtige Baumpflege in Norddeutschland. Praxis-Ratgeber von TIMBER Baumpflege.',
    hero: {
      erreger: 'Splanchnonema platani (Schlauchpilz)',
      wirtsbaum: 'Platanus × hispanica, seltener andere Platanenarten',
      risiko: 'Hoch — plötzlicher Astabbruch ohne Vorankündigung, oft im Sommer',
      verbreitung: 'Bundesweit stark zunehmend seit 2003, in Norddeutschland seit ca. 2010 Standardproblem',
    },
    intro: 'Massaria ist eine Rindenkrankheit an Platanen, die in Deutschland erst seit etwa 20 Jahren beobachtet wird — vorher galt sie als mediterranes Problem. Der Klimawandel hat das geändert: Trockenstress schwächt Platanen, der Pilz Splanchnonema platani nutzt die Schwäche. Das Tückische an Massaria ist nicht der langsame Verlauf, sondern der plötzliche Bruch. Ein befallener Ast sieht von unten oft völlig normal aus, kann aber jederzeit abbrechen. Für Verkehrssicherungspflichtige — Kommunen, Wohnungsverwaltungen, Grundstückseigentümer mit Straßenrand-Platanen — ist Massaria damit die wichtigste Krankheit überhaupt.',
    sections: [
      {
        h: 'Warum Massaria in Norddeutschland zum Problem wird',
        p: [
          'Platanen sind in Norddeutschland ursprünglich nicht heimisch — sie wurden ab dem 18. Jahrhundert als Allee- und Stadtbaum gepflanzt, gerade weil sie so robust und stadtklimafest galten. Rund um den Alten Elbtunnel, an den Landungsbrücken, entlang der Hamburger Reesendammbrücke, in den Alleen der Bäderstraße von Timmendorf bis Travemünde stehen dementsprechend viele Alt-Platanen. Bis vor 20 Jahren waren die praktisch kranheitsfrei.',
          'Seit den Trockensommern 2003, 2018, 2019 und 2020 kippt das Bild. Massaria-Sporen sind allgegenwärtig — der Pilz gehört zur natürlichen Rindenflora fast jeder Platane —, aber er wird nur bei geschwächten Bäumen pathogen. Trockenstress ist der Hauptauslöser. Zusatzfaktoren: verdichteter Innenstadt-Boden, Streusalz, Bauarbeiten im Wurzelbereich, wiederholte falsche Schnitte.',
          'Für uns in Norddeutschland heißt das: die Kombination aus dem Platanen-Bestand der Nachkriegs-Pflanzungen und dem geänderten Klima macht Massaria zur Standard-Diagnose in fast jedem Bezirk. In Hamburg-Rotherbaum, in Kiel-Düsternbrook, in Lübecker Wallanlagen — überall dieselben Symptome.',
        ],
      },
      {
        h: 'Wie man Massaria erkennt',
        p: [
          'Das erste Symptom ist eine Verfärbung entlang der Oberseite des befallenen Astes. Die Rinde wird zunächst rot-lila, dann dunkelbraun bis schwarz. Betroffen sind fast immer Äste ab etwa 3 cm Durchmesser aufwärts, meist im mittleren bis oberen Kronenbereich. Vom Boden aus ist die Verfärbung wegen der Perspektive praktisch nicht zu sehen — das ist ein Kernproblem.',
          'Zweites Symptom: der befallene Rindenbereich löst sich vom Holz ab. Wer klettert oder mit dem MEWP an den Ast heran kann, sieht die Ablösung als längliche, häufig streifige Fläche entlang der Oberseite. Bei stärkerem Befall bildet sich unter der Rinde ein feiner, olivbrauner Sporenrasen — das Fruchtkörper-Lager des Pilzes.',
          'Drittes und gefährlichstes Symptom: strukturelle Schwächung. Der Pilz baut das Kambium und den äußeren Splint ab, der Ast verliert seine Zugfestigkeit. Anders als bei den meisten Baumkrankheiten kompensiert der Baum den Schaden nicht durch Reaktionsholz — er bricht mit sauberer Trennfläche ab, oft an einem völlig windstillen Sommertag. Aus dem Ast wird ein 20 kg schweres Geschoss.',
        ],
      },
      {
        h: 'Was VTA vom Boden aus (nicht) leisten kann',
        p: [
          'Die klassische Baumkontrolle nach FLL ist eine Sichtprüfung vom Boden aus. Für Massaria ist das eine schwache Waffe. Die typischen Symptome liegen auf der Astoberseite — vom Boden aus sichtbar sind meist nur Sekundärhinweise: einzelne totastige Kronenteile, Nachtriebe am Stamm als Zeichen von Stressreaktion, in fortgeschrittenen Fällen erste abgebrochene Äste am Boden.',
          'Deshalb hat sich für Massaria eine eigene Kontroll-Routine etabliert: die visuelle Kontrolle vom Boden wird bei Verdacht durch eine Krone-Nahsichtprüfung ergänzt. Möglich per Seilklettertechnik, per MEWP oder in Ausnahmefällen per Drohne mit hochauflösender Kamera und ausreichender Zoomstufe. Ohne Krone-Nahsicht ist bei Verdacht auf Massaria die Verkehrssicherungspflicht nicht mit vertretbarem Aufwand erfüllt.',
          'Für Kommunen und Verwaltungen mit größerem Platanen-Bestand rechnet sich daher eine jährliche SKT-Sichtkontrolle im Frühsommer, wenn die Symptome am deutlichsten sind. Der zusätzliche Aufwand pro Baum liegt bei 30–60 €, deutlich weniger als die Kosten eines einzigen Personenschadens.',
        ],
      },
      {
        h: 'Behandlung: Astwegnahme statt Chemie',
        p: [
          'Es gibt keine praxisrelevante chemische Behandlung gegen Massaria. Fungizid-Anwendungen im Freiland sind entweder nicht zugelassen oder wirken nicht ausreichend. Die einzige verlässliche Maßnahme ist die Entnahme der befallenen Äste, sauber, gegen den Rindeneinschnitt, mit ausreichendem Sicherheitsabstand vom sichtbaren Symptom.',
          'Für einzelne befallene Äste bedeutet das: Astwegnahme in der Vegetationsruhe (November bis Anfang März) — der Baum kann die Schnittfläche im Frühling wieder überwallen. Bei akuter Verkehrsgefahr auch sofortiger Entnahme, dann greift die Ausnahme nach § 39 Absatz 5 BNatSchG. Wichtig: das Schnittgut vernichten (verbrennen oder in geschlossenen Kompost, nicht auf offene Grüngutplätze), sonst wandert der Pilz weiter.',
          'Wenn mehr als etwa ein Drittel der Krone befallen ist, wird die Astwegnahme zur Kronenreduktion — und die Frage stellt sich, ob Reduktion oder Entfernung sinnvoller ist. Für Bestandsschutz-Bäume mit hoher ortsprägender Wirkung lohnt sich meist die Reduktion mit engmaschiger Nachkontrolle. Für standardisierte Alleebäume in Nachpflanzungslagen ist der Ersatz oft der ökonomischere Weg. Die Entscheidung ist immer Einzelfall und gehört in die Hand einer Fachagrarwirt- oder ETW-qualifizierten Person.',
        ],
      },
      {
        h: 'Was Auftraggeber falsch machen',
        p: [
          'Der häufigste Fehler ist die Verzögerung. Ein Grundstückseigentümer sieht abgebrochene Äste im Frühling, denkt „Sturmschaden" und wartet den nächsten Winter ab, um „gemeinsam mit anderen Arbeiten" ranzugehen. Wenn dann im Juli ein Ast auf ein parkendes Auto fällt, ist die Verzögerung im Streitfall der Ausschlag — die Verkehrssicherungspflicht war zum Zeitpunkt der Beobachtung verletzt, nicht erst zum Zeitpunkt des Schadens.',
          'Der zweite Fehler ist der Kappungsschnitt aus Sorge. Wer bei Massaria-Verdacht die gesamte Krone „auf Sicherheit zurückschneidet" — Stumpfschnitt, Kappungsschnitt, "Radikalschnitt" —, schwächt den Baum zusätzlich und provoziert genau die Nachtriebe und Rindenverletzungen, die dem Pilz nochmal Zugang öffnen. Kappung ist bei Massaria die falsche Antwort.',
          'Der dritte Fehler ist das Abwarten der jährlichen Kontrolle. Wer Massaria-Verdacht hat, sollte nicht auf den nächsten Regeltermin warten, sondern eine anlassbezogene Sonderkontrolle beauftragen. Kosten pro Baum ca. 80–150 € — vernachlässigbar gegen die Alternative.',
        ],
      },
    ],
    fazit: 'Massaria ist die norddeutsche Platanenkrankheit unserer Zeit. Wer verkehrssicherungspflichtig ist, muss die Symptome kennen, jährliche Nahsicht-Kontrollen einplanen und bei Befall zügig Astwegnahme veranlassen. Chemie hilft nicht, Kappung schadet, Abwarten kostet. Nur der saubere fachliche Umgang hält den Bestand am Leben — und den Haftungsfall vom Grundstück fern.',
  },

  {
    slug: 'russrindenkrankheit-ahorn',
    title: 'Rußrindenkrankheit beim Ahorn — Gesundheitsrisiko für Baumpfleger',
    short: 'Cryptostroma corticale befällt seit dem Trockensommer 2018 flächig norddeutsche Ahorne — und seine Sporen sind für den Menschen ein ernstes Gesundheitsrisiko.',
    meta: 'Rußrindenkrankheit Ahorn erkennen: Symptome, Übertragung, Schutz für Kletterer und Bewohner. TIMBER Baumpflege Norddeutschland.',
    hero: {
      erreger: 'Cryptostroma corticale (Schlauchpilz)',
      wirtsbaum: 'Bergahorn (Acer pseudoplatanus), seltener Spitzahorn und Feldahorn',
      risiko: 'Sehr hoch — schwere Atemwegsreaktionen (Alveolitis) bei Sporeneinatmung',
      verbreitung: 'Seit 2018 in Norddeutschland flächig, vorher nur vereinzelt',
    },
    intro: 'Rußrindenkrankheit ist neben Massaria die zweite Krankheit, deren Bedeutung sich in Norddeutschland in den letzten Jahren dramatisch verändert hat. Der Erreger Cryptostroma corticale war jahrzehntelang eine Kuriosität — beobachtet in Süddeutschland nach dem Hitzesommer 2003, dann wieder ruhig. Nach dem Extrem-Trockenjahr 2018 hat sich die Krankheit auf Bergahorne im ganzen Bundesgebiet ausgebreitet, und weil Bergahorn in norddeutschen Parks und Alleen häufig gepflanzt wurde, ist die Krankheit hier heute Alltag. Für den Baumpfleger geht es dabei nicht nur um den Baum — die Sporen können schwere Lungenerkrankungen auslösen. Ein befallener Ahorn ist ein Arbeitsschutzfall.',
    sections: [
      {
        h: 'Erkennungsmerkmale — die rußschwarze Sporenschicht',
        p: [
          'Frühes Stadium: einzelne welkende Kronenteile, oft im oberen Drittel. Blattverfärbung, vorzeitiger Blattfall, absterbende Feinäste. Bis hierhin sieht der Befall aus wie x andere Krankheiten — Trockenstress, Wurzelfäule, Ahornrunzelschorf. Die Diagnose ist an diesem Punkt Vermutung, nicht Gewissheit.',
          'Mittleres Stadium: die Rinde beginnt sich in großen Platten vom Stamm zu lösen. Charakteristisch ist die matte, papierartige Textur der abfallenden Rindenstücke. Runter fällt bei einem befallenen Baum nicht Borke im klassischen Sinn, sondern ganze Rindenplatten von bis zu einem halben Meter Länge.',
          'Spätes Stadium und Diagnose-sicheres Merkmal: unter der abgelösten Rinde erscheint eine dichte, samtig-schwarze Sporenschicht. Sie sieht aus wie feiner Ruß und lässt sich mit dem Finger abwischen — ist aber genau das, was den Baumpfleger krank macht. Bei starkem Befall bricht die Rinde großflächig auf, die schwarze Schicht wird von Windbewegungen als Staubwolke sichtbar. Diagnostisch eindeutig, arbeitstechnisch alarmierend.',
        ],
      },
      {
        h: 'Warum die Sporen ein Gesundheitsrisiko sind',
        p: [
          'Cryptostroma-Sporen sind mit 4–6 Mikrometern klein genug, um bis in die Lungenbläschen (Alveolen) zu gelangen. Dort lösen sie bei sensibilisierten Personen eine allergische Alveolitis aus — die exogen-allergische Alveolitis vom Typ „ahorn-rindenschäler-lunge". Klinisch: Reizhusten, Fieber, Atemnot, in schweren Fällen wochenlange Beeinträchtigung. Wiederholte Exposition kann zur chronisch-fibrosierenden Verlaufsform führen, mit dauerhaftem Lungenfunktionsverlust.',
          'Die Krankheit wurde ursprünglich in Kanada bei Waldarbeitern beobachtet, die Ahornrinde für die Sirupgewinnung abschälten — daher der englische Name „maple bark strippers disease". In Deutschland gab es 2019 die ersten dokumentierten Fälle bei Baumpflegern, seither steigen die Zahlen kontinuierlich.',
          'Nicht jeder Kontakt führt zur Erkrankung. Es braucht in der Regel wiederholte oder intensive Exposition, plus eine individuelle Disposition. Als besonders gefährdet gelten Baumpfleger, Waldarbeiter und Anwohner mit stark befallenen Bäumen direkt am Haus. Für den einmal an einem befallenen Baum vorbeigehenden Fußgänger ist das Risiko vernachlässigbar — die relevante Exposition ist die Berufsexposition beim Klettern und Zerlegen.',
        ],
      },
      {
        h: 'Arbeitsschutz — was Auftraggeber wissen sollten',
        p: [
          'Bei begründetem Verdacht auf Rußrindenkrankheit gelten für den ausführenden Betrieb strenge Arbeitsschutz-Regeln. Vor der Kletterei muss die Krankheit fachlich bestätigt sein (Rindenprobe, ggf. mikroskopische Analyse). Ist der Befall bestätigt, ist Persönliche Schutzausrüstung Pflicht: Vollmaske FFP3 (nicht Halbmaske, nicht FFP2), dicht schließende Schutzkleidung, Schutzbrille, Handschuhe. Für die Bodenmannschaft im Zerlegebereich dasselbe.',
          'Das befallene Holz und die Rinde dürfen nicht auf Kompost, nicht auf offene Grüngutplätze, nicht in normale Häckselbetriebe. Fachgerechte Entsorgung erfolgt in geschlossenen Containern, Verwertung durch Verbrennung in genehmigten Anlagen. Der Aufwand ist erheblich — für einen mittleren Bergahorn liegt der Zuschlag auf die Fällkosten bei 400–800 €, je nach Zugänglichkeit und Menge des kontaminierten Materials.',
          'Für Anwohner mit befallenen Ahornen am Haus: nicht selbst die abgeplatzten Rindenstücke sammeln, nicht mit dem Rasenmäher darüber fahren, Kinder- und Haustier-Aufenthalt in unmittelbarer Baumnähe minimieren, bis der Baum entfernt und der Bereich saniert ist. Bewässerung ohne Aufwirbelung ist unbedenklich.',
        ],
      },
      {
        h: 'Warum Bergahorne so oft befallen sind',
        p: [
          'Bergahorn ist in Norddeutschland ein häufiger Park- und Straßenbaum — robust, schnellwüchsig, klimafest, so galt er jahrzehntelang. In Wandsbek, in Hamburg-Nord, in vielen Kieler Parkanlagen bilden Bergahorn-Bestände ganze Alleen. Nach dem Extremjahr 2018 hat der Klimastress diese Bestände flächig geschwächt. Der Pilz war die ganze Zeit da, latent, warten auf die Schwäche.',
          'Spitzahorn (Acer platanoides) wird ebenfalls befallen, aber deutlich seltener und meist mit milderem Verlauf. Feldahorn (Acer campestre) gilt als weitgehend resistent. Rotahorn und amerikanische Ahornarten sind zu selten in Norddeutschland, um eine belastbare Aussage zu treffen — vereinzelt gemeldet, kein Flächenproblem.',
          'Für Nachpflanzung in klimastress-gefährdeten Lagen empfiehlt die Praxis inzwischen die Umstellung von Bergahorn auf klimaresilientere Arten: Feldahorn, Winterlinde, Baumhasel, Zerreiche oder Baumhasel. Nachpflanzung mit erneutem Bergahorn ist an trockenen Standorten fahrlässig.',
        ],
      },
      {
        h: 'Sanierung: es gibt nur die Fällung',
        p: [
          'Sobald der Befall diagnostiziert ist, ist die Rußrindenkrankheit nicht mehr heilbar. Der Baum stirbt zeitverzögert über ein bis drei Jahre ab, verliert die statische Integrität und wird zur Verkehrsgefahr. Kronenreduktion, Sicherungssysteme oder Wurzelmaßnahmen kaufen bestenfalls Zeit — die Fällung folgt in praktisch allen Fällen.',
          'Zeitpunkt: idealerweise so früh wie möglich nach der Diagnose. Je länger der Baum steht, desto mehr Sporen bildet er, desto mehr wird der Standort und das Umfeld kontaminiert. Bei Bäumen im Publikumsbereich (Spielplätze, Kindergärten, Schulwege) ist die Fällung Priorität und rechtfertigt fast immer die Ausnahme nach § 39 Absatz 5 BNatSchG auch innerhalb der Vegetationszeit.',
          'Nach der Fällung: der Stubben muss nicht zwingend gefräst werden, sollte aber im ersten Jahr regelmäßig geprüft werden. Nachpflanzung erfolgt frühestens im nächsten Herbst am selben Standort, mit einer anderen Art — Bergahorn wieder zu pflanzen wäre nach heutigem Kenntnisstand unverantwortlich.',
        ],
      },
    ],
    fazit: 'Rußrindenkrankheit ist die klimabedingt aggressivste norddeutsche Ahornkrankheit unserer Zeit — und für den Baumpfleger die einzige Krankheit, deren Behandlung mit Vollmaske und Schutzausrüstung erfolgen muss. Für Auftraggeber heißt das: nur Betriebe beauftragen, die die Rußrindenproblematik technisch und arbeitsschutztechnisch beherrschen. Wer bei einem Bergahorn-Auftrag nicht nach Rußrindenkrankheit fragt, hat entweder keine Ahnung oder verzichtet auf Prüfsorgfalt. Beides ist im Zweifel teuer.',
  },

  {
    slug: 'brandkrustenpilz-erkennen',
    title: 'Brandkrustenpilz — der stille Umkipp-Killer im Wurzelbereich',
    short: 'Kretzschmaria deusta ist der häufigste Grund dafür, dass ein optisch gesunder Buchen- oder Rosskastanien-Alterbaum ohne Vorwarnung umkippt. Woran man ihn erkennt.',
    meta: 'Brandkrustenpilz Kretzschmaria deusta erkennen: Symptome am Stammfuß, Gefährlichkeit, VTA-Kontrolle. TIMBER Baumpflege Norddeutschland.',
    hero: {
      erreger: 'Kretzschmaria deusta (Schlauchpilz, Weißfäule-Erreger)',
      wirtsbaum: 'Rotbuche, Rosskastanie, Winterlinde, seltener Ahorn und Eiche',
      risiko: 'Sehr hoch — plötzlicher Stammbruch am Wurzelanlauf ohne sichtbare Vorwarnung',
      verbreitung: 'Bundesweit häufig, in norddeutschen Park- und Villenlagen die Standardursache für Alterbaum-Ausfälle',
    },
    intro: 'Wenn ein 150-jähriger Buchen-Solitär an einem windstillen Sommertag umkippt und dabei ein Auto zerdrückt, steht in neun von zehn Fällen der Brandkrustenpilz am Anfang der Geschichte. Kretzschmaria deusta ist eine der gefährlichsten Baumkrankheiten überhaupt — nicht wegen der Verbreitung, sondern wegen der Diagnose-Schwierigkeit. Der Pilz baut das Holz im Wurzelanlauf und untersten Stammbereich still über Jahre ab, ohne dass die Krone Symptome zeigt. Wenn der Ausbruch offensichtlich wird, ist die statische Integrität meist schon verloren. Für die Verkehrssicherungspflicht ist Brandkrustenpilz deshalb der wichtigste einzelne Pilz überhaupt.',
    sections: [
      {
        h: 'Warum die Diagnose so schwer ist',
        p: [
          'Die meisten holzzerstörenden Pilze zeigen früher oder später auffällige Fruchtkörper — Baumporlinge, Riesenporlinge, Hallimasch, Zunderschwamm — und die kann ein geschulter Kontrolleur schon aus 20 Meter Entfernung erkennen. Brandkrustenpilz macht das nicht so. Seine Fruchtkörper sind unauffällige, flache Krusten am Stammfuß, die im jungen Stadium hellgrau bis olivgrau sind und nur wenige Millimeter dick werden.',
          'Erst in einem älteren Stadium färben sich die Krusten schwarz — daher der Name „Brandkrustenpilz", weil es aussieht, als hätte jemand eine Fackel an den Stamm gehalten. In diesem Stadium ist die Diagnose einfach, aber der Baum ist statisch meist schon verloren. Wer im Anfangsstadium erkennen will, muss den Stammfuß aktiv untersuchen — im niedrig-vegetierten Bereich in Bodennähe, oft unter der Grasnabe.',
          'Zweites Diagnose-Problem: der Pilz baut ausgerechnet das statisch wichtigste Holz ab — den Wurzelanlauf und die unteren zwei Meter des Stammes. Die Krone kann jahrelang völlig unauffällig aussehen, während der Fuß intern schon so weit abgebaut ist, dass ein Bruch am nächsten Sturmtag physikalisch unvermeidbar wird. Die klassische Krankheitsprogression „Krone welkt zuerst" gilt bei Brandkrustenpilz nicht.',
        ],
      },
      {
        h: 'Erkennungssymptome am Stammfuß',
        p: [
          'Erstes Suchobjekt: hell- bis dunkelgraue, kruste Beläge im untersten Stammbereich, oft nur wenige Zentimeter über dem Boden oder direkt an den Wurzelanläufen. Größe zwischen 5 cm und 30 cm im Durchmesser, häufig länglich entlang von Wurzelanläufen. Textur zunächst matt-samtig, im Alter hart und rissig.',
          'Zweites Zeichen: leichte Verfärbung der Rinde direkt oberhalb des Fruchtkörper-Bereichs. Die Rinde kann bräunlich, feuchtdunkler wirken als der Rest des Stammes. Bei Buche und Rosskastanie sieht man häufig auch feine Längsrisse am Stammfuß, oft in Kombination mit einer leichten „Senke" — ein Zeichen, dass das Holz darunter Volumen verloren hat.',
          'Drittes Zeichen und Praxis-Test: die Klangprobe. Ein leichtes Klopfen mit einem Kunststoffhammer oder Sondierstab am Stammfuß auf verschiedenen Höhen. Bei intaktem Holz klingt es klar und satt. Bei fortgeschrittenem Brandkrusten-Befall klingt das Holz dumpf, hohl, „gebrochen". Der Klangtest ist Teil jeder ordentlichen VTA-Untersuchung — bei Verdacht führt er zur Anordnung einer eingehenden Untersuchung mit Schall-Tomographie oder Bohrwiderstandsmessung.',
        ],
      },
      {
        h: 'Warum Brandkrustenpilz besonders für Altbäume in Norddeutschland relevant ist',
        p: [
          'Der Pilz braucht Wunden im Wurzelanlauf, um in den Baum einzudringen. Solche Wunden entstehen häufig bei Bau- und Sanierungsarbeiten — Kabelverlegung, Straßenrandarbeiten, Pflasterarbeiten in Villenauffahrten, Wurzelverletzungen durch Baumaschinen. In den gewachsenen Villenlagen Hamburgs (Blankenese, Nienstedten, Marienthal, Wellingsbüttel) mit ihren Alt-Buchen, die parallel zu Sanierungswellen der letzten 40 Jahre standen, sind Brandkrustenpilz-Befälle die Standarderklärung für den unerwarteten Umkipper.',
          'Zweiter Risikofaktor: verdichtete Böden. Wo Autos regelmäßig auf dem Wurzelbereich stehen oder wo großflächig gepflastert wurde, ist der Baum durch Wurzelstress vorgeschwächt. Der Pilz nutzt die Schwäche. Ein Buchen-Solitär in einem sauber gepflegten Rasen ohne Bauarbeiten in 20 Jahren ist statistisch sehr viel weniger gefährdet als eine Buche in einer neubauten Villenauffahrt.',
          'Dritter Faktor: Klimastress. Auch hier verstärkt der Trockenstress der letzten Jahre die Empfindlichkeit gegenüber Sekundärpathogenen. Buchen im Trockenstress werden nicht direkt von Brandkrustenpilz getötet — der Pilz war meist vorher schon da —, aber die Abbaugeschwindigkeit des Holzes nimmt bei geschwächtem Baum zu.',
        ],
      },
      {
        h: 'Behandlung: Fällung als einzige realistische Option',
        p: [
          'Bei diagnostisch bestätigtem Brandkrustenpilz gibt es keine Sanierungsoption. Der Pilz sitzt tief im Stammfuß und im Wurzelbereich, ist chemisch nicht bekämpfbar und mechanisch nicht entfernbar, ohne den Baum zu töten. Die einzige Frage ist der Zeitpunkt der Fällung.',
          'Wenn die eingehende Untersuchung (Schall-Tomographie, Zugversuch, Bohrwiderstandsmessung) noch ausreichende Restfestigkeit zeigt, kann der Baum unter engmaschiger Nachkontrolle stehen bleiben — meist ein bis drei Jahre, in guten Fällen bis zu fünf Jahre. Bei jeder Neujahrs-Kontrolle wird der Fortschritt gemessen und der Fällzeitpunkt neu bewertet. Für ökologisch besonders wertvolle Bäume kann eine Kappung zum Habitatbaum mit reduziertem Kronenhebel eine ökologische Zwischenlösung sein.',
          'Bei fortgeschrittener Fäule ist die Fällung sofortige Verkehrssicherungspflicht. In Publikumsbereichen (Straße, Spielplatz, Parkplatz, öffentlicher Weg) ist auch bei mittlerem Befund die Fällung meist die haftungsrechtlich sichere Wahl. Kosten für die Fällung eines befallenen Altbaums sind höher als die eines gesunden — der Baum darf nicht mit klassischer Falltechnik zu Boden gefällt werden, weil der Fuß beim Anschneiden statisch versagen kann. Zerlegung von oben mit SKT und Segment-Ablass ist der Standardweg. Preis meist im Bereich 2.000–5.000 € netto, je nach Baumgröße und Zugänglichkeit.',
        ],
      },
      {
        h: 'Prävention: Wurzelbereich schützen',
        p: [
          'Der wichtigste Präventionshebel ist der Schutz des Wurzelanlaufs. Keine Bauarbeiten im Bereich der Kronentraufe ohne Absprache mit einem Fachbetrieb, kein Befahren mit schweren Maschinen, kein flächiges Pflastern über den Wurzeln. Wo Bauarbeiten unvermeidbar sind, Wurzelvorhang setzen oder Baumsanierungs-Handschuhe (Bauzäune, Wurzelvorbau, Belastungsverteilung) einsetzen.',
          'Für Alt-Bestände ohne bekannte Vorschädigung: jährliche Regelkontrolle nach FLL, mit besonderem Augenmerk auf den Stammfuß-Bereich. Bei Bäumen in Publikumsbereich und Bäumen mit erkennbaren Vorschäden am Wurzelanlauf: halbjährliche Kontrolle mit Klangprobe. Zusätzlicher Aufwand pro Kontrollen-Termin: 15–30 Minuten pro Baum. Bei mehreren Bäumen in einem Bestand rechnet sich das auf einen Bruchteil der Alternative.',
        ],
      },
    ],
    fazit: 'Brandkrustenpilz ist der stille Umkipp-Killer, und er ist in fast jedem norddeutschen Alt-Buchen-Bestand mindestens vereinzelt vorhanden. Wer verkehrssicherungspflichtig ist, muss die Erkennungsmerkmale kennen, den Stammfuß aktiv untersuchen lassen und bei Verdacht die eingehende Untersuchung veranlassen. Es gibt keine Reparatur — nur früh erkennen und richtig handeln. Und wenn der Baum am Ende steht, gehört die Fällung in die Hand eines Betriebs, der die Statik-Sensibilität kennt und Zerlegung von oben beherrscht.',
  },

  {
    slug: 'eichenprozessionsspinner-bekaempfen',
    title: 'Eichenprozessionsspinner — was tun, wenn die Raupen kommen',
    short: 'Der Eichenprozessionsspinner ist inzwischen norddeutscher Alltag geworden. Was Grundstückseigentümer wissen müssen: Erkennung, Gesundheitsrisiko, Bekämpfung, Pflichten.',
    meta: 'Eichenprozessionsspinner bekämpfen — Nestentfernung, Gesundheitsrisiko, Kosten, Pflichten von Grundstückseigentümern in Norddeutschland.',
    hero: {
      erreger: 'Thaumetopoea processionea (Nachtschmetterling)',
      wirtsbaum: 'Alle heimischen Eichenarten (Stieleiche, Traubeneiche, Roteiche)',
      risiko: 'Sehr hoch für Menschen und Haustiere — Brennhaare der Raupen lösen allergische Reaktionen, Atemwegsreizungen und Hautausschläge aus',
      verbreitung: 'Seit 2015 flächig in Norddeutschland, Kern-Ausbreitungsgebiete in Kreis Segeberg, Kreis Pinneberg, Hamburg-Süd, Kreis Stormarn',
    },
    intro: 'Der Eichenprozessionsspinner ist bis zur Jahrtausendwende in Norddeutschland praktisch nicht vorgekommen. Er war Süddeutschland- und Rheinland-Problem. Mit der Klimaerwärmung hat sich das Verbreitungsgebiet in etwa zwei Jahrzehnten bis nach Skandinavien ausgedehnt — Schleswig-Holstein ist heute etabliertes Vorkommensgebiet, mit jährlicher Aufwuchsdynamik je nach Witterung. Für Eichenbesitzer ist der Prozessionsspinner damit keine Ausnahme mehr, sondern ein wiederkehrendes Problem. Zwei Fragen prägen den praktischen Umgang: das Gesundheitsrisiko für Menschen und Tiere in der Umgebung, und die haftungsrechtliche Verpflichtung zum Handeln.',
    sections: [
      {
        h: 'Der Lebenszyklus im Kalenderjahr',
        p: [
          'Der Prozessionsspinner ist ein unauffälliger, blassbrauner Nachtschmetterling — im ausgewachsenen Zustand tut er gar nichts. Das Problem sind die Raupen. Das Weibchen legt im August und September Eier in kleinen Klumpen an dünne Zweige im oberen Kronenbereich, meist an Eichen im lichten Bestand oder an Waldrändern. Die Eier überwintern.',
          'Im Frühjahr — meist ab Mitte April, in warmen Jahren schon Anfang April — schlüpfen die Raupen. Sie durchlaufen sechs Larvenstadien bis Juni. Vom dritten Stadium an (etwa Ende Mai) bilden sie die berüchtigten Brennhaare — feine, mit Widerhaken versehene Härchen mit dem Nesselgift Thaumetopoein. Ab diesem Stadium ist der Bestand für den Menschen gefährlich, unabhängig davon, ob die Raupen selbst berührt werden.',
          'Ab Ende Mai bis Anfang Juni bilden die Raupen die charakteristischen „Prozessionen" — Reihen von 20 bis 100 Tieren, die gemeinsam über den Stamm oder Äste wandern. Zeitgleich entstehen die weißen bis grau-braunen Gespinnstnester im Stamm-Astwinkel oder in Gabeln. Ab Ende Juni verpuppen sich die Raupen in diesen Nestern. Die Nester bleiben aber gefährlich — die Brennhaare verlieren ihre Wirkung nicht mit der Verpuppung, sondern bleiben in den Nestresten mehrere Jahre reizend.',
        ],
      },
      {
        h: 'Gesundheitsrisiko — warum es ein Notfall werden kann',
        p: [
          'Die Brennhaare sind mit rund 0,1 bis 0,3 Millimetern gerade so an der Grenze der Sichtbarkeit. Sie brechen bei jeder Erschütterung der Raupe oder des Nestes ab und werden vom Wind über hunderte Meter getragen. Bei Hautkontakt entstehen juckende, brennende Ausschläge, die tagelang bis wochenlang anhalten. Bei Augenkontakt Bindehautentzündung. Bei Einatmung Reizungen der oberen Atemwege bis zu asthmaähnlichen Anfällen. In Extremfällen anaphylaktische Reaktionen — für sensibilisierte Personen ist der Prozessionsspinner ein Notfall.',
          'Besonders gefährdet: kleine Kinder (die im Gras neben befallenen Bäumen spielen), Allergiker, Asthmatiker, Menschen mit vorgeschädigten Atemwegen, Bauarbeiter und Gärtner mit intensiver Bodennähe-Arbeit im Baumbereich. Haustiere — vor allem Hunde, die in befallenem Laub schnüffeln — reagieren mit Zungenschwellungen, Speichelfluss, Erbrechen. In schweren Fällen Todesfälle bei Hunden dokumentiert.',
          'Die Belastung dauert nicht nur die Raupensaison selbst. Verlassene Nestreste bleiben zwei bis fünf Jahre reizend, weil die Brennhaare mikroskopisch klein und witterungsstabil sind. Ein befallener Baum, dessen Nester nicht entfernt wurden, ist auch Jahre nach dem sichtbaren Befall noch eine Reizquelle — besonders im Frühling, wenn Wind und Regen die Reste mobilisieren.',
        ],
      },
      {
        h: 'Bekämpfung — Absaugen als Standard',
        p: [
          'Die einzige praxisrelevante Bekämpfungsmethode ist die mechanische Entfernung der Nester durch Absaugen. Der Fachbetrieb rückt mit Vollschutzausrüstung (Vollmaske FFP3, dicht schließender Schutzanzug, doppelte Handschuhe) und einem Industriesauger mit HEPA-Filter an. Die Nester werden mit dem Sauger großzügig umschlossen und im Ganzen aufgenommen. Anschließend werden die Nestreste im geschlossenen System zur genehmigten Verbrennungsanlage transportiert und thermisch vernichtet.',
          'Wichtig ist die Wahl des Zeitpunkts. Bekämpfung im dritten oder vierten Larvenstadium (Ende Mai, Anfang Juni) ist ideal — die Raupen sind noch in geschlossenen Gruppen, die Nester noch überschaubar, die Brennhaare-Verbreitung noch begrenzt. Bekämpfung nach der Verpuppung (Juli, August) ist möglich, aber deutlich aufwendiger, weil die Nester dann groß sind und die Brennhaar-Belastung höher.',
          'Chemische Bekämpfung mit Insektiziden ist rechtlich stark eingeschränkt (Bienenschutz, Zulassungsbeschränkungen) und praktisch nur in Ausnahmefällen für Kommunen und größere Bestände relevant. Für Einzelbäume und Privatkunden ist Absaugen der Standard.',
          'Kosten: für einen Einzelbaum mit ein bis drei Nestern in mittlerer Höhe (bis 15 m) liegen die Preise bei 300–700 € netto. Bei sehr großen Bäumen, hoch gelegenen oder schwer zugänglichen Nestern deutlich mehr. Rahmenverträge für Verwaltungen und Kommunen mit regelmäßigen Bekämpfungsrunden sind pro Baum meist deutlich günstiger.',
        ],
      },
      {
        h: 'Haftungsrechtliche Pflichten',
        p: [
          'Ein Baum mit sichtbaren EPS-Nestern in einem publikumsnahen Bereich ist ein Gefahrherd. Der Eigentümer ist im Rahmen der Verkehrssicherungspflicht verpflichtet, für die Beseitigung zu sorgen. Wer die Nester ignoriert und dadurch ein Passant oder Bewohner geschädigt wird, riskiert Schadensersatzforderungen — und die eigene Haftpflichtversicherung wird prüfen, ob die Beseitigung verhältnismäßig zeitnah erfolgt ist.',
          'Der Beseitigungszeitraum ist nicht gesetzlich vorgeschrieben, aber die Rechtsprechung tendiert zu „unverzüglich nach Kenntnis". In der Praxis bedeutet das: innerhalb weniger Werktage nach Feststellung des Nestes, spätestens bevor die betroffene Fläche wieder zum Publikumsverkehr freigegeben wird. Für Verwaltungen mit vielen betroffenen Bäumen sind Rahmenverträge mit Reaktionszeiten in Werktagen der Standard.',
          'Wichtiger Sonderfall: Bäume auf Nachbargrundstücken. Wenn der EPS-Befall auf dem Nachbarbaum die eigene Fläche belastet (Wind trägt die Brennhaare herüber), besteht ein Anspruch gegen den Nachbarn auf Beseitigung. Der zivilrechtliche Weg ist möglich, in der Praxis läuft die Klärung aber meist über Aufforderung durch Anwalt oder — bei öffentlichen Trägern — Anzeige beim zuständigen Amt.',
        ],
      },
      {
        h: 'Prävention und Nachwirkung',
        p: [
          'Vorbeugende Bekämpfung ist begrenzt möglich. Für Eichen mit chronischem Befall (mehrere Jahre in Folge betroffen) gibt es die Möglichkeit, im Frühjahr Bacillus thuringiensis-Präparate zu spritzen — ein biologisches Mittel, das die Raupen im frühen Stadium abtötet, ohne die spätere Brennhaar-Entwicklung. Anwendung nur durch qualifizierte Betriebe mit gültiger Sachkunde Pflanzenschutz, Zeitpunkt Ende April / Anfang Mai. Rechtliche Rahmenbedingungen ändern sich häufig — vor Beauftragung immer den aktuellen Rechtsstand mit dem Betrieb klären.',
          'Nach der Nestentfernung ist der Baum nicht dauerhaft „geheilt". EPS ist ein wiederkehrendes Problem — betroffene Bäume werden mit hoher Wahrscheinlichkeit im Folgejahr wieder Nester tragen. Rahmenverträge mit jährlicher Kontrolle und Bekämpfung im richtigen Zeitfenster sind für belastete Bestände sinnvoller als einzelne Notfall-Einsätze. Für Kindergärten, Spielplätze, Schulen und Pflegeheime mit Alteichen im direkten Umfeld ist die jährliche EPS-Bekämpfung Standard-Betriebskosten geworden.',
        ],
      },
    ],
    fazit: 'Eichenprozessionsspinner ist in Norddeutschland kein Ausnahmefall mehr, sondern Betriebsrealität. Wer Eichen im Publikumsbereich hat, muss die Erkennungsmerkmale kennen, jährlich prüfen und bei Befall zügig durch einen Fachbetrieb absaugen lassen. Chemie ist eingeschränkt, Absaugen mit Vollschutz ist Standard. Kosten sind planbar, Nichthandeln ist teuer. Und Nester bleiben Jahre nach dem sichtbaren Befall reizend — auf den nächsten Winter warten ist keine Lösung.',
  },
];
