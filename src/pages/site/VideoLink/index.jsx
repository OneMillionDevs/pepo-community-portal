/* --- Components --- */
import { ShowcaseHome } from "@views";
import ThreeBoxComments from "3box-comments-react";
import { VideoThumbnailTest, VideoFeaturedTest } from "@components";

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <Showcase />
      <Featured />
      <Comments />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex
        center
        column
        sx={{
          // boxShadow: 0,
          color: "white",
          py: 3,
          width: "100%"
        }}
      >
        <Atom.BackgroundGradient gradient="sunset" sx={{ height: ["70vh"] }} />
        <Atom.Container
          sx={{
            maxWidth: ["100%", "100%", 880, 1080],
            py: [5]
          }}
        >
          <Atom.Flex sx={{}}>
            <Atom.Flex column sx={{ flex: 1, p: 3 }}>
              <Atom.Heading
                sx={{
                  fontSize: [22, 22, 28, 32]
                }}
              >
                Robbie Kruszynski
              </Atom.Heading>
              <Atom.Span sx={{ mb: 2 }}>
                <strong>Videos:</strong> <Atom.Span>22</Atom.Span>
              </Atom.Span>
              <Atom.Span>
                <strong>Replies:</strong> <Atom.Span>102</Atom.Span>
              </Atom.Span>
            </Atom.Flex>
            <Atom.Flex center sx={{ flex: 1 }}>
              <VideoFeaturedTest sx={{ width: ["100%"] }} />
            </Atom.Flex>
            <Atom.Flex column sx={{ alignItems: "center", flex: 1, p: 3 }}>
              <Atom.Span>
                <Atom.Span tag>Pepos: 1,232</Atom.Span>
              </Atom.Span>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

const Comments = props => {
  const handleLogin = () => {};
  return (
    <Atom.Box>
      <Atom.Container sx={{ width: [500, 700], py: 5 }}>
        <Atom.Box>
          <ThreeBoxComments
            // required
            spaceName="1milliondevs"
            threadName="1milliondevs-test"
            adminEthAddr={"0x5AdB8209b5276A23426994298FE9900644F57924"}
            // Required props for context A) & B)
            // box={box}
            currentUserAddr={window.ethereum.selectedAddress}
            // Required prop for context B)
            loginFunction={handleLogin}
            // Required prop for context C)
            ethereum={window.ethereum}
            // optional
            members={false}
            showCommentCount={10}
            threadOpts={{}}
            useHovers={false}
            // currentUser3BoxProfile={currentUser3BoxProfile}
            style={{ width: "100%" }}
            userProfileURL={address => `https://mywebsite.com/user/${address}`}
          />
        </Atom.Box>
      </Atom.Container>
    </Atom.Box>
  );
};

const feautredVideo = {
  url: "url"
};

const Featured = props => {
  return (
    <Atom.Container sx={{ width: ["100%", "100%", 760] }}>
      <Atom.Heading sx={{ textAlign: "center", fontSize: [3, 3, 4] }}>
        Related Videos
      </Atom.Heading>
      <Atom.Flex>
        <Atom.Box sx={{ flex: 1, p: 3 }}>
          <VideoThumbnailTest sx={{ width: "100%" }} />
        </Atom.Box>
        <Atom.Box sx={{ flex: 1, p: 3 }}>
          <VideoThumbnailTest />
        </Atom.Box>
        <Atom.Box sx={{ flex: 1, p: 3 }}>
          <VideoThumbnailTest />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Container>
  );
};

export default HomePage;
