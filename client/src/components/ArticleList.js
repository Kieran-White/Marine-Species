import React from 'react';
import "./ArticleList.css";
import { Link } from 'react-router-dom';

export default class ArticleList extends React.Component {
    articles = [
        { headline: "Endangered Marine Animals: The Crisis Beneath the Waves", subtitle: "The ocean is a vast, mysterious and beautiful place. Beneath the surface of the sea, there is an entire world full of fascinating creatures that call the ocean their home. Marine animals are essential to the survival of our planet, playing vital roles in the ocean’s food chains and ecosystems.", url: "https://www.gvi.co.uk/blog/smb-endangered-marine-animals-the-crisis-beneath-the-waves/" },
        { headline: "Endangered Ocean", subtitle: "From snails to whales, approximately 2,270 species are listed as endangered or threatened globally under the U.S. Endangered Species Act (ESA).", url: "https://ocean.si.edu/conservation/solutions-success-stories/endangered-ocean" },
        { headline: "Ocean species are disappearing faster than those on land", subtitle: "As the world's average temperatures creep higher, marine animals are far more vulnerable to extinctions than their earthbound counterparts, according to a new analysis of more than 400 cold-blooded species.", url: "https://www.nationalgeographic.com/environment/article/ocean-species-disappear-faster-climate-change-impacts-cold-blooded-animals-harder" },
        { headline: "Ocean species are disappearing faster than those on land", subtitle: "As the world's average temperatures creep higher, marine animals are far more vulnerable to extinctions than their earthbound counterparts, according to a new analysis of more than 400 cold-blooded species.", url: "https://www.nationalgeographic.com/environment/article/ocean-species-disappear-faster-climate-change-impacts-cold-blooded-animals-harder" },
        { headline: "Ocean species are disappearing faster than those on land", subtitle: "As the world's average temperatures creep higher, marine animals are far more vulnerable to extinctions than their earthbound counterparts, according to a new analysis of more than 400 cold-blooded species.", url: "https://www.nationalgeographic.com/environment/article/ocean-species-disappear-faster-climate-change-impacts-cold-blooded-animals-harder" },
        // Add more articles as needed 
    ]
    render() {
        return (
            <div>
                <h2 className="articles-header">Articles</h2>
                <div className='ArticleGrid' id='articleListContainer'>
                    {this.articles.map((article, index) => (
                        <Link key={index} to={article.url} className="article-container">
                            <h2 className="article-name">{article.headline} </h2>
                            <p className="article-subtitle">{article.subtitle}</p>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}