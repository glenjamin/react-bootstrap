import {devcard} from './_devcards';

import React from 'react';
import Button from '../src/Button';

devcard(
  'Basic button',
  `
  Here's some markdown documentation

    * blah
    * blah
    * blah
  `,
  <Button>button</Button>
);

devcard.off(
  'Hidden card',
  ``,
  <Button>button</Button>
);
