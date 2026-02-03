interface IUser {
  name: string;
  age: number;
  height?: number;
}

interface IPlayer extends IUser {
  passportId: number;
  roles: string;
  phone?: number;
}

let user: IUser[] = [
  {
    name: 'Ilnur',
    age: 35,
    height: 183,
  },
  {
    name: 'Vlad',
    age: 25,
    height: 174,
  },
  {
    name: 'Elnur',
    age: 31,
    height: 171,
  },
  {
    name: 'Nizam',
    age: 26,
    height: 175,
  },
  {
    name: 'Фарух',
    age: 36,
    height: 170,
  },
];

type UploadStatus = 'loading' | 'success' | 'error';
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

export function getSum(first: number, second: number): number {
  const sum = first + second;
  return sum;
}

getSum(5, 3);

function changeFormatText(word: string, textFormat: TextFormat): string {
  if (textFormat === 'uppercase') {
    return word.toUpperCase();
  }
  if (textFormat === 'lowercase') {
    return word.toLowerCase();
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

changeFormatText('Hello', 'lowercase');

function removeSymbol(word: string, symbol: string): string {
  return word.split(symbol).join('');
}

removeSymbol('names', 's');

const person: IUser[] = user.filter((el: IUser) => el.age > 26);
console.log(person);
