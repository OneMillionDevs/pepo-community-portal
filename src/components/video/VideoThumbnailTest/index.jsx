/* --- Global --- */
import { useState } from "react";
import ReactPlayer from "react-player";

/* --- Local --- */
import { EpochToRelativeDate } from "@components";

/* --- VideoCard : Component --- */
const VideoCard = ({ created_at, id, data, topic, ...props }) => {
  /* --- Component : State --- */

  // Video
  const videoCreatorId = "";
  const videoDescription = "";
  const videoImage = "";
  const videoTags = "";
  const videoTokens = "";
  const videoContributorCount = "";
  const videoUrl =
    "https://dszura9cvttcq.cloudfront.net/pepo-prod1000/ua/videos/3043-6d77ace9d411f620a197ced3ea5562ff-external.mp4";

  // User

  const userProfileName = "";
  const userProfileAvatar =
    "https://dszura9cvttcq.cloudfront.net/pepo-prod1000/ua/images/3043-87573da816978c609f3341ad939cec70-original.jpeg";
  const userProfileTwitter = "";
  return (
    <Atom.Box
      sx={{
        ...props.sx
      }}
    >
      <Atom.Box
        sx={{
          borderRadius: 20,
          overflow: "hidden",
          ...props.sx
        }}
      >
        <Atom.Image src="https://dszura9cvttcq.cloudfront.net/pepo-prod1000/ua/images/3043-836934842fd9418719497dfe0e5345e1-original.jpg" />
        {/* <ReactPlayer url={videoUrl} width="100%" height={200} play controls /> */}
      </Atom.Box>
      <Atom.Absolute sx={{ top: -3, right: -3 }}>
        <Atom.Image
          src={userProfileAvatar}
          sx={{
            borderRadius: 9999,
            width: [40]
          }}
        />
      </Atom.Absolute>
    </Atom.Box>
  );
};

export default VideoCard;
