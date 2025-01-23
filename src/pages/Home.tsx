const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="info">
                    <h1 className="title">Online shopping simplified</h1>
                    <p className="paragraph">
                        Discover the ultimate shopping experience with <i>ProductHub</i>! <br />
                        Seamlessly order your favorite groceries through out intuitive app and have them delivered right to your doorstep, making your life easier than ever before.
                    </p>
                </div>
                <img
                    className="home__img"
                    src="https://media.istockphoto.com/id/1369825135/photo/recyclable-shopping-bag-with-fruits-and-vegetables-on-white-table.jpg?s=612x612&w=0&k=20&c=QYC_Z22-PQ9CQS3qtMljGzrEvDoMfUuaUf-kXQo5P_0="
                    alt="img"
                />
            </div>
            <button className="home__btn">Start shopping</button>
        </div>
    );
};

export default Home;
