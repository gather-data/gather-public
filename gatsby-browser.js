import 'prismjs';
import './src/prism-theme.css';

import loadLanguages from 'prismjs/components/';

loadLanguages(['bash']);

exports.onClientEntry = () => {};
