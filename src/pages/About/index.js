import React from 'react';
import styles from './style.module.css';

console.log('styles:', styles);

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>关于我们</h2>
            <p>这是一个使用 Webpack 5 构建的 React 应用</p>
            <ul>
                <li>支持热更新</li>
                <li>区分开发和生产环境</li>
                <li>使用 React Router 进行路由管理</li>
            </ul>
        </div>
    );
};

export default About; 