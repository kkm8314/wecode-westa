const thisIsButton = document.getElementById('logButton');
const thisIsid = document.getElementById('needId');
const thisIspwd = document.getElementById('needPwd');

const checkIdpwd = () => {
   console.log('checkIdpwd');
   if( thisIsid.value.length && thisIspwd.value.length) {
      thisIsButton.style.backgroundColor = '#4697EF';
   } else {
      thisIsButton.style.backgroundColor = '#badffa';
   }
};

// thisIsid.addEventListener('keyup',Checkip);
// thisIspwd.addEventListener('keyup',Checkip);
document.addEventListener('keyup', checkIdpwd)