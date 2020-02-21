const ExampleCard = ({ children }) => {
  return (
    <Atom.Flex alignCenter sx={{ flex: 1, my: 3 }}>
      <Atom.Box sx={{ flex: 2 }}>{children[0]}</Atom.Box>
      <Atom.Box sx={{ flex: 3 }}>{children[1]}</Atom.Box>
    </Atom.Flex>
  );
};

export default ExampleCard;
