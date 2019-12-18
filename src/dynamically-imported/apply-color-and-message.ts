import { $ } from './dom.js';

export default function applyColorsAndMessage(selector: string, { color, message }: { color: string, message: string }): void {
	const node = $(selector);
	node.style.backgroundColor = color;
	node.textContent = message;
}