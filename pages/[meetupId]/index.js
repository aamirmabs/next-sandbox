// opened on domain.com/[meetupId]

import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupId() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://cdn.pixabay.com/photo/2016/11/18/22/27/arches-1837166_960_720.jpg"
        title="Meetup XYZ"
        address="Some location, some city"
        description="lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor"
      />
    </Fragment>
  );
}

export default MeetupId;
