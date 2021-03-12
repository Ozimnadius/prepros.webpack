import '../../node_modules/just-validate/dist/js/just-validate';

new window.JustValidate('.js-form', {
    rules: {
        radio: {
            required: true
        },
        checkbox: {
            required: true
        },
        checkbox2: {
            required: true
        },
        email: {
            required: true,
            email: true,
        }
    },

    focusWrongField: true,

    submitHandler: function (form, values, ajax) {
        ajax({
            url: 'https://just-validate-api.herokuapp.com/submit',
            method: 'POST',
            data: values,
            async: true,
            callback: function (response) {
                alert('AJAX submit successful! \nResponse from server:' + response)
            },
            error: function (response) {
                alert('AJAX submit error! \nResponse from server:' + response)
            }
        });
    },

    invalidFormCallback: function (errors) {
        console.log(errors);
    },
});
