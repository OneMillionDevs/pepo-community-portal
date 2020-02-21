const ShowcaseHome = props => {
  return (
    <>
      <Atom.Flex center column sx={{ boxShadow: 0, py: 5, width: "100%" }}>
        <Atom.BackgroundGradient sx={{ bg: "smoke" }} />
        <Atom.Container
          sx={{
            maxWidth: ["100%", "100%", 880, 1080],
            py: [5]
          }}
        >
          <Atom.Flex center column>
            <Atom.Heading as="h1" mega>
              Firebase Boilerplate
            </Atom.Heading>
            <Atom.Heading as="h4" md>
              A React Library to Simplify Interactions with the Ethereum
              Blockchain
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

export default ShowcaseHome;
