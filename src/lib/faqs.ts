export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string; 
  }
  
  export const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I schedule an advising appointment?',
      answer: 'Schedule an appointment at https://cornell1.my.site.com/cu/s/appointments',
      category: 'advising',
    },
    {
      id: '2',
      question: 'What courses are required for the CIS major?',
      answer: 'Check the Engineering Handbook and CoursePlan tool on the "Course Planning" page for up-to-date requirements.',
      category: 'course',
    },
    {
      id: '3',
      question: 'Where can I submit a petition?',
      answer: 'Go to the Feedback page or visit the “Petition Forms” section under Resources.',
      category: 'petition',
    }
  ];
  