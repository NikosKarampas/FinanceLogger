import { Invoice } from "./classes/Invoice.js";
const InvOne = new Invoice('mario', 'work on the mario website', 250);
const InvTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});