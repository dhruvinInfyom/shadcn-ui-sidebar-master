'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { toast } from "@/components/ui/use-toast"

export function RegisterScreen() {
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gradeLevel: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    preferredSubjects: [],
    photoFile: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (subject: string) => {
    // setFormData(prev => ({
    //   ...prev,
    //   preferredSubjects: prev.preferredSubjects.includes(subject)
    //     ? prev.preferredSubjects.filter(s => s !== subject)
    //     : [...prev.preferredSubjects, subject]
    // }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // setFormData(prev => ({ ...prev, photoFile: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    // toast({
    //   title: "Registration Submitted",
    //   description: "Thank you for registering. We will contact you soon.",
    // })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>School Registration</CardTitle>
        <CardDescription>Please fill out the form below to register for our school.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentFirstName">Student First Name</Label>
              <Input
                id="studentFirstName"
                name="studentFirstName"
                required
                value={formData.studentFirstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentLastName">Student Last Name</Label>
              <Input
                id="studentLastName"
                name="studentLastName"
                required
                value={formData.studentLastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gradeLevel">Grade Level</Label>
              <Select onValueChange={handleSelectChange('gradeLevel')}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  {['Kindergarten', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((grade) => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name</Label>
            <Input
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentEmail">Parent/Guardian Email</Label>
              <Input
                id="parentEmail"
                name="parentEmail"
                type="email"
                required
                value={formData.parentEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
              <Input
                id="parentPhone"
                name="parentPhone"
                type="tel"
                required
                value={formData.parentPhone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Preferred Subjects</Label>
            <div className="grid grid-cols-2 gap-2">
              {['Math', 'Science', 'English', 'History', 'Art', 'Music'].map((subject) => (
                <div key={subject} className="flex items-center space-x-2">
                  <Checkbox
                    id={subject}
                    // checked={formData.preferredSubjects.includes(subject:any)}
                    onCheckedChange={() => handleCheckboxChange(subject)}
                  />
                  <Label htmlFor={subject}>{subject}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="photoUpload">Student Photo (Optional)</Label>
            <Input
              id="photoUpload"
              name="photoUpload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit Registration</Button>
        </CardFooter>
      </form>
    </Card>
  )
}