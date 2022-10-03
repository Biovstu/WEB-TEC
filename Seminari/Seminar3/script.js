// let a = 158
// a = a + 2
// alert('158 + 2 = ' + a)
// `${}` - обратный апостроф

// let a = prompt('Введите имя')
// alert('Привет, '+ a + '!')

// let a = prompt('Как вас зовут?', 'Имя')
// alert('Привет, '+ a + '!')

// function get_name(){
//     let fio = prompt('Как вас зовут?', 'Имя')
//     return 'Привет, '+ fio + '!'
// }
// alert(get_name())

// if (confirm('Вы уверены')) {
//     alert('Рады, что вы уверены')
// } else {alert('Жаль, что в не уверены');
// }

let age = parseInt(prompt('Ваш возраст?'))

switch (age) {
    case 80:
        alert(age + ' - Воу');
        break;
    case 60:
        alert(age + ' - Ух');
        break;
    case 20:
        alert(age + ' - Ес');
        break;
    default:
        alert(age + ' - Что-от на непонятном')
}