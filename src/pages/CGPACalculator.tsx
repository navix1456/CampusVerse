import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface Subject {
  credits: number;
  grade: string;
}

const gradePoints: { [key: string]: number } = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'F': 0,
  'I': 0,
  'W': 0,
  'Ab': 0,
  '*': 0
};

const CGPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { credits: 0, grade: '' }
  ]);
  const calculateCGPA = (subs: Subject[]) => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    subs.forEach(subject => {
      if (subject.credits && subject.grade) {
        totalCredits += subject.credits;
        totalGradePoints += subject.credits * gradePoints[subject.grade];
      }
    });
    if (totalCredits > 0) {
      return Number((totalGradePoints / totalCredits).toFixed(2));
    }
    return null;
  };
  const cgpa = calculateCGPA(subjects);

  const addSubject = () => {
    setSubjects([...subjects, { credits: 0, grade: '' }]);
  };

  const removeSubject = (index: number) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
  };

  const updateSubject = (index: number, field: keyof Subject, value: string | number) => {
    const newSubjects = [...subjects];
    newSubjects[index] = { ...newSubjects[index], [field]: value };
    setSubjects(newSubjects);
  };

  return (
    <div className="min-h-screen pb-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center gradient-text">CGPA Calculator</h1>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="number"
                  placeholder="Credits"
                  value={subject.credits || ''}
                  onChange={(e) => updateSubject(index, 'credits', parseInt(e.target.value) || 0)}
                />
                <div className="flex gap-2">
                  <Select
                    value={subject.grade}
                    onValueChange={(value) => updateSubject(index, 'grade', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(gradePoints).map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {subjects.length > 1 && (
                    <Button
                      variant="destructive"
                      onClick={() => removeSubject(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <div className="flex justify-center gap-4">
          <Button onClick={addSubject}>Add Subject</Button>
        </div>
        {cgpa !== null && (
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Your CGPA</h2>
                <p className="text-4xl font-bold text-green-400">{cgpa}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      <Card className="mt-8 mb-8">
        <CardHeader>
          <CardTitle>Grade Points Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(gradePoints).map(([grade, points]) => (
              <div key={grade} className="flex justify-between p-2 bg-gray-800 rounded">
                <span className="font-semibold">{grade}</span>
                <span>{points}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CGPACalculator; 