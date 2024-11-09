import styles from "./TournamentCard.module.css";

const TournamentCard = ({ tournamentDetails }) => {
  const { image, title, season } = tournamentDetails;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" className={styles.tournamentImage} />
      </div>

      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.seasonContainer}>
        <h4 className={styles.season}>{season}</h4>
      </div>
    </div>
  );
};

export default TournamentCard;
