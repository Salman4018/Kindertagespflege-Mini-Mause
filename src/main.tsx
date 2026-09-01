import { App } from './App';
import { mountPage } from './mount';

mountPage((content) => <App content={content} />);
