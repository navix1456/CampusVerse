import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';

interface GradeRange {
  grade: string;
  minPercentage: number;
  maxPercentage: number;
  result: string;
}

const gradeRanges: GradeRange[] = [
  { grade: 'O', minPercentage: 91, maxPercentage: 100, result: 'PASS' },
  { grade: 'A+', minPercentage: 81, maxPercentage: 90, result: 'PASS' },
  { grade: 'A', minPercentage: 71, maxPercentage: 80, result: 'PASS' },
  { grade: 'B+', minPercentage: 61, maxPercentage: 70, result: 'PASS' },
  { grade: 'B', minPercentage: 56, maxPercentage: 60, result: 'PASS' },
  { grade: 'C', minPercentage: 50, maxPercentage: 55, result: 'PASS' },
  { grade: 'Ab', minPercentage: 0, maxPercentage: 100, result: 'INCOMPLETE' },
  { grade: '*', minPercentage: 0, maxPercentage: 100, result: 'WITHHELD' },
  { grade: 'I', minPercentage: 0, maxPercentage: 100, result: 'FAIL' },
  { grade: 'W', minPercentage: 0, maxPercentage: 100, result: 'FAIL' },
  { grade: 'F', minPercentage: 0, maxPercentage: 49, result: 'FAIL' },
];

interface Assessment {
  credits: number;
  internalMarks: number;
  desiredGrade: string;
  requiredMarks: number | null;
  calculated: boolean;
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

const GradeCalculator = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([
    { credits: 0, internalMarks: 0, desiredGrade: '', requiredMarks: null, calculated: false }
  ]);

  const addAssessment = () => {
    setAssessments([...assessments, { credits: 0, internalMarks: 0, desiredGrade: '', requiredMarks: null, calculated: false }]);
  };

  const removeAssessment = (index: number) => {
    const newAssessments = assessments.filter((_, i) => i !== index);
    setAssessments(newAssessments);
  };

  const updateAssessment = (index: number, field: keyof Assessment, value: string | number) => {
    const newAssessments = [...assessments];
    newAssessments[index] = { ...newAssessments[index], [field]: value, calculated: false };
    setAssessments(newAssessments);
  };

  const calculateRequiredMarks = (index: number) => {
    const assessment = assessments[index];
    const gradeRange = gradeRanges.find(g => g.grade === assessment.desiredGrade);
    if (!gradeRange) return;
    const totalMarksNeeded = (gradeRange.minPercentage);
    const internal = assessment.internalMarks;
    // External marks out of 75, converted to 40
    // Let x = required external marks out of 75
    // (internal) + (x/75)*40 >= totalMarksNeeded
    // (x/75)*40 >= totalMarksNeeded - internal
    // x >= ((totalMarksNeeded - internal) / 40) * 75
    const requiredExternalMarks = ((totalMarksNeeded - internal) / 40) * 75;
    const newAssessments = [...assessments];
    newAssessments[index] = {
      ...newAssessments[index],
      requiredMarks: (requiredExternalMarks > 75 || requiredExternalMarks < 0) ? null : requiredExternalMarks,
      calculated: true
    };
    setAssessments(newAssessments);
  };

  // Live CGPA calculation for all rows with valid grade and credits
  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    assessments.forEach(a => {
      if (a.credits && a.desiredGrade && gradePoints[a.desiredGrade] !== undefined && a.calculated && a.requiredMarks !== null) {
        totalCredits += a.credits;
        totalGradePoints += a.credits * gradePoints[a.desiredGrade];
      }
    });
    if (totalCredits > 0) {
      return (totalGradePoints / totalCredits).toFixed(2);
    }
    return null;
  };
  const cgpa = calculateCGPA();

  return (
    <>
      <Navbar />
      <div className="min-h-screen pb-12 px-4 max-w-4xl mx-auto pt-24">
        <h1 className="text-4xl font-bold mb-6 text-center gradient-text">Grade Calculator</h1>
        <div className="space-y-4">
          {assessments.map((assessment, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Credits</label>
                    <Input
                      type="number"
                      min="0"
                      value={assessment.credits || ''}
                      onChange={(e) => updateAssessment(index, 'credits', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Internal Marks (out of 60)</label>
                    <Input
                      type="number"
                      min="0"
                      max="60"
                      value={assessment.internalMarks || ''}
                      onChange={(e) => updateAssessment(index, 'internalMarks', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Desired Grade</label>
                    <Select
                      value={assessment.desiredGrade}
                      onValueChange={(value) => updateAssessment(index, 'desiredGrade', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {gradeRanges.map((range) => (
                          <SelectItem key={range.grade} value={range.grade}>
                            {range.grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end gap-2">
                    <Button
                      onClick={() => calculateRequiredMarks(index)}
                      className="w-full"
                    >
                      Calculate
                    </Button>
                    {assessments.length > 1 && (
                      <Button
                        variant="destructive"
                        onClick={() => removeAssessment(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
                {assessment.calculated && assessment.requiredMarks !== null && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                    <p className="text-center">
                      Required External Marks: <span className="font-bold text-green-400">{assessment.requiredMarks.toFixed(2)}</span> out of 75
                    </p>
                  </div>
                )}
                {assessment.calculated && assessment.requiredMarks === null && assessment.desiredGrade && (
                  <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                    <p className="text-center text-red-400">
                      Cannot achieve {assessment.desiredGrade} with current internal marks
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          <div className="flex justify-center">
            <Button onClick={addAssessment}>Add Assessment</Button>
          </div>
          {cgpa && (
            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Predicted CGPA</h2>
                  <p className="text-4xl font-bold text-green-400">{cgpa}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <Card className="mt-8 mb-8">
          <CardHeader>
            <CardTitle>Grade Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-2 text-left">Grade</th>
                    <th className="p-2 text-left">Min %</th>
                    <th className="p-2 text-left">Max %</th>
                    <th className="p-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeRanges.map((range) => (
                    <tr key={range.grade} className="border-b border-gray-700">
                      <td className="p-2">{range.grade}</td>
                      <td className="p-2">{range.minPercentage}</td>
                      <td className="p-2">{range.maxPercentage}</td>
                      <td className="p-2">{range.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GradeCalculator; 