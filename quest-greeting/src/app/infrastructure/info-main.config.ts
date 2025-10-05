export enum RoutesMain {
  AuthorizationPage = 'authorization-page',
  Home = 'home',
  QuizMain = 'quiz-main'
}

export interface InfoMainModel {
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

export const INFO_CONFIG: InfoMainModel = {
  title: 'Вітаю з Днем Народження!',
  userName: 'Катруся',
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
