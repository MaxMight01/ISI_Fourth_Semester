export interface Subject {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  pdfPath: string;
  courseInfoUrl: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: 'electrodynamics',
    name: 'Electrodynamics',
    shortCode: 'ELEC',
    description: 'Study of electric and magnetic fields and their interactions',
    pdfPath: '/subjects/Electrodynamics/elec.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Ele.html',
    chapters: [
      { id: 'ch01', number: 1, title: 'Fundamentals of Electromagnetism' },
    ],
  },
  {
    id: 'linear-models-regression',
    name: 'Introduction to Linear Models and Regression',
    shortCode: 'LMR',
    description: 'Statistical methods for modeling relationships between variables',
    pdfPath: '/subjects/Introduction_to_Linear_Models_and_Regression/itlmar.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/LMR.html',
    chapters: [
      { id: 'ch01', number: 1, title: 'Linear Regression Fundamentals' },
    ],
  },
  {
    id: 'ordinary-differential-equations',
    name: 'Ordinary Differential Equations',
    shortCode: 'ODE',
    description: 'Theory and methods for solving differential equations',
    pdfPath: '/subjects/Ordinary_Differential_Equations/ode.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/ODE.html',
    chapters: [
      { id: 'ch01', number: 1, title: 'Introduction to ODEs' },
    ],
  },
  {
    id: 'rings-modules',
    name: 'Rings and Modules',
    shortCode: 'RAM',
    description: 'Algebraic structures and module theory',
    pdfPath: '/subjects/Rings_and_Modules/ram.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/RM.html',
    chapters: [
      { id: 'ch01', number: 1, title: 'Ring Theory Foundations' },
    ],
  },
  {
    id: 'topology',
    name: 'Topology',
    shortCode: 'TOPO',
    description: 'Study of topological spaces and continuous mappings',
    pdfPath: '/subjects/Topology/topo.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Top.html',
    chapters: [
      { id: 'ch01', number: 1, title: 'Topological Spaces' },
    ],
  },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return SUBJECTS.find(subject => subject.id === id);
};

export const searchSubjects = (query: string): Subject[] => {
  const lowerQuery = query.toLowerCase();
  return SUBJECTS.filter(
    subject =>
      subject.name.toLowerCase().includes(lowerQuery) ||
      subject.shortCode.toLowerCase().includes(lowerQuery) ||
      subject.description.toLowerCase().includes(lowerQuery)
  );
};
