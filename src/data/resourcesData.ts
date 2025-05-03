
export interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string; // Added for YouTube thumbnails
}

// Detailed subject resources
export const subjectResources: Record<string, {
  pyqs: ResourceItem[];
  studyMaterials: ResourceItem[];
  youtube?: ResourceItem[];
  examStrategies?: ResourceItem[];
  syllabus?: string;
}> = {
  'mat101': {
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
    syllabus: 'https://drive.google.com/file/d/1XRr_XjXw6g1O8kXwF4k76-2hND8UyrVN/view?usp=drive_link'
  },
  'foe101': {
    pyqs: [
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1LY9QRZLJCCdcvAi0Z_g-fASLnJA8GddP/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/115biaX6rf_yNU4TUqDLwubw-yeDKIG-o/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1-2Z5kExMEfeh-7lwHpBOwVXvA7jVLK3t/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1uMysJohHDB3QlrMowS95WkBYO19qpY_5/view?usp=drive_linkk' },
      { name: 'Questions Bank', link: 'https://docs.google.com/document/d/1HW-C1-X8DRIdmMUOB2APuuq8YCKV1RtH/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1XRr_XjXw6g1O8kXwF4k76-2hND8UyrVN/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1D0GFFKWgIjw5tGWK-NLgscvaOULlJHeY?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1XRr_XjXw6g1O8kXwF4k76-2hND8UyrVN/view?usp=drive_link'
  },
  'bms101': {
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1q4mE8pPVbznCaoaKbhfGt7EazS2vmQyn/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/10iVchNAH7GkcjS6NYpCtdvjXmWi45rBf/view?usp=drive_link' },
      { name: 'Not Available', link: '' },
    ],
    syllabus: 'https://drive.google.com/file/d/10iVchNAH7GkcjS6NYpCtdvjXmWi45rBf/view?usp=drive_link'
  },
  'poe101': {
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1jY9prBMQWKPtEpCa1BJdrrDollc3Ut0j/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1nd5fsd1RNSB8NApQT7qe8gywcny8LR5o/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1vdaTuTAo55EuWuixkitUpalujzvRJ6k0/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1meCwpo-7NntL-w5IwdF96oAZYjzmkSe4/view?usp=drive_link' },
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1YBojyEnXG2HAgWjP1XIlfDYmQR2qXUJo/view?usp=drive_link' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1gZsPwu-WmIhSuVxixi0jKCJagVhDWOhO/view?usp=drive_link' },
      { name: 'MCQ & Question Bank', link: 'https://drive.google.com/drive/folders/1um6ctu9sT624qLw5U1SD0PL1OETqmSCM?usp=drive_link' },
      { name: 'Important Topics & Exam Pattern', link: 'https://docs.google.com/document/d/1WGW5jJVAoTk7598I9wLGGUVpJNds1__W7QIiqOlPEl8/edit?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1W78ErNNrFzNixKGBGO11I8XZSkpDj59d/view?usp=drive_link' },
      { name: 'Chapter 1: Introduction To Philosophy Of Engineering', link: 'https://drive.google.com/file/d/1h1COyop7_Ry0AallhAgD6R_Wmb7bcW-c/view?usp=drive_link' },
      { name: 'Chapter 2: Ontology Of Engineering', link: 'https://drive.google.com/file/d/1huvTad5h7kBF_DgLR0RtJBa1IHQsZYlG/view?usp=drive_link' },
      { name: 'Chapter 3: Epistemology Of Engineering', link: 'https://drive.google.com/file/d/1ZzSDuNrlj6ilgRRJEQ05nc2cV5A7Xvll/view?usp=drive_link' },
      { name: 'Chapter 4: Methodology Of Engineering', link: 'https://drive.google.com/file/d/11kKaqlSkik4bZkfhrrwdDk3mtGXS1IvE/view?usp=drive_link' },
      { name: 'Chapter 5: Axiology Of Engineering', link: 'https://drive.google.com/file/d/1GThAKbgksVDuRTjOGX-5dXRo7l4fYNFy/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1gs-IjIYanHX0EWNXolPD22nrhR9pFP7h?usp=drive_link' },
    ],
    examStrategies: [
      { name: 'POE Semester Exam Strategies', link: 'https://docs.google.com/document/d/1y4aSOEgYRtntJ-_BxtCGCfCdzYK6kiyDtxMOu2_rVP0/edit?usp=drive_link' },
      { name: 'Sem Exams General Rules', link: 'https://drive.google.com/file/d/1IhGYn-Hq50hu5Fcmwr23jgf5PL-T9tB8/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1W78ErNNrFzNixKGBGO11I8XZSkpDj59d/view?usp=drive_link'
  },
  'pps101': {
    pyqs: [
      { name: 'PYQ Jun 2023', link: 'https://drive.google.com/file/d/1mrvBYe6mv42Tfein8AN2T8txeXHvk4Tw/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1_O9YsNWs3Vw-au0oG95glj-Y8CHZCugH/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1_RN15OXdZhDpX1Nb9sNSOOdQrdxQCukx/view?usp=drive_link' },
      { name: 'PYQ Jan 2019', link: 'https://drive.google.com/file/d/1XiRjfTRputu3ZuaNZaEGA8lqBFETErW3/view?usp=drive_link' },
      { name: 'PYQ Nov 2018', link: 'https://drive.google.com/file/d/1xGcq8Sd_3JkKQMV_LatGCBuOZyP7DNCk/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1LRHHPbqBJ5aX8Ps4x1E_xl4RfEI0D4SI/view?usp=drive_link' },
      { name: 'PYQ July 2023', link: 'https://drive.google.com/file/d/1NoHu2nPzuafMCN9saUQlq6QXOjEsZOGd/view?usp=drive_link' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1kzUnjcsW1J_p9xIGTNtYDg132bFryd_e/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1tEw8YxyX5nr6AwlbC8GwwHOsnb4yOAcj/view?usp=drive_link' },
      { name: 'PYQ From NCR Campus (By BTECH CRUX)', link: 'https://drive.google.com/file/d/1AO0di_Fu6-AhaoabTLsgNC_V8iwdbXNN/view?usp=drive_link' },
      { name: 'CT Papers Compilation', link: 'https://drive.google.com/drive/folders/1e0OY2AVToH-FtIpYimh1iE4d0kmW-uUq?usp=drive_link' },
      { name: 'Question Bank with MCQs', link: 'https://drive.google.com/file/d/1D2Bl2164GlxUKKaoaoQBreWasAJc6UOq/view?usp=drive_link' },
      { name: 'Alternate Question Bank with MCQs', link: 'https://drive.google.com/file/d/1caItBrkYiQt8RjT8elKc2wHeb3fCPgzh/view?usp=drive_link' },
      { name: 'Important Questions', link: 'https://drive.google.com/file/d/1REJu8O7Zd--eBgJVLAQ6mlV7vO5XMLcU/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1oQ0a7mjBp1NVhihOBwv8mDTtHOsOuVKx/view?usp=drive_link' },
      { name: 'Chapter 1', link: 'https://drive.google.com/drive/folders/115dAsr68aT8VLi_7Bmv2XAuu7ekdlNzQ?usp=drive_link' },
      { name: 'Chapter 2', link: 'https://drive.google.com/drive/folders/15qqWbCXr5Rd0UL1opZB5vpPQDn3AsZMG?usp=drive_link' },
      { name: 'Chapter 3', link: 'https://drive.google.com/drive/folders/1d3mCBRey2ZjNgkiWW-zxSBqUx61d2m7l?usp=drive_link' },
      { name: 'Chapter 4', link: 'https://drive.google.com/drive/folders/130zDzZqQELfPW25E2-1FM5MQuqYKdaXc?usp=drive_link' },
      { name: 'Chapter 5', link: 'https://drive.google.com/drive/folders/1dF2v7hE1_0MmiByuiY1M4xPJ6DLPuyoY?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1eUUUl5O3Crs9reqX1RmQRkMqidK7VRV5?usp=drive_link' },
      { name: 'Study Material Drive Link From NCR Campus (By BTECH CRUX)', link: 'https://drive.google.com/drive/folders/1bZ7YrbQPczxJgGrmHLjOpZUX3XhwWLog?usp=drive_link' },     
    ],
    examStrategies: [
      { name: 'PPS Semester Exam Strategies', link: 'https://docs.google.com/document/d/1hGtMfxy7Np1JHq5kztHJoq4R40_voVELrCs2fk-IowI/edit?usp=drive_link' },
      { name: 'Sem Exams General Rules', link: 'https://drive.google.com/file/d/1IhGYn-Hq50hu5Fcmwr23jgf5PL-T9tB8/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1oQ0a7mjBp1NVhihOBwv8mDTtHOsOuVKx/view?usp=drive_link'
  },
  'icb101': {
    pyqs: [
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1gLlh0fB1rctmKZBSPPZC35ryZt_K4Phg/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1pu7GK8lLq_KIBMdBOETeCVWMeJLHiUMb/view?usp=drive_link' },
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1gUpdZwc5rfFijFOUErPMb9fxQyjJsqC5/view?usp=drive_link' },
      { name: 'PYQ Jul 2023 Paper 2', link: 'https://drive.google.com/file/d/1gNaoBxL_mbZMwjBpXX_qNJDFdD8QQeKD/view?usp=drive_link' },
      { name: 'PYQ Jun 2023', link: 'https://drive.google.com/file/d/1gd9Om2twjB62-8UJb1vM7A0LKlBKDXTF/view?usp=drive_link' },
      { name: 'PYQ Dec 2023 Paper 2', link: 'https://drive.google.com/file/d/1gPq_nEkL57PiJKlMDhklOkPYeeOXU9SV/view?usp=drive_link' },
      { name: 'PYQ Nov 2024', link: 'https://drive.google.com/file/d/1whex95Fal3usUDsxcljyW0NirRYdv179/view?usp=drive_link' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1i98p0v78N2Zzuj_ThiUBFBKn_nUibQI_/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1WmXmcBLd91RQpbNWoAozS0a-qMYbvfCA/view?usp=drive_link' },
      { name: 'Important Topics', link: 'https://drive.google.com/file/d/1sHKnZOqeRaji0MZuAVd7NMlawCusiyjN/view?usp=drive_link' },
      { name: 'HOTs Questions Unit 1 to 5, Question Banks, MCQs & More', link: 'https://drive.google.com/drive/folders/1wN2x025nxZYsCoUhyNoHJUM8WT1i-sWT?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1zA8VbbYE7jSHQFvl8BVRiKDDtVXtqXaG/view?usp=drive_link' },
      { name: 'Chapter 1: Cell And Evolution', link: 'https://docs.google.com/presentation/d/12rEeMOARIlfeXyMa8ngt5wmmq2fm3BPX/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Chapter 2: Basics In Biochemistry', link: 'https://docs.google.com/presentation/d/1yPQ3_HR48a5cOfZ6yFdhQumu6421WtrV/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Chapter 3: Structure Biology', link: 'https://docs.google.com/presentation/d/1NvNby20sQwxWxyZZf_aorONjbBL6O-wZ/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Chapter 4: Neurobiology', link: 'https://docs.google.com/presentation/d/1tHBBklafppqklOs2x4h-1y6S3NzEyUc8/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Chapter 5: Immunobiology', link: 'https://docs.google.com/presentation/d/1DY-XBXY4tr-qfvZV1tZk4FIkQcoeuxA7/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/12HmbHf838rHNBjAH1X8_MCtEtFbJEztH?usp=drive_link' },
    ],
    examStrategies: [
      { name: 'Computational Bio Semester Exam Strategies', link: 'https://docs.google.com/document/d/14PrBmh9DQsJlPj4LYjf6Y0RJMBSF44QK3cJlDoIs3Ws/edit?usp=drive_link' },
      { name: 'Sem Exams General Rules', link: 'https://drive.google.com/file/d/1IhGYn-Hq50hu5Fcmwr23jgf5PL-T9tB8/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1zA8VbbYE7jSHQFvl8BVRiKDDtVXtqXaG/view?usp=drive_link'
  },
  'clb101': {
    pyqs: [
      { name: 'PYQ Jun 2023', link: 'https://drive.google.com/file/d/1LEARpqHIqcNqG3WWSJ63NSIt1DT4cos6/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/18F4sJ_pb7NdPphMMJUukAtviZZvpRgcA/view?usp=drive_link' },
      { name: 'PYQ Dec 2022', link: 'https://drive.google.com/file/d/1KJOoz4uJoQiyCYVEBv1MR9TfcZSuHShb/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1Mgt2VtpzOxARAGFm6D2_cNl-s0PBHbAp?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1XRr_XjXw6g1O8kXwF4k76-2hND8UyrVN/view?usp=drive_link' },
      { name: 'Chapter 1', link: 'https://drive.google.com/file/d/17QwIVxEPWAWVfVb8TIG3BWAerk2p2eHr/view?usp=drive_link' },
      { name: 'Chapter 2', link: 'https://drive.google.com/file/d/1fXqhZm_wb10iajTytYJX6jQeQEEfGRr0/view?usp=drive_link' },
      { name: 'Chapter 3', link: 'https://drive.google.com/file/d/1u-nTTGlL8UV9N9eSUQu5QSiRcr8ONdaF/view?usp=drive_link' },
      { name: 'Chapter 4', link: 'https://drive.google.com/file/d/1kqf6H-97BfmAg0IHQphi_s5wWPGOr9qe/view?usp=drive_link' },
      { name: 'Chapter 5', link: 'https://drive.google.com/file/d/1IjKM8Rr5JLIfAKbElM7UR_Oy2WXHZgV7/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1XRr_XjXw6g1O8kXwF4k76-2hND8UyrVN/view?usp=drive_link'
  },
  'pac101': {
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1F10dw18lGsWIt57qHf75vqD9oMMJiXPf/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1n4zfMLMsgU-PFucwYOT1t7_XwpeSctR5/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1n4zfMLMsgU-PFucwYOT1t7_XwpeSctR5/view?usp=drive_link'
  },
  'frl101': {
    pyqs: [
      { name: 'PYQ For All Foreign Languages', link: 'https://drive.google.com/drive/folders/1ubbRRPwu5ycFEXOSFmCr3fWfUn_Xxlpf?usp=drive_linkf' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/14YAIXtPPiSaW_JlQ37rFHyUjOMzwAG8V/view?usp=sharing' },
      { name: 'French Book', link: 'https://drive.google.com/file/d/1u_v_MLCXnprT6Ua9FyCxbXJocjaup4RF/view?usp=drive_link' },
      { name: 'French Book Translation', link: 'https://drive.google.com/file/d/1BB3d1Nd8IYgMY9KzoethflzkjUIRYRqk/view?usp=drive_link' },
      { name: 'German Book', link: 'https://drive.google.com/file/d/1r80qwekqlGVivHod9kOVWuxqc9pok3te/view?usp=drive_link' },
      { name: 'Spanish Book', link: 'https://drive.google.com/file/d/1nna5QvcJkOzU25vunMYaSpPWR9NM83-a/view?usp=drive_link' },
      { name: 'Korean Book', link: 'https://drive.google.com/file/d/12L0aayv54SW2Zq4VerUpgkWkAawOq2fI/view?usp=drive_link' },
      { name: 'Japanese Book', link: 'https://drive.google.com/file/d/18eAaIyYDK2CC5NBqNKQTOm6OdcUNS40o/view?usp=drive_link' },
      { name: 'Chinese Book', link: 'https://drive.google.com/drive/folders/1VjsAq9Plli6BgYt9xcn1fbuySJmETJC9?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/14YAIXtPPiSaW_JlQ37rFHyUjOMzwAG8V/view?usp=sharing'
  },
  'chy101': {
    pyqs: [
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1ltQ5xHHFgB1gmbocWo52uYIYYtnj-pkm/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1kDnKDaw8oMrL61uBZVrOvM6xfZfMTmit/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1jP5MRBCjyL6FXeHkU8Z1c1B61hSVbcaF/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1nLsCMyXbPIoSnnkx1NV1Tp7a8nULg45W/view?usp=drive_link' },
      { name: 'PYQ Nov 2018', link: 'https://drive.google.com/file/d/11cW7z_Wuz6ULxveRQdaJNyzRSBc178Z_/view?usp=drive_link' },
      { name: 'More PYQs', link: 'https://drive.google.com/file/d/1ditInShGvFfjdH-BQcUVQCaXGkpRnU2p/view?usp=drive_link' },
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/drive/folders/1J3K6-KkxmmT-2S2wL1gzCHmZfNAoLCkK?usp=drive_link' },
      { name: 'MCQs For All Units', link: 'https://drive.google.com/drive/folders/1HF-FA22lkkSHXuNu25sq61_oU7otpK2V?usp=drive_link' },
      { name: 'Important Questions: CTs and SEM', link: 'https://drive.google.com/drive/folders/1yOXcvkndGCCtVDk6dlo1b0p-cGw5-2GD?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1u8-CK7wHUpbGnnh36vbRjtsuW4DA1zuu/view?usp=drive_link' },
      { name: 'Chapter 1: Periodic Properties', link: 'https://drive.google.com/file/d/1PDJOwDIHMecthOEI2dgRgR0oULwHZYSV/view?usp=drive_link' },
      { name: 'Chapter 2: Use Of Free Energy In Chemical Equilibria', link: 'https://drive.google.com/file/d/1gV9B9r6yZo_t2oNlUPeVqrBiPgMzzjnE/view?usp=drive_link' },
      { name: 'Chapter 3: Stereo Chemistry And Organic Reactions', link: 'https://drive.google.com/file/d/110w12g6laqPUTXf9Jurb8MkJ6emkiYB7/view?usp=drive_link' },
      { name: 'Chapter 4: Polymers', link: 'https://drive.google.com/file/d/1wzVA1YiPQSsKuuarvGGcL3IIRjC6tN9E/view?usp=drive_link' },
      { name: 'Chapter 5: Advanced Engineering Materials', link: 'https://drive.google.com/file/d/1KXZEOy3xrDPu50DwZJfVCun15vWQYSI1/view?usp=drive_link' },
      { name: 'BEST NOTES', link: 'https://drive.google.com/drive/folders/1IWuGFjOcswqN8weic3WTrujOGfWqTGRk?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/11fmx1u4GXhVLaSRpeEZjAM6WMqSEFMVy?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1u8-CK7wHUpbGnnh36vbRjtsuW4DA1zuu/view?usp=drive_link'
  },
  'mat102': {
    pyqs: [
      { name: 'CT Papers Compilation', link: 'https://drive.google.com/file/d/1EPidinguoZeL9azdQzBy20iik9YSaVoH/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1gL76tsTW8bWE2wlABNMlQIrBA4-kwKWR/view?usp=drive_link' },
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1gK_C8CN06fp5NsfgxRgBgynuhbrkbn3i/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/14S_CxY5aTjilh6f_0zOV7lI-9FucDoCB/view?usp=drive_link' },
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/1rAJaqzrU4qt8ZFhRYqyYgtqfE866MgQF/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1CdQ2b125X72m-B5TwClc82TRzUMIdZLn/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1JVnIsAo683Yq0dcIZbtqtaLHvKrO7Teh/view?usp=drive_link' },
      { name: 'Calculator List Updated For 2024', link: 'https://drive.google.com/file/d/1IR6Jk4-t-eYSJB-EX2uvBbyFTxc1oK0F/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1Z4x2a6CdBriOTDFbWWG4R77o-hk1BdiB/view?usp=drive_link' },
      { name: 'Chapter 1: Integral Calculus', link: 'https://drive.google.com/drive/folders/10MhT0VpHIX1z5exdROiCNJ-hEgc_L0HB?usp=drive_link' },
      { name: 'Chapter 2: Vector Calculus', link: 'https://drive.google.com/drive/folders/1D8DbGyhmCxRjsH6HueTk5od-ir-AQF4-?usp=drive_link' },
      { name: 'Chapter 3: Laplace Transform', link: 'https://drive.google.com/drive/folders/1eVvnfACc_on7WVw_aJ1svJwH1lxsAdEU?usp=drive_link' },
      { name: 'Chapter 4: Analytical Functions', link: 'https://drive.google.com/drive/folders/1vm4Rz8bmjxocmseWyEdYw3mDfkYdefGU?usp=drive_link' },
      { name: 'Chapter 5: Complex Integration', link: 'https://drive.google.com/drive/folders/1TzxpCAodPmxl02NS3OrWyhZIIdPAk_OJ?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1iWPdnG7NbA8VczZHqqSc8g8yhajL-bMj?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1Z4x2a6CdBriOTDFbWWG4R77o-hk1BdiB/view?usp=drive_link'
  },
  'eee101': {
    pyqs: [
      { name: 'PYQ Jul 2022', link: 'https://drive.google.com/file/d/1hn8RJ-Rfu_ypFUtx_8NFCWOuB1AWU98e/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1hiPjHJ4qRxZvsUCOZBPl71TPnoRxLZTE/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1hbrqGKecd5zDMoG5jvvdl7MoSCvjcpmN/view?usp=drive_link' },
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1Y1EZ_B-ioHQ15BFFjfbjniQN201k27Ky/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/14ESt98Kx7f_QUdGdLfK-aALfNboZNOUL/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/1AkcM9g-yT12JK5IfCafbFi5ACZR4zdnX/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1zY89vKAr_-ding4XTgF-t-amR7SIfmDK/view?usp=drive_link' },
      { name: 'CT PYQs', link: 'https://drive.google.com/drive/folders/1uo6dIWYACYSKr6x2pW8V1q8XaiLoLwRm?usp=sharing' },
      { name: 'Important Topics', link: 'https://drive.google.com/file/d/1A5DzyF0VL2zOst3BbWvFb6CDmJ-YItzJ/view?usp=drive_link' },
      { name: 'Important Questions', link: 'https://drive.google.com/file/d/1F1zXemq5Cw91y2m7lMaaq_QJOLPqXS0t/view?usp=drive_link' },
      { name: 'Question Bank', link: 'https://drive.google.com/file/d/1YTRBDy_KOpeV3lsVcRYZ4Vb6sSZNW3p2/view?usp=drive_link' },
      { name: 'MCQ Question Bank', link: 'https://drive.google.com/file/d/1aYOQ5vJHjkQ7KXMO4EMRka9IFrO01PvK/view?usp=drive_link' },
      { name: 'Calculator List Updated For 2024', link: 'https://drive.google.com/file/d/1IR6Jk4-t-eYSJB-EX2uvBbyFTxc1oK0F/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1dNcJUoFAOa7Pze0Vdy93sDyxEpeb1AUC/view?usp=drive_link' },
      { name: 'Electric Circuits', link: 'https://docs.google.com/presentation/d/1bPBwdQyolajpl_Yvnf9FN6PH9PLfFvHU/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Electronics', link: 'https://docs.google.com/presentation/d/1Fl_HnPxNwC-p8cwsiBbbXKU_JQ4pPiRQ/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Machines And Drives', link: 'https://docs.google.com/presentation/d/1ZiRH5sw__xM09kSlR4YVeLrHznPrNQx6/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Transducers And Sensors', link: 'https://docs.google.com/presentation/d/1j0drvyL_Rxl-h_hFfD3jrVe81eZes_X9/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Power Engineering', link: 'https://docs.google.com/presentation/d/1h1sL6cPtkkg__FsqnePeT1bh_ink0_qq/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'EEE Lab Manual', link: 'https://drive.google.com/file/d/1rCMKo4AJaey13AEQ7vU3rWzw7WcxOm3f/view?usp=drive_link' },
      { name: 'EEE Book', link: 'https://drive.google.com/file/d/177_vU4n7lRah8dNuVtiiBp4t9MPEFZ0E/view?usp=drive_link' },
      { name: 'Handwritten Notes by THE HELPER', link: 'https://drive.google.com/drive/folders/1phV20ArTBNES6Dsp1nwYIb_BxYMBe4vt?usp=sharing' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1X96eA7O-4-mozGf65mf8STMFKQa6MR2q?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1dNcJUoFAOa7Pze0Vdy93sDyxEpeb1AUC/view?usp=drive_link'
  },
  'spc101': {
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/191qeMWiqNaGlgXRsiPJlnF-mpJY8CgDy/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/1YWdcCS6GGsd9dNrvgqEFNFuJpwL51I3D/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1I9PD3OsZgqpkkZzx9Wvn8cvUdFQxXRwl/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1k5XtGdaQslodt0-ecF6HbeRcu8NqjuRz/view?usp=drive_link' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1Z2zUtT1VgWzAy6JHqdUAYvE_C9x23gmt/view?usp=drive_link' },
      { name: 'PYQ Nov 2018', link: 'https://drive.google.com/file/d/1pPJtz-jLjV0SW0ZJKhrwXdykgY1cOS3i/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1inlczO0zpoR2gVBayuliTJ82DNEqsTbd/view?usp=drive_link' },
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/14becqgs_Nxp8tZwXUZ7uy2-ONXJIiWVW?usp=drive_link' },
      { name: 'MCQs & Question Banks', link: 'https://drive.google.com/drive/folders/1btJ75w1hj7S5eI8ECiopRQLtLvzsRJbJ?usp=drive_link' },
      { name: 'Important Topics', link: 'https://docs.google.com/document/d/1d93T2rn1CXakIU8B9zFSdNvLcIIEFEmA5-XYnyEn6qo/edit?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1TdY3n8HG3mbHuHu0U792PFSt4j760xBW/view?usp=drive_link' },
      { name: 'Chapter 1: Energy Bands In Solids', link: 'https://drive.google.com/file/d/1EACIBHKWj8FMHb3veDMsKp-D-xofm6xB/view?usp=drive_link' },
      { name: 'Chapter 2: Carrier Transport Mechanism In Semiconductors', link: 'https://drive.google.com/file/d/1UHbGMqvhM6kc8R-ThV5KCKu7x5Km4Im1/view?usp=drive_link' },
      { name: 'Chapter 3: Optoelectronic Properties Of Semiconductors', link: 'https://drive.google.com/file/d/1Nly-gEdmq8x1InLEgVPC9Axx6JYAS00u/view?usp=drive_link' },
      { name: 'Chapter 4: Electrical And Optical Measurements', link: 'https://drive.google.com/file/d/1G_OnBwA593drCXbgieWrfFk808Xm6EEW/view?usp=drive_link' },
      { name: 'Chapter 5: Low Dimensional Semiconductor Materials', link: 'https://drive.google.com/file/d/1jD0XBNuV27NU_-fJlggO8zKaYKE9018-/view?usp=drive_link' },
      { name: 'All Derivations', link: 'https://drive.google.com/file/d/1tvcJazakaEAr0pjHAK55CCBNcEkxli0i/view?usp=drive_link' },
      { name: 'Handwritten Notes (By THE HELPER)', link: 'https://drive.google.com/drive/folders/1BMix42PM0YuAJn4AvC61u3g_HPjtrNew?usp=drive_link' },
      { name: 'Lesson Plan', link: 'https://drive.google.com/file/d/1uqlLJHlc9Fg4AcML5AZbrte4wZmKiDVI/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/117OAQHShi1Np87x1FK-HhsXzrWVlZa83?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1TdY3n8HG3mbHuHu0U792PFSt4j760xBW/view?usp=drive_link'
  },
  'oop101': {
    pyqs: [
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1gsBe7bQAH64ExMz8lKS5Gzjq3InHseyb/view?usp=drive_link' },
      { name: 'PYQ Dec 2022', link: 'https://drive.google.com/file/d/1oeZSXRyPGT0_HxUD55Zm9Kfh28ukVMxd/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/1Q31qHe8sVFBY7pA1-Z9fXOurVngRlFiq/view?usp=drive_link' },
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/13ub45X-KsU89tfxadRf1_fJOhtJIrt8e/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1hSl_kwgjLMxPJjL2UgC0Nqo246TGVAx4/view?usp=drive_link' },
      { name: 'Important Questions', link: 'https://drive.google.com/file/d/14pwsNMxHBLdd2T57GuInfIJK032JDxmt/view?usp=drive_link' },
      { name: 'MCQ For All Units', link: 'https://drive.google.com/file/d/1u6-169zEmbaG4uJ6PfD0C7lPJqhHUg7z/view?usp=drive_link' },
      { name: 'Question Bank', link: 'https://drive.google.com/file/d/19Ej9QRZcqDCrN_1qOPCxu0gsTvVvfj98/view?usp=drive_link' },
      { name: 'More Questions', link: 'https://drive.google.com/file/d/1gUeqNXL3SeVyhahUh6x-KsCG3ldF1eys/view?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/13Uo3zCTnPxD8G8dYmiMbLe9mh9JnmoRz/view?usp=drive_link' },
      { name: 'Chapter 1: Introduction To OOPS', link: 'https://drive.google.com/file/d/19FDqGruYLCRlY5X5QMs9Yv9T8ud0_vjH/view?usp=drive_link' },
      { name: 'Chapter 2: Methods And Polymorphism', link: 'https://drive.google.com/file/d/1oZGWe7fU9IUy9UXifmRzii91BCuA3OEJ/view?usp=drive_link' },
      { name: 'Chapter 3: Inheritence', link: 'https://drive.google.com/file/d/1aqEFFQ3xJutAmWnRt5UW9xRNxlhhPyHH/view?usp=drive_link' },
      { name: 'Chapter 4: Generic Programming', link: 'https://drive.google.com/file/d/1OlzxlgqgTa8epRI9VFKkKWyyz0AW8KiN/view?usp=drive_link' },
      { name: 'Chapter 5: Standard Template Library', link: 'https://drive.google.com/file/d/1vFqpdYIbEiQgR0PS8y4Ked8EdkAjKHu6/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1S5aCLxCbvepfvEvfCwd9jMRjA8tHW9SW?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/13Uo3zCTnPxD8G8dYmiMbLe9mh9JnmoRz/view?usp=drive_link'
  },
  'eng101': {
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1xfHj8XLY0PCkchUP-RPR1rp24YAtaZub/view?usp=drive_link' },
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/15lTkxE31u9Ihca4hGGYVpBou_TVTFGxy/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/1HWGB__HxMZN0V10kh1a4VeNNAPGqxw9_/view?usp=drive_link' },
      { name: 'PYQ May 2019', link: 'https://drive.google.com/file/d/1oo1NSE58jRw9QEBPj3gRDgi-OkpUVC71/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1Dw6Z0rXNZpH0txKJQaRZGyk3mYLNluOM/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1h3ULSiDifLSUTIPjNY6iPIpM4arn1xoW/view?usp=drive_link' },
      { name: 'Writing Format', link: 'https://drive.google.com/file/d/1sgL0f5YJxYC7uwN8f0RReU5ynoRSn6DX/view?usp=drive_link' },
      { name: 'More PYQs', link: 'https://drive.google.com/drive/folders/1XRWZb4k2c0WhYPZTs1t3Jaflydg5Rxxv?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1Q3pPItjdhgNNqceUPKvcu_4fC5uuUDY8/view?usp=drive_link' },
      { name: 'Complete Notes', link: 'https://drive.google.com/drive/folders/1EZN7OFedecezHibAfhjruQu1SWXd5107?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1Q3pPItjdhgNNqceUPKvcu_4fC5uuUDY8/view?usp=drive_link'
  },
  'bcm101': {
    pyqs: [
      { name: 'PYQ Dec 2022', link: 'https://drive.google.com/file/d/1NFeTHf3AecgZbNzYrZ8nU8vG1hNqLQ1n/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/1dAvNUKrVeJJMOQA-XDld7JcHXJYoKeir/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1B_xfp2LaPZHD1Wau8IsB8MOHDhtlTY-_/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1Y2Ufh9bwiQMAL8pBF5aIuKyX75TrjAtW/view?usp=drive_link' },
      { name: 'Chapter 1: Introduction To Biochemistry', link: 'https://drive.google.com/drive/folders/1AdyBBezaEKi2Z6jIgf_T-S9I3qJxDOrt?usp=sharing' },
      { name: 'Chapter 2: Introduction To Metabolism, Bioenergetics And Photosynthesis', link: 'https://drive.google.com/drive/folders/1pF6WWT1TUqmP3U15ywNNUzqaL406bSS1?usp=sharing' },
      { name: 'Chapter 3: Carbohydrate Metabolism', link: 'https://drive.google.com/file/d/1QvAQc6JWvl-mQpgIAbWQj5FsVWCJ6EOo/view?usp=drive_link' },
      { name: 'Chapter 4: Protein Turnover And Amino Acids Metabolism', link: 'https://drive.google.com/file/d/1NVc_CcnFbfHcUs-0K4xcshszzn6xxU4a/view?usp=drive_link' },
      { name: 'Chapter 5: Fatty Acids And Nucleic Acids Metabolism', link: 'https://drive.google.com/file/d/1MoPgpPaM9ozbp8l69TlPCHfCzMsvH0Ga/view?usp=drive_link' },
      { name: 'Book 1', link: 'https://drive.google.com/file/d/1L38XTsXx40R-VZJkaT_ILjx25Rb5mPeZ/view?usp=drive_link' },
      { name: 'Book 2', link: 'https://drive.google.com/file/d/1kqqfIl6HeW0zZz5EjSjzSynO_xPKBJpk/view?usp=drive_link' },
      { name: 'Book 3', link: 'https://drive.google.com/file/d/1D6AjTU79KiCmbHFFkyWLvB8ykgGZgetb/view?usp=drive_link' },
      { name: 'Book 4', link: 'https://drive.google.com/file/d/1D3XJQFlys62A0W6WFzFHyE3J5oF5dvla/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1BmjNan0EKbXYBKu2cnTgoVrWRKNcPN4K?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1Y2Ufh9bwiQMAL8pBF5aIuKyX75TrjAtW/view?usp=drive_link'
  },
  'emp101': {
    pyqs: [
      { name: 'PYQ Jan 2023', link: 'https://drive.google.com/file/d/118beVBmNagV4Ls0D1R8sbEKU4VYQzh5M/view?usp=drive_link' },
      { name: 'PYQ Nov 2019', link: 'https://drive.google.com/file/d/19WJ19wKB2KDcwFoflj53theersZQJhhl/view?usp=drive_link' },
      { name: 'PYQ Nov 2018', link: 'https://drive.google.com/file/d/1eU12K32zGMdIbRcPzorR0FGk45TZ0wxE/view?usp=drive_link' },
      { name: 'PYQ Jul 2022', link: 'https://drive.google.com/file/d/1dybsjzUb97m6uwbg2nXsxWugjexq4rHB/view?usp=drive_link' },
      { name: 'PYQ Dec 2023', link: 'https://drive.google.com/file/d/1dybsjzUb97m6uwbg2nXsxWugjexq4rHB/view?usp=drive_link' },
      { name: 'Question Bank', link: 'https://drive.google.com/file/d/18ubPMug4jRVTf36oTVcFbG7BJMwYOSPs/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Syllabus', link: 'https://drive.google.com/file/d/1DjvYADrNMAhnaGBj2r4yZV3j3MF6l8qE/view?usp=drive_link' },
      { name: 'Chapter 1: Electromagnetism And Dielectrics', link: 'https://drive.google.com/drive/folders/11w4JqcjvAVvfV39JWGRFLtt5v7I-TPNx?usp=drive_link' },
      { name: 'Chapter 2: Magnetic Materials', link: 'https://drive.google.com/drive/folders/1QsUAiw6wOPVM4R_4ZdS5fx0QnpQ3qFWs?usp=drive_link' },
      { name: 'Chapter 3: Quantum Mechanics', link: 'https://drive.google.com/drive/folders/1J7ev17xSqpzu-GRjGGy0x0zoExHeFTQx?usp=drive_link' },
      { name: 'Chapter 4: Wave Optics', link: 'https://drive.google.com/drive/folders/12ll0zXsdvYRaE3ojFhO4aPxL5b8nHlOz?usp=drive_link' },
      { name: 'Chapter 5: Lasers And Fiber Optics', link: 'https://drive.google.com/drive/folders/1LC9A2DqQAtBlOH5odn9F97l7HU_dugIs?usp=drive_link' },
      { name: 'Lab Manual', link: 'https://drive.google.com/file/d/1wLDC3gdXHBroGCRy6AqVmKQsJSZXYgw1/view?usp=drive_link' },
      { name: 'Study Material Drive Link', link: 'https://drive.google.com/drive/folders/1-glXA09mYYMcQRQDhudOrXPTWlu5E-ic?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1DjvYADrNMAhnaGBj2r4yZV3j3MF6l8qE/view?usp=drive_link'
  },
  'mec101': {
    pyqs: [
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1hLqpPQnVxOitjPBRfZOZcXoE_RQooaSg/view?usp=drive_link' },
      { name: 'PYQ Jan 2024', link: 'https://drive.google.com/file/d/1ZmFx9psuHqbn60JlaRnYjsC__dJnnS-G/view?usp=drive_link' },
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1nP8m2a8b5CknFqCxZuVbx76C0HM2X-Y1/view?usp=drive_link' },
      { name: 'PYQ Jul 2024', link: 'https://drive.google.com/file/d/1kqEx0EQRoEWqfPbVivydRSBtUnt-z2_b/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Complete Study Materials', link: 'https://drive.google.com/drive/folders/1-XQVidvAI_7gQrmO35x4tZ09GO-N_Ax1?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1HFYejQgbGbvHcwJs1hou3VjL85ThWehv/view?usp=drive_link'
  },
  'mcb101': {
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
    pyqs: [
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1IvLrYkAcUwCKHPzcomRLtJv30gXvLngi/view?usp=drive_link' },
      { name: 'PYQ Jul 2023', link: 'https://drive.google.com/file/d/1IrQvSjQtiR3K-Z4iN093mFFxhpSDM29B/view?usp=drive_link' },
      { name: 'More PYQs', link: 'https://drive.google.com/file/d/10cziTTAO-iOLZpT59yAgC71aOaPZCGW9/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/drive/folders/1lIdRl7YsgQ2RkQhK5vSiSRsAR1gGlPw0?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/drive/folders/1groFGtdFkSdtEgthRuHpSB_cK55XS7s-?usp=drive_link' },
      { name: 'Unit 3', link: 'https://drive.google.com/drive/folders/1kPrci5eE-_hKj2UHI1yT26rJbq2wkm0B?usp=drive_link' },
      { name: 'Unit 4', link: 'https://drive.google.com/drive/folders/1E7_xHlBjkMK3rg4MHMk2SE-zpZkDnZqP?usp=drive_link' },
      { name: 'Unit 5', link: 'https://drive.google.com/drive/folders/1xs6z1DihDEky_uGenw4VgkE3OhVqJBeu?usp=drive_link' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/132mfASnN4ME3t21gaX9bym8An0Y9DG3_?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1_LGhUEvQS77V6n1TwLYU2RSH-z-TOQLj/view?usp=sharing'
  },
  'coa101': {
    pyqs: [
      { name: 'PYQ May 2024', link: 'https://drive.google.com/file/d/1IpxPWpYGwOxZYq2HdkAXbvc8GSM7K5C4/view?usp=drive_link' },
      { name: 'PYQ Jul 2024', link: 'https://drive.google.com/file/d/1IkibJYwurcgOPP1HDKldcNe2Ndj2VNwH/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1JQHzeYSwPDMBceOrHdE8YPv5BkEtq2NC/view?usp=drive_link' },
      { name: 'PYQ Nov 2023', link: 'https://drive.google.com/file/d/1Ij3hfEHeOgvmZFvBlqUMV6QQzXDB16U-/view?usp=drive_link' },
      { name: 'PYQ Dec 2022', link: 'https://drive.google.com/file/d/1ACBeURjKfbfWZC6qMpm-ZRV7eOwjaGvc/view?usp=drive_link' },
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1A2_a59TwkR-ECsJPz6na9TP-MunSLvIj?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/drive/folders/1Oo_LMKe1yEnkDvdHkV8tPD7i-QWKfqLs?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/drive/folders/1BgyufGkVIKcoWtFjvSYqxJw8P8Z60xmU?usp=drive_link' },
      { name: 'Unit 3', link: 'https://drive.google.com/drive/folders/1Ofrtaw2CBusjNLjw_FgW0faEy904G8TM?usp=drive_link' },
      { name: 'Unit 4', link: 'https://drive.google.com/drive/folders/15Qt4iB8sOfegMPD14x0z6rJNbJmJU76O?usp=drive_link' },
      { name: 'Unit 5', link: 'https://drive.google.com/drive/folders/1m-H8Z00cT9KBcomtdMyxAAetboOzX7rD?usp=drive_link' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/1fNBUxK7KsdINSCeMAgIpoLfRD1X7RFa5?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1UUnQR1X_RgCplqgm10B085OzUmQtEvuj/view?usp=drive_link'
  },
  'ops101': {
    pyqs: [
      { name: 'PYQ Jun 2023', link: 'https://drive.google.com/file/d/1J11Bof7VLzkGdu0i9HQfYd4lH07I6UVo/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1JbsMpAnBDBAuqvyendtizPJo89LktUkx/view?usp=drive_link' },
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/1J0CwoGcPNSCWL1OT6cqE--BdaMkcLWNF/view?usp=drive_link' },
      { name: 'More PYQs', link: 'https://drive.google.com/file/d/1bdPmFfypqJyalCqI1c8FVMmZ6YOv-09t/view?usp=drive_link' },
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1J62hkGVN_URlqlrh4op0Fri6yzHqugkx?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/file/d/1m3HahaUEUwqWUjJlfIoc5rxeELcOsoDw/view?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/file/d/1o0MvhOteH2FcJgM4NjNv-ELFnYk3Xo9I/view?usp=drive_link' },
      { name: 'Unit 3', link: 'https://docs.google.com/presentation/d/1yhwbr_TyOnhN0_a7DVM66HkyokiGKSMq/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 4', link: 'https://docs.google.com/presentation/d/1yBWMnmc2wUY_D8FZmxylgV7nAQWx51VC/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 5', link: 'https://drive.google.com/file/d/17PzA2FJpaubuIn8SvVvFhWVWHlWwCRU_/view?usp=drive_link' },
      { name: 'Handwritten Notes by AbT', link: 'https://drive.google.com/file/d/18of6HCcqiixs6UfgMMZUYQOuaRzq5prY/view?usp=drive_link' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/1Qt82PVY7dtlQZVS7ajLqAzaTZbYCQCq9?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/13u9nWuP9Z6q6R7NmL_PMoSxfe3j6oQrn/view?usp=drive_link'
  },
  'tbv101': {
    pyqs: [
      { name: 'PYQ May 2022', link: 'https://drive.google.com/file/d/1IeiKIk2Jf91cvDUMoiT5By1IWzAJ6Vts/view?usp=drive_link' },
      { name: 'PYQ May 2023', link: 'https://drive.google.com/file/d/1IatAfuH0FGQCK3n3RdUgsGBy-DZ1dx--/view?usp=drive_link' },
      { name: 'PYQ Jun 2023', link: 'https://drive.google.com/file/d/1I_KA9T-6ZaA7o_RKxthoLRnP6bAYVrWc/view?usp=drive_link' },
      { name: 'PYQ Dec 2018', link: 'https://drive.google.com/file/d/1Et4fx5R1OFZL3uIWk-Cw9muVNjFjcZ5N/view?usp=drive_link' },
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1PzGdoiUpM8V8DKCwroYG9fWCg3ZYmYv7?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1 (Best Handwritten Notes + PPTs', link: 'https://drive.google.com/drive/folders/1E6YAjd1lIhLWNkApnl0tJk02AhL2EDfl?usp=drive_link' },
      { name: 'Unit 2 (Best Handwritten Notes + PPTs', link: 'https://drive.google.com/drive/folders/1pQZBKHul5peCHSUJiBSuxjztMnKr7Nqm?usp=drive_link' },
      { name: 'Unit 3 (Best Handwritten Notes + PPTs', link: 'https://drive.google.com/drive/folders/115nd_bx3wHrmr8xkfYPCrRdwcZA3mBCf?usp=drive_link' },
      { name: 'Unit 4 (Best Handwritten Notes + PPTs', link: 'https://drive.google.com/drive/folders/1OVGL9y5ROBwKElRdYWsYImzuvkdKw-Ld?usp=drive_link' },
      { name: 'Unit 5 (Best Handwritten Notes + PPTs', link: 'https://drive.google.com/drive/folders/1A9E_HXs_LFfqZpHtbd1WXSF0oSWqQMDj?usp=drive_link' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/10KZ2BVcADYifvqwItw84v6OXT00GB8G7?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1817TcuyeTBy1V0sJ_Cn8pYyPaW32aY9p/view?usp=drive_link'
  },
  'app101': {
    pyqs: [
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1usLNaymcsmP-3msDKyT5tC-M0A78f2hM?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'Coming Soon' },
      { name: 'Unit 2', link: 'Coming Soon' },
      { name: 'Unit 3', link: 'https://docs.google.com/presentation/d/1ZIypQgRLg8JmBc-RSisOabjXBhTFxsdz/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 4', link: 'https://docs.google.com/presentation/d/1MUKOxP5YPVYl1AnlX16snckb2f0bsClr/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 5', link: 'https://docs.google.com/presentation/d/1aRIsf3PCsd-Fe7M91_h88uPECMWiPhk3/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Notes From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/1WbKVOCdpoPCCqTKKbJKhoAcnRlf4sD9h?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1xe79XCLWCMDbRrSnMN7H1m_90VY7Mjw-/view?usp=drive_link'
  },
  'dtm101': {
    pyqs: [
      { name: 'NO EXAMS!', link: '' },
    ],
    studyMaterials: [
      { name: 'Resources', link: 'https://drive.google.com/drive/folders/1vmkBdyFo_hXLKW6xj9VwuMKhC5k_X_5E?usp=drive_link' },
      { name: 'Resources From NCR Campus By BTECH CRUX', link: 'https://drive.google.com/drive/folders/1V4PNoRvTRjm1aQJHL3uD5LbnrdCvHTYJ?usp=drive_link' },
    ]
  },
  'daa101': {
    pyqs: [
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1IzvDy3fB1W64JdNJkaHlLuVcUQ1bWdfv?usp=sharing' },
      { name: 'Question Bank', link: 'https://drive.google.com/file/d/1Wnirz2pevIw-_1eeju5dtzyT3bxqC27F/view?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/drive/folders/1yIK7ebssi3KRjUnlS9MAFV0K21T2NSBY?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/drive/folders/1r3tWP772ZvAThmnwlnoFd1GV525he4i6?usp=drive_link' },
      { name: 'Unit 3', link: 'https://drive.google.com/drive/folders/1uTp_NyR75-VZhGRGPPIk--WsmKzu1Z2R?usp=drive_link' },
      { name: 'Unit 4', link: 'https://drive.google.com/drive/folders/13qLzPMsJzt1-AT0U5dpKKgg8tWjf4Y1P?usp=drive_link' },
      { name: 'Unit 5', link: 'https://drive.google.com/drive/folders/1b2AP_DxNXnWStenXwkLN1Yw5bZBGJw4R?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1ob48DPdNU5P4ZRjZLoHVqAeojuE8c2Vs/view?usp=drive_link'
  },
  'dbms101': {
    pyqs: [
      { name: 'CT Papers', link: 'https://drive.google.com/drive/folders/1a9PAOLGwtLBLxVYwW1ZBc6fDHJ8o5DeG?usp=sharing' },
      { name: 'SEM Papers', link: 'https://drive.google.com/drive/folders/1uQLtuQyuoBwXBur2ZQPUp2Q16MjaXtxK?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/file/d/1Zms_a-iDpB5IvaDh-3xa0fKfdpjj4sjg/view?usp=sharing' },
      { name: 'Unit 2', link: 'Coming Soon' },
      { name: 'Unit 3', link: 'https://docs.google.com/presentation/d/1t6wFh5KHGIhBjR3RrLyxouYg7aoYhhOg/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 4', link: 'Coming Soon' },
      { name: 'Unit 5', link: 'https://drive.google.com/file/d/1UY8C997l3CSttVgd2nUdzgm8dXs2yhlU/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1k2atwtw5sX0MuOyZl7sXIs3gQBM52ZKw/view?usp=drive_link'
  },
  'ai101': {
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/drive/folders/1RrLhgU-P1EN-eu_-BN2kOB_EqVSHaeOt?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://docs.google.com/presentation/d/1ZCRSq-FFGaMC10X3vyhu7SvVjFA9KB22/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 2', link: 'https://drive.google.com/file/d/1P96TlpUT79A8ASB9hGmShyWzi-nFCXX1/view?usp=drive_link' },
      { name: 'Unit 3', link: 'https://drive.google.com/file/d/1LIH8WDTktg4puEc2iCHSAfbnbLYWy1R2/view?usp=drive_link' },
      { name: 'Unit 4', link: 'https://drive.google.com/file/d/1ZJtOxtm99edfoTFK7Nziw9V5ckQdcOqY/view?usp=drive_link' },
      { name: 'Unit 5', link: 'https://drive.google.com/file/d/1cQcqSBNFAGbWPjSCYCzZy9NZtJCQHaIN/view?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1wupYNBNpFVPNeonkKvTM5RGyoA_MFRXJ/view?usp=drive_link'
  },
  'swp101': {
    pyqs: [
      { name: 'Coming Soon', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/file/d/1918nLjWj9e8y7CuaKnCo6puSoj8xWIji/view?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/file/d/1fgIOGqljq6_qt374aI5BCOTITrx50B39/view?usp=drive_link' },
      { name: 'Unit 3', link: 'Coming Soon' },
      { name: 'Unit 4', link: 'Coming Soon' },
      { name: 'Unit 5', link: 'Coming Soon' },
    ],
    syllabus: 'https://drive.google.com/file/d/1G4b2XgLgJqa8GGFg8clzeo_AOaZnR1Mg/view?usp=sharing'
  },
  'iot101': {
    pyqs: [
      { name: 'CT PYQs', link: 'https://drive.google.com/file/d/1Iizy1bV8yNpDemFB5ZMxsipzR_5xsvBC/view?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://docs.google.com/presentation/d/18S2osQF1TUo4p2ZEdRbBimJMoD9YD0Uj/edit?usp=drive_link&ouid=104856686103320873965&rtpof=true&sd=true' },
      { name: 'Unit 2', link: 'https://drive.google.com/file/d/1FqkiokSjvNtuza_W88Wvio2Q2MwIthTP/view?usp=drive_link' },
      { name: 'Unit 3 (COMING SOON)', link: '' },
      { name: 'Unit 4 (COMING SOON)', link: '' },
      { name: 'Unit 5 (COMING SOON)', link: '' },
    ],
    syllabus: 'https://drive.google.com/file/d/1G4b2XgLgJqa8GGFg8clzeo_AOaZnR1Mg/view?usp=sharing'
  },
  'pqt101': {
    pyqs: [
      { name: 'CT Papers Compilation', link: 'https://drive.google.com/file/d/1zQh4mtmGc7YuIYe0IbfOzbjGUIH1crrz/view?usp=sharing' },
    ],
    studyMaterials: [
      { name: 'Unit 1', link: 'https://drive.google.com/drive/folders/1hQn53A49uYx3KlGZDRc7L6AQZFwc75py?usp=drive_link' },
      { name: 'Unit 2', link: 'https://drive.google.com/drive/folders/1sw02282tT2-XlIg2Qh9Z45fJxKP2GscM?usp=drive_link' },
      { name: 'Unit 3', link: 'Coming Soon' },
      { name: 'Unit 4', link: 'https://drive.google.com/drive/folders/1czNeYg50hxuE46PdZVjeiDV9xOhnxmXl?usp=drive_link' },
      { name: 'Unit 5', link: 'https://drive.google.com/drive/folders/14RHVvOfS_BWSW_bMBnHlff2OUPF4Jzso?usp=drive_link' },
    ],
    syllabus: 'https://drive.google.com/file/d/1uQyOIFlqvm5SdSdOHVIdrvDRuj9PqX8z/view?usp=drive_link'
  },
  'soe101': {
    pyqs: [
      { name: 'PYQ CT Papers', link: 'https://drive.google.com/file/d/1WwlOwVuqvm8pIV9PFEo1fvnkBjc3WF5-/view?usp=sharing' },
      { name: 'Imp Questions & MCQs', link: 'https://drive.google.com/drive/folders/1o91F0pHEIFDO95eVn_ad6UPyv8Qq7HCS?usp=drive_link' },
    ],
    studyMaterials: [
      { name: 'Study Materials', link: 'https://drive.google.com/drive/folders/16XDz1RuY1zKHIqvso0-CB3G8iV0QAE5c?usp=drive_link' },
    ]
  },
  'dld101': {
    pyqs: [
      { name: 'Coming Soon', link: '' },
    ],
    studyMaterials: [
      { name: 'Unit - 1', link: 'https://drive.google.com/drive/folders/1xQqYOtjZoKvAws6txapTEMtHa0d2LPZp?usp=drive_link' },
      { name: 'Unit - 2', link: 'https://drive.google.com/drive/folders/1ByL8KGNqCqgihIPwtH8Y5JjPaJ0qZedw?usp=drive_link' },
      { name: 'Unit - 3', link: 'https://drive.google.com/drive/folders/1VwSBY8CyS3OjoGhbcDhWhEoAceByexp1?usp=drive_link' },
      { name: 'Unit - 4', link: 'https://drive.google.com/drive/folders/1H6n01_wsopN0X8mrcUNZLsg8wpRcKRm1?usp=drive_link' },
      { name: 'Unit - 5', link: 'https://drive.google.com/drive/folders/1nr3dBk1enGeU9GtQhWlxLprvFlD37J3-?usp=drive_link' },
      { name: 'More Study Materials', link: 'https://drive.google.com/drive/folders/1katPtttHZZkMHGHH1cnaemdCoMDZgF1J?usp=drive_link' },
    ]
  }
};

// For backward compatibility - this structure is used in other components
export const resourceData = {
  pyqs: subjectResources['mat101'].pyqs,
  studyMaterials: subjectResources['mat101'].studyMaterials,
  youtube: subjectResources['mat101'].youtube || [],
};
