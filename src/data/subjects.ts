import elecPdf from '../../subjects/Electrodynamics/elec.pdf';
import ramPdf from '../../subjects/Rings_and_Modules/ram.pdf';
import itlmarPdf from '../../subjects/Introduction_to_Linear_Models_and_Regression/itlmar.pdf';
import odePdf from '../../subjects/Ordinary_Differential_Equations/ode.pdf';
import topoPdf from '../../subjects/Topology/topo.pdf';

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
    pdfPath: elecPdf,
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Ele.html',
  },
  {
    id: 'rings-modules',
    name: 'Rings and Modules',
    shortCode: 'RAM',
    pdfPath: ramPdf,
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/RM.html',
  },
  {
    id: 'linear-models-regression',
    name: 'Introduction to Linear Models and Regression',
    shortCode: 'LMR',
    pdfPath: itlmarPdf,
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/LMR.html',
  },
  {
    id: 'ordinary-differential-equations',
    name: 'Ordinary Differential Equations',
    shortCode: 'ODE',
    pdfPath: odePdf,
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/ODE.html',
  },
  {
    id: 'topology',
    name: 'Topology',
    shortCode: 'TOPO',
    pdfPath: topoPdf,
    courseInfoUrl: 'https://www.isibang.ac.in/~adean/infsys/database/Bmath/Top.html',
  },
];

export const getSubjectById = (id: string): Subject | undefined => {
  return SUBJECTS.find(subject => subject.id === id);
};
