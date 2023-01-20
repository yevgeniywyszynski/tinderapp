import React from "react";
import TinderAction from "../TinderActions/TinderAction";
import styles from './Person.module.scss';

const Person = ({ person, modifySuperficialChoices }) => {
    const { name, desc, age, image, city } = person;
   
    return (
      <>
        <div className="person">
          <div className={styles.personAvatarWrapper}>
            <img className={styles.personAvatar} src={`/images/users/${image}`} alt={name} />
          </div>
  
          <div className={styles.personDescriptionWrapper}>
            <p className={styles.personNameAge}>
              {name}, <span>{age}</span>
            </p>
            <p className={styles.personJob}>{desc}</p>
            <p className={styles.personCity}>{city}</p>
          </div>
        </div>
  
        <TinderAction
          person={person}
          modifySuperficialChoices={modifySuperficialChoices}
        />
      </>
    );
  };
  
  export default Person;