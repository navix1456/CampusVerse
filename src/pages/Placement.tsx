
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ChevronDown, ChevronUp, Link, FileText, Book } from 'lucide-react';
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
};

const Placement = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Placement Resources</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive resources to help you prepare for interviews and land your dream job.
        </p>
        
        <div className="max-w-3xl mx-auto">
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
                    <li key={index} className="flex items-center">
                      <Link size={16} className="mr-2 text-campus-neonPink" />
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-campus-neonBlue transition-colors">
                        {item.name}
                      </a>
                    </li>
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
                    <li key={index} className="flex items-center">
                      <Link size={16} className="mr-2 text-campus-neonPink" />
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-campus-neonBlue transition-colors">
                        {item.name}
                      </a>
                    </li>
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
                    <li key={index} className="flex items-center">
                      <Link size={16} className="mr-2 text-campus-neonPink" />
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-campus-neonBlue transition-colors">
                        {item.name}
                      </a>
                    </li>
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
                    <li key={index} className="flex items-center">
                      <Link size={16} className="mr-2 text-campus-neonPink" />
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-campus-neonBlue transition-colors">
                        {item.name}
                      </a>
                    </li>
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
                    <li key={index} className="flex items-center">
                      <Link size={16} className="mr-2 text-campus-neonPink" />
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-campus-neonBlue transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Placement;
