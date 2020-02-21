/* --- Global --- */
import { useState } from "react";
import ReactPlayer from "react-player";

/* --- Local --- */
import { EpochToRelativeDate } from "@components";

/* --- VideoCard : Component --- */
const VideoCard = ({ created_at, id, data, topic, ...props }) => {
  /* --- Component : State --- */

  // Video
  const videoCreatorId = data.activity.video.creator_id;
  const [videoDescription] = useState(data.activity.video.description);
  const [videoImage] = useState(data.activity.video.poster_image);
  const [videoTags] = useState(data.activity.video.tags);
  const [videoTokens] = useState(data.activity.video.total_contribution_amount);
  const [videoContributorCount] = useState(
    data.activity.video.total_contributors
  );
  const [videoUrl] = useState(data.activity.video.video_url);

  // User

  const [userProfileName] = useState(data.users[videoCreatorId].name);
  const [userProfileAvatar] = useState(
    data.users[videoCreatorId].profile_image
  );
  const [userProfileTwitter] = useState(
    data.users[videoCreatorId].twitter_handle
  );
  return (
    <Atom.Box
      sx={{
        bg: "smoke",
        boxShadow: 1,
        borderRadius: 4,
        // px: 3,
        my: 3,
        overflow: "hidden",
        ...props.sx
      }}
    >
      <Atom.Flex center column sx={{ bg: "white", p: 3, mb: 0, boxShadow: 1 }}>
        <Atom.Flex alignCenter sx={{ width: "100%", minHeight: 100 }}>
          <Atom.Box sx={{ flex: 1 }}>
            <Atom.Image
              src={userProfileAvatar}
              sx={{
                boxShadow: 0,
                border: "1px solid #FFF",
                borderRadius: 9999,
                maxWidth: 62,
                mr: 1
              }}
            />
          </Atom.Box>
          <Atom.Box sx={{ flex: 3, ml: 3, p: 3 }}>
            <Atom.Heading as="h3" lg m0>
              {userProfileName}
            </Atom.Heading>
            <a
              href={`https://twitter.com/${userProfileTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Atom.Flex alignCenter>
                <Atom.Image
                  src="https://webstockreview.net/images/twitter-icons-png-1.png"
                  sx={{
                    width: 22
                  }}
                />
                <Atom.Span sm>{userProfileTwitter}</Atom.Span>
              </Atom.Flex>
            </a>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex
          alignCenter
          center
          sx={{
            bg: "smoke",
            p: 2,
            py: 2,
            width: "112.5%",
            mb: -3,
            textAlign: "center"
          }}
        >
          <Atom.Flex alignCenter>
            <Atom.Image
              sx={{
                borderRadius: 9999,
                width: 22
              }}
              src="https://pbs.twimg.com/profile_images/1169212572735655937/MLFlcKZb_400x400.jpg"
            />
          </Atom.Flex>
          <Atom.Span sx={{ ml: 1 }}>{videoTokens}</Atom.Span>
          <br />
          <Atom.Span sx={{ ml: 2 }}>
            {" "}
            ({videoContributorCount} Contributors)
          </Atom.Span>
        </Atom.Flex>
      </Atom.Flex>
      <ReactPlayer url={videoUrl} width="100%" height={540} play controls />
      <Atom.Flex center column sx={{ py: 2, px: 3 }}>
        <Atom.Paragraph sm sx={{ textAlign: "center" }}>
          {videoDescription}
        </Atom.Paragraph>
        {videoTags && (
          <Atom.Flex>
            {videoTags.map(tag => (
              <Atom.Span tag sm m1>
                {tag}
              </Atom.Span>
            ))}
          </Atom.Flex>
        )}
        <Molecule.Link to="/community" sx={{ width: "100%" }}>
          <Atom.Span
            tag
            sx={{
              fontSize: 0,
              fontWeight: 700,
              width: "100%",
              textAlign: "center"
            }}
          >
            <Atom.Image
              sx={{
                width: 22,
                borderRadius: 9999
              }}
              src="https://pbs.twimg.com/profile_images/1169212572735655937/MLFlcKZb_400x400.jpg"
            />
            <Atom.Span sx={{ ml: 2, mt: 1 }}>Give Pepo</Atom.Span>
          </Atom.Span>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default VideoCard;
