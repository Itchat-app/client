import { Center, Paper, Popper, useMantineTheme } from "@mantine/core";
import { h } from "preact";
import { useState } from "preact/hooks";
import { Tooltip } from "../..";
import styles from "../../../styles/App/ServersSidebar.module.css";

export const Server = ({
  active,
  icon,
  name,
}: {
  active: boolean;
  icon: string;
  name: string;
}) => {
  const [referenceElement, setReferenceElement] = useState();
  const [mounted, setMounted] = useState(false);
  // TODO: everything with theming
  // const theme = useMantineTheme();
  return (
    <div>
      <Tooltip
        referenceElement={referenceElement! as any}
        mounted={mounted}
        position="right"
        placement="center"
        arrowSize={5}
        withArrow
        transition="slide-left"
        transitionDuration={400}
      >
        <span style={{ fontWeight: "bold" }}>{name}</span>
      </Tooltip>
      <div className={styles.icon}>
        <div
          onMouseEnter={() => setMounted(true)}
          onMouseLeave={() => setMounted(false)}
          ref={setReferenceElement! as any}
          className={styles.serverIcon}
        >
          <img className={styles.serverIconImg} src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};
