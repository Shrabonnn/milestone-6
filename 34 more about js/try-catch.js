function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
   
    try {
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }else if(age<18){
            throw "Child not allow";
        }
        errorTag.innerText = ''
        
    } catch (error) {
        console.log('Error',error)
        errorTag.innerHTML = 'Something wrong '+error
        
    }
    // finally all time execute hobei
    finally{
        console.log('All done insidee try catch ')
    }
    console.log(1111)
}