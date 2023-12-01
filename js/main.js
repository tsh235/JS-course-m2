'use strict';

const items = document.querySelectorAll('.item');
const propsLists = document.querySelectorAll('.props__list');
const contents = document.querySelectorAll('.content');
const propsItems = document.querySelectorAll('.props__item');
console.log('propsItems: ', propsItems);

items[3].after(items[0]);

propsLists[3].replaceWith(propsLists[4]);
contents[4].append(propsLists[3]);

propsItems[2].after(propsItems[14]);
propsItems[19].after(propsItems[43]);
propsItems[43].after(propsItems[44]);
