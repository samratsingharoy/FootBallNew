import React, { useState } from "react";
import styles from "./Teams.module.css";
import { TeamsData } from "../../../data/tournamentInfo";

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState("ZOMATO");

  const selectedTeamData = TeamsData.find((team) => team.team === selectedTeam);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.teamContainer}>
            {TeamsData.map((team, i) => {
              return (
                <div
                  className={styles.teamWrapper}
                  key={i}
                  onClick={() => setSelectedTeam(team.team)}
                >
                  <p className={styles.team}>{team.team}</p>
                </div>
              );
            })}
          </div>

          <div className={`${styles.playersContainer}`}>
            <div
              className={`${styles.playerWrapper} ${styles.playersHeaderContainer}`}
            >
              <div className={styles.playerNameContainer}>
                <p className={styles.nameHeader}>NAME</p>
              </div>

              <div className={styles.kitContainer}>
                <p className={styles.kitHeader}>KIT NO.</p>
              </div>
            </div>
            {selectedTeamData?.players.map((player, index) => {
              return (
                <div className={styles.playerWrapper} key={index}>
                  <div className={styles.playerNameContainer}>
                    <p className={styles.playerName}>{player.name}</p>
                  </div>

                  <div className={styles.kitContainer}>
                    <p className={styles.kitnum}>{player.kit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.logoContainer}>
            <img
              src="/images/tournamentpage/logoImage.jpeg"
              className={styles.logoImage}
              alt=""
            />

            <div className={styles.changeImageContainer}>
              <p className={styles.changeText}>Change Image</p>
              <div className={styles.changeIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.66675 10.6664V13.3331L5.33341 13.3331L12.5792 6.08732L12.5797 6.08675C12.8434 5.82312 12.9753 5.69125 13.0247 5.53914C13.0682 5.40524 13.0682 5.26101 13.0247 5.12712C12.9752 4.9749 12.8432 4.84283 12.5792 4.57882L11.4193 3.41896C11.1564 3.15608 11.0247 3.02436 10.8728 2.97501C10.7389 2.93151 10.5947 2.93151 10.4608 2.97501C10.3088 3.0244 10.1769 3.15626 9.91365 3.41952L9.9125 3.42065L2.66675 10.6664Z"
                    stroke="#D9D9D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.jerseyContainer}>
            <img
              src="/images/tournamentpage/jerseyImage.jpeg"
              className={styles.jerseyImage}
              alt=""
            />
            <div className={styles.changeImageContainer}>
              <p className={styles.changeText}>Change Image</p>
              <div className={styles.changeIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.66675 10.6664V13.3331L5.33341 13.3331L12.5792 6.08732L12.5797 6.08675C12.8434 5.82312 12.9753 5.69125 13.0247 5.53914C13.0682 5.40524 13.0682 5.26101 13.0247 5.12712C12.9752 4.9749 12.8432 4.84283 12.5792 4.57882L11.4193 3.41896C11.1564 3.15608 11.0247 3.02436 10.8728 2.97501C10.7389 2.93151 10.5947 2.93151 10.4608 2.97501C10.3088 3.0244 10.1769 3.15626 9.91365 3.41952L9.9125 3.42065L2.66675 10.6664Z"
                    stroke="#D9D9D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
