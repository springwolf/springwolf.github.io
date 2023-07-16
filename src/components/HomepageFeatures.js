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
    title: 'Easy to set up',
    description: (
      <>
        Just provide minimal configuration in <code>application.properties</code> and
        you're ready to go.
      </>
    ),
  },
  {
    title: 'AsyncAPI compliant',
    description: (
      <>
        The generated documentation is compliant with the <Link to='https://www.asyncapi.com/'>AsyncAPI specification</Link>.
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
