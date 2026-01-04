export interface Subject {
  id: string;
  name: string;
  shortCode: string;
  pdfPath: string;
  courseInfoUrl: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: 'electrodynamics',
    name: 'Electrodynamics',
    shortCode: 'ELEC',
    pdfPath: '/subjects/Electrodynamics/elec.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Ele.html',
  },
  {
    id: 'rings-modules',
    name: 'Rings and Modules',
    shortCode: 'RAM',
    pdfPath: '/subjects/Rings_and_Modules/ram.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/RM.html',
  },
  {
    id: 'linear-models-regression',
    name: 'Introduction to Linear Models and Regression',
    shortCode: 'LMR',
    pdfPath: '/subjects/Introduction_to_Linear_Models_and_Regression/itlmar.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/LMR.html',
  },
  {
    id: 'ordinary-differential-equations',
    name: 'Ordinary Differential Equations',
    shortCode: 'ODE',
    pdfPath: '/subjects/Ordinary_Differential_Equations/ode.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/ODE.html',
  },
  {
    id: 'topology',
    name: 'Topology',
    shortCode: 'TOPO',
    pdfPath: '/subjects/Topology/topo.pdf',
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Top.html',
  },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return SUBJECTS.find(subject => subject.id === id);
};
