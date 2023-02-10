export default function validator(number) {
    if(number.toString().length > 3){
    let validNumber = number.toString().split('', number.toString().length);
    validNumber.splice(1, 0, ',');
    validNumber.join('');
    return validNumber;
    }
}