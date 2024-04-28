import './Home.css';
import ArticleList from '../components/ArticleList';
import SpeciesList from '../components/SpeciesList';

export default function Home(){
    return (
        <>
        <head>

        </head>
        <body>
            <div>
                <div className="home-container">
                    <div className='home-page-container'>
                        <h1 className='home-title'>Endangered Species</h1>
                        <SpeciesList />
                        <ArticleList />
                    </div>
                </div>
            </div>
        </body>
        </>
    );
}