import React from "react";
import styles from '../LikedPerson/LikedPerson.module.scss';

const LikedPerson = ({person}) => {
    return(
        <div className={styles.likedPerson}>
            <div>
                <img className={styles.likedPersonsImg}
                    src={`/images/users/${person.image}`}
                    alt={`You liked ${person.name}`}
                />
            </div>
        </div>
    )
}

export default LikedPerson;