/* --- Local --- */
import { FormDomainPurchase } from "@forms";

/* --- Page : Component --- */
const DashboardOverviewPage = props => {
  return (
    <Atom.Flex sx={{ flex: 1, height: "100%", width: "100%" }}>
      <Showcase />
      {/* <Content /> */}
    </Atom.Flex>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex center column sx={{ py: 5, px: 6, flex: 1, width: "100%" }}>
      <Atom.BackgroundGradient gradient="bluePurple" />
      <Atom.BackgroundImage
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
        sx={{
          opacity: 0.35
        }}
      />
      <Atom.Container
        sx={{
          color: "white",
          maxWidth: ["100%", "100%", 880, 1080],
          py: [5]
        }}
      >
        <Atom.Flex center column>
          <Atom.Heading as="h1" giga sx={{ textAlign: "center" }}>
            <Atom.Span sx={{ fontWeight: 300 }}>Earn or Buy</Atom.Span>
            <br />
            MillionDevs Sub-Domain
          </Atom.Heading>
          <FormDomainPurchase />

          <Atom.Heading as="h4" xl normal sx={{ mt: 4 }}>
            Be the "1" in OneMillionDevs
          </Atom.Heading>
          <Atom.Flex sx={{ mt: 4 }}>
            <Atom.Span tag m1>
              How It Works
            </Atom.Span>
            <Atom.Span tag m1>
              Community
            </Atom.Span>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Content = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{ py: 3 }}>
        <Atom.Heading as="h3" xxl>
          Buy Sub-Domain
        </Atom.Heading>
      </Atom.Flex>
    </Atom.Container>
  );
};

export default DashboardOverviewPage;
