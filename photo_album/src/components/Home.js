const Home = () => {
return (
    <div
    className="container-fluid"
    style={{
        backgroundImage:
        "url(https://cdn.pixabay.com/photo/2014/02/02/17/41/photos-256889__480.jpg)",
        height: "100vh",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        paddingTop: "250px",
    }}
    >
    <h1
        className="text-center text-white w-50 mx-auto"
        style={{ fontSize: "46px" }}>Welcome to our albums App
    </h1>
    </div>
);
};

export default Home;

/* export default function Home(){
    return(
        <div className = 'container'>
            <h1 className = 'text-center my-5'>Welcome to our albums App</h1>
        </div>
    )
} */
