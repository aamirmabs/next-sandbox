import React from "react";

function MeetupDetail(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      {/* <div>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/22/27/arches-1837166_960_720.jpg"
        alt="random meetup"
      />
      <h1>Meetup XYZ</h1>
      <address>Some location, some city</address>
      <p>lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor</p>
    </div> */}
    </div>
  );
}

export default MeetupDetail;
