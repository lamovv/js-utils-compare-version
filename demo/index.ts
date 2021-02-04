'use strict';
import 'console-log-h5';

import {
  compareVersion
} from '@js-util-fn/compare-version';


document.addEventListener('click', e => {
  const action = e.target.getAttribute('data-action');

  let ret;
  switch (action) {
    case 'compareVersion':
      ret = compareVersion('1.1.0', '1.2.1');
      console.log(`${ret}`);
      break;
    case 'mock':
      fetch('/api/getData.json')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(e => console.error('Error:', e));
      break;
    default:
      break;
    }
  },
  false
);
