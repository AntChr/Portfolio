import { useState, useEffect} from "react"


const HistoryNav = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data.length) {
            setLoading(false);
            setCurrentIndex(0);
        }
    }, [data]);

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    if (loading) {
        return <div>Loading...</div>;
    }
return (
    <div className="container__historynav">
        <h1> Qui suis-je ?</h1>
        <div className="container__historynav__btlist">
                    <div className="container__historynav__btlist__bt">
                        <div className="container__historynav__btlist__bt__backgroundimg">
                            <img src={data[currentIndex].image} alt={data[currentIndex].title}/>
                        </div>
                        <div className="container__historynav__btlist__bt__text">
                            <p>{data[currentIndex].text}</p>
                        </div>
                    </div>
                <div className="container__historynav__btlist__list">
                    {data.map((Data, index) => (
                            <div className="container__historynav__btlist__list__title" key={Data.title} onClick={() => goToSlide(index)}>{Data.title}</div>
                    ))}
                </div>
        </div>         
    </div>

)
}
export default HistoryNav