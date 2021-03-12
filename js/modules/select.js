import '../../node_modules/choices.js/public/assets/scripts/choices.min';

const element = document.querySelector('.select');
const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText:'',
});