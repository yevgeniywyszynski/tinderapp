 import React from 'react'
 import Back from '../actionsButtons/Back';
 import Dislike from '../actionsButtons/Dislike';
 import Like from '../actionsButtons/Like';
 import SuperLike from '../actionsButtons/SuperLike';
 import styles from './TinderActions.module.scss';

 const TinderAction = ({person, modifySuperficialChoices}) => (
    <div className={styles.actions}>
        
        <Back userId={personalbar.id} />

        <Dislike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />

        <Like
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />

        <SuperLike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
    </div>
 )

 export default TinderAction;
 