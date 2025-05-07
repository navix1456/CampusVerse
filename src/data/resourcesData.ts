export interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string; // Added for YouTube thumbnails
}
//hi
// Detailed subject resources
export const subjectResources: Record<string, {
  name: string;
  code: string;
  pyqs: ResourceItem[];
  studyMaterials: ResourceItem[];
  youtube?: ResourceItem[];
  syllabus?: string;
}> = {
  'mat101': {
    name: 'Calculus',
    code: '',
    pyqs: [
      { name: 'PYQ Dec 2024', link: 'https://drive.google.com/file/d/146A_fcSXISYTj2fiLGKSmNrJ5JDewgBr/view?usp=sharing' },
      { name: 'PYQ Nov 2024', link: 'https://drive.google.com/file/d/1w_FrCYPLnCgyUDODgX7-qp0x8J-D-b7I/view?usp=sharing' },
      { name: 'PYQ July 2024', link: 'https://drive.google.com/file/d/1x4nUZbjMXAaj8E4jWwh1EHIbLZTSBavW/view?usp=sharing' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1yrmJazPzimrZAVQ1w27uP9CAEepfk8xt/view?usp=sharing' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1KgRUBM_yZ_QvL6XwUQdWxMbGkgnV8cXg/view?usp=sharing' },
      { name: 'PYQ DEC 2023', link: '' },
      { name: 'PYQ JAN 2023', link: '' },
      { name: 'PYQ MAY 2022', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ Nov 2018', link: '' },
      { name: 'PYQ 2013-2019', link: 'https://drive.google.com/file/d/1L_s1IJJD3Vj93Gp3wuG7Rsg8BeoKoafD/view?usp=sharing' },
      { name: 'CT 1, 2, 3 Papers', link: '' },
      { name: 'MCQ UNIT 1-5', link: '' },
      { name: 'Important Topics', link: '' },
      { name: 'Calculator List', link: '' },
      { name: 'Semester Strategy', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1 Question Bank', link: 'https://drive.google.com/file/d/1OY6VmspMfjK1QK_HAt4my_NvksIKS8xt/view?usp=drive_link' },
      { name: 'Unit 2 Question Bank', link: 'https://drive.google.com/file/d/1lqhubwxxjhpLnlyp2SqZWfpkXIFZeyCR/view?usp=drive_link' },
      { name: 'Unit 3 Question Bank', link: 'https://drive.google.com/file/d/1i6IlFJTnun6jYLI0WXWW55zz-c0K-mvK/view?usp=drive_link' },
      { name: 'Unit 4 Question Bank', link: 'https://drive.google.com/file/d/1pfXp7Bpk2mS0lRNooWW8Bd9xXKDg7hUR/view?usp=drive_link' },
      { name: 'Unit 5 Question Bank', link: 'https://drive.google.com/file/d/1wEDmoPpnAlQyeGF-4gRnuVfQeriyoPOj/view?usp=drive_link' },
      { name: 'Chapter 1: Matrices (PPT)', link: '' },
      { name: 'Chapter 2: Functions Of Several Variables (PPT)', link: '' },
      { name: 'Chapter 3: Ordinary Differential Equations (PPT)', link: '' },
      { name: 'Chapter 4: Differential Calculus And Beta Gamma Functions (PPT)', link: '' },
      { name: 'Chapter 5: Sequence And Series (PPT)', link: '' },
      { name: 'More Resources and Video Lectures from SRM', link: 'https://drive.google.com/drive/folders/1sJuCZdgQhQKVo6CRfOMH8gQCRzcYYxBG' }
    ],
    youtube: [
      {
        name: 'Dr. E. Suresh',
        link: 'https://www.youtube.com/@dresuresh/featured',
        thumbnail: '/uploads/yt_suresh.jpg',
      },
      {
        name: 'Dr. P. Godhanda Raman',
        link: 'https://www.youtube.com/@profpgraman/videos',
        thumbnail: '/uploads/yt_godhandaraman.jpg',
      },
      {
        name: 'Dr. E. Sujatha - Mathemagic',
        link: 'https://www.youtube.com/@sujathae4270',
        thumbnail: '/uploads/yt_sujatha.jpg',
      },
      {
        name: 'Alex Maths',
        link: 'https://www.youtube.com/@AlexMathsEngineering/videos',
        thumbnail: '/uploads/yt_alexmaths.jpg',
      },
    ],
    syllabus: 'https://drive.google.com/drive/folders/1PXNqDvXwL0a5HaaIhqUBU3DVsIjPQcki'
  },
  'foe101': {
    name: 'Linear Algebra',
    code: '',
    pyqs: [
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'Questions Bank', link: '' },
    ],
    studyMaterials: [
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'bms101': {
    name: 'Biomedical Sensors',
    code: '',
    pyqs: [
      { name: 'PYQ May 2023', link: '' },
    ],
    studyMaterials: [
      { name: 'Not Available', link: '' },
    ],
    syllabus: ''
  },
  'poe101': {
    name: 'Philosophy of Engineering',
    code: '',
    pyqs: [
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ Jul 2023', link: '' },
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'MCQ & Question Bank', link: '' },
      { name: 'Important Topics & Exam Pattern', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Introduction To Philosophy Of Engineering', link: '' },
      { name: 'Chapter 2: Ontology Of Engineering', link: '' },
      { name: 'Chapter 3: Epistemology Of Engineering', link: '' },
      { name: 'Chapter 4: Methodology Of Engineering', link: '' },
      { name: 'Chapter 5: Axiology Of Engineering', link: '' },
      { name: 'Study Material Drive Link', link: '' },
      { name: 'POE Semester Exam Strategies', link: '' },
      { name: 'Sem Exams General Rules', link: '' },
    ],
    syllabus: ''
  },
  'pps101': {
    name: 'Programming for Problem Solving',
    code: '',
    pyqs: [
      { name: 'PYQ Jun 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ May 19', link: '' },
      { name: 'PYQ Jan 2019', link: '' },
      { name: 'PYQ Nov 2018', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ July 2023', link: '' },
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ From NCR Campus (By BTECH CRUX)', link: '' },
      { name: 'CT Papers Compilation', link: '' },
      { name: 'Question Bank with MCQs', link: '' },
      { name: 'Alternate Question Bank with MCQs', link: '' },
      { name: 'Important Questions', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1', link: '' },
      { name: 'Chapter 2', link: '' },
      { name: 'Chapter 3', link: '' },
      { name: 'Chapter 4', link: '' },
      { name: 'Chapter 5', link: 'https://docs.google.com/document/d/1DSKwyPOatcLjz1I8IIcufIMfftjsencD/edit?usp=sharing&ouid=105740378810387406165&rtpof=true&sd=true' },
      { name: 'Study Material Drive Link', link: '' },
      { name: 'Study Material Drive Link From NCR Campus (By BTECH CRUX)', link: '' },
      { name: 'PPS Semester Exam Strategies', link: '' },
      { name: 'Sem Exams General Rules', link: '' },
    ],
    syllabus: ''
  },
  'icb101': {
    name: 'Introduction to Computational Biology',
    code: '',
    pyqs: [
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ Jul 2023', link: '' },
      { name: 'PYQ Jul 2023 Paper 2', link: '' },
      { name: 'PYQ Jun 2023', link: '' },
      { name: 'PYQ Dec 2023 Paper 2', link: '' },
      { name: 'PYQ Nov 2024', link: '' },
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'Important Topics', link: '' },
      { name: 'HOTs Questions Unit 1 to 5, Question Banks, MCQs & More', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Cell And Evolution', link: '' },
      { name: 'Chapter 2: Basics In Biochemistry', link: '' },
      { name: 'Chapter 3: Structure Biology', link: '' },
      { name: 'Chapter 4: Neurobiology', link: '' },
      { name: 'Chapter 5: Immunobiology', link: '' },
      { name: 'Study Material Drive Link', link: '' },
      { name: 'Computational Bio Semester Exam Strategies', link: '' },
      { name: 'Sem Exams General Rules', link: '' },
    ],
    syllabus: ''
  },
  'clb101': {
    name: 'Cell Biology',
    code: '',
    pyqs: [
      { name: 'PYQ Jun 2023', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ Dec 2022', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1', link: '' },
      { name: 'Chapter 2', link: '' },
      { name: 'Chapter 3', link: '' },
      { name: 'Chapter 4', link: '' },
      { name: 'Chapter 5', link: '' },
    ],
    syllabus: ''
  },
  'pac101': {
    name: 'Physical and Analytical Chemistry',
    code: '',
    pyqs: [
      { name: 'PYQ May 2023', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1 (NOT AVAILABLE)', link: '' },
      { name: 'Chapter 2 (NOT AVAILABLE)', link: '' },
      { name: 'Chapter 3 (NOT AVAILABLE)', link: '' },
      { name: 'Chapter 4 (NOT AVAILABLE)', link: '' },
      { name: 'Chapter 5 (NOT AVAILABLE)', link: '' },
    ],
    syllabus: ''
  },
  'frl101': {
    name: 'Foreign Language',
    code: '',
    pyqs: [
      { name: 'FRENCH PYQ OCT 2024', link: 'https://drive.google.com/file/d/1R9f-b55k8X_87oFIVhVqIAl3GPTNeFDx/view?usp=sharing' },
      { name: 'FRENCH PYQ CT WITH ANSWERS', link: 'https://drive.google.com/file/d/1vqKtIr71XzgyxyO7XCVXPW74Ap5ZCpb9/view?usp=sharing' },
      { name: 'FRENCH PYQ MAY 2024', link: 'https://drive.google.com/file/d/13nH0C3_5kZu_H_bW2UYk5OTcJRcyz04W/view?usp=sharing' },
      { name: 'FRENCH PYQ MAY 2023', link: 'https://drive.google.com/file/d/1Gz1Mw7CVt1JcVZJj0Gtx1DM9T2Av61R0/view?usp=sharing' },
      { name: 'FRENCH PYQ CT1', link: 'https://drive.google.com/file/d/1Mvjlka7zRz3zYBUjYPQf3cr-mb8Ln1Sr/view?usp=sharing' },
      { name: 'GERMAN PYQ JAN 2022', link: '' },
      
    ],
    studyMaterials: [
      { name: 'French NOTES', link: 'https://drive.google.com/file/d/1NEWlkJWNnl0QkadJqKPmoXga4ybLEBd7/view?usp=sharing' },
      { name: 'French Book Translation', link: '' },
      { name: 'FRENCH IMPORTANT NOTES(HINDI)', link: 'https://drive.google.com/file/d/16NUw7Wq-4f-eWeqv9qRlhLqTRYLAga1V/view?usp=sharing' },
      { name: 'FRENCH LA CIVILIZATION ', link: 'https://drive.google.com/file/d/1-bqhgfmsxTVxVm-gUxZN0u2F6fPdK9Um/view?usp=sharing' },
      { name: 'GERMAN SEMESTER NOTES', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/german/german-first-semester-notes/120646699?origin=course-trending-2' },
      { name: 'Japanese Book', link: '' },
      { name: 'Chinese Book', link: '' },
    ],
    syllabus: ''
  },
  'chy101': {
    name: 'CHY101',
    code: 'CHY101',
    pyqs: [
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ Nov 2018', link: '' },
      { name: 'More PYQs', link: '' },
      { name: 'PYQ CT Papers', link: '' },
      { name: 'MCQs For All Units', link: '' },
      { name: 'Important Questions: CTs and SEM', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Periodic Properties', link: '' },
      { name: 'Chapter 2: Use Of Free Energy In Chemical Equilibria', link: '' },
      { name: 'Chapter 3: Stereo Chemistry And Organic Reactions', link: '' },
      { name: 'Chapter 4: Polymers', link: '' },
      { name: 'Chapter 5: Advanced Engineering Materials', link: '' },
      { name: 'BEST NOTES', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'mat102': {
    name: 'Advanced Calculus and Complex Analysis',
    code: '',
    pyqs: [
      { name: 'CT Papers Compilation', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jul 2023', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ May 2022', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'Calculator List Updated For 2024', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Integral Calculus', link: '' },
      { name: 'Chapter 2: Vector Calculus', link: '' },
      { name: 'Chapter 3: Laplace Transform', link: '' },
      { name: 'Chapter 4: Analytical Functions', link: '' },
      { name: 'Chapter 5: Complex Integration', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    youtube: [
      {
        name: 'Dr. E. Suresh',
        link: 'https://www.youtube.com/@dresuresh/featured',
        thumbnail: '/uploads/yt_suresh.jpg',
      },
      {
        name: 'Dr. P. Godhanda Raman',
        link: 'https://www.youtube.com/@profpgraman/videos',
        thumbnail: '/uploads/yt_godhandaraman.jpg',
      },
      {
        name: 'Dr. E. Sujatha - Mathemagic',
        link: 'https://www.youtube.com/@sujathae4270',
        thumbnail: '/uploads/yt_sujatha.jpg',
      },
      {
        name: 'Alex Maths',
        link: 'https://www.youtube.com/@AlexMathsEngineering/videos',
        thumbnail: '/uploads/yt_alexmaths.jpg',
      },
    ],
    syllabus: ''
  },
  'eee101': {
    name: 'Electrical and Electronics Engineering',
    code: '',
    pyqs: [
      { name: 'PYQ Jul 2022', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jul 2023', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'CT PYQs', link: '' },
      { name: 'Important Topics', link: '' },
      { name: 'Important Questions', link: '' },
      { name: 'Question Bank', link: '' },
      { name: 'MCQ Question Bank', link: '' },
      { name: 'Calculator List Updated For 2024', link: '' },
    ],
    studyMaterials: [
      { name: 'Electric Circuits', link: '' },
      { name: 'Electronics', link: '' },
      { name: 'Machines And Drives', link: '' },
      { name: 'Transducers And Sensors', link: '' },
      { name: 'Power Engineering', link: '' },
      { name: 'EEE Lab Manual', link: '' },
      { name: 'EEE Book', link: '' },
      { name: 'Handwritten Notes by THE HELPER', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'spc101': {
    name: 'Semiconductor Physics and Computational Methods',
    code: '',
    pyqs: [
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'PYQ Nov 2018', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'CT Papers', link: '' },
      { name: 'MCQs & Question Banks', link: '' },
      { name: 'Important Topics', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Energy Bands In Solids', link: '' },
      { name: 'Chapter 2: Carrier Transport Mechanism In Semiconductors', link: '' },
      { name: 'Chapter 3: Optoelectronic Properties Of Semiconductors', link: '' },
      { name: 'Chapter 4: Electrical And Optical Measurements', link: '' },
      { name: 'Chapter 5: Low Dimensional Semiconductor Materials', link: '' },
      { name: 'All Derivations', link: '' },
      { name: 'Handwritten Notes (By THE HELPER)', link: '' },
      { name: 'Lesson Plan', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'oop101': {
    name: 'Object Oriented Design and Programming',
    code: '',
    pyqs: [
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ Dec 2022', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ May 2022', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'Important Questions', link: '' },
      { name: 'MCQ For All Units', link: '' },
      { name: 'Question Bank', link: '' },
      { name: 'More Questions', link: '' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Introduction To OOPS', link: '' },
      { name: 'Chapter 2: Methods And Polymorphism', link: '' },
      { name: 'Chapter 3: Inheritence', link: '' },
      { name: 'Chapter 4: Generic Programming', link: '' },
      { name: 'Chapter 5: Standard Template Library', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'eng101': {
    name: 'Communicative English',
    code: '',
    pyqs: [
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ May 2019', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'Writing Format', link: '' },
      { name: 'More PYQs', link: '' },
    ],
    studyMaterials: [
      { name: 'Complete Notes', link: '' },
    ],
    syllabus: ''
  },
  'bcm101': {
    name: 'BCM101',
    code: 'BCM101',
    pyqs: [
      { name: 'PYQ Dec 2022', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ May 2023', link: '' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: '' },
      { name: 'Chapter 1: Introduction To Biochemistry', link: '' },
      { name: 'Chapter 2: Introduction To Metabolism, Bioenergetics And Photosynthesis', link: '' },
      { name: 'Chapter 3: Carbohydrate Metabolism', link: '' },
      { name: 'Chapter 4: Protein Turnover And Amino Acids Metabolism', link: '' },
      { name: 'Chapter 5: Fatty Acids And Nucleic Acids Metabolism', link: '' },
      { name: 'Book 1', link: '' },
      { name: 'Book 2', link: '' },
      { name: 'Book 3', link: '' },
      { name: 'Book 4', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'emp101': {
    name: 'EMP101',
    code: 'EMP101',
    pyqs: [
      { name: 'PYQ Jan 2023', link: '' },
      { name: 'PYQ Nov 2019', link: '' },
      { name: 'PYQ Nov 2018', link: '' },
      { name: 'PYQ Jul 2022', link: '' },
      { name: 'PYQ Dec 2023', link: '' },
      { name: 'Question Bank', link: '' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: '' },
      { name: 'Chapter 1: Electromagnetism And Dielectrics', link: '' },
      { name: 'Chapter 2: Magnetic Materials', link: '' },
      { name: 'Chapter 3: Quantum Mechanics', link: '' },
      { name: 'Chapter 4: Wave Optics', link: '' },
      { name: 'Chapter 5: Lasers And Fiber Optics', link: '' },
      { name: 'Lab Manual', link: '' },
      { name: 'Study Material Drive Link', link: '' },
    ],
    syllabus: ''
  },
  'mec101': {
    name: 'MEC101',
    code: 'MEC101',
    pyqs: [
      { name: 'PYQ Jul 2023', link: '' },
      { name: 'PYQ Jan 2024', link: '' },
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ Jul 2024', link: '' },
    ],
    studyMaterials: [
      { name: 'Complete Study Materials(Coming Soon)', link: '' },
    ],
    syllabus: ''
  },
  'mcb101': {
    name: 'MCB101',
    code: 'MCB101',
    pyqs: [
      { name: 'No PYQ Available', link: '' },       
    ],
    studyMaterials: [
      { name: 'Chapter 1: Cell Basic Unit Of Life', link: 'https://drive.google.com/file/d/1NRFIYVvPyYih-WuhBQnQGVWPhv7ASqYD/view?usp=drive_link' },
      { name: 'Chapter 2: Macromolecules And Metabolism', link: 'https://drive.google.com/file/d/1RCrH9GGmoI50OIbebr-HTq_xTPQo3T2r/view?usp=drive_link' },
      { name: 'Chapter 3: Microbiology In Human Life', link: 'https://drive.google.com/file/d/1UazVTgPXBXMdNn2_AUWpZSLvojCxmIaW/view?usp=drive_link' },
      { name: 'Chapter 4: Basics Of Biosensors And Molecular Motors', link: 'https://drive.google.com/file/d/1uAAaIla-HrgxRNK7B3xWYguTn4WiGEpA/view?usp=drive_link' },
      { name: 'Chapter 5: Basics Of Biomaterials And Its Applications', link: 'https://drive.google.com/file/d/18XsScrneIkTnubSSC8x5wPxIslfE3VwU/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1GstO6YIhVnp3YkzmnXLboryZ7pt144e4?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1jh_gGXy9sl49KdoNXJovZ_b2v1NIavEQ/view?usp=drive_link'
  },
  'erm101': {
    name: 'ERM101',
    code: 'ERM101',
    pyqs: [
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/1tNHHQUDHh2XjWIBwuZEzAUWO4s7FgrzH/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/1h5IKT4P75kHK5VVJlHOQKMJ7Pir8uNer/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1wEqW5D0mbxHCamg_GsAbV6ejvPgqHbtN/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Chapter 1: Statics Of Particles And Rigid Bodies', link: 'https://drive.google.com/file/d/1ehp9LpWVmZK6iolUU3ZIitTyBdHxlyjQ/view?usp=drive_link' },
      { name: 'Chapter 2: Analysis Of Friction And Trusses', link: 'https://drive.google.com/file/d/1gJihOk16LcxHv8ksQZyuQCpZXQ3xaf2y/view?usp=drive_link' },
      { name: 'Chapter 3: Centroid And Moment Of Inertia', link: 'https://drive.google.com/file/d/1D7P7kteOwQ9mR3Spn9hDeOuqOipyMhbw/view?usp=drive_link' },
      { name: 'Chapter 4: Dynamics Of Particles', link: 'https://drive.google.com/file/d/1YoRW-ktfYUsgkDr7jHvqNOADL5adHd1i/view?usp=drive_link' },
      { name: 'Chapter 5: Dynamics Of Rigit Bodies', link: 'https://drive.google.com/file/d/1wGJmZkFRhTHs4LJ87XRa9cMnjz8Rr-6Y/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1rAg-nqvBY8sGLzk9suY8Z0yymRKcewkK?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1uFyCWN8nkYK7EXh8JDoVLAaXzUgdW5V-/view?usp=drive_link'
  },
  'esp101': {
    name: 'ESP101',
    code: 'ESP101',
    pyqs: [
      { name: 'CT PYQs', link: 'https://drive.google.com/file/d/1OrYUe3ap-dzi_cgKfXxU8SKfme9og5QY/view?usp=sharing' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1FLZ8_bkvssS3XCpB4WoK0f4uXSyxgCRg/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Chapter 1', link: 'https://drive.google.com/file/d/1xLz8rvWEIGNx5G_xp7pbj16PXc1RePzD/view?usp=drive_link' },
      { name: 'Chapter 2', link: 'https://drive.google.com/file/d/1vLoBG06uZynECvwDH4HB7K1VUAGP-s5u/view?usp=drive_link' },
      { name: 'Chapter 3', link: 'https://drive.google.com/file/d/1mSBNgA_GDDc78NI2EuYnOhYwcuLhBrfc/view?usp=drive_link' },
      { name: 'Chapter 4', link: 'https://drive.google.com/file/d/1b_ZiLpNGmThJd6ICmdWEcczsG9-9kLVI/view?usp=drive_link' },
      { name: 'Chapter 5', link: 'https://drive.google.com/file/d/14bViNuwvrQ_IWrSro7brk6PdmXIvpVck/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1Ricox9G6hNpqKtrTis8xzZX0JrEqSxz-?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1G4b2XgLgJqa8GGFg8clzeo_AOaZnR1Mg/view?usp=sharing'
  },
  'dsa101': {
    name: 'Data Structures And Algorithm',
    code: 'DSA101',
    pyqs: [
      { name: 'ALL PYQS(UNIT 1-5)', link: 'https://pulkitshringi.notion.site/DAA-b0742b362861488f92b464377787fe35' }
    
    ],
    studyMaterials: [
      { name: 'ALL', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: '' },
    ],
    syllabus: ''
  },
  'coa101': {
    name: 'Computer Organization And Architecture',
    code: 'COA101',
    pyqs: [
      { name: 'PYQ May 2024', link: '' },
      { name: 'PYQ Jul 2024', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Nov 2023', link: '' },
      { name: 'PYQ Dec 2022', link: '' },
      { name: 'CT Papers', link: '' }
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: '' }
    ],
    syllabus: ''
  },
  'ops101': {
    name: 'Operating Systems',
    code: 'OPS101',
    pyqs: [
      { name: 'PYQ Jun 2023', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ May 2022', link: '' },
      { name: 'More PYQs', link: '' },
      { name: 'CT Papers', link: '' }
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
      { name: 'Handwritten Notes by AbT', link: '' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: '' }
    ],
    syllabus: ''
  },
  'tbv101': {
    name: 'Transforms And Boundary Value Problems',
    code: 'TBV101',
    pyqs: [
      { name: 'PYQ May 2022', link: '' },
      { name: 'PYQ May 2023', link: '' },
      { name: 'PYQ Jun 2023', link: '' },
      { name: 'PYQ Dec 2018', link: '' },
      { name: 'CT Papers', link: '' }
    ],
    studyMaterials: [
      { name: 'Unit 1 (Best Handwritten Notes + PPTs', link: '' },
      { name: 'Unit 2 (Best Handwritten Notes + PPTs', link: '' },
      { name: 'Unit 3 (Best Handwritten Notes + PPTs', link: '' },
      { name: 'Unit 4 (Best Handwritten Notes + PPTs', link: '' },
      { name: 'Unit 5 (Best Handwritten Notes + PPTs', link: '' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: '' }
    ],
    youtube: [
      {
        name: 'Dr. E. Suresh',
        link: 'https://www.youtube.com/@dresuresh/featured',
        thumbnail: '/uploads/yt_suresh.jpg',
      },
      {
        name: 'Dr. P. Godhanda Raman',
        link: 'https://www.youtube.com/@profpgraman/videos',
        thumbnail: '/uploads/yt_godhandaraman.jpg',
      },
      {
        name: 'Dr. E. Sujatha - Mathemagic',
        link: 'https://www.youtube.com/@sujathae4270',
        thumbnail: '/uploads/yt_sujatha.jpg',
      },
      {
        name: 'Alex Maths',
        link: 'https://www.youtube.com/@AlexMathsEngineering/videos',
        thumbnail: '/uploads/yt_alexmaths.jpg',
      },
    ],
    syllabus: ''
  },
  'app101': {
    name: 'APP101',
    code: 'APP101',
    pyqs: [
      { name: 'CT Papers', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'Coming Soon' },
      { name: 'Unit 2', link: 'Coming Soon' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: '' },
    ],
    syllabus: ''
  },
  'dtm101': {
    name: 'DTM101',
    code: 'DTM101',
    pyqs: [
      { name: 'NO EXAMS!', link: '' },
    ],
    studyMaterials: [
      { name: 'Resources', link: '' },
      { name: 'Resources From NCR Campus By BTECH CRUX', link: '' },
    ]
  },
  'daa101': {
    name: 'Design and Analysis of Algorithms',
    code: 'DAA101',
    pyqs: [
      { name: 'CT Papers', link: '' },
      { name: 'Question Bank', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
    ],
    syllabus: ''
  },
  'dbms101': {
    name: 'Database Management Systems',
    code: 'DBMS101',
    pyqs: [
      { name: 'CT Papers', link: '' },
      { name: 'SEM Papers', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
    ],
    syllabus: ''
  },
  'ai101': {
    name: 'AI101',
    code: 'AI101',
    pyqs: [
      { name: 'PYQ CT Papers', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
    ],
    syllabus: ''
  },
  'swp101': {
    name: 'SWP101',
    code: 'SWP101',
    pyqs: [
      { name: 'Coming Soon', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
    ],
    syllabus: ''
  },
  'ml101': {
    name: 'ML101',
    code: 'ML101',
    pyqs: [
      { name: 'PYQ ML JAN 2023', link: 'https://drive.google.com/file/d/1PPI5uM9XaFD11dV0wyOXWVAO8uwzPKVR/view?usp=sharing' },
      { name: 'PYQ ML MAY 2022', link: 'https://drive.google.com/file/d/1QxeF-qmoSQ2ObNhLFYGhKn_LECd5LbDS/view?usp=sharing' },
      { name: 'PYQ ML NOV 2018', link: 'https://drive.google.com/file/d/1SCXnSb37AtRP7xunsLPV-SxznGAiSahp/view?usp=sharing' },
      { name: 'PYQ ML JUNE 2019', link: 'https://drive.google.com/file/d/1yHA4MhOoxRYH7DAhVX2Mq8o-3uCNRj3O/view?usp=sharing' },
      { name: 'ML CT2 2017', link: 'https://drive.google.com/file/d/19REJXCLeEzItsgueFFO-ZU6TLsdZZH8W/view?usp=sharing' },
      { name: 'ML CT1 2018', link: 'https://drive.google.com/file/d/1PXhM8TDYKssQINUbEQqLh1BxozIesyfD/view?usp=sharing' },
      { name: 'ML QUESTION BANK', link: 'https://drive.google.com/file/d/1Q52QGfIQuqpryWgtDIxo24dyVPxk3bzh/view?usp=sharing' }
    ],
    studyMaterials: [
      { name: 'UNIT 1 ML', link: 'https://drive.google.com/file/d/1r72xsDwyYohfp7U-gWwHo2ByqrWFQ_sR/view?usp=sharing' },
      { name: 'UNIT 2 ML', link: 'https://drive.google.com/file/d/1ajYOLAzQbBfgoFLRwqPNSBk6A3scAmwO/view?usp=sharing' },
      { name: 'UNIT 3 ML', link: 'https://drive.google.com/file/d/1Z84wvJRWftOJHQlzkSp1NSPTWPpaT6Q9/view?usp=sharing' },
      { name: 'UNIT 4 ML', link: 'https://drive.google.com/file/d/1gMHagoLGjovaNt4pM3WlNH-LlrHflLwx/view?usp=sharing' },
      { name: 'UNIT 5 ML', link: 'https://drive.google.com/file/d/1h7ZNPn2CSMAHUjrM6ebZuzUt_stKL_rS/view?usp=sharing' }
    ]
  },
  'egd101': {
    name: 'EGD101',
    code: 'EGD101',
    pyqs: [
      { name: 'PYQ April 2025', link: 'https://drive.google.com/file/d/1o_SSGmmYviZS7IJrUL8PGu1OZPJV3Z3f/view?usp=sharing' }
    ],
    studyMaterials: [
      { name: 'DRAWING PDFS', link: 'https://drive.google.com/drive/folders/1W_aVgz8ahqB3YIlbZNIEZsRc9sM87D1q' },
      { name: 'ALL EXPERIMENT VIDEOS', link: 'https://drive.google.com/drive/folders/1KwmLFX0e0PNH-iMCgCnsgFZdNZICTKEY' }
    ],
    youtube: [
      {
        name: 'Paulraj Ganesan Drawing [CAD DRAFTER]',
        link: 'https://www.youtube.com/@paulrajganesan7698',
        thumbnail: '/uploads/yt_paulraj.jpg'
      },
      {
        name: 'AutoCAD SRM',
        link: 'https://www.youtube.com/@Autocadtr/videos',
        thumbnail: '/uploads/yt_autocad.jpg'
      }
    ]
  },
 
  'iot101': {
    name: 'IOT101',
    code: 'IOT101',
    pyqs: [
      { name: 'CT PYQs', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3 (COMING SOON)', link: '' },
      { name: 'Unit 4 (COMING SOON)', link: '' },
      { name: 'Unit 5 (COMING SOON)', link: '' },
    ],
    syllabus: ''
  },
  'pqt101': {
    name: 'PQT101',
    code: 'PQT101',
    pyqs: [
      { name: 'ALL PYQS Compilation', link: 'https://pulkitshringi.notion.site/Maths-041a8614c98943d3bdd01db62178783b' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: '' },
      { name: 'Unit 2', link: '' },
      { name: 'Unit 3', link: '' },
      { name: 'Unit 4', link: '' },
      { name: 'Unit 5', link: '' },
    ],
    syllabus: ''
  },
  'soe101': {
    name: 'SOE101',
    code: 'SOE101',
    pyqs: [
      { name: 'ALL UNITS PYQ ', link: 'https://pulkitshringi.notion.site/Social-Engineering-f89400ae89654d4cbd5d62f40cf8ad55' },
     
    ],
    studyMaterials: [
      { name: 'Study Materials', link: '' },
    ]
  },
  'dld101': {
    name: 'Digital Logic Design',
    code: 'DLD101',
    pyqs: [
      { name: 'Coming Soon', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit - 1', link: '' },
      { name: 'Unit - 2', link: '' },
      { name: 'Unit - 3', link: '' },
      { name: 'Unit - 4', link: '' },
      { name: 'Unit - 5', link: '' },
      { name: 'More Study Materials', link: '' },
    ],
    syllabus: ''
  },
  'ssd101': {
    name: 'Solid State Devices',
    code: 'SSD101',
    pyqs: [
      { name: 'Important Topics', link: '' },
      { name: 'PYQs Coming Soon', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit - 1', link: '' },
      { name: 'Unit - 2', link: '' },
      { name: 'Unit - 3', link: '' },
      { name: 'Unit - 4', link: '' },
      { name: 'Unit - 5', link: '' },
      { name: 'More Study Materials', link: '' },
    ],
    syllabus: ''
  },
  'bio101': {
    name: 'Biochemistry',
    code: 'BIO101',
    pyqs: [
      { name: 'PYQ MAY 2023', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/biochemistry/21btc101t-may-2023/94347429/download/21btc101t-may-2023.pdf' },
      { name: 'PYQ 2017-2022', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/biochemistry/biochemistry-pyp-previous-year-question-paper-2017-2022/69367194/download/biochemistry-pyp-previous-year-question-paper-2017-2022.pdf' },
      { name: 'PYQ MAY 2016', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/biochemistry/15bt103-2-sem-past-question-paper/94347318/download/15bt103-2-sem-past-question-paper.pdf' }
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/file/d/1bdPmFfypqJyalCqI1c8FVMmZ6YOv-09t/view?usp=drive_link' },
      { name: 'Unit 2 (Contribute)', link: '' },
      { name: 'Unit 3 (Contribute)', link: '' },
      { name: 'Unit 4 (Contribute)', link: '' },
      { name: 'Unit 5 (Contribute)', link: '' }
    ],
    youtube: []
  },
  'emt101': {
    name: 'Electromagnetic Theory And Interference',
    code: 'EMT101',
    pyqs: [
      { name: 'PYQ DEC 2023', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/electromagnetic-theory-and-interference/21ecc205t-semester-qp/100444776/download/21ecc205t-semester-qp.pdf' },
      { name: 'Question Bank (Contribute)', link: '' }
    ],
    studyMaterials: [
      { name: 'Unit - 1 (Contribute)', link: '' },
      { name: 'Unit - 2 (Contribute)', link: '' },
      { name: 'Unit - 3 (Contribute)', link: '' },
      { name: 'Unit - 4 (Contribute)', link: '' },
      { name: 'Unit - 5 (Contribute)', link: '' },
      { name: 'Handwritten Notes (Contribute)', link: '' },
      { name: 'More Study Materials (Contribute)', link: '' }
    ]
  },
  'bce101': {
    name: 'Basic Chemical Engineering',
    code: 'BCE101',
    pyqs: [
      { name: 'CT 3 2023', link: 'https://www.studocu.com/in/document/srm-institute-of-science-and-technology/chemical-engineering-principles/1-bce-cla-t-3-set-a-qp-and-key/84556187/download/1-bce-cla-t-3-set-a-qp-and-key.pdf' }
    ],
    studyMaterials: [
      { name: 'Unit - 1 (Contribute)', link: '' },
      { name: 'Unit - 2 (Contribute)', link: '' },
      { name: 'Unit - 3 (Contribute)', link: '' },
      { name: 'Unit - 4 (Contribute)', link: '' },
      { name: 'Unit - 5 (Contribute)', link: '' },
      { name: 'Handwritten Notes', link: 'https://drive.google.com/file/d/1CQ0KTBV9ig6KG_-emb-gJ8u2TncXI3ok/view?usp=drive_link' },
      { name: 'More Study Materials (Contribute)', link: '' }
    ]
  },
  'fla101': {
    name: 'Formal Language And Automata',
    code: '',
    pyqs: [
      { name: 'PYQ DEC 2022', link: 'https://drive.google.com/file/d/1UFUvBMiv_xdRxKXJD9Pepa4_6o2Gv4LL/view?usp=sharing' },
      { name: 'PYQ NOV 2024', link: 'https://drive.google.com/file/d/1qqpmDSJTXSyFvr_5d8jtU71ibYhukHDj/view?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'UNIT 1', link: 'https://drive.google.com/file/d/1MStJtVG7F1aSXjnJF3rfqMrXKInWoMit/view?usp=sharing' },
      { name: 'UNIT 2', link: 'https://drive.google.com/file/d/1QDICPe0huuOkYYuhAeIcDzGaYbWKrcp6/view?usp=sharing' },
      { name: 'UNIT 3', link: 'https://drive.google.com/file/d/1DORe2E4Zz8f_7wTP1Qh0K_CLWD90dCjh/view?usp=sharing' },
      { name: 'UNIT 4', link: 'https://drive.google.com/file/d/1-kVwi_UHPiYMdUCuqxz_uYaF_HdWEFqr/view?usp=sharing' },
      { name: 'UNIT 5', link: 'https://drive.google.com/file/d/1CWA3LwKySunvicnJoodZcFIoa0oUlEQr/view?usp=sharing' },
    ],
  },
  'fla102': {
    name: 'FLA102',
    code: 'FLA102',
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/file/d/1WwlOwVuqvm8pIV9PFEo1fvnkBjc3WF5-/view?usp=sharing' },
      { name: 'Imp Questions & MCQs', link: 'https://drive.google.com/drive/folders/1o91F0pHEIFDO95eVn_ad6UPyv8Qq7HCS?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Study Materials', link: 'https://drive.google.com/drive/folders/16XDz1RuY1zKHIqvso0-CB3G8iV0QAE5c?usp=drive_link' },
    ],
    youtube: []
  },
  'fla103': {
    name: 'FLA103',
    code: 'FLA103',
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/file/d/1WwlOwVuqvm8pIV9PFEo1fvnkBjc3WF5-/view?usp=sharing' },
      { name: 'Imp Questions & MCQs', link: 'https://drive.google.com/drive/folders/1o91F0pHEIFDO95eVn_ad6UPyv8Qq7HCS?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Study Materials', link: 'https://drive.google.com/drive/folders/16XDz1RuY1zKHIqvso0-CB3G8iV0QAE5c?usp=drive_link' },
    ],
    youtube: []
  },
  'fla105': {
    name: 'FLA105',
    code: 'FLA105',
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/file/d/1WwlOwVuqvm8pIV9PFEo1fvnkBjc3WF5-/view?usp=sharing' },
      { name: 'Imp Questions & MCQs', link: 'https://drive.google.com/drive/folders/1o91F0pHEIFDO95eVn_ad6UPyv8Qq7HCS?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Study Materials', link: 'https://drive.google.com/drive/folders/16XDz1RuY1zKHIqvso0-CB3G8iV0QAE5c?usp=drive_link' },
    ],
    youtube: []
  },
  'fla106': {
    name: 'FLA106',
    code: 'FLA106',
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/file/d/1WwlOwVuqvm8pIV9PFEo1fvnkBjc3WF5-/view?usp=sharing' },
      { name: 'Imp Questions & MCQs', link: 'https://drive.google.com/drive/folders/1o91F0pHEIFDO95eVn_ad6UPyv8Qq7HCS?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Study Materials', link: 'https://drive.google.com/drive/folders/16XDz1RuY1zKHIqvso0-CB3G8iV0QAE5c?usp=drive_link' },
    ],
    youtube: []
  },
  'cn101': {
    name: 'CN101',
    code: 'CN101',
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1xq84jouh4duoeqnUb-x2GRIvU3bcTzSP/view?usp=sharing' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/12MpUDfaevqFDeK5KY-FuSx6J4rBNoaK2/view?usp=sharing' },
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/1zvz5-1zmcc3c85tWRML6VNTCbQcorhUQ/view?usp=sharing' }
    ],
    studyMaterials: [
      { name: 'Unit 1 MCQ QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT1/UNIT%201%20MCQ%20Question%20bank.docx' },
      { name: 'Unit 2 Notes', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/Unit-2.pdf&embedded=true' },
      { name: 'Unit 2 PPT', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/Unit%202%20ppt.pdf&embedded=true' },
      { name: 'Unit 3 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/UNIT%203.pptx' },
      { name: 'Unit 4 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT3/UNIT%204.pptx' },
      { name: 'Unit 5 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT3/UNIT%205.pptx' },
      { name: 'Unit 1 QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%201.doc' },
      { name: 'Unit 2 QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%202.doc' },
      { name: 'Unit 3 QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%203.doc' },
      { name: 'Unit 4 QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%204.docx' },
      { name: 'Unit 5 QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20unit%205.docx' },
      { name: 'MCQ QB for All Units', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/CN_MCQ_GOD.pdf&embedded=true' }
    ],
    syllabus: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Syllabus.pdf&embedded=true',
    youtube: []
  },
  'cd101': {
    name: 'Compiler Design',
    code: '',
    pyqs: [
      { name: 'PYQ MAY 2023 (1)', link: 'https://drive.google.com/file/d/1xq84jouh4duoeqnUb-x2GRIvU3bcTzSP/view?usp=sharing' },
      { name: 'PYQ MAY 2023 (2)', link: 'https://drive.google.com/file/d/12MpUDfaevqFDeK5KY-FuSx6J4rBNoaK2/view?usp=sharing' },
      { name: 'PYQ MAY 2022', link: 'https://drive.google.com/file/d/1zvz5-1zmcc3c85tWRML6VNTCbQcorhUQ/view?usp=sharing' },
      { name: 'ALL CTS WITH ANSWERS', link: 'https://github.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/tree/main/18CSC304J/QP' },
    ],
    studyMaterials: [
      { name: 'UNIT 1 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/UNIT-1-QB-CD.docx' },
      { name: 'UNIT 2 AND 3 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/UNIT-2-3-QB-CD%20.docx' },
      { name: 'UNIT 4 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/UNIT-4-QB-CD.doc' },
      { name: 'UNIT 5 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/UNIT-5-QB-CD.docx' },
      { name: 'UNIT 1 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT1/Compier%20Design_Unit%20I.pptx' },
      { name: 'UNIT 1 NOTES', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT1/CD%20UNIT1.pdf&embedded=true' },
      { name: 'CT1 IMPORTANT QUESTIONS', link: 'https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT1/ct1(2nd).jpg' },
      { name: 'UNIT 2 AND 3 NOTES', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT2/UNIT%20-%202%26%203.pdf&embedded=true' },
      { name: 'UNIT 2 PPT', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT2/Compiler%20Design%20Unit-2.pdf&embedded=true' },
      { name: 'UNIT 3 PPT', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT2/Compiler%20Design%20Unit-3.pdf&embedded=true' },
      { name: 'UNIT 4 PPT', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT3/notes%20cd%20Unit%20-%20IV.pdf&embedded=true' },
      { name: 'UNIT 4 NOTES', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT3/PCD_Unit4.pdf&embedded=true' },
      { name: 'UNIT 5 NOTES', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/Theory/CT3/notes%20cd%20unit%205.pdf&embedded=true' },
      { name: 'IMPORTANT QUESTIONS', link: 'https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC304J/IMP.txt' },
      { name: 'LAB MANUAL', link: 'https://drive.google.com/file/d/1in2QaiqHWymDZslLzfQWJH085LvqjrLG/view?usp=sharing' },
      { name: 'EXTRA RESOURCES', link: 'https://github.com/shushrutsharma/18CSC304J-CD' },
    ],
  },
  'cep101': {
    name: 'Computer Engineering Principles',
    code: 'CEP101',
    pyqs: [],
    studyMaterials: [],
    youtube: []
  },
  'ccs101': {
    name: 'Cell Communication And Signaling',
    code: 'CCS101',
    pyqs: [],
    studyMaterials: [
      { name: 'Unit 1 (Contribute)', link: '' },
      { name: 'Unit 2 (Contribute)', link: '' },
      { name: 'Unit 3 (Contribute)', link: '' },
      { name: 'Unit 4 (Contribute)', link: '' },
      { name: 'Unit 5 (Contribute)', link: '' },
      { name: 'More Study Materials (Contribute)', link: '' }
    ],
    youtube: [],
    syllabus: ''
  },
  'mob101': {
    name: 'Mobile Computing',
    code: 'MOB101',
    pyqs: [],
    studyMaterials: [],
    youtube: []
  },
  'bpe101': {
    name: 'Bioprocess Engineering',
    code: 'BPE101',
    pyqs: [],
    studyMaterials: [
      { name: 'Unit 1 (Contribute)', link: '' },
      { name: 'Unit 2 and 3 part 1', link: 'https://drive.google.com/file/d/1uScuWo-_2G8rFmzm0dj4ednloWw6bg_u/view?usp=sharing' },
      { name: 'Unit 2 and 3 part 2', link: 'https://drive.google.com/file/d/1RRTxNCGymB9DyQvLltDva2crf_nNqAli/view?usp=sharing' },
      { name: 'Unit 3 (Contribute)', link: '' },
      { name: 'Unit 4 (Contribute)', link: '' },
      { name: 'Unit 5 (Contribute)', link: '' },
      { name: 'Lab (Contribute)', link: '' },
      { name: 'Assignments (Contribute)', link: '' },
      { name: 'More Study Materials (Contribute)', link: '' }
    ],
    youtube: [],
    syllabus: ''
  },
  'gac101': {
    name: 'Graphics and Animation',
    code: 'GAC101',
    pyqs: [],
    studyMaterials: [],
    youtube: []
  },
  'cnt101': {
    name: 'Computer Networks',
    code: '',
    pyqs: [
      { name: 'CT1 WITH KEY', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/Mam%20qbs/CT1%20-%20QUESTIONS%20WITH%20KEY.pdf&embedded=true' },
      { name: 'CT2 WITH KEY', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/Mam%20qbs/CT2%20-%20QUESTIONS%20WITH%20KEY.pdf&embedded=true' },
      { name: 'CT3 WITH KEY', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/Mam%20qbs/CT3%20-%20QUESTIONS%20WITH%20KEY.pdf&embedded=true' },
      { name: 'PYQ MAY 2022 (Alternative)', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/18CSC302J-%205%20Sem.pdf&embedded=true' },
      { name: 'PYQ MAY 2024', link: 'https://drive.google.com/file/d/1kS60iVGfPT7vv6mtgWw-yHjf04vpCbHP/view?usp=sharing' },
      { name: 'PYQ JUNE 2023', link: 'https://drive.google.com/file/d/1xqp8WM2OYR9rR2BP8HQLOirtIelQLcXf/view?usp=sharing' },
      { name: 'PYQ MAY 2022', link: 'https://drive.google.com/file/d/1aNZhjmLR_TzlroETXs9zXgF-MmfKvY9G/view?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'UNIT 1 PPT (SHORT)', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT1/UNIT-1.pptx' },
      { name: 'UNIT 1 (COMPLETE)', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT1/Complete%20Unit%201.pdf&embedded=true' },
      { name: 'UNIT 1 MCQ QB', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT1/UNIT%201%20MCQ%20Question%20bank.docx' },
      { name: 'UNIT 2 NOTES', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/Unit-2.pdf&embedded=true' },
      { name: 'UNIT 2 PPT', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/Unit%202%20ppt.pdf&embedded=true' },
      { name: 'UNIT 3 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT2/UNIT%203.pptx' },
      { name: 'UNIT 4 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT3/UNIT%204.pptx' },
      { name: 'UNIT 5 PPT', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CT3/UNIT%205.pptx' },
      { name: 'UNIT 1 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%201.doc' },
      { name: 'UNIT 2 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%202.doc' },
      { name: 'UNIT 3 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%203.doc' },
      { name: 'UNIT 4 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20UNIT%204.docx' },
      { name: 'UNIT 5 QUESTION BANK', link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Theory/CN_QUESTION%20BANK/CN%20QB%20unit%205.docx' },
      { name: 'MCQ QUESTION BANK (ALL UNITS)', link: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/CN_MCQ_GOD.pdf&embedded=true' },
    ],
    syllabus: 'https://docs.google.com/viewer?url=https://raw.githubusercontent.com/BharathwajManoharan/SRM_CSE_NOTES_PART_03/main/18CSC302J/Syllabus.pdf&embedded=true'
  },
  'bcm101l': {
    name: 'Basic Civil And Mechanical Lab',
    code: '21MES101L',
    pyqs: [
      { name: 'END EXAM FORMAT QP APRIL 2025', link: 'https://drive.google.com/file/d/1WSB7BCYeH1WHVYgheznj2yFmtLsA4rSa/view?usp=sharing' }
    ],
    studyMaterials: [
      { name: 'CIVIL MECH RECORD WITH ANSWERS', link: 'https://drive.google.com/file/d/1CzKK0w2jM17thuvhly5aItOhLQqxTjkk/view?usp=sharing' }
    ]
  },
  'bio102': {
    name: 'Genetics And Cytogenetics',
    code: 'BIO102',
    pyqs: [ ],
    studyMaterials: [
      { name: 'Unit - 1 (Contribute)', link: '' },
      { name: 'Unit - 2 (Contribute)', link: '' },
      { name: 'Unit - 3 (Contribute)', link: '' },
      { name: 'Unit - 4 (Contribute)', link: '' },
      { name: 'Unit - 5 (Contribute)', link: '' },
      { name: 'More Study Materials (Contribute)', link: '' }
    ],
    youtube: [],
    syllabus: ''
  },
};

// For backward compatibility - this structure is used in other components
export const resourceData = {
  pyqs: subjectResources['mat101'].pyqs,
  studyMaterials: subjectResources['mat101'].studyMaterials,
  youtube: subjectResources['mat101'].youtube || [],
};
