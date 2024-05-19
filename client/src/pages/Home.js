import React from 'react';
import ArticleList from '../components/ArticleList';
import SpeciesList from '../components/SpeciesList';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className='home-page-container'>
                <h1 className='home-title'>Endangered Species</h1>
                <SpeciesList />
                <ArticleList />
            </div>
        </div>
    );
}
