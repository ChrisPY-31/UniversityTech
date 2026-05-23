import React from 'react'
import InstructorHeader from '../../components/Instructor/InstructorHeader'
import WelcomeSection from '../../components/Instructor/WelcomeSection'
import StatsCards from '../../components/Instructor/StatsCards'
import CourseList from '../../components/Instructor/CourseList'
import InstructorFooter from '../../components/Instructor/InstructorFooter'
import { useSelector } from 'react-redux'
import { useUser } from '@/hooks/useUser'
import { useCourses } from '@/hooks/useCourses'

const InstructorDashboard = () => {

  const {user} = useSelector((state ) => state.user)
  const {fetchDeleteCourse} = useCourses();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 px-6 py-6 space-y-8">
        <WelcomeSection />
        <StatsCards />
        <CourseList courses={user.courses} fetchDeleteCourse={fetchDeleteCourse } />
      </div>
      <InstructorFooter />
    </div>
  )
}

export default InstructorDashboard