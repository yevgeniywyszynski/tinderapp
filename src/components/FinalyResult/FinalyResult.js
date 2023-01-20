import React from 'react';
import LikedPerson from '../LikedPerson/LikedPerson';
import styles from '../FinalyResult/FinalyResult.module.scss';

const FinalyResult = ({ activeUserImage, likedUsers, superLikedUsers }) => {
    return(
    <div className={styles.lonely}>
        <p>There's no new around you.</p>
    
        <span className={styles.pulse}>
          <img className={styles.myAvatar} src={`/images/users/${activeUserImage}`} alt="You..." />
        </span>
    
        <div class={styles.likedPeople}>
          <p className={styles.descriptionLikedYou}>
            {likedUsers.length > 0
              ? "People you liked...let's hope they like you too!"
              : ''}
          </p>
    
          {likedUsers.map(item => (
            <LikedPerson key={item.id} person={item} />
          ))}
    
          <p className={styles.descriptionLikedYou}>{superLikedUsers.length > 0 ? 'People you super liked!' : ''}</p>
    
          {superLikedUsers.map(item => (
            <LikedPerson key={item.id} person={item} />
          ))}
        </div>
      </div>
    )
}

export default FinalyResult;