/* --- Components --- */
import { ShowcaseHome } from "@views";

import {
  EthersProviderSetup,
  EthersProviderContractInitialize,
  EthersProviderExtensionsInitialize,
  VideoFeatured,
  VideoFeaturedTest
} from "@components";

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <Showcase />
      <Featured />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex
        center
        column
        gradient="sunset"
        sx={{
          boxShadow: 0,
          color: "white",
          py: 5,
          width: "100%"
        }}
      >
        {/* <Atom.BackgroundGradient gradient="sunset" sx={{ bg: "smoke" }} /> */}
        <Atom.Container
          sx={{
            maxWidth: ["100%", "100%", 880, 1080],
            py: [5]
          }}
        >
          <Atom.Flex alignCenter>
            <Atom.Box sx={{ flex: 1 }}>
              <Atom.Heading
                as="h5"
                sx={{
                  fontSize: [18, 18, 28, 42]
                }}
              >
                Community Portal
              </Atom.Heading>
              <Atom.Paragraph>
                Share your story with the Ethereum community.
              </Atom.Paragraph>
              <Atom.Flex>
                <Atom.Button sm white m1>
                  Top Contributors
                </Atom.Button>
                <Atom.Button sm white m1>
                  Share Story
                </Atom.Button>
              </Atom.Flex>
            </Atom.Box>
            <Atom.Flex center sx={{ flex: 1 }}>
              <Atom.Box sx={{ width: [320] }}>
                <VideoFeaturedTest />
              </Atom.Box>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

const feautredVideo = {
  url: "url"
};

const Featured = props => {
  return (
    <Atom.Container>
      <Atom.Flex center column>
        <Atom.Box sx={{ mt: 0 }}></Atom.Box>
      </Atom.Flex>
    </Atom.Container>
  );
};

export default HomePage;
