import _ from 'lodash';
import './style.css';
import icon from './icon.jpeg';
import data from './data.xml';
import notes from './data.csv';
import yaml from './data.yaml';
import toml from './data.toml';
import json from './data.json5';


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
	const element = document.createElement('div');
	// lodash（目前通过一个 script 引入）对于执行这一行是必需的
	element.innerHTML = _.join(['Hello', 'webpack', '测试字体效果'], ' ');
	element.classList.add('hello');
	const myIcon = new Image();
	myIcon.src = icon;
	element.appendChild(myIcon);



	console.log(data);
	console.log(notes);
	return element;
}

document.body.appendChild(component());