const obj = {
    name: "John", // формат ключ - name, значение - "John"
    age: "25",
    isMarried: false
};

console.log(obj.name);
console.log(obj["name"]);
// Объект и его свойства помещаются в фигурные скобки {}.
// Обращение к свойству объекта производиться через указание имени переменной, точки и самого свойства. Либо через [""].


let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []]; // массив
// В массив можно помещать любые типы данных
console.log(arr[0]);
// К элементу массива можно обратиться при помощи порядкового номера. Отсчет начинается  с нуля.

