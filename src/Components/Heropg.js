import "./HeroStyle.css";
function Heropg(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href="/">Travel Plan</a>
            </div>
        </div>
        
        </>
    );
}

export default Heropg;