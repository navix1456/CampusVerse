
export interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string; // Added for YouTube thumbnails
}

// Enhanced mock resources data with detailed items and thumbnails for YouTube
export const resourceData = {
  pyqs: [
    { name: 'PYQ Dec 2024', link: 'https://drive.google.com/file/d/146A_fcSXISYTj2fiLGKSmNrJ5JDewgBr/view?usp=sharing' },
    { name: 'PYQ Nov 2024', link: 'https://drive.google.com/file/d/1w_FrCYPLnCgyUDODgX7-qp0x8J-D-b7I/view?usp=sharing' },
    { name: 'PYQ July 2024', link: 'https://drive.google.com/file/d/1x4nUZbjMXAaj8E4jWwh1EHIbLZTSBavW/view?usp=sharing' },
    { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1yrmJazPzimrZAVQ1w27uP9CAEepfk8xt/view?usp=sharing' },
    { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1KgRUBM_yZ_QvL6XwUQdWxMbGkgnV8cXg/view?usp=sharing' },
    { name: 'PYQ DEC 2023', link: 'https://drive.google.com/file/d/1gjpajPAfUg84IUfeA9NjTluLobSwLUwB/view' },
    { name: 'PYQ JAN 2023', link: 'https://drive.google.com/file/d/1ge5x8_13MtSTnMzAS7swwtscwK7tU7cv/view' },
    { name: 'PYQ MAY 2022', link: 'https://drive.google.com/file/d/1BByJLRMnIiDoJTAwrjrTGjJMIwcPQPNP/view' },
    { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1p4EwWSIdDlwuxMHgYG_hBzvYAXxB_upy/view' },
    { name: 'PYQ Nov 2018', link: 'https://drive.google.com/file/d/1SqEtnZx2FyQ91dL2q7QQIBYkklNdyfKC/view' },
    { name: 'PYQ 2013-2019', link: 'https://drive.google.com/file/d/1L_s1IJJD3Vj93Gp3wuG7Rsg8BeoKoafD/view?usp=sharing' },
    { name: 'CT 1, 2, 3 Papers', link: 'https://drive.google.com/file/d/18OSy3PD7BKHVnn5wWZaYg_MhmJxuyNBS/view?usp=sharing' },
    { name: 'MCQ UNIT 1-5', link: 'https://drive.google.com/file/d/1urGnfUCN1Jfy6SWNnQueT5uEeBL7az-D/view?usp=sharing' },
    { name: 'Important Topics', link: 'https://docs.google.com/document/d/1uNgufPfaYgLVMrmx0_ETAkkYoju7L57R/edit?usp=sharing&ouid=104405264596357734686&rtpof=true&sd=true' },
    { name: 'Calculator List', link: 'https://drive.google.com/file/d/1qLRtoEPtxowDY910loY-LnI6iNEbu9IT/view?usp=sharing' },
    { name: 'Semester Strategy', link: 'https://docs.google.com/document/d/1vkS-3ilVcU4XJzeuDSaIw4DcH9-hSNI25zaf2Vuy-6o/edit?usp=sharing' },
  ],
  studyMaterials: [
    { name: 'Unit 1 Question Bank', link: 'https://drive.google.com/file/d/1OY6VmspMfjK1QK_HAt4my_NvksIKS8xt/view?usp=drive_link' },
    { name: 'Unit 2 Question Bank', link: 'https://drive.google.com/file/d/1lqhubwxxjhpLnlyp2SqZWfpkXIFZeyCR/view?usp=drive_link' },
    { name: 'Unit 3 Question Bank', link: 'https://drive.google.com/file/d/1i6IlFJTnun6jYLI0WXWW55zz-c0K-mvK/view?usp=drive_link' },
    { name: 'Unit 4 Question Bank', link: 'https://drive.google.com/file/d/1pfXp7Bpk2mS0lRNooWW8Bd9xXKDg7hUR/view?usp=drive_link' },
    { name: 'Unit 5 Question Bank', link: 'https://drive.google.com/file/d/1wEDmoPpnAlQyeGF-4gRnuVfQeriyoPOj/view?usp=drive_link' },
    { name: 'Chapter 1: Matrices (PPT)', link: 'https://drive.google.com/file/d/1DJtRi7pVqRQB8FvzBpEn-XxKiUImk_P4/view?usp=sharing' },
    { name: 'Chapter 2: Functions Of Several Variables (PPT)', link: 'https://drive.google.com/drive/folders/1SpNIkGywR7ZKowUDPxhZZl-yTpHua0M2' },
    { name: 'Chapter 3: Ordinary Differential Equations (PPT)', link: 'https://drive.google.com/file/d/13LsREawRTw38KjCnVM3d-1Fg01zJnI3o/view?usp=sharing' },
    { name: 'Chapter 4: Differential Calculus And Beta Gamma Functions (PPT)', link: 'https://docs.google.com/presentation/d/1n5lMSNnErCp0FLCUKm1w0KAxn0scqX8T/edit?usp=sharing&ouid=104405264596357734686&rtpof=true&sd=true' },
    { name: 'Chapter 5: Sequence And Series (PPT)', link: 'https://drive.google.com/file/d/1rDg--eBJLAU4GgazGCNKr7nbaMU2CtR7/view?usp=sharing' },
  ],
  youtube: [
    { 
      name: 'Dr. E. Suresh', 
      link: 'https://www.youtube.com/@dresuresh/featured', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AOPolaQhzyPVcbA0ejBVU98aYDqTeu_Cx9ke7lBGBc9Ess4=s176-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Dr. E. Sujatha - Mathemagic', 
      link: 'https://www.youtube.com/@sujathae4270', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AOPolaSrrWDUVBRdAAoQnred41gM-uZl30-7YZwKNYXH=s176-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Dr. P. Godhanda Raman', 
      link: 'https://www.youtube.com/@profpgraman/videos', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AOPolaR5EQDfzAm_KbX2_13CDTbdEuiL7s-v8x7swdnA=s176-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Alex Maths', 
      link: 'https://www.youtube.com/@AlexMathsEngineering/videos', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AOPolaRuKDgg1UovPsuZ1c2FffqJ6P5cSKzXNYOAP9iP=s176-c-k-c0x00ffffff-no-rj' 
    },
  ],
};
