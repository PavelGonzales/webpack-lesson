import { el, setChildren } from 'redom';
import './main.scss';
import logo from './logo.svg';

const header = el('header', { class: 'page-header' }, [
	el('div', { class: 'page-header-text' }, 'Добро пожаловать в '),
	el('img', { class: 'page-header-logo', src: logo }),
]);

setChildren(window.document.body, [header]);