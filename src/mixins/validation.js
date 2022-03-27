import Contrant from '../resources/config'
export const validation = {

    methods: {
        /**
         * check all inputs required in form
         * CreateBy: VXTHANH
         * CreateDate: 13/02/2022
         * @returns result
         */
        validateRequired() {
            let result = true;
            let inputRequired = this.$el.querySelectorAll('.input-required');
            inputRequired.forEach((input) => {
                let value = input.value;
                let span = input.parentElement.querySelector('.form-message');
                if (!value.trim()) {
                    input.classList.add('form-control-required');
                    span.classList.add('form-message-display');
                    span.innerHTML = Contrant.message.waringRequired
                    result = false;

                }
                else {
                    input.classList.remove('form-control-required');
                    span.classList.remove('form-message-display');
                }
            })

            // let inputDate = this.$el.querySelector('input[type=date]');
            // if (inputDate.value != '') {
            //     let span = inputDate.parentElement.querySelector('.form-message');
            //     console.log(span);

            //     let q = new Date();
            //     let m = q.getMonth() + 1;
            //     let d = q.getDay();
            //     let y = q.getFullYear();

            //     let date = new Date(m, d, y);

            //     let mydate = new Date(inputDate.value);
            //     console.log(date);
            //     console.log(mydate)

            //     // if (date >= mydate) {
            //     //     inputDate.classList.add('form-control-required');
            //     //     span.classList.add('form-message-display');
            //     //     span.innerHTML = Contrant.message.waringDate
            //     //     console.log('greate');
            //     //     result = false;
            //     // }
            //     // else {
            //     //     inputDate.classList.remove('form-control-required');
            //     //     span.classList.remove('form-message-display');
            //     //     console.log('samll');
            //     //     return true;
            //     // }

            // }

            return result;
        },
        /**
         * @returns validate all inputs which are emails input 
         * CreateBy: VXTHANH
         * CreateDate: 13/02/2022
         * @returns result
         */
        validateEmail() {
            let result = true;
            let inputEmail = this.$el.querySelectorAll('.form-control-email');
            var mailformat = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
            inputEmail.forEach(input => {
                let span = input.parentElement.querySelector('.form-message');
                if (input.value.match(mailformat)) {
                    input.classList.remove('form-control-required');
                    span.classList.remove('form-message-display');

                }
                else {
                    input.classList.add('form-control-required');
                    span.classList.add('form-message-display');
                    span.innerHTML = Contrant.message.waringEmail;
                    result = false;
                    return result;

                }
            })
            return result;
        },
        validateGeneral(e) {
            var mailformat = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
            let input = e.target;
            let name = input.getAttribute('name');
            let value = input.value;
            let span = input.parentElement.querySelector('.form-message');
            if (name === 'CustomerName') {
                if (!value.trim()) {
                    input.classList.add('form-control-required');
                    span.classList.add('form-message-display');
                    span.innerHTML = Contrant.message.waringRequired;
                    return false;
                }
                else {
                    input.classList.remove('form-control-required');
                    span.classList.remove('form-message-display');
                    return true;
                }
            }
            if (name === 'Email') {
                if (input.value.match(mailformat)) {
                    input.classList.remove('form-control-required');
                    span.classList.remove('form-message-display');
                    return true;

                }
                else {
                    input.classList.add('form-control-required');
                    span.classList.add('form-message-display');
                    span.innerHTML = Contrant.message.waringEmail;
                    return false


                }
            }
        }
    }

}