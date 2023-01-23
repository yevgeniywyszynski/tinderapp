 import React from 'react'
 import Back from '../actionsButtons/Back';
 import GenericButton from '../actionsButtons/GenericButtonContainer';
 import styles from './TinderActions.module.scss';

 const TinderAction = () => (
    <div className={styles.actions}>
        <Back userId={personalbar.id} />
        <GenericButton type="DISLIKE"/>
        <GenericButton type="LIKE"/>
        <GenericButton type="SUPERLIKE"/>
    </div>
 )

 export default TinderAction;
 