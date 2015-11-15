import {run} from './_devcards';

const context = require.context('./', true, /card.js$/);
run(context.keys(), context);

module.hot.accept();
