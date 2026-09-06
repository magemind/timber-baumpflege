export const SITE = {
  name: 'TIMBER',
  legalName: 'TIMBER Baumpflege & Baumdienst',
  url: 'https://timber-baumpflege.de',
  tagline: 'Baumpflege aus dem Norden. Handwerk mit Höhe.',
  description:
    'TIMBER Baumpflege & Baumdienst — Jan Möller und Team. Seilklettertechnik SKT-A/B, Baumpflege nach ZTV, Verkehrssicherheit und Sturm-Notdienst in ganz Norddeutschland. Regional aufgestellt in Hamburg, Ahrensburg, Pinneberg, Norderstedt, Blankenese.',
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

// Owner-Persona (Presse, About)
export const OWNER = {
  name: 'Jan Möller',
  role: 'Inhaber · Fachagrarwirt Baumpflege · SKT-B',
  bio: 'Über 10 Jahre in norddeutschen Kronen. Ausbildung im Forst, Weiterbildung zum Fachagrarwirt Baumpflege, SKT-A/B-Zertifizierung. Fokus auf schwierige Fällungen in engen Lagen und langfristige Baumpflege statt Kahlschlag.',
  certificates: [
    'Fachagrarwirt Baumpflege (LWK Niedersachsen)',
    'SKT-A (Seilklettertechnik Grundstufe)',
    'SKT-B (Seilklettertechnik Aufbaustufe)',
    'Motorsägenlehrgang AS Baum I + II',
    'Ersthelfer im Baum',
    'Sachkunde Pflanzenschutz',
  ],
};

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

// Referenz-Projekte (Portfolio, nicht ortsgebunden)
export const REFERENZEN = [
  {
    slug: 'sturm-eiche-blankenese',
    title: 'Sturm-Eiche über Treppenviertel-Haus',
    location: 'Hamburg-Blankenese',
    year: 2025,
    short: 'Nach Orkan Zeynep hing eine 22-Meter-Stieleiche über dem Treppenviertel-Haus. Zugang nur über Treppen, kein Kranstellplatz. Seilklettertechnik, Stück für Stück abgelassen, keine Schäden am Bestand.',
  },
  {
    slug: 'kastanien-allee-ahrensburg',
    title: 'Kronensicherung Kastanien-Allee',
    location: 'Ahrensburg-Schlossgebiet',
    year: 2025,
    short: 'Sieben Rosskastanien mit fortgeschrittener Miniermotten-Belastung und Astrissen. Statt Fällung: dynamische Kronensicherung (Cobra-System), Totholz raus, jährliche Nachkontrolle vereinbart.',
  },
  {
    slug: 'buche-pinneberg',
    title: 'Rotbuche direkt am Wohnhaus',
    location: 'Pinneberg-Waldenau',
    year: 2024,
    short: 'Rotbuche mit Riesenporling (Meripilus giganteus) am Wurzelanlauf, akute Bruchgefahr. Zerlegung von oben nach unten mit Seilklettertechnik, Fällung in engster Lage zwischen zwei Häusern.',
  },
  {
    slug: 'ndr-park-fichten',
    title: 'Fichtenbestand nach Trockenheit',
    location: 'Kreis Pinneberg',
    year: 2024,
    short: 'Reihenfällung von 40 abgestorbenen Fichten in Feldrandlage. Käferbefall, keine Rettung möglich. Fällung, Aufarbeitung, Entsorgung im Paket.',
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
];

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
  founder: { '@type': 'Person', name: OWNER.name, jobTitle: OWNER.role },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.street,
    postalCode: CONTACT.zip,
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.region,
    addressCountry: CONTACT.country,
  },
  areaServed: SATELLITEN.map((s) => ({ '@type': 'City', name: s.name })),
  sameAs: SATELLITEN.map((s) => `https://${s.domain}`),
};
