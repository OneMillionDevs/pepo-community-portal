const ShowcaseHome = props => {
  return (
    <>
      <Atom.Flex center column sx={{py: 5, width: '100%'}}>
        <Atom.BackgroundGradient gradient="frost" />
        <Atom.Container
          sx={{
            color: 'white',
            maxWidth: ['100%', '100%', 880, 1080],
            py: [5],
          }}>
          <Atom.Flex center column>
            <Atom.Heading as="h1" mega>
              Examples
            </Atom.Heading>
            <Atom.Heading as="h4" md>
              A set of examples to understand how ethers-react can help you in
              your project.
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

export default ShowcaseHome;
