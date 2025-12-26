import { USER_KEYS } from './user-keys-collection';

export enum CurrentUserId {
  userNull = '0000',
  userOne = '1111' ,
  userTwo = '2222',
  userThree = '3333',
  userFour = '4444',
  userFive = '5555',
}

export enum RoutesMain {
  AuthorizationPage = 'authorization-page',
  Home = 'home',
  QuizMain = 'quiz-main'
}

export interface InfoMainModel {
  id: number;
  title: string
  userName: string;
  description: string;
  startNotice: string;
  errorMessage: string;
  placeholder: string;
  questions: Question[];
}

export interface Question {
  title: string
  question: string;
  correctResponse: string;
  incorrectResponse: string;
  imgUrl?: string;
}

export const INFO_CONFIG: InfoMainModel[] = [
  {
    id: 0,
    title: 'Вітаю з наступаючим Новиим Роком',
    userName: USER_KEYS.Katya,
    description: 'Сьогодні святковий день, і нехай цей квест зробить його незабутнім!',
    startNotice: 'Я підготував для тебе квест з чотирьох кроків,' +
      ' на кожному з яких ти ортимуватимеш невеличці сюрпризи, що вкінці приведуть тебе до ГОЛОВНОГО СЮРПРИЗУ.',
    errorMessage: 'В твоєму коді є помилка, спробуй ще раз)',
    placeholder: 'Сюди введи твій код',
    questions: [
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: 'assets/images/blank-photo.jpg'
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      }
    ]
  },
  {
    id: 1,
    title: 'Вітаю з Днем Народження!',
    userName: USER_KEYS.Igor,
    description: 'Сьогодні твій день, і нехай цей квест зробить його незабутнім!',
    startNotice: ' Це демонстраційна сторінка, яка показує, як зробити адаптивний інтерфейс за допомогою TailwindCSS.' +
      ' Спробуйте змінити розмір вікна браузера — контент автоматично підлаштовується під різні екрани 📱💻.',
    errorMessage: 'В твоєму коді є помилка, спробуй ще раз)',
    placeholder: 'Сюди введи твій код',
    questions: [
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: 'assets/images/blank-photo.jpg'
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      }
    ]
  },
  {
    id: 2,
    title: 'Вітаю з Днем Народження!',
    userName: USER_KEYS.Sasha,
    description: 'Сьогодні твій день, і нехай цей квест зробить його незабутнім!',
    startNotice: ' Це демонстраційна сторінка, яка показує, як зробити адаптивний інтерфейс за допомогою TailwindCSS.' +
      ' Спробуйте змінити розмір вікна браузера — контент автоматично підлаштовується під різні екрани 📱💻.',
    errorMessage: 'В твоєму коді є помилка, спробуй ще раз)',
    placeholder: 'Сюди введи твій код',
    questions: [
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: 'assets/images/blank-photo.jpg'
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      }
    ]
  },
  {
    id: 3,
    title: 'Вітаю з Днем Народження!',
    userName: USER_KEYS.Liza,
    description: 'Сьогодні твій день, і нехай цей квест зробить його незабутнім!',
    startNotice: ' Це демонстраційна сторінка, яка показує, як зробити адаптивний інтерфейс за допомогою TailwindCSS.' +
      ' Спробуйте змінити розмір вікна браузера — контент автоматично підлаштовується під різні екрани 📱💻.',
    errorMessage: 'В твоєму коді є помилка, спробуй ще раз)',
    placeholder: 'Сюди введи твій код',
    questions: [
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: 'assets/images/blank-photo.jpg'
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      },
      {
        title: '',
        question: '',
        correctResponse: '',
        incorrectResponse: '',
        imgUrl: ''
      }
    ]
  }
]
