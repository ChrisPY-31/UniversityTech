import React from 'react'
import InstructorHeader from '../../Components/Instructor/InstructorHeader'
import WelcomeSection from '../../Components/Instructor/WelcomeSection'
import StatsCards from '../../Components/Instructor/StatsCards'
import CourseList from '../../Components/Instructor/CourseList'
import InstructorFooter from '../../Components/Instructor/InstructorFooter'

const InstructorDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <InstructorHeader />
      <div className="flex-1 px-8 py-6 space-y-8">
        <WelcomeSection />
        <StatsCards />
        <CourseList />
      </div>
      <InstructorFooter />
    </div>
  )
}

export default InstructorDashboard