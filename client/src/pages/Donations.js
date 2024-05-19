import './Donations.css'

export default function Donations() {
    return (
        <>
            <h1>Donations</h1>
            <div className="donations-page-wrapper">
                <div className="donations-wrapper">
                    <div className='donations-text'>
                        <h2>Europe:</h2>
                        <a href="https://www.mcsuk.org/make-a-donation/">Marine Conservation Society</a> <br />
                        <a href="https://www.sealifetrust.org/en/">Sea Life Trust</a> <br />
                        <a href="https://europe.oceana.org/">Oceana</a> <br />
                        <a href="https://www.bluemarinefoundation.com/">Blue Marine Foundation</a> <br />
                    </div>
                    <img
                        src='https://www.pngall.com/wp-content/uploads/5/Europe-Map-PNG-Free-Download.png'
                        alt='Map of Europe'
                        className='donations-map'
                    />
                </div>
                <div className="donations-wrapper">
                    <div className='donations-text'>
                        <h2>Americas</h2>
                        <a href="https://us.whales.org/">Whale & Dolphin Conservation</a> <br />
                        <a href="https://seashepherd.org/">Sea Shepherd</a> <br />
                        <a href="https://oceanfdn.org/">The Ocean Foundation</a> <br />
                        <a href="https://www.montereybayaquarium.org/">Monterey Bay Aquarium</a> <br />
                    </div>
                    <img
                        src='https://cdn.pixabay.com/photo/2015/04/09/16/36/america-714733_640.png'
                        alt='Map of the Americas'
                        className='donations-map'
                    />
                </div>
                <div className="donations-wrapper">
                    <div className='donations-text'>
                        <h2>Africa</h2>
                        <a href="https://www.andbeyond.com/impact/coalitions/africa-foundation/">& Beyond</a> <br />
                        <a href="https://www.ammco.org/">African Marine Mammal Conservation Organization</a> <br />
                        <a href="https://marine.wildaid.org/projects/tanzania/">WildAid</a> <br />
                        <a href="https://blueventures.org/">BlueVentures</a> <br />
                    </div>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Africa_blank_black.svg/961px-Africa_blank_black.svg.png'
                        alt='Map of Africa'
                        className='donations-map'
                    />
                </div>
                <div className="donations-wrapper">
                    <div className='donations-text'>
                        <h2>Asia</h2>
                        <a href="https://conservation.livingseas.asia/?r_done=1">Livingseas</a> <br />
                        <a href="https://oceanriskalliance.org/">Ocean Risk Alliance</a> <br />
                        <a href="https://www.worldwildlife.org/species">World Wildlife Fund</a> <br />
                        <a href="https://www.bloomassociation.org/en/about-us/bloom-hong-kong/">BLOOM</a> <br />
                    </div>
                    <img
                        src='https://www.clker.com/cliparts/Y/y/p/q/S/S/asia-black-hi.png'
                        alt='Map of Asia'
                        className='donations-map'
                    />
                </div>
                <div className="donations-wrapper">
                    <div className='donations-text'>
                        <h2>Oceania</h2>
                        <a href="https://www.marineconservation.org.au/threatened-species/">Australian Marine Conservation Society</a> <br />
                        <a href="https://pcfml.org.au/action/donate/">Positive Change for Marine Life</a> <br />
                        <a href="https://oceanconservation.org.au/product/donate/">Ocean Education & Conservation</a> <br />
                        <a href="https://www.barrierreef.org/">Great Barrier Reef Foundation</a> <br />
                    </div>
                    <img
                        src='https://cdn4.iconfinder.com/data/icons/detailed-maps-of-all-continents-and-oceania/100/Oceania-512.png'
                        alt='Map of Oceania'
                        className='donations-map'
                    />
                </div>
            </div>
        </>
    );
}