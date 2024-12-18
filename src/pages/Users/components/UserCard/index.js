import React from 'react';
import styles from './style.css';

const UserCard = ({ name, role, department }) => {
    return (
        <div className={styles.userCard}>
            <h3>{name}</h3>
            <div className={styles.userInfo}>
                <p>职位：{role}</p>
                <p>部门：{department}</p>
            </div>
        </div>
    );
};

export default UserCard; 