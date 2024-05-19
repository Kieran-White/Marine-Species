import React from 'react';
import './Articles.css'; 
import ArticleList from '../components/ArticleList'; 

export default function Articles() {
    return (
        <div className='ArticleGrid'>
            <ArticleList />
        </div>
    );
}
