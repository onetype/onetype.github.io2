import sass from 'sass-true';

const INDEX = 'sass/index.scss';
const file = `${__dirname}/${INDEX}`;

sass.runSass({ file }, describe, it);
