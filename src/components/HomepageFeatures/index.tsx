import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Rootless",
    icon: require("@site/static/img/feature-rootless.webp").default,
    description: (
      <>
        Polar Bear does <b>not</b> require root access to run.
      </>
    ),
  },
  {
    title: "Standalone",
    icon: require("@site/static/img/feature-standalone.webp").default,
    description: (
      <>
        Polar Bear is <b>not</b> a set of instructions on how to setup a Linux
        environment using Termux. It is a standalone app that provides a
        streamlined Linux experience on Android.
      </>
    ),
  },
  {
    title: "Efficient",
    icon: require("@site/static/img/feature-efficient.webp").default,
    description: (
      <>
        Polar Bear is built with <b>Rust</b> and runs entirely in native code.
        By using the <b>Wayland</b> protocol, it incurs less overhead compared
        to X or VNC alternatives.
      </>
    ),
  },
  {
    title: "FOSS",
    icon: require("@site/static/img/feature-foss.webp").default,
    description: (
      <>
        Polar Bear is <b>free and open-source</b>, and will always be.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={icon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
