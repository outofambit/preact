import { initDebug } from './debug';
import 'preact/devtools';

if (process.env.NODE_ENV === 'development') {
	initDebug();
}
