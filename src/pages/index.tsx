import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import config from "@site/docusaurus.config";

export const COMPONENTS = [
  {
    name: "Rust",
    image: "https://avatars.githubusercontent.com/u/5430905?s=48&v=4",
    link: "https://github.com/rust-lang/rust",
  },
  {
    name: "Smithay",
    image: "https://avatars.githubusercontent.com/u/29117271?s=48&v=4",
    link: "https://github.com/Smithay/smithay",
  },
  {
    name: "Arch Linux",
    image: "https://avatars.githubusercontent.com/u/4673648?s=200&v=4",
    link: "https://github.com/archlinux",
  },
  {
    name: "XFCE",
    image: "https://avatars.githubusercontent.com/u/9962578?s=200&v=4",
    link: "https://github.com/xfce-mirror",
  },
  {
    name: "Wayland",
    image: "https://avatars.githubusercontent.com/u/16206747?s=200&v=4",
    link: "https://wayland.freedesktop.org/",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          <span>Built with love and </span>
          {COMPONENTS.map((component) => (
            <a
              key={component.name}
              href={component.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                key={component.name}
                src={component.image}
                alt={component.name}
                height={24}
                style={{ verticalAlign: "middle" }}
              />
            </a>
          ))}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={config.customFields.downloadUrl as string}
          >
            Download APK
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
