import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Effortless API documentation',
    description: (
      <>
        Springwolf uses metadata already provided in the code 
        to automatically create documentation.
      </>
    ),
  },
  {
    title: 'Build for Spring',
    description: (
      <>
        Just provide minimal configuration in <code>application.properties</code> and
        you're ready to go.
      </>
    ),
  },
  {
    title: 'Powered by AsyncAPI v3',
    description: (
      <>
        The generated documentation is compliant with the <Link to='https://www.asyncapi.com/'>AsyncAPI specification</Link>.
      </>
    ),
  },
  {
    title: 'Optional web-ui',
    description: (
      <>
        Single dependency ui for API testing.
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        Extend documentation with <code>@AsyncListener</code> and <code>@AsyncPublisher</code>.
      </>
    ),
  },
  {
    title: 'Integrate',
    description: (
      <>
        Generate documentation in your CI/CD pipeline and publish to tools like <Link to="https://backstage.io">Backstage</Link>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
