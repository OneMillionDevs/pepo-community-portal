import { RegionTop, RegionFooter } from "@regions";

const SiteTemplate = ({ sx, sxMain, styled, children, ...props }) => {
  return (
    <Atom.Flex column sx={{ minHeight: "100vh", flex: 1, ...sx }}>
      <RegionTop />
      <Atom.Flex
        column
        sx={{ flex: 1, height: "100%", variant: "regions.main" }}
      >
        {children}
      </Atom.Flex>
      <RegionFooter />
    </Atom.Flex>
  );
};

export default SiteTemplate;
