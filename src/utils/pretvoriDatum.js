export function pretvoriDatum(datumString) {
  const [godina, mjesec, dan] = datumString.split("-").map(Number);
  const imenaMjeseci = [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenog",
    "prosinca",
  ];

  const nazivMjeseca = imenaMjeseci[mjesec - 1];

  const formatiraniDatum = `${dan}. ${nazivMjeseca} ${godina}.`;

  return formatiraniDatum;
}
