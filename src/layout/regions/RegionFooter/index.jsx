/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import { Link } from "@reach/router";

/* --- Component --- */
export default props => {
  return (
    <Atom.Flex alignCenter between sx={{ variant: "regions.footer" }}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to="/">
          <Atom.Heading sm heavy mb={0}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Link>
      </Atom.Flex>

      {/* Right */}

      <Atom.Flex alignCenter>
        <Atom.Span sx={{ ml: 1, fontSize: 1 }}>
          <a href="">HORIZIN</a>
        </Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};
