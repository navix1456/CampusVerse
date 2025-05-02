
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ChevronDown, ChevronUp, Link, FileText, Book, ExternalLink, Building, FileCheck, Video, FileSpreadsheet } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const placementData = {
  resumeTemplates: [
    { name: 'Software Engineer Template', link: '#' },
    { name: 'Data Science Template', link: '#' },
    { name: 'Full Stack Developer Template', link: '#' },
    { name: 'Product Manager Template', link: '#' },
  ],
  mockInterviews: [
    { name: 'LeetCode Mock Interview', link: 'https://leetcode.com/mock-interview/' },
    { name: 'Pramp Peer Interviews', link: 'https://www.pramp.com/' },
    { name: 'InterviewBit Practice', link: 'https://www.interviewbit.com/' },
  ],
  dsaResources: [
    { name: 'Leetcode Top Interview Questions', link: 'https://leetcode.com/explore/interview/card/top-interview-questions-medium/' },
    { name: 'GeeksforGeeks Must Do Coding Questions', link: 'https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/' },
    { name: 'Neetcode 150', link: 'https://neetcode.io/' },
  ],
  jobBoards: [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/jobs/' },
    { name: 'Internshala', link: 'https://internshala.com/' },
    { name: 'AngelList', link: 'https://angel.co/jobs' },
    { name: 'Indeed', link: 'https://www.indeed.com/' },
  ],
  interviewQuestions: [
    { name: 'System Design Interview Questions', link: '#' },
    { name: 'Behavioral Questions', link: '#' },
    { name: 'Technical Interview FAQ', link: '#' },
  ],
  srmResources: [
    { 
      name: 'Use Cases - Marquee Companies', 
      link: 'https://drive.google.com/drive/folders/1bV0a9biHI6e0Yhcnyt-6W0GqjH7tgeUH',
      icon: <Building size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'Use Cases - SuperDream Companies', 
      link: 'https://drive.google.com/drive/folders/1974Mq5Hizq9kDnr6gedY6bBs7w3THI1X',
      icon: <Building size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'Resumes of Placed Students', 
      link: 'https://docs.google.com/spreadsheets/d/1sMwmPRpBir5IrNfmji6AcJNIQhAyE9OF2_-J0w6XJsw',
      icon: <FileCheck size={18} className="text-campus-neonPink" />
    },
    { 
      name: 'Placement Prep Talk', 
      link: 'https://docs.google.com/spreadsheets/d/1c2H5X2bvLYup1J7kYXaaDz1SY28WKqhNvPRpniRd4hE',
      icon: <FileSpreadsheet size={18} className="text-campus-neonPink" />
    },
    { 
      name: 'Technical Aptitude Questions Video', 
      link: 'https://drive.google.com/file/d/1NzieNEZNYcu3S2yQjirAxLC5M1zPk7AO',
      icon: <Video size={18} className="text-red-500" />
    },
    { 
      name: 'Video - Use Cases', 
      link: 'https://docs.google.com/spreadsheets/d/1aUQ6NxPTDd9hhO1s3zK5HIy8s-tSEh4YU1MDhWzoL7Y',
      icon: <Video size={18} className="text-red-500" />
    },
    { 
      name: 'E&T Global Industry Certification Details', 
      link: 'https://drive.google.com/file/d/1LM5T1DQguJfU20LQ37KcpCI9h3AgMwg8/view?usp=sharing',
      icon: <FileText size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'PREPARE PURSUE PROSPER (P CUBE PPT)', 
      link: 'https://docs.google.com/presentation/d/1fv9SuR8XtDy8-PUQlcmuq2ELO_7sf8Ht/edit?usp=sharing&ouid=103174872615923954136&rtpof=true&sd=true',
      icon: <FileText size={18} className="text-campus-neonBlue" />
    },
  ]
};

const ResourceLink = ({ item }: { item: { name: string; link: string; icon?: React.ReactNode } }) => (
  <li className="flex items-center">
    {item.icon || <Link size={16} className="mr-2 text-campus-neonPink" />}
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-campus-neonBlue transition-colors flex-1"
    >
      {item.name}
    </a>
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="ml-2 px-4 py-1 text-xs bg-campus-purple/30 rounded-full hover:bg-campus-purple/50 transition-colors"
    >
      View
    </a>
  </li>
);

const Placement = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Placement Resources</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive resources to help you prepare for interviews and land your dream job.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">General Resources</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="resume-templates" className="glass-card rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-campus-purple/30 flex items-center justify-center mr-3">
                    <FileText size={18} className="text-campus-neonBlue" />
                  </div>
                  <span className="text-xl font-semibold">Resume Templates</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="space-y-2">
                  {placementData.resumeTemplates.map((item, index) => (
                    <ResourceLink key={index} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="mock-interviews" className="glass-card rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-campus-purple/30 flex items-center justify-center mr-3">
                    <Book size={18} className="text-campus-neonBlue" />
                  </div>
                  <span className="text-xl font-semibold">Mock Interviews</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="space-y-2">
                  {placementData.mockInterviews.map((item, index) => (
                    <ResourceLink key={index} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="dsa-resources" className="glass-card rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-campus-purple/30 flex items-center justify-center mr-3">
                    <Book size={18} className="text-campus-neonBlue" />
                  </div>
                  <span className="text-xl font-semibold">DSA/CP Resource List</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="space-y-2">
                  {placementData.dsaResources.map((item, index) => (
                    <ResourceLink key={index} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="job-boards" className="glass-card rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-campus-purple/30 flex items-center justify-center mr-3">
                    <Book size={18} className="text-campus-neonBlue" />
                  </div>
                  <span className="text-xl font-semibold">Job Boards</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="space-y-2">
                  {placementData.jobBoards.map((item, index) => (
                    <ResourceLink key={index} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="interview-questions" className="glass-card rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-campus-purple/30 flex items-center justify-center mr-3">
                    <Book size={18} className="text-campus-neonBlue" />
                  </div>
                  <span className="text-xl font-semibold">Interview Questions</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="space-y-2">
                  {placementData.interviewQuestions.map((item, index) => (
                    <ResourceLink key={index} item={item} />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">SRM Placement Resources</h2>
          <div className="glass-card rounded-lg p-6 mb-12">
            <ul className="space-y-4">
              {placementData.srmResources.map((item, index) => (
                <ResourceLink key={index} item={item} />
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold text-campus-neonBlue mb-4">For More Information About Placements</h3>
            <a
              href="https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline"
            >
              Use SRMIST STUDENT PORTAL
            </a>
            
            <div className="mt-8 flex flex-col items-center">
              <div className="glass-card p-4 rounded-lg max-w-md">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/69ebcdff-2e07-42cd-8961-5fa34e7e6a1a.png" 
                    alt="Placement Insight Dashboard" 
                    className="w-40"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">Placement Insight Dashboard</h4>
                    <p className="text-sm text-gray-300">Access real-time placement statistics and company visit schedules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
