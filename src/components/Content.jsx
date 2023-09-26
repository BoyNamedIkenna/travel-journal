
export default function Content(props) {
  return (
    <section>
    <div className="location">
      <div>
        <img src={props.imageUrl} className="location--img"/>
      </div>
      <div className="info">
        <h4>{props.icon} {props.location} <span className="location--map"><a href={props.googleMapsUrl} target="_blank">View on Google Maps</a></span> </h4>
        <h2>{props.title}</h2>
        <h5>{props.startDate} - {props.endDate}</h5>
        <p>{props.description}</p>
      </div>
    </div>
    <hr></hr>
    </section>
  );
}
