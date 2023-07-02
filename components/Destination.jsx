import React from "react";
import data from "../src/data.js";

export default function Destination(props) {
  return (
    <div className="destinations">
      <div className="dest-image">
        <img src={props.imageUrl} />
      </div>
      <div className="text">
        <p className="country">{props.location}</p>
        <a className="maps-link" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p className="description">{props.description}</p>
      </div>

      <hr></hr>
    </div>
  );
}
