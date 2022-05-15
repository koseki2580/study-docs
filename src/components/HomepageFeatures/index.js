import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ContentList from "./content.js";


function Feature({title,href}) {
  return (
    <div className={clsx('col col--4') + " not-a-tag"}>
      <a className="padding-horiz--md contents" href={href}>
      <svg 
          width="24"
          height="24"
          // viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="index-content-title">{title}</h3>
      </a>
    </div>
  );
}

function HeadTitle({headtitle, contents}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>{headtitle}</h1>
          <div className="row">
            {contents.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
  );
}


export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <p　className="container index-description">勉強したことについて色々まとめてます。誤字脱字・内容の間違い等ございましたら、Pull Request・issueの方を出して頂ければ幸いです。</p>
      </section>
      {ContentList.map((props, idx) => (
        <HeadTitle key={idx} {...props} />
      ))}
    </div>
      
    
  );
}
