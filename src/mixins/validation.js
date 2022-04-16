
export const validation = {

    methods: {
       
        validateInput(e){
            // console.log(e.tagName);
            let isValid = true;
            let input = (e.tagName==='INPUT') ? e : e.target;
            let parent = input.parentElement;
            let message = parent.querySelector('.form-message');
            let name = input.getAttribute('name');
            // console.log(name);
            if(name==='Email'){
                let mailformat = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
                if (!input.value.match(mailformat)) {
                    console.error('ko hop le');
                    this.showErrorMessage(message,'Vui lòng nhập đúng định dạng email');
                    isValid = false;
                 }
                 else {
                    message.classList.remove('form-message-display');
                   
                 }
            }
            else if(name==='PhoneNumber'){
                let phoneNumberFormat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
                if(!input.value.match(phoneNumberFormat)){
                  this.showErrorMessage(message,'Số điện thoại không hợp lệ');
                    isValid = false;
                }
                else {
                    message.classList.remove('form-message-display');
                }
            }
            else if(name==='Password') {   
                if(input.value.length<8) {
                    this.showErrorMessage(message,'Mật khẩu cần tối thiểu 8 kí tự');
                    isValid = false;
                }
                else {
                    message.classList.remove('form-message-display');
                }
            }
            else if(name==='PasswordConfirm'){
                let form = parent.parentElement;
                console.log(form)
                let password = form.querySelector('input[name="Password"]');
              
                if(password.value!='' && input.value!==password.value){
                    this.showErrorMessage(message,'Mật khẩu nhập lại không khớp');
                    isValid = false;
                }
                else {
                    message.classList.remove('form-message-display');
                }
            }
            else if(name==='Required'){
                if(input.value==''){
                    this.showErrorMessage(message,'Vui lòng nhập trường này');
                    isValid = false;
                }
                else {
                    message.classList.remove('form-message-display');
                }
            }
            else {
                isValid = true;
            }
            return isValid;
        },

        showErrorMessage(element, message) {
            element.innerHTML =message;
            element.classList.add('form-message-display');
        },

        validate(){
           let me = this;
           let checks=[];
           let form = document.querySelector('.form');
        //    console.log(form);
           let inputs = form.querySelectorAll('.form-control');
        //    console.log(inputs);
           inputs.forEach((input) => {
               let x = me.validateInput(input);
               checks.push(x);
           })
           var res = checks.some(check=> !check );
           return !res;
        },


       
    }

}