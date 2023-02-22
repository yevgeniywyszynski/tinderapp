import React from "react";
import TinderAction from "../TinderActions/TinderAction";
import styles from "./Person.module.scss";

const Person = ({ person }) => {
  const { name, desc, age, image, city, verified } = person;

  return (
    <>
      <div className="person">
        <div className={styles.personAvatarWrapper}>
          <img
            className={styles.personAvatar}
            src={`/images/users/${image}`}
            alt={name}
          />
        </div>

        <div className={styles.personDescriptionWrapper}>
          <div className={styles.ageNameWrapper}>
            <p className={styles.personName}>{name}</p>
            <span className={styles.personAge}>{age}</span>
            {verified ? (
              <img
                className={styles.iconPerson}
                src={`/images/misc/${verified}`}
                alt="verified"
              />
            ) : null}
          </div>

          <div className={styles.personIconsWrapper}>
            <img
              className={styles.iconPerson}
              src="/images/misc/job.png"
              alt="jobIcon"
            />
            <p className={styles.personJob}>{desc}</p>
          </div>

          <div className={styles.personIconsWrapper}>
            <img
              className={styles.iconPerson}
              alt="city"
              src="/images/misc/city.png"
            />
            <p className={styles.personCity}>{city}</p>
          </div>
        </div>
      </div>

      <TinderAction />
    </>
  );
};

export default Person;
