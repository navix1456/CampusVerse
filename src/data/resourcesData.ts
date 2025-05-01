
export interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string; // Added for YouTube thumbnails
}

// Enhanced mock resources data with detailed items and thumbnails for YouTube
export const resourceData = {
  pyqs: [
    { name: 'Mid Term Exam 2023', link: '#' },
    { name: 'End Term Exam 2023', link: '#' },
    { name: 'Supplementary Exam 2023', link: '#' },
    { name: 'Mid Term Exam 2022', link: '#' },
    { name: 'End Term Exam 2022', link: '#' },
    { name: 'End Term Exam 2021', link: '#' },
    { name: 'Mid Term Exam 2020', link: '#' },
    { name: 'End Term Exam 2020', link: '#' },
    { name: 'End Term Exam 2019', link: '#' },
  ],
  studyMaterials: [
    { name: 'Unit 1: Introduction', link: '#' },
    { name: 'Unit 2: Basic Concepts', link: '#' },
    { name: 'Unit 3: Advanced Topics', link: '#' },
    { name: 'Unit 4: Applications', link: '#' },
    { name: 'Unit 5: Case Studies', link: '#' },
    { name: 'Topic 1 Slides', link: '#' },
    { name: 'Topic 2 Slides', link: '#' },
    { name: 'Problem Set 1', link: '#' },
    { name: 'Problem Set 2', link: '#' },
    { name: 'Problem Set 3', link: '#' },
  ],
  youtube: [
    { 
      name: 'Complete Course by Jenny Lectures', 
      link: 'https://www.youtube.com/c/JennyLectures', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZRjZJZj5UsW7hsqN2zpYVvotAdW-AD0OE0nNbZW=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Tutorial Series by Neso Academy', 
      link: 'https://www.youtube.com/user/nesoacademy', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZQRr0-dlVxFNQZ2u0Vz9l8K1lWxfcZtu7-_eSFtQQ=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Crash Course by Gate Smashers', 
      link: 'https://www.youtube.com/c/GateSmashers', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZTbFjMfwxDYoYIpQikqFwT7BuPZ3M4JCtRjXmaTuw=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Concept Explanations by Unacademy', 
      link: 'https://www.youtube.com/c/unacademy', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ45ATGnyQf1dBeEYZOdjKkaQ0NOgRmHHre-E2R=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Problem Solving by CodeWithHarry', 
      link: 'https://www.youtube.com/c/CodeWithHarry', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZSn_hGYu-EqbholbQFpeRZ-WnUmWM90jiQTaJ4z=s88-c-k-c0x00ffffff-no-rj' 
    },
  ],
};
