// Deep-Dive-Artikel Kategorie "Recht & Genehmigung"
// Rechtlich präzise, aber praktisch übersetzt. Keine Rechtsberatung im Einzelfall —
// Standardsituationen mit norddeutschem Bezug.

export interface RechtsArtikel {
  slug: string;
  title: string;
  short: string;
  meta: string;
  hero: {
    rechtsgrundlage: string;
    zustaendigkeit: string;
    frist: string;
    konsequenz: string;
  };
  intro: string;
  sections: { h: string; p: string[] }[];
  fazit: string;
}

export const RECHT: RechtsArtikel[] = [
  {
    slug: 'verkehrssicherungspflicht-baumeigentuemer',
    title: 'Verkehrssicherungspflicht bei Bäumen — was Eigentümer wirklich schulden',
    short: 'Wer einen Baum besitzt, muss ihn kontrollieren. Was das rechtlich bedeutet, wie oft, in welcher Tiefe — und was im Schadensfall wirklich zählt.',
    meta: 'Verkehrssicherungspflicht Baumeigentümer: FLL-Baumkontrolle, Sichtkontrolle, Dokumentation, Haftung. Rechtlicher Praxis-Ratgeber von TIMBER Baumpflege.',
    hero: {
      rechtsgrundlage: '§ 823 BGB, Rechtsprechung des BGH und der Oberlandesgerichte',
      zustaendigkeit: 'Grundstückseigentümer, Besitzer, Verwalter, Kommunen',
      frist: 'Regelkontrolle je nach Baumkategorie 1–2× jährlich',
      konsequenz: 'Persönliche Schadenshaftung bei Personen- und Sachschäden',
    },
    intro: 'Die Verkehrssicherungspflicht bei Bäumen ist eine der am meisten missverstandenen Rechtspflichten in der Baumpflege — und gleichzeitig die kostenintensivste, wenn sie ignoriert wird. Sie hat keine eigene gesetzliche Kodifizierung; sie ergibt sich aus der Kombination aus § 823 BGB (Schadensersatzpflicht) und einer inzwischen sehr dichten Rechtsprechung des Bundesgerichtshofs und der Oberlandesgerichte. Für Grundstückseigentümer, Wohnungsverwaltungen, Kommunen und Baumpflege-Betriebe heißt das: es gibt keinen Paragraphen, den man nachschlagen kann. Es gibt eine Sammlung von Erwartungen, die ein "verständiger Baumeigentümer" erfüllen muss, um im Schadensfall nicht persönlich zu haften.',
    sections: [
      {
        h: 'Der rechtliche Kern in einem Satz',
        p: [
          'Wer eine Gefahrenquelle für andere schafft oder unterhält, muss die zumutbaren Vorkehrungen zum Schutz Dritter treffen. Ein Baum in bewohnter Umgebung ist rechtlich eine Gefahrenquelle — er kann Äste verlieren, Kronenteile abwerfen, ganz umfallen. Diese Gefahr trifft potenziell Fußgänger, parkende Autos, Nachbargebäude, Gäste auf dem eigenen Grundstück. Der Eigentümer schuldet, dieses Risiko so zu kontrollieren, dass es sich nicht in einem Schadenfall auswirkt, den man mit vernünftigem Aufwand hätte verhindern können.',
          '"Vernünftiger Aufwand" ist der entscheidende Begriff. Die Rechtsprechung erwartet nicht, dass jeder Baumeigentümer ein Baumsachverständiger wird. Sie erwartet aber, dass er einer Standard-Sichtkontrolle nachkommt, die eine "geschulte Laienperson" leisten kann — und dass er bei verdächtigen Befunden einen Fachmann hinzuzieht. Wer diese Kette befolgt und dokumentiert, hat im Schadensfall die entscheidende Argumentationsgrundlage. Wer sie nicht befolgt, muss den Schaden aus eigener Tasche zahlen — die Haftpflichtversicherung tritt bei fahrlässiger Verletzung der Verkehrssicherungspflicht in vielen Konstellationen nicht ein.',
          'Das Wort "fahrlässig" trifft hier fast jeden Eigentümer, der ohne Kontrolle einen Baum stehen hat. Denn die Nichtkontrolle ist selbst der Fahrlässigkeitsvorwurf. Man muss den Schaden nicht vorhersehen, um zu haften — man muss nur die Kontrollpflicht verletzt haben.',
        ],
      },
      {
        h: 'Die FLL-Baumkontrollrichtlinie — der De-Facto-Standard',
        p: [
          'Die Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau (FLL) hat eine Baumkontrollrichtlinie herausgegeben, die von Gerichten mittlerweile praktisch als Referenzmaßstab herangezogen wird. Sie ist kein Gesetz — die FLL ist ein Fachverband —, aber sie ist der Standard, an dem sich Sachverständigen-Gutachten und Urteile orientieren. Wer nach FLL kontrolliert, kann im Schadensfall belegen: "ich habe den anerkannten Fachstandard eingehalten". Das ist die stärkste Verteidigungsposition, die es gibt.',
          'Die Richtlinie unterscheidet Baumkategorien nach Standort und Schadensrisiko. Bäume in intensiv genutzten Bereichen (Straßenrand, Spielplatz, stark frequentierter Weg) werden zwei Mal jährlich sichtgeprüft — einmal im belaubten, einmal im unbelaubten Zustand. Bäume in weniger frequentierten Lagen ein Mal jährlich. Alt-Bäume, Problembäume oder Bäume mit Vorbefund werden zusätzlich anlassbezogen kontrolliert. Die Kontrollen werden dokumentiert — Datum, Kontrolleur, Befund, ggf. eingeleitete Maßnahmen.',
          'Die Sichtkontrolle vom Boden reicht in der Standard-Situation aus. Anlassbezogen — auffällige Pilzfruchtkörper, Rindenrisse, statische Auffälligkeit — kommt die "eingehende Untersuchung" hinzu: das kann Baumkletterei zur Nahsicht sein, Schalltomographie, Bohrwiderstandsmessung, in kritischen Fällen ein baumsachverständiges Gutachten. Wer bei einem klaren Verdachtsbild die eingehende Untersuchung unterlässt und der Baum später schädigt, haftet praktisch immer.',
        ],
      },
      {
        h: 'Wer ist verkehrssicherungspflichtig',
        p: [
          'Grundsätzlich der Grundstückseigentümer — der Baum ist wesentlicher Bestandteil des Grundstücks. Bei vermieteten Objekten kann die Verkehrssicherungspflicht vertraglich auf den Mieter oder eine WEG-Verwaltung übertragen werden, aber die endgültige Verantwortung bleibt beim Eigentümer, wenn er die Übertragung nicht kontrolliert überwacht. Wer eine WEG-Verwaltung mit der Baumkontrolle beauftragt, muss die Verwaltung überwachen — reine Delegation entbindet nicht.',
          'Bei Kommunen ist es die Kommune selbst, meist über das Grünflächenamt oder eine ausgegliederte Gesellschaft. Bei Wohnungsgesellschaften die Gesellschaft. Bei privaten Vermietern der Vermieter, bei Selbstnutzern der Eigennutzer. Bei Erbbaurechten liegt die Verkehrssicherungspflicht typischerweise beim Erbbauberechtigten. Bei Streitfällen zwischen Eigentümer und Nutzungsberechtigten haftet regelmäßig, wer die tatsächliche Sachherrschaft ausübt — was in Zweifelsfällen auch beide gemeinsam sein können.',
          'Wichtig: die Übertragung durch Vertrag entbindet nicht von der Haftung gegenüber Dritten. Wenn also der Eigentümer den Baum an einen Baumpflege-Betrieb "in Wartung" gibt und der Baumpflege-Betrieb versäumt, einen offensichtlichen Schaden zu melden, kann der geschädigte Fußgänger sich immer noch am Eigentümer schadlos halten. Der Eigentümer nimmt dann intern Regress am Baumpflege-Betrieb — aber im Außenverhältnis bleibt er in der Ersthaftung. Wer als Auftraggeber solche Verträge unterschreibt, muss auf die vertragliche Absicherung achten.',
        ],
      },
      {
        h: 'Dokumentation — der entscheidende Punkt',
        p: [
          'Der klassische Prozess-Fehler ist nicht die fehlende Kontrolle. Der klassische Fehler ist die fehlende Dokumentation. Wer einmal im Jahr durch den eigenen Bestand geht und sich Notizen macht, aber die Notizen wegwirft, hat rechtlich fast die gleiche Position wie jemand, der gar nicht kontrolliert hat — im Schadensfall lässt sich die Kontrolle nicht mehr beweisen.',
          'Ein sauberes Baumkataster mit Baumnummer, Standort, Baumart, Kontrolldatum, Kontrolleur, Befund und Maßnahmen ist der Goldstandard. Für private Alt-Baum-Eigentümer reicht eine deutlich einfachere Version: eine Excel-Tabelle oder ein einfaches Notizbuch, in dem für jeden großen Baum einmal pro Jahr Datum, Wetter, Befund und eventuelle Maßnahmen notiert werden. Fotos der Krone und des Stammfußes ergänzen die Doku. Wer das drei Jahre lang macht, hat im Schadensfall eine Beweislage, die vor Gericht zählt.',
          'Für Verwalter und Wohnungsgesellschaften ist die Beauftragung eines qualifizierten Baumkontrolleurs mit dokumentiertem Baumkataster inzwischen Standard. Als Baumpflege-Betrieb bieten wir das an — die Erstaufnahme des Bestandes ist einmal aufwendig, die Fortführung dann jährlich mit vertretbarem Aufwand. Kosten liegen im Bereich weniger Euro pro Baum pro Jahr; die Ersparnis im Schadensfall geht in fünfstellige Beträge.',
        ],
      },
      {
        h: 'Was im Schadensfall wirklich zählt',
        p: [
          'Wenn ein Ast auf ein Auto fällt oder ein Baum ein Nachbargebäude beschädigt, tritt der Ablauf ein, den kein Eigentümer erleben möchte: Schadensmeldung, Anfrage der Haftpflichtversicherung nach dem Kontrollverhalten, im Streitfall Zivilklage, im Extremfall bei Personenschaden Strafverfahren wegen fahrlässiger Körperverletzung. Der Baumeigentümer wird nach seinen Kontrollen gefragt. Wer keine belegen kann, verliert.',
          'Wer belegen kann: "meine Bäume werden jährlich vom Fachbetrieb kontrolliert, hier sind die Protokolle, dieser konkrete Baum wurde am Datum X kontrolliert und der Befund war Y, die aus dem Befund abgeleiteten Maßnahmen wurden ausgeführt am Datum Z" — der ist in der starken Position. Die Rechtsprechung erwartet keine 100-Prozent-Vermeidung von Baumunfällen; sie erwartet die Erfüllung der Kontrollpflicht auf Fachbetriebsniveau. Wenn ein Ast trotz sauberer Kontrolle abbricht, weil die innere Fäulnis von außen nicht erkennbar war, entfällt die Haftung.',
          'Der entscheidende Satz aus einem BGH-Urteil zum Thema (BGH VI ZR 311/03): der Baumeigentümer schuldet "diejenigen Vorkehrungen, die eine geschulte Person vernünftigerweise treffen kann". Nicht mehr, aber auch nicht weniger. Wer diese Formel als Handlungsanweisung nimmt und in ein einfaches Kontrollsystem umsetzt, ist rechtlich abgesichert. Als Baumdienst ist das die häufigste Beratung, die wir Verwaltungen und Grundstückseigentümern geben — und die häufigste Baustelle, an der wir Nachholbedarf finden.',
        ],
      },
    ],
    fazit: 'Verkehrssicherungspflicht ist keine akademische Rechtsfrage — sie ist die Basis-Hausaufgabe jedes Baumeigentümers in Norddeutschland. Wer eine regelmäßige, dokumentierte Kontrolle durch einen Baumpflege-Betrieb sicherstellt, hat die entscheidende Argumentation im Schadensfall in der Hand. Wer es nicht tut, riskiert im Ernstfall den Ruin. Der Aufwand ist verhältnismäßig gering, die Absicherung enorm.',
  },
  {
    slug: 'baumschutzsatzung-hamburg-sh',
    title: 'Baumschutzsatzung in Hamburg und Schleswig-Holstein',
    short: 'Was jede kommunale Baumschutzsatzung im Kern regelt — mit konkretem Vergleich Hamburg, Norderstedt, Ahrensburg, Lübeck und Kiel.',
    meta: 'Baumschutzsatzung Hamburg, Norderstedt, Ahrensburg, Lübeck, Kiel: Stammumfang-Grenzen, Ersatzpflanzung, Bußgeld. Praxis-Ratgeber von TIMBER Baumpflege & Baumdienst.',
    hero: {
      rechtsgrundlage: 'Kommunale Satzung nach § 29 BNatSchG, LNatSchG des Landes',
      zustaendigkeit: 'Untere Naturschutzbehörde der Kommune / des Kreises',
      frist: 'Antrag vor jeder Fällung, Bearbeitung 4–8 Wochen',
      konsequenz: 'Bußgeld bis 50.000 €, Ersatzpflanzungspflicht, Nachpflanzung',
    },
    intro: 'Die Baumschutzsatzung ist die Rechtsgrundlage, an der jede Fällung in Norddeutschland zuerst hängt. Sie ist keine Bundesregelung und keine Landesregelung — sie ist eine kommunale Satzung, was bedeutet: jede Stadt und viele Kreise haben eine eigene. Die Grundstruktur ist überall ähnlich, die Details sind lokal unterschiedlich. Wer als Grundstückseigentümer, Verwalter oder Wohnungsgesellschaft einen Baum fällen will, muss zuerst wissen: welche Satzung gilt hier, welche Bäume sind erfasst, was ist der Weg. Als Baumpflege-Betrieb übersetzen wir Auftraggebern dieses Regelwerk regelmäßig — hier die praktische Zusammenfassung für die wichtigsten norddeutschen Kommunen.',
    sections: [
      {
        h: 'Was jede Baumschutzsatzung im Kern regelt',
        p: [
          'Kern jeder Baumschutzsatzung ist die Frage: ab welchem Stammumfang ist ein Baum geschützt. Das wird in der Regel gemessen in 1 Meter Höhe über dem Erdboden (nicht "Brusthöhe" der Forstwirtschaft — 1,30 m —, sondern bewusst niedriger, um Sockelverdickungen zu erfassen). Unterhalb der Grenze ist der Baum frei fällbar; oberhalb braucht man eine Fällgenehmigung. Die Grenze liegt in norddeutschen Kommunen typischerweise bei 60 bis 100 cm Stammumfang, was ungefähr 20 bis 32 cm Durchmesser entspricht.',
          'Ergänzend regelt die Satzung, welche Baumarten überhaupt geschützt sind. In den meisten Kommunen sind heimische Laubbäume voll geschützt (Eiche, Buche, Linde, Ahorn, Ulme, Esche, etc.), Nadelbäume und exotische Arten oft nur teilweise oder gar nicht. Obstbäume sind fast überall ausgenommen — was zu vielen Rechtsstreits führt ("ist ein Walnuss ein Obstbaum?"). Die Baumart ist deswegen die zweite Frage nach dem Umfang.',
          'Dritter Kernpunkt: Ersatzpflanzungspflicht. Wer eine Fällgenehmigung bekommt, muss in aller Regel Ersatzbäume pflanzen — meist einen oder zwei je gefälltem Baum, je nach Größe und Umfang. Die Ersatzpflanzung wird in der Satzung präzisiert (Mindeststammumfang der Neupflanzung, akzeptierte Arten, Pflanzort). Kann der Ersatz auf dem eigenen Grundstück nicht erfolgen, wird ein Ausgleich in eine kommunale Baumkasse eingezahlt — Kostenordnungen zwischen 500 und 3.000 Euro je Ersatzbaum sind Standard.',
        ],
      },
      {
        h: 'Hamburg — die Baumschutzverordnung',
        p: [
          'Hamburg hat keine kommunale Satzung, sondern eine Verordnung: die Baumschutzverordnung der Freien und Hansestadt Hamburg (BaumSchVO), aktuell in der Fassung von 1948 mit mehreren Novellierungen. Sie ist eine der ältesten und schärfsten Baumschutzregelungen Deutschlands. Geschützt sind alle Bäume mit einem Stammumfang von mindestens 80 cm in 1,30 m Höhe (Hamburg misst tatsächlich in Brusthöhe, was von den meisten norddeutschen Kommunen abweicht).',
          'Geschützt sind alle Laubbäume und Nadelbäume mit Ausnahme der Obstbaum-Nutzarten. Nicht geschützt: Fichte und Kiefer außerhalb von Landschaftsschutzgebieten (was eine praktisch wichtige Ausnahme ist). Fällantrag ist beim zuständigen Bezirksamt — je nach Bezirk unterschiedliche Sachbearbeiter. Bearbeitungszeit vier bis acht Wochen, in Villenlagen (Blankenese, Nienstedten, Wellingsbüttel) mit Widerspruchsverfahren durch Naturschutzverbände oft länger.',
          'Hamburger Besonderheit: die Bezirksämter arbeiten in der Interpretation der Verordnung unterschiedlich streng. Wandsbek und Bergedorf gelten als vergleichsweise pragmatisch, Altona und Eimsbüttel als restriktiv. Wer in Hamburg einen Alt-Baum fällen will, sollte das früh angehen — mit realistischer Vorlaufzeit von zwei bis drei Monaten. Bußgelder für ungenehmigte Fällungen können in Hamburg 50.000 Euro erreichen, in Einzelfällen darüber.',
        ],
      },
      {
        h: 'Schleswig-Holstein — kommunale Vielfalt',
        p: [
          'In Schleswig-Holstein liegt die Baumschutzhoheit bei den Städten und Gemeinden. Das führt zu einer Vielfalt an Satzungen, die für Auftraggeber und Baumpflege-Betriebe zur Alltagsherausforderung wird. Norderstedt hat eine Baumschutzsatzung mit Schutzgrenze 100 cm Stammumfang in 1 Meter Höhe für Laubbäume, 150 cm für Kiefern. Ahrensburg schützt Bäume ab 90 cm Stammumfang in 1,30 m Höhe (Laubbaum) bzw. 120 cm bei Nadelbäumen. Lübeck ab 80 cm in 1 Meter Höhe. Kiel ab 100 cm in 1 Meter Höhe.',
          'Kleinere Städte (Bad Segeberg, Kaltenkirchen, Henstedt-Ulzburg, Reinbek, Quickborn) haben teilweise eigene Satzungen, teilweise übernehmen sie die Kreisebene (Kreis Segeberg, Kreis Pinneberg, Kreis Stormarn). Wer in einer weniger städtischen Kommune fällt, sollte zuerst bei der Gemeinde nachfragen, welche Satzung anwendbar ist. Manche Ortschaften haben keine eigene Satzung — dann greift die Landesregelung (LNatSchG SH), die vergleichsweise moderate Grenzen setzt.',
          'Typische Ersatzpflanzungs-Regelungen in SH: ein oder zwei Ersatzbäume je gefälltem Baum, Mindeststammumfang der Ersatzpflanzung meist 14 bis 18 cm gemessen in 1 Meter Höhe, akzeptierte Arten meist heimische Laubbäume nach Auflistung im Anhang der Satzung. Ausgleichszahlung bei nichtmöglicher Pflanzung im dreistelligen bis niedrigen vierstelligen Bereich je Baum.',
        ],
      },
      {
        h: 'Wann Fällung ohne Antrag möglich ist',
        p: [
          'Es gibt Ausnahmen von der Antragspflicht, die in jeder Satzung eigen geregelt sind, aber ähnlich strukturiert. Erstens: akute Gefahr im Verzug. Wenn ein Baum unmittelbar zu kippen droht — etwa nach Sturm angerissener Wurzelteller, kippender Stammbereich mit Rissbild — darf gefällt werden, ohne den Antrag abzuwarten. Die Kommune muss aber unverzüglich informiert werden, und im Nachgang wird die Situation überprüft. Wer diese Ausnahme leichtfertig nutzt, riskiert im Nachhinein Bußgeld und Ersatzpflanzungspflicht.',
          'Zweitens: bestimmte Baumkategorien sind pauschal ausgenommen. Obstbäume, Weiden bestimmter Wuchsformen, Bäume unterhalb der Schutzgrenze, tote Bäume in bestimmten Konstellationen. Die genaue Liste steht in der jeweiligen Satzung. Wer sich unsicher ist, ob eine Ausnahme greift, sollte kurz bei der Kommune anfragen — das ist deutlich billiger als eine Fällung mit anschließendem Bußgeld.',
          'Drittens: Bäume, die "wesentlich krank" sind und keine sinnvolle Erhaltungsperspektive haben. Das ist die Standard-Konstellation, in der wir als Baumdienst mit Auftraggebern die Fällantrag-Sache angehen: der Baum hat einen dokumentierten schweren Substanzverlust, wir liefern ein fachliches Kurzgutachten (Foto, Beschreibung, Empfehlung), der Auftraggeber reicht bei der Kommune ein, in aller Regel kommt die Genehmigung. Ersatzpflanzungspflicht besteht meistens trotzdem — man rettet nicht das Bußgeld, man rettet die Legalität.',
        ],
      },
      {
        h: 'Praxis — wie wir das für Auftraggeber lösen',
        p: [
          'Als Baumpflege-Betrieb machen wir in einem typischen Auftragsfall folgendes: Erst-Termin am Baum, fachliche Einschätzung des Substanzzustands, klare Empfehlung (Erhalten mit Pflege / Erhalten mit Kronensicherung / Fällung notwendig / Fällung möglich aber nicht zwingend). Wenn Fällung notwendig wird: schriftliche Zusammenfassung mit Foto als Begründung für den Fällantrag. Der Auftraggeber reicht den Antrag ein, wir stehen für Rückfragen der Behörde zur Verfügung.',
          'Nach Genehmigung: Fällung. Nach Fällung: Beratung zur Ersatzpflanzung, in vielen Fällen auch Ausführung der Ersatzpflanzung im gleichen Zug. Ersatzpflanzungen werden ihrerseits dokumentiert (Foto, Pflanzort, Baumart, Stammumfang zur Pflanzung), damit die Kommune nachvollziehen kann, dass die Auflage erfüllt wurde. Wer diesen ganzen Weg konsequent geht, hat rechtlich einen sauberen Vorgang und muss auch bei Kontrolle Jahre später nichts befürchten.',
          'Was schiefgeht, wenn dieser Weg abgekürzt wird: der klassische Fall ist die "wir sägen einfach mal ab"-Aktion am Wochenende. Nachbarn beobachten das, melden es der Kommune, die Kommune schickt einen Prüfer, der Prüfer stellt fest: keine Genehmigung, Baumart geschützt, Stammumfang oberhalb Grenze. Bußgeld ergeht, Ersatzpflanzungs-Auflage kommt trotzdem, und der Bearbeitungsvorgang zieht sich über ein Jahr. Das ist keine Theorie — das passiert in Hamburg und Umland monatlich mehrfach.',
        ],
      },
    ],
    fazit: 'Baumschutzsatzung ist Kommunalrecht — und Kommunalrecht ist regional. Wer in Hamburg, Ahrensburg, Norderstedt oder einer anderen norddeutschen Stadt einen Alt-Baum fällen möchte, sollte die lokale Regelung kennen und den vorgeschriebenen Weg gehen. Als Baumpflege-Betrieb begleiten wir das regelmäßig — mit Empfehlung, Kurzgutachten für den Antrag und Beratung zur Ersatzpflanzung. Der ordentliche Weg ist selten die schnellste Option, aber immer die günstigste.',
  },
  {
    slug: 'vogelschutzfrist-baumfaellung',
    title: 'Vogelschutzfrist — warum vom 1. März bis 30. September gilt',
    short: '§ 39 BNatSchG verbietet in weiten Teilen Baumfällungen in der Vegetationszeit. Was das konkret heißt, wo Ausnahmen greifen — und was legal möglich bleibt.',
    meta: 'Vogelschutzfrist § 39 BNatSchG: Fällverbot 1. März bis 30. September, Ausnahmen, Pflegemaßnahmen. Rechts-Ratgeber von TIMBER Baumpflege & Baumdienst.',
    hero: {
      rechtsgrundlage: '§ 39 Abs. 5 BNatSchG (Bundesnaturschutzgesetz)',
      zustaendigkeit: 'Untere Naturschutzbehörde, Umweltamt der Kommune',
      frist: '1. März bis 30. September jeden Jahres',
      konsequenz: 'Ordnungswidrigkeit bis 10.000 €, Erschwernis bei Baumschutzverfahren',
    },
    intro: 'Die Vogelschutzfrist ist der zweite große Rechtsrahmen, an dem jede Baumfällung in Deutschland hängt — parallel zur kommunalen Baumschutzsatzung, aber nicht identisch mit ihr. Sie greift bundesweit, für alle Bäume, Hecken und lebende Zäune, unabhängig von Größe oder Baumart. Für Auftraggeber, die ihren Baum "einfach im Sommer wegholen" wollen, ist sie der häufigste Stopper. Als Baumpflege-Betrieb erklären wir sie deswegen im Vor-Ort-Termin praktisch immer mit — hier die schriftliche Fassung, was sie regelt und wo die Grauzonen liegen.',
    sections: [
      {
        h: 'Der Gesetzestext im Klartext',
        p: [
          '§ 39 Abs. 5 Nr. 2 des Bundesnaturschutzgesetzes verbietet es, "Bäume, die außerhalb des Waldes, von Kurzumtriebsplantagen oder gärtnerisch genutzten Grundflächen stehen, Hecken, lebende Zäune, Gebüsche und andere Gehölze in der Zeit vom 1. März bis zum 30. September abzuschneiden, auf den Stock zu setzen oder zu beseitigen." Das ist der Kern.',
          'Der Zweck ist der Schutz brütender Vögel und anderer wildlebender Tiere in ihrer Fortpflanzungs- und Aufzuchtperiode. Die Zeit zwischen 1. März und 30. September deckt die Brutzeit der meisten in Deutschland vorkommenden Vogelarten ab — von der frühen Amsel-Brut Ende März bis zur späten Zweitbrut mancher Arten im September. In dieser Zeit sollen Bäume und Hecken nicht großflächig entfernt oder radikal geschnitten werden.',
          'Wichtig: das Verbot gilt für "abschneiden, auf den Stock setzen oder beseitigen". Es gilt nicht für "schonende Form- und Pflegeschnitte zur Beseitigung des Zuwachses der Pflanzen oder zur Gesunderhaltung von Bäumen" (§ 39 Abs. 5 Satz 2). Der klassische Pflegeschnitt, die Totholzentfernung, die Kronensicherung, die Nachpflege eines gepflegten Baumes sind also weiterhin möglich — solange sie fachlich angemessen bleiben und nicht heimlich eine Fällung "durch die Hintertür" darstellen.',
        ],
      },
      {
        h: 'Was das für die Baumpflege konkret bedeutet',
        p: [
          'Für uns als Baumdienst zerfällt der Kalender in zwei Halbjahre. Zwischen dem 1. Oktober und dem 28. Februar können wir Baumfällungen, Kronen-Radikaleingriffe, "auf-den-Stock-Setzen" von Hecken und Sträuchern durchführen. Zwischen dem 1. März und 30. September sind wir auf Pflegearbeiten beschränkt: Kronenpflege, Totholzentfernung, Kronensicherung, gezielte Einzeleingriffe. Das strukturiert unsere Auftragsplanung: schwere Fällungen im Winterhalbjahr, Pflegearbeiten übers Jahr verteilt, akute Sicherheitsfällungen jederzeit (dazu gleich).',
          'Für Auftraggeber heißt das: wer im April merkt, dass ein Baum weg soll, kann in aller Regel nicht sofort fällen. Er kann den Fällantrag stellen (Bearbeitung bei der Kommune läuft ohnehin über Wochen), aber die tatsächliche Fällung wird auf Oktober verschoben. Dazwischen können wir Sicherungs- und Pflegemaßnahmen durchführen, um die Zeit zu überbrücken — Kronensicherung, Totholzabnahme, Rückschnitt gefährlicher Einzeläste. Aber die eigentliche Fällung wartet.',
          'Die häufigste Fehlvorstellung, die uns Auftraggeber im Erstgespräch mitteilen: "wir sind der Eigentümer, wir dürfen doch entscheiden". Rechtlich nicht — der Naturschutz greift bundesweit unabhängig von Eigentum. Die Baumschutzsatzung der Kommune ist eine Ebene; die Vogelschutzfrist ist eine zweite. Beide müssen erfüllt sein.',
        ],
      },
      {
        h: 'Ausnahmen — wann Fällung im Sommer legal ist',
        p: [
          'Es gibt Ausnahmen, die in der Praxis relevant werden. Erste Ausnahme: unmittelbare Verkehrsgefährdung. Wenn ein Baum akut kippt oder ein Ast unmittelbar zu brechen droht und Personen oder Sachwerte gefährdet, greift die Notmaßnahme. Wir fällen dann, dokumentieren die Situation ausführlich mit Fotos vor dem Eingriff, informieren die Kommune und Naturschutzbehörde im Nachgang, und stellen sicher, dass die Notlage nachvollziehbar ist. Wer eine Notfällung nach Sturm ausführt, muss den Notfallcharakter belegen können.',
          'Zweite Ausnahme: fachlich zwingende Pflegearbeiten. Ein Rückschnitt in Vitalitätsbelangen ("wir müssen einer stark absterbenden Krone die Totlast nehmen") ist auch im Sommer erlaubt, wenn er fachlich gerechtfertigt und schonend durchgeführt wird. Als Baumpflege-Betrieb machen wir das regelmäßig — es ist die Standardsituation an bereits erkrankten Bäumen, an denen wir nicht bis Oktober warten können.',
          'Dritte Ausnahme: bestimmte Anlagen und Standorte. § 39 Abs. 5 Satz 3 nennt Bahnanlagen, Straßen und einige weitere Sonderfälle. Bei privaten und kommunalen Baumbeständen im Villen- oder Wohnbereich greift diese Ausnahme nicht. Wer als Grundstückseigentümer den "Bahn-Ausnahmestatus" für sich beansprucht, argumentiert an der Sache vorbei.',
        ],
      },
      {
        h: 'Und was ist mit dem konkreten Nest',
        p: [
          'Selbst außerhalb der Vogelschutzfrist — also im Winterhalbjahr — greift der artenschutzrechtliche Individualschutz. § 44 BNatSchG verbietet die Störung, Verletzung oder Tötung besonders geschützter Arten. Praktisch heißt das: wenn wir im Januar einen Baum fällen sollen und in der Krone ein bewohntes Eichhörnchen-Nest oder ein Vogelnest sitzt, das aktuell genutzt wird, dürfen wir auch dann nicht einfach fällen.',
          'Als Baumdienst prüfen wir das vor jedem Winter-Fälleinsatz: Krone anschauen, auf Höhlungen und Nester achten, im Zweifel eingehende Untersuchung durch Klettern. Wenn ein bewohntes Nest gefunden wird, kann die Fällung nur mit Ausnahmegenehmigung der Naturschutzbehörde erfolgen — oder wir warten, bis die Bewohner das Nest verlassen haben. Bei geschützten Arten (Fledermäuse in Baumhöhlen, Spechthöhlen, Eremiten-Käfer) ist der Fall komplexer und erfordert ein artenschutzrechtliches Fachgutachten.',
          'Das ist ein Bereich, in dem Auftraggeber häufig überrascht werden. "Aber es ist doch Februar" — ja, aber wenn ein Waldkauz im Baum brütet (was Anfang März passiert), oder eine überwinternde Fledermaus in einer Höhle steckt, oder ein Habitat für eine besonders geschützte Art vorhanden ist, greift der Individualschutz auch außerhalb der Frist. Fachliche Prüfung durch einen erfahrenen Baumpflege-Betrieb erspart hier später Ärger.',
        ],
      },
      {
        h: 'Praxis — wie wir das Jahresthema strukturieren',
        p: [
          'Als Baumdienst empfehlen wir Auftraggebern eine ganz einfache Jahresstruktur. Im Sommerhalbjahr: Bestandskontrolle, Pflegearbeiten, Kronensicherung, Totholzabnahme, gutachterliche Bewertung. Wer im Sommer merkt, dass im Winter gefällt werden muss, hat Zeit für den Fällantrag, für die fachliche Vorbereitung, für die Ersatzpflanzungs-Planung.',
          'Im Winterhalbjahr (Oktober bis Ende Februar): geplante Fällungen, Radikaleingriffe an Hecken, Umformungen. Als Baumpflege-Betrieb ist unser Kalender im Oktober und November regelmäßig voll — wer erst im November für eine Novemberfällung anfragt, findet oft keinen Termin mehr. Die frühe Planung ist der einzige Weg, um den kurzen Zeitraum sinnvoll zu nutzen.',
          'Notfälle sind jederzeit möglich. Bei akuter Sturmschadenlage, akuter Bruchgefahr, akuter Personengefährdung greift der Notdienst 24/7 — dann ist die Vogelschutzfrist nicht der limitierende Faktor, dann ist die Sicherung des Umfelds die Priorität. Für Auftraggeber im norddeutschen Raum ist das die Standard-Kombination: geplante Arbeit im Kalenderrhythmus, akute Not außerhalb des Kalenders.',
        ],
      },
    ],
    fazit: 'Die Vogelschutzfrist strukturiert das Baumpflege-Jahr. Wer als Auftraggeber die Struktur kennt, kann Fällungen und größere Eingriffe in die richtige Jahreszeit legen und Pflegearbeiten übers ganze Jahr verteilen. Als Baumpflege-Betrieb ist es unsere Aufgabe, diese Struktur mit dem Auftraggeber gemeinsam zu planen — und dabei Notfälle jederzeit abzudecken. Wer sie ignoriert, riskiert Ordnungswidrigkeitsverfahren und Ärger mit dem Naturschutz. Der planbare Weg ist immer der bessere.',
  },
  {
    slug: 'faellantrag-ablauf-ersatzpflanzung',
    title: 'Fällantrag und Ersatzpflanzung — der Ablauf in der Praxis',
    short: 'Wie ein Fällantrag konkret läuft — von der ersten Einschätzung bis zur Ersatzpflanzung. Fristen, Kosten, typische Stolpersteine in norddeutschen Kommunen.',
    meta: 'Fällantrag Baum: Ablauf, Antragstellung, Ersatzpflanzung, Fristen und Kosten in Hamburg und Schleswig-Holstein. Praxis-Ratgeber von TIMBER Baumpflege.',
    hero: {
      rechtsgrundlage: 'Kommunale Baumschutzsatzung, § 29 BNatSchG',
      zustaendigkeit: 'Untere Naturschutzbehörde der Kommune',
      frist: 'Bearbeitungsdauer typisch 4–8 Wochen, in Villenlagen bis 12 Wochen',
      konsequenz: 'Ohne Genehmigung: Bußgeld + Ersatzpflanzungspflicht + persönliches Verfahren',
    },
    intro: 'Der Fällantrag ist der administrative Kernvorgang, den fast jeder Grundstückseigentümer irgendwann einmal durchläuft, wenn ein Alt-Baum gefällt werden muss. Er ist nicht kompliziert, aber er hat Regeln und Fristen, an denen man sich orientieren muss. Als Baumpflege-Betrieb begleiten wir diesen Vorgang für Auftraggeber regelmäßig — im Folgenden die praktische Übersicht, was zu tun ist, in welcher Reihenfolge und mit welchem realistischen Zeitrahmen. Der Text bezieht sich auf norddeutsche Verhältnisse, konkret Hamburg und Schleswig-Holstein.',
    sections: [
      {
        h: 'Schritt 1 — die fachliche Einschätzung',
        p: [
          'Bevor ein Fällantrag gestellt wird, muss klar sein: ist die Fällung überhaupt notwendig oder gerechtfertigt. Das ist die Aufgabe eines qualifizierten Baumpflege-Betriebs — und in unserer Auftragsstruktur der erste Schritt. Wir kommen vor Ort, schauen den Baum an, bewerten Vitalitätszustand, Bruchgefahr, Substanzverlust, mögliche Erhaltungsoptionen (Kronensicherung, Rückschnitt, Wurzelraum-Sanierung).',
          'Das Ergebnis dieser Einschätzung ist eine von vier möglichen Empfehlungen: (1) Baum ist gesund, keine Maßnahmen erforderlich, (2) Baum braucht Pflegemaßnahmen, aber keine Fällung, (3) Fällung wäre sinnvoll, ist aber nicht zwingend — Entscheidung liegt beim Auftraggeber, (4) Fällung ist fachlich zwingend, Verkehrssicherungspflicht verlangt Handlung. Nur bei (3) und (4) geht der Vorgang in Richtung Fällantrag.',
          'Bei (4) — zwingende Fällung — erstellen wir eine schriftliche Zusammenfassung mit Fotos, Beschreibung des Zustands und fachlicher Begründung. Das ist die Grundlage für den Antrag bei der Kommune. Bei (3) — nicht zwingend — muss der Auftraggeber wissen, dass die Genehmigung nicht selbstverständlich ist und die Kommune ablehnen kann. Wir raten in solchen Fällen manchmal, den Baum stehenzulassen und die Situation in einem Jahr neu zu bewerten — das ist die ehrlichere Beratung als "wir versuchen mal, den Antrag durchzudrücken".',
        ],
      },
      {
        h: 'Schritt 2 — der Antrag',
        p: [
          'Der Antrag wird bei der Unteren Naturschutzbehörde der Kommune eingereicht — in Städten typischerweise beim Umweltamt oder Bezirksamt, in Kreiskommunen beim Landrat. Formulare stehen auf der Website der Kommune bereit; sie sind meist ein- bis zweiseitig, unkompliziert auszufüllen. Angegeben werden: Grundstücksadresse, Antragsteller, Baumart, Stammumfang in der maßgeblichen Höhe, geplante Fällung mit Begründung.',
          'Der Antrag muss durch Fotos ergänzt werden. Standardgemäß mindestens ein Übersichtsfoto der ganzen Krone, ein Detailfoto der Problemstelle (Pilz, Fäulnis, Riss, gebrochener Ast), und ein Foto des Stammfußes zur Beurteilung der Standsicherheit. Wenn ein fachliches Gutachten oder eine Empfehlung eines Baumpflege-Betriebs vorliegt, wird das mit eingereicht — es beschleunigt die Bearbeitung erheblich und erhöht die Genehmigungswahrscheinlichkeit.',
          'Der Antrag ist gebührenpflichtig. In Hamburg liegt die Grundgebühr für einen Fällantrag im Bereich 50 bis 200 Euro je nach Bezirk und Baumzahl. In SH-Kommunen sind die Gebühren ähnlich, teilweise etwas niedriger. Das ist die Verwaltungsgebühr für die Bearbeitung — sie ist unabhängig vom Ausgang. Bei Ablehnung fällt sie ebenfalls an.',
        ],
      },
      {
        h: 'Schritt 3 — die Bearbeitung',
        p: [
          'Nach Antragseingang schickt die Kommune einen Prüfer vor Ort. Der Prüfer schaut den Baum an, gleicht den Zustand mit den Antragsangaben ab, dokumentiert den Befund. Bei komplizierten Fällen kann ein baumsachverständiges Gutachten angefordert werden — dann steigen Bearbeitungszeit und Aufwand. Bei klarer Substanzschädigung reicht in aller Regel die Sichtprüfung.',
          'Die Kommune entscheidet auf Basis der Prüfung und erteilt entweder die Fällgenehmigung mit oder ohne Auflagen, oder lehnt ab. Genehmigung mit Auflagen ist der Standardfall: Ersatzpflanzungspflicht (Art, Anzahl, Ort, Zeitraum), gegebenenfalls Auflage zur zeitlichen Steuerung (Fällung erst nach Vogelschutzfrist, also nach 30. September). Ablehnung ist eher selten, aber möglich — wenn der Baum als noch nicht ausreichend geschädigt eingestuft wird oder eine mildere Maßnahme (Kronensicherung) angezeigt scheint.',
          'Bearbeitungszeit: in Hamburg und größeren SH-Städten typisch vier bis acht Wochen, in kleineren Kommunen manchmal schneller, in Villenlagen mit Widerspruchsverfahren der Nachbarn oder Naturschutzverbände deutlich länger. Wer eine Fällung im Oktober plant, sollte den Antrag im Juli oder August stellen — das gibt Puffer für Rückfragen und Sicherheitsspielraum.',
        ],
      },
      {
        h: 'Schritt 4 — die Fällung',
        p: [
          'Nach Erhalt der Genehmigung führen wir die Fällung aus — sofern die zeitlichen Auflagen es zulassen. Bei einer Genehmigung im April mit Auflage "Fällung nach Vogelschutzfrist" wird der Termin auf Oktober oder November gelegt. Bei einer Genehmigung im Oktober kann sofort gearbeitet werden.',
          'Handwerklich richtet sich die Fällung nach Baumart, Größe, Standort und Fallrichtung. In beengten Grundstückslagen — norddeutsches Villenviertel, Innenhof-Situation, Nachbargebäude in geringem Abstand — arbeiten wir mit Seilklettertechnik und Segment-Ablass. Der Baum wird von oben nach unten in Segmenten abgetragen, jedes Stück wird kontrolliert zu Boden gelassen. Diese Methode ist zeitaufwendiger als eine Wurffällung, aber sie ist die einzige realistische Option in dichter Bebauung.',
          'Nach der Fällung folgt die Aufarbeitung: Zerkleinerung des Kronenmaterials, Abtransport oder Verbrennung nach Absprache mit dem Auftraggeber, Stubbenfräsen falls gewünscht. Der Stubbenfräs-Aufwand hängt von Baumart und Standort ab — bei einer Alt-Buche oder Alt-Eiche mit 80 cm Durchmesser ist das eine substanzielle Nacharbeit, die typischerweise zusätzlich beauftragt wird.',
        ],
      },
      {
        h: 'Schritt 5 — die Ersatzpflanzung',
        p: [
          'Die Ersatzpflanzung ist der Vorgang, den viele Auftraggeber unterschätzen. Sie wird in der Genehmigung als Auflage festgelegt und ist Teil der Genehmigungsbedingungen — ohne Erfüllung der Auflage kann die Kommune nachträglich Bußgeld verhängen. Standardauflage: ein oder zwei Ersatzbäume je gefälltem Baum, Mindeststammumfang der Neupflanzung 14–18 cm in 1 Meter Höhe, akzeptierte Arten heimische Laubbäume nach Kommunal-Liste, Pflanzort auf dem eigenen Grundstück oder ausgleichspflichtig.',
          'Die Ersatzpflanzung ist entsprechend nicht trivial. Ein Ersatzbaum in der geforderten Größe kostet beim Baumschulisten zwischen 150 und 500 Euro (Ballenware, gestäbt), plus Pflanzloch-Aushub, Substrat-Verbesserung, Verankerung, Bewässerung im ersten Jahr. In Summe kann eine korrekte Ersatzpflanzung mit Anwuchsgarantie 500 bis 1.500 Euro je Baum kosten. Wer sparsam pflanzen will, riskiert Nachpflanzungspflicht, wenn der Ersatzbaum im ersten oder zweiten Jahr abgeht.',
          'Für Auftraggeber ohne eigenen Wurzelraum auf dem Grundstück wird eine Ausgleichszahlung fällig — die Kommune investiert das Geld in ihre Baumkasse und pflanzt an anderer Stelle nach. Beträge variieren stark: Hamburg zwischen 750 und 3.000 Euro je Baum, SH-Kommunen typisch 500 bis 1.500 Euro. Wer diese Zahlung leisten muss, sollte sie in die Gesamtkalkulation der Fällung mit einbeziehen — sie kommt zusätzlich zu Fällkosten und Verwaltungsgebühr.',
        ],
      },
      {
        h: 'Typische Stolpersteine',
        p: [
          'Erster typischer Stolperstein: Antrag ohne fachliche Begründung. Ein Antrag "der Baum stört, weg damit" wird abgelehnt oder monatelang zurückgestellt. Antrag mit fachlicher Begründung und Foto-Dokumentation wird zügig bearbeitet. Der Unterschied ist der frühe Einbezug eines Baumdienstes vor der Antragstellung.',
          'Zweiter Stolperstein: Antragstellung nach der Fällung. "Ich habe den Baum schon abgeholt, jetzt melde ich es an" ist der Weg ins Bußgeld. Die Genehmigung kann rückwirkend nicht erteilt werden. Was rückwirkend passiert, ist das Bußgeld-Verfahren plus Ersatzpflanzungs-Auflage plus im schlechten Fall ein Ordnungswidrigkeits- oder Strafverfahren. Wer die Reihenfolge einhält, ist auf der sicheren Seite.',
          'Dritter Stolperstein: Nichteinhaltung der Ersatzpflanzungsauflage. Die Kommune kontrolliert die Erfüllung — nicht sofort, aber typischerweise ein bis zwei Jahre nach Genehmigungserteilung. Wer bis dahin nicht gepflanzt hat, bekommt eine Nachfrist, danach Bußgeld. Als Baumpflege-Betrieb bieten wir die Ersatzpflanzung integriert mit der Fällung an — der Auftraggeber hat einen Ansprechpartner für den gesamten Vorgang und keine Nachtermine.',
        ],
      },
    ],
    fazit: 'Der Fällantrag ist kein bürokratisches Hindernis, sondern ein strukturierter Vorgang, der bei korrekter Vorbereitung gut planbar ist. Fachliche Einschätzung durch einen Baumpflege-Betrieb, Antrag mit Foto-Dokumentation, Genehmigung mit Auflagen, Fällung, Ersatzpflanzung. Wer diesen Weg konsequent geht, hat rechtlich einen sauberen Vorgang und in der Kalkulation die volle Kostentransparenz. Wer den Vorgang abkürzen möchte, spart am falschen Ende.',
  },
];
