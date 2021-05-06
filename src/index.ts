import * as _ from 'lodash';
import { Invoice } from './classes/Invoice';
import { listTemplate } from './classes/ListTemplate';
import { Payment } from './classes/Payment';
import { HasFormatter } from './interfaces/HasFormatter';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector("ul");
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;
    doc = new ( type.value === 'invoice' ? Invoice : Payment )(...values);

    list.render( doc, type.value, 'start' )
})