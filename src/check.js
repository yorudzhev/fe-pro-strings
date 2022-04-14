import { changeWord, replaceZAndVFromString, truncate } from './index';

changeWord('my name bohdan and I', 'bohdan', 'vlad'); // Должно вернуть 'my name vlad and I'
// Работаем по первому совпадению, на второе нам все равно. Если совпадений нет, возвращаем оригинальную строку с первого аргумента

replaceZAndVFromString('strt z and v'); // должно вернуть 'strt * and *';

truncate('test strubg ', 3); // Должно вернуть 'tes'
