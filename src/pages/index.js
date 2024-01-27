import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
            <img className={styles.heroLogo} src={"img/logo_s.png"} alt={"logo"} />
            <span>
                <b>Automated</b> documentation
                for <b>event-driven</b> applications
                built with <b>Spring Boot</b>
            </span>
        </h1>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Get Started
          </Link>
          &nbsp;
          <Link
              className="button button--secondary button--lg"
              to="https://demo.springwolf.dev/"
              target={"_blank"}>
              Try a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Automated documentation for async APIs built with Spring Boot">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
