import React from 'react';
import UserCard from './components/UserCard';
import './style.css';

const Users = () => {
    const users = [
        { id: 1, name: '张三', role: '开发工程师', department: '技术部' },
        { id: 2, name: '李四', role: '产品经理', department: '产品部' },
        { id: 3, name: '王五', role: '设计师', department: '设计部' },
    ];

    return (
        <div className="users-container">
            <h2>用户列表</h2>
            {users.map(user => (
                <UserCard key={user.id} {...user} />
            ))}
        </div>
    );
};

export default Users; 