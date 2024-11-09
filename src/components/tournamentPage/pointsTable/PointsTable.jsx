import React from "react";
import styles from "./PointsTable.module.css";
import { pointsTable } from "../../../data/tournamentInfo";

const PointsTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <table className={styles.pointsTable}>
          <thead>
            <tr>
              <th className={styles.addleftradius}>POS.</th>
              <th>TEAM</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F</th>
              <th>A</th>
              <th>+/-</th>
              <th className={styles.addrightradius}>PTS</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((team) => (
              <tr key={team.id}>
                <td className={`${styles.addleftradius} ${styles.pos}`}>
                  {team.id}
                </td>
                <td className={styles.nonBoldfont}>{team.team}</td>
                <td className={styles.nonBoldfont}>{team.P}</td>
                <td className={styles.nonBoldfont}>{team.W}</td>
                <td className={styles.nonBoldfont}>{team.D}</td>
                <td className={styles.nonBoldfont}>{team.L}</td>
                <td className={styles.nonBoldfont}>{team.F}</td>
                <td className={styles.nonBoldfont}>{team.A}</td>
                <td className={styles.nonBoldfont}>{team.inc}</td>
                <td className={`${styles.points} ${styles.addrightradius}`}>
                  {team.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
