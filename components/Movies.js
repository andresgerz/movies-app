export default ({ Title, Poster }) => {

    return (
        <div className="movie">
            <div className="Poster"></div>
            <div className="Title">{Title}</div>

            <style jsx>{`

                .movie {
                    height: 300px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }

                .title {
                    text-align: center;
                    width: 100%;
                    opacity: 0.9;
                    background: black;
                    color: white;
                    font-size: 17px;
                }

                .poster {
                    flex: 1;
                    background-image: url(${Poster});
                    background-size: cover;
                    background-color: black;
                }
            `}
            </style>
        </div>
    )
}