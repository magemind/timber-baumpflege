export const SITE = {
  name: 'TIMBER',
  legalName: 'TIMBER Baumpflege & Baumdienst',
  url: 'https://timber-baumpflege.de',
  tagline: 'Baumpflege aus dem Norden. Handwerk mit Höhe.',
  description:
    'TIMBER Baumpflege & Baumdienst — ein Team aus zertifizierten Baumkletterern und Fachpartnern für Norddeutschland. Seilklettertechnik SKT-A/B, Baumpflege nach ZTV-Baumpflege, Kronensicherung, Verkehrssicherungspflicht und Sturm-Notdienst. Handwerk, Haltung, Wissen — der Marken-Hub.',
};

export const CONTACT = {
  phone: '+491771583264',
  phoneDisplay: '0177 15 83 264',
  email: 'kontakt@timber-baumpflege.de',
  whatsapp: 'https://wa.me/491771583264',
  street: 'Segeberger Straße 100',
  zip: '23866',
  city: 'Nahe',
  region: 'Schleswig-Holstein',
  country: 'DE',
  hours: 'Mo-So · 24/7 für Notfälle · Termine tagsüber',
  geo: { lat: 53.7089, lng: 10.1928 },
};

// Team-Beschreibung (Marke bleibt bewusst namenlos personifiziert -
// § 5 DDG regelt der Impressums-Eintrag, im Content bleibt es "wir/das Team")
export const TEAM = {
  headline: 'Ein Team. Ein Anspruch.',
  intro:
    'TIMBER ist kein Ein-Mann-Betrieb und keine Kette. TIMBER ist ein festes Kernteam mit SKT-A-Kletterei plus ein eingespielter Kreis freier Fachpartner, die die weiteren Nachweise abdecken. Auf jeden Einsatz kommt das Team so, dass die geforderten Qualifikationen vor Ort sind — nicht auf einer Website versprochen, sondern in der Krone.',
  fokus:
    'Unser Fokus: schwierige Fällungen in engen Lagen, Kronensicherung statt Kahlschlag, langfristige Baumpflege statt Notfall-Kaskade.',
};

// Qualifikationen im Team (Inhaber + feste freie Fachpartner)
export const TEAM_QUALIFIKATIONEN = [
  'SKT-A (Seilklettertechnik Grundstufe)',
  'SKT-B (Seilklettertechnik Aufbaustufe)',
  'Fachagrarwirt Baumpflege',
  'Motorsägenlehrgang AS Baum I + II',
  'Ersthelfer im Baum',
  'Sachkunde Pflanzenschutz',
];

// Alle Satelliten der TIMBER-Domain-Pyramide
export const SATELLITEN = [
  {
    slug: 'ahrensburg',
    name: 'Ahrensburg',
    domain: 'baumfaellung-ahrensburg.de',
    region: 'Kreis Stormarn',
    description: 'Baumpflege in Ahrensburg — Schloss-Umland, Villenviertel, Kreis Stormarn.',
    lat: 53.6773,
    lng: 10.2394,
  },
  {
    slug: 'pinneberg',
    name: 'Pinneberg',
    domain: 'baumfaellung-pinneberg.com',
    region: 'Kreis Pinneberg',
    description: 'Baumpflege im Kreis Pinneberg — Stadtgebiet, Umland, 24/7-Sturmdienst.',
    lat: 53.6620,
    lng: 9.7891,
  },
  {
    slug: 'norderstedt',
    name: 'Norderstedt',
    domain: 'baumfaellung-norderstedt.de',
    region: 'Kreis Segeberg',
    description: 'Baumpflege in Norderstedt — Garstedt, Friedrichsgabe, Harksheide, Glashütte.',
    lat: 53.7085,
    lng: 9.9998,
  },
  {
    slug: 'blankenese',
    name: 'Blankenese',
    domain: 'baumfaellung-blankenese.de',
    region: 'Hamburg-West',
    description: 'Baumpflege in Blankenese — Treppenviertel, Elbhang, alte Villen-Bestände.',
    lat: 53.5589,
    lng: 9.8093,
  },
  {
    slug: 'hamburg-baumpfleger',
    name: 'Hamburg',
    domain: 'baumpfleger-hamburg.de',
    region: 'Hamburg gesamt',
    description: 'Der Hamburg-Hub für Baumpflege — Wandsbek, Altona, Nord, Bergedorf, Harburg.',
    lat: 53.5511,
    lng: 9.9937,
  },
  {
    slug: 'hamburg-baumfaellung',
    name: 'Hamburg (Fällung)',
    domain: 'baumfaellung-hamburg.com',
    region: 'Hamburg gesamt',
    description: 'Baumfällung in Hamburg — Problembäume, Sturmschäden, enge Innenstadtlagen.',
    lat: 53.5511,
    lng: 9.9937,
  },
];

// Leistungen — informativ auf dem Marken-Hub, keine lokale Buchung
export const LEISTUNGEN = [
  {
    slug: 'baumfaellung',
    name: 'Baumfällung',
    short: 'Kontrolliert fällen — auch dort, wo kein Kran hinkommt.',
    long:
      'Wurfsäge, Seilklettertechnik, Rückzug in Segmenten. Wenn ein Baum nicht ganz umgelegt werden kann, klettern wir und lassen ihn Stück für Stück ab. Wo es geht, arbeiten wir mit MEWP oder Kran — nach Situation, nicht nach Standardrezept.',
  },
  {
    slug: 'baumpflege',
    name: 'Baumpflege',
    short: 'Krone entlasten, Totholz raus, Kronensicherung — nach ZTV-Baumpflege.',
    long:
      'Kronenpflege, Kronenreduktion, Totholzentfernung, Kronensicherung mit dynamischen Systemen (Cobra, Boa). Ziel ist Erhalt, nicht Ersatz. Ein gepflegter Altbaum ist ökologisch und optisch nicht ersetzbar.',
  },
  {
    slug: 'verkehrssicherheit',
    name: 'Verkehrssicherungspflicht',
    short: 'Baumkontrolle, Baumkataster, gutachterliche Einschätzung.',
    long:
      'Für Eigentümer, Verwalter, Wohnungsgesellschaften: regelmäßige Sichtkontrolle nach FLL-Baumkontrollrichtlinie, Dokumentation, Baumkataster-Aufbau. Rechtsfeste Nachweise für den Haftungsfall.',
  },
  {
    slug: 'sturmdienst',
    name: 'Sturm-Notdienst 24/7',
    short: 'Baum aufs Dach, aufs Auto, quer über die Zufahrt — wir kommen.',
    long:
      'Rund um die Uhr, sieben Tage die Woche. Nach großen Stürmen priorisieren wir nach Gefährdung. Personengefährdung zuerst 112, danach uns.',
  },
  {
    slug: 'stubbenfraesen',
    name: 'Stubbenfräsen & Wurzelentfernung',
    short: 'Baumstumpf unter Rasenniveau, bereit für Neubepflanzung.',
    long:
      'Radlader- und handgeführte Fräsen bis 40 cm unter Boden. Für Neubepflanzung, Rasen-Neuanlage oder Baugrund-Freimachung.',
  },
];

// Typische Einsatz-Szenarien (KEINE realen Kundenprojekte -
// abstrahierte Fall-Typen, die wir fachlich bearbeiten)
export const EINSATZTYPEN = [
  {
    slug: 'sturm-eiche-hanglage',
    title: 'Sturm-Eiche über Wohnhaus in Hanglage',
    kategorie: 'Sturmschaden · Seilklettertechnik',
    short: 'Klassischer norddeutscher Sturmfall: 20-Meter-Stieleiche hängt nach Orkan über einem Haus. Kein Kranstellplatz, Zugang nur über schmale Treppen. Vorgehen: SKT-B-Kletterer, Zerlegung von oben, Segment-Ablass. Ohne Schaden am Bestand.',
  },
  {
    slug: 'kastanien-kronensicherung',
    title: 'Kronensicherung an alten Kastanien',
    kategorie: 'Baumpflege · Kronensicherung',
    short: 'Rosskastanien mit Miniermotten-Belastung und Astrissen sind ein typisches norddeutsches Bild. Statt Fällung: dynamische Kronensicherung (Cobra- oder Boa-System), Totholzentnahme, planmäßige Nachkontrolle.',
  },
  {
    slug: 'buche-mit-porling',
    title: 'Rotbuche mit Riesenporling nah am Haus',
    kategorie: 'Fällung · Bruchgefahr',
    short: 'Rotbuche mit Riesenporling am Wurzelanlauf ist ein Notfall — Bruchgefahr auch bei Windstille. Zerlegung von oben nach unten mit Seilklettertechnik, kontrollierte Fällung in engster Lage zwischen zwei Gebäuden.',
  },
  {
    slug: 'kaeferfichten-reihenfaellung',
    title: 'Käferbefallene Fichtenreihen',
    kategorie: 'Reihenfällung · Aufarbeitung',
    short: 'Nach mehreren Trockenjahren sterben Fichten flächig — Käfer, Absterben von oben, keine Rettung mehr möglich. Reihenfällung, Aufarbeitung, Entsorgung im Paket, Ersatzpflanzung als Empfehlung.',
  },
];

// Wissen-Hub Kategorien (Topical Authority für den Marken-Hub).
// Jede Kategorie hat eine eigene Landing-Seite + Deep-Dive-Artikel.
// status: 'live' = klickbar, 'bald' = Coming-Soon-Kachel.
export const WISSEN_KATEGORIEN = [
  {
    slug: 'baumkrankheiten',
    name: 'Baumkrankheiten & Schädlinge',
    kurz: 'Was den Bestand in Norddeutschland wirklich bedroht — Pilze, Insekten, Klimastress.',
    icon: 'fungus',
    status: 'live',
  },
  {
    slug: 'baumarten',
    name: 'Baumarten Norddeutschland',
    kurz: 'Rotbuche, Stieleiche, Bergahorn, Winterlinde — was jede Art in unseren Beständen fordert.',
    icon: 'tree',
    status: 'live',
  },
  {
    slug: 'recht',
    name: 'Recht & Genehmigung',
    kurz: 'Baumschutzsatzung, Vogelschutzfrist, Fällantrag — was Auftraggeber wissen müssen.',
    icon: 'scale',
    status: 'bald',
  },
  {
    slug: 'werkzeug-technik',
    name: 'Werkzeug & Technik',
    kurz: 'SKT, Kronensicherung, Motorsägen für Kletterer — Handwerks-Standards erklärt.',
    icon: 'saw',
    status: 'bald',
  },
  {
    slug: 'szene',
    name: 'Szene & Wettkampf',
    kurz: 'ITCC, ETCC, DM Baumklettern — die Fachszene, in der Baumpflege stattfindet.',
    icon: 'trophy',
    status: 'bald',
  },
];

// Wissen-Artikel (überregionale Themen)
export const WISSEN = [
  {
    slug: 'skt-b-was-heisst-das',
    title: 'SKT-B — was heißt das eigentlich?',
    short: 'Was Seilklettertechnik Aufbaustufe wirklich bedeutet — und warum es kein Nice-to-have ist.',
  },
  {
    slug: 'winterschnitt-vs-sommerschnitt',
    title: 'Winterschnitt vs. Sommerschnitt',
    short: 'Wann welcher Schnitt sinnvoll ist — und was der Gesetzgeber dazu sagt.',
  },
  {
    slug: 'verkehrssicherungspflicht-baum',
    title: 'Verkehrssicherungspflicht bei Bäumen',
    short: 'Wer haftet, was muss dokumentiert werden, wie oft kontrolliert.',
  },
  {
    slug: 'sturmschaden-checkliste',
    title: 'Sturmschaden — die 10-Punkte-Checkliste',
    short: 'Was tun, wenn der Baum liegt: Reihenfolge, Fotos, Versicherung.',
  },
  {
    slug: 'baumschutzsatzung-grundlagen',
    title: 'Baumschutzsatzung — was schützt sie eigentlich?',
    short: 'Stammumfang, Ersatzpflanzung, Bußgeld: was jede kommunale Baumschutzsatzung im Kern regelt.',
  },
  {
    slug: 'baumkontrolle-fll',
    title: 'Baumkontrolle nach FLL — Ablauf und Qualifikation',
    short: 'Was ein FLL-Baumkontrolleur macht, was VTA heißt, und wann eine Sonderuntersuchung nötig wird.',
  },
  {
    slug: 'kronensicherung-dynamisch-statisch',
    title: 'Kronensicherung — dynamisch oder statisch?',
    short: 'Cobra vs. Stahlseil: welche Sicherung wann greift und was die Alternative zur Fällung leistet.',
  },
  {
    slug: 'wurzelschaeden-am-haus',
    title: 'Wurzelschäden am Haus — Ursachen, Recht, Sanierung',
    short: 'Terrasse hebt, Rohr wächst zu, Riss im Fundament: was tatsächlich hilft und wer haftet.',
  },
];

// Einsatzgebiete für TIMBER — echte Kern-Städte mit ausformuliertem Content.
// Anders als SATELLITEN (die auf eigener Domain sitzen) sind das TIMBER-eigene
// Landings mit unique Content pro Ort — kein Template-Doorway.
// Priorität: reale Anfahrtsnähe zum Standort Nahe (23866). Kiel/Lübeck über
// den Regions-Hub /schleswig-holstein/ abgedeckt (Anfahrt >60 Min).
export const STAEDTE = [
  {
    slug: 'hamburg',
    name: 'Hamburg',
    region: 'Hansestadt Hamburg',
    lat: 53.5511,
    lng: 9.9937,
    kurz: 'Baumpflege, Fällung und Sturm-Notdienst im Hamburger Stadtgebiet — von Blankenese bis Bergedorf.',
    keyword: 'Baumpflege Hamburg',
    anfahrt: '45 Min',
  },
  {
    slug: 'norderstedt',
    name: 'Norderstedt',
    region: 'Kreis Segeberg',
    lat: 53.7085,
    lng: 9.9998,
    kurz: 'Kern­einzugs­gebiet — Garstedt, Harksheide, Friedrichs­gabe, Glashütte. Anfahrt 20 Minuten.',
    keyword: 'Baumpflege Norderstedt',
    anfahrt: '20 Min',
  },
  {
    slug: 'henstedt-ulzburg',
    name: 'Henstedt-Ulzburg',
    region: 'Kreis Segeberg',
    lat: 53.7833,
    lng: 9.9667,
    kurz: 'Direkt vor der Haustür — Henstedt, Ulzburg, Rhen, Götzberg, Kaden. Anfahrt 10 Minuten.',
    keyword: 'Baumpflege Henstedt-Ulzburg',
    anfahrt: '10 Min',
  },
  {
    slug: 'bad-segeberg',
    name: 'Bad Segeberg',
    region: 'Kreis Segeberg',
    lat: 53.9333,
    lng: 10.3167,
    kurz: 'Kreis­stadt Segeberg mit Kalkberg, Ihlsee und Umland — auch Wahlstedt, Trappenkamp.',
    keyword: 'Baumpflege Bad Segeberg',
    anfahrt: '25 Min',
  },
  {
    slug: 'kaltenkirchen',
    name: 'Kaltenkirchen',
    region: 'Kreis Segeberg',
    lat: 53.8333,
    lng: 9.9667,
    kurz: 'Kaltenkirchen und Umland — Springhirsch, Moorkaten, auch Nützen und Alveslohe.',
    keyword: 'Baumpflege Kaltenkirchen',
    anfahrt: '15 Min',
  },
  {
    slug: 'quickborn',
    name: 'Quickborn',
    region: 'Kreis Pinneberg',
    lat: 53.7307,
    lng: 9.9036,
    kurz: 'Quickborn, Quickborn-Heide, Renzel — Rand des Himmelmoors mit typischem Sandboden-Bestand.',
    keyword: 'Baumpflege Quickborn',
    anfahrt: '25 Min',
  },
];

// Regions-Hub: fängt Suchen aus Kiel/Lübeck/Rendsburg auf ohne eigene
// Ortsseite mit fehlender GBP-Nähe. Verweist auf die realistischen Nah-Orte.
export const REGION_SH = {
  slug: 'schleswig-holstein',
  name: 'Schleswig-Holstein',
  fernorte: [
    { name: 'Kiel', anfahrt: '60 Min', hinweis: 'Terminfällungen und Rahmen­verträge — für Sofort-Notdienst nutze bitte einen Kieler Baumkletterer.' },
    { name: 'Lübeck', anfahrt: '90 Min', hinweis: 'Planbare Einsätze und FLL-Kontrollrunden — Sofort-Sturmdienst nur eingeschränkt.' },
    { name: 'Rendsburg', anfahrt: '75 Min', hinweis: 'Planeinsätze im NOK-Umfeld nach Terminvereinbarung.' },
    { name: 'Neumünster', anfahrt: '40 Min', hinweis: 'Regelmäßig auf der Route — Termine gut planbar.' },
    { name: 'Elmshorn', anfahrt: '40 Min', hinweis: 'Kreis Pinneberg westlich — Termine und Notdienst möglich.' },
  ],
};

// Organization-Schema (nicht LocalBusiness, TIMBER ist überregional)
export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#org`,
  name: SITE.legalName,
  alternateName: 'TIMBER',
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.street,
    postalCode: CONTACT.zip,
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.region,
    addressCountry: CONTACT.country,
  },
  areaServed: [
    { '@type': 'State', name: 'Schleswig-Holstein' },
    { '@type': 'State', name: 'Hamburg' },
    { '@type': 'State', name: 'Niedersachsen' },
    ...STAEDTE.map((s) => ({ '@type': 'City', name: s.name })),
  ],
  // Bewusst KEIN sameAs auf die Regional-Domains - das würde Google als
  // Doorway-Netzwerk-Signal werten. Regional-Auftritte verlinken einseitig
  // zum Hub, nicht umgekehrt.
};

// LocalBusiness-Schema-Factory für Ortsseiten
export function localBusinessSchema(stadt: { name: string; lat: number; lng: number; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/${stadt.slug}/#local`,
    name: `${SITE.legalName} — ${stadt.name}`,
    alternateName: `TIMBER Baumpflege ${stadt.name}`,
    url: `${SITE.url}/${stadt.slug}/`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.street,
      postalCode: CONTACT.zip,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    areaServed: { '@type': 'City', name: stadt.name },
    geo: { '@type': 'GeoCoordinates', latitude: stadt.lat, longitude: stadt.lng },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    ],
    serviceType: ['Baumpflege', 'Baumfällung', 'Kronensicherung', 'Verkehrssicherungspflicht', 'Sturm-Notdienst'],
  };
}
