import './NoMatch.css';

export default function NoMatch() {
    return (
        <>
            <html lang="en">
                <head>
                    <title>404 - Not Found</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta charset="utf-8" />
                    <meta property="twitter:card" content="summary_large_image" />
                </head>
                <body>
                    <link rel="stylesheet" href="./style.css" />
                    <div>
                        <link href="./NoMatch.css" rel="stylesheet" />

                        <div class="not-found-container">
                            <h3>OOPS! PAGE NOT FOUND</h3>
                            <div class="not-found-container1">
                                <h1 class="not-found-text1">404</h1>
                            </div>
                            <div class="not-found-container2">
                                <h2 class="not-found-text2">
                                    WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                                </h2>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
}