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

// Inhaber-Persona
export const OWNER = {
  name: 'Jan Möller',
  role: 'Inhaber · SKT-A',
  bio: 'Jan Möller führt TIMBER als Inhaber. Er hält die SKT-A-Zertifizierung (Seilklettertechnik Grundstufe) und arbeitet mit einem festen Kreis freier Fachpartner, die die weiteren Qualifikationen abdecken. Sein Fokus: schwierige Fällungen in engen Lagen und langfristige Baumpflege statt Kahlschlag.',
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
