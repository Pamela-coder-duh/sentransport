function StatistiqueLignes() {
  return (
    <div className="statistique">
      <span className="statistique-chiffre">10 </span>
      <span className="statistique-libelle">lignes</span>
    </div>
  );
}

function StatistiqueArrets() {
  return (
    <div className="statistique">
      <span className="statistique-chiffre">150 </span>
      <span className="statistique-libelle">arrêts</span>
    </div>
  );
}

function StatistiqueBus() {
  return (
    <div className="statistique">
      <span className="statistique-chiffre">45 </span>
      <span className="statistique-libelle">bus en service</span>
    </div>
  );
}

export { StatistiqueLignes, StatistiqueArrets, StatistiqueBus };