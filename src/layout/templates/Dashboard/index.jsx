import { RegionAside, RegionTopDashboard, RegionFooter } from "@regions";
import styles from "./styles";

const DashboardTemplate = ({ sx, sxMain, styled, children, ...props }) => {
  return (
    <Atom.Flex column sx={styles.container}>
      <Atom.Flex sx={{ flex: 1 }}>
        <RegionAside sx={styles.aside} />
        <Atom.Flex column sx={styles.main}>
          {/* <RegionTopDashboard /> */}
          <Atom.Flex column sx={{ flex: 1, height: "100%", ...sxMain }}>
            {children}
          </Atom.Flex>
          {/* <RegionFooter /> */}
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
