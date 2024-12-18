import React from 'react';
import styles from './style.module.less';

const Users = () => {
    const users = [
        { id: 1, name: '张三', role: '开发工程师', department: '技术部' },
        { id: 2, name: '李四', role: '产品经理', department: '产品部' },
        { id: 3, name: '王五', role: '设计师', department: '设计部' },
    ];

    return (
        <div className="users-container">
            <h2 className={styles.bg}>用户列表</h2>

        </div>
    );
};

export default Users; 