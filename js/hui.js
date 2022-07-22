"use strict";
// this is hyper ui's javascript file pls do not edit anything here
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const HUIalert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    alertPlaceholder.append(wrapper);
};
const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        HUIalert('Nice, you triggered this alert message!', 'success');
        console.log("Alert Trigger Activated");
    });
}
