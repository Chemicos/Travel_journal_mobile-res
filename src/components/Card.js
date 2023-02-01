import { MdLocationOn } from "react-icons/md";

export default function Card (props) {
    return ( 
        <section>
            <div className="card">
                <img src={props.image} alt="" />
                <div className="card-info">
                    <div className="card-link">
                        <h4><MdLocationOn className="card-location" />{props.country}</h4>
                        <a href= {props.href} >View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className="card-date">{props.date}</p>
                    <p className="card-description">{props.description}</p>
                </div>
            </div> 
           <hr />
        </section>
    )
}