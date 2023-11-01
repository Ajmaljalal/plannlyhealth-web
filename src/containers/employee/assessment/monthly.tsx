'use client'
import { Button } from '@/components/button'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { calculateWidthTailwindClass, get_month_year } from '@/lib/helpers'
import { useRouter } from 'next/navigation'
import { createAssessment, startMonthlyAssessment } from '@/lib/services/assessments'
import { Question } from '@/lib/types/assessments'
import { Option } from './option'
import { useDispatch, useSelector } from '@/store/store'
import { setAssessmentPostponed, setUser, userProfileSelector } from '@/store/user'
import { useSession } from 'next-auth/react'
import { getEmployeeByEmail } from '@/lib/services/employee'


const inProgressAssessmentId = `in-progress-${get_month_year()}`


function AssessmentContainer() {
  const { data: userSession } = useSession();
  const router = useRouter()
  const dispatch = useDispatch();
  const user: any = useSelector(userProfileSelector)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [allQuestions, setAllQuestions] = React.useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = React.useState<Question>(allQuestions[0])


  const getQuestions = async () => {
    const questions = user && await startMonthlyAssessment(user.id)
    questions && setAllQuestions(questions)
    questions && setCurrentQuestion(questions[0])
  }

  const fetchUserData = async () => {
    if (!userSession || user) return;

    try {
      const fetchedUser = await getEmployeeByEmail(userSession?.user?.email as string);
      dispatch(setUser(fetchedUser));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userSession]);

  useEffect(() => {
    const progress = localStorage.getItem(inProgressAssessmentId)
    if (progress) {
      const questions = JSON.parse(progress).progress
      // got to the last answered question
      const lastAnsweredQuestion = questions.find((question: Question) => !question.selected_option)
      setAllQuestions(questions)
      setCurrentQuestion(lastAnsweredQuestion)
    } else {
      getQuestions()
    }
  }, [user])

  const handleUpdateQuestion = (option: any) => {
    currentQuestion.selected_option = currentQuestion?.selected_option === option ? null : option;

    const updatedQuestions = allQuestions.map((question) =>
      question.id === currentQuestion?.id ? currentQuestion : question
    );

    setAllQuestions(updatedQuestions);

    // If no selected_option is selected or it's the last question, return early
    if (!currentQuestion?.selected_option || currentQuestion?.id === allQuestions?.length) return;

    const json = JSON.stringify({ progress: allQuestions });
    localStorage.setItem(inProgressAssessmentId, json)

    setTimeout(handleNextQuestion, 500);
  };


  const handleNextQuestion = () => {
    if (currentQuestion?.id === allQuestions?.length) return
    const nextQuestion = allQuestions[currentQuestion?.id]
    setCurrentQuestion(nextQuestion)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion?.id === 1) return
    const previousQuestion = allQuestions[currentQuestion?.id - 2]
    setCurrentQuestion(previousQuestion)
  }

  const handleSubmit = async () => {
    if (!user?.id) return
    setIsLoading(true)
    const assessment = {
      type: 'monthly',
      user_id: user.id,
      user_job_title: user.job_title,
      user_department: user.department,
      user_birthday: user.birthday,
      user_marital_status: user.marital_status,
      user_gender: user.gender,
      company_id: user.company_id,
      is_completed: true,
      answers: allQuestions,
    }
    try {
      await createAssessment(assessment)
      localStorage.removeItem(inProgressAssessmentId)
      localStorage.removeItem(`assessment-postponded-${get_month_year()}`)
      dispatch(setAssessmentPostponed(false))
      router.push('/assessment/congratulations')
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleSaveForLater = () => {
    const json = JSON.stringify({ progress: allQuestions });
    localStorage.setItem(inProgressAssessmentId, json)
    localStorage.setItem(`assessment-postponded-${get_month_year()}`, 'true')
    dispatch(setAssessmentPostponed(true))
    router.push('/employee/rewards')
  }



  const nextButtonText = currentQuestion?.id === allQuestions?.length ? 'Submit' : 'Next'
  const nextButtonOnClick = currentQuestion?.id === allQuestions?.length ? handleSubmit : handleNextQuestion

  const progress = Math.round((currentQuestion?.id / allQuestions?.length) * 100)
  const progressLength = calculateWidthTailwindClass(progress)
  const progressStyle = `flex items-center justify-end h-[12px] rounded-[8px] bg-gradient-to-r from-[#C301EE] via-[#DE1FA4] to-[#FF9539] ${progressLength} transition-all`


  if (!allQuestions.length) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <h2>Loading...</h2>
      </div>
    )
  }
  const renderProgressBar = () => {
    return (
      <div className='w-full bg-basic_grey_4 h-[12px] rounded-[8px] max-w-[1440px] mx-auto'>
        <div className={progressStyle}>
          <div className='w-[8px] h-[8px] bg-basic_white rounded-full mr-[2px] relative'>
            <div className='rounded-full mr-[2px] lg:mr-[0px] absolute top-4 right-[-15px]'>{progress}%</div>
          </div>
        </div>
      </div>
    )
  }

  const renderQuestion = () => {
    return (
      <div className='flex flex-col items-start gap-4 mt-[40px] lg:mt-[150px]'>
        <h4 className='flex gap-2 items-start font-normal md:font-bold'>
          <Image src={icons.arrowBackBg} width={32} height={32} alt='arrow back' onClick={handlePreviousQuestion} className='cursor-pointer' />
          {currentQuestion?.question}
        </h4>
        <div className='flex gap-4 flex-wrap lg:mt-[40px] justify-center w-full'>
          {
            currentQuestion?.options?.map((option, index) => {
              return <Option key={index} currentQuestion={currentQuestion} option={option} index={index} handleUpdateQuestion={handleUpdateQuestion} />
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className='p-[20px] pb-0 lg:p-[40px] relative h-screen overflow-auto'>
      {renderProgressBar()}
      {renderQuestion()}
      <div className='w-full flex justify-center gap-4 sticky bottom-[0px] py-[12px] bg-basic_grey_5 mt-[20px] lg:mt-[64px]'>
        <Button
          onClick={handleSaveForLater}
          text='Save for later'
          className='w-[150px]'
        />
        <Button
          onClick={nextButtonOnClick}
          text={nextButtonText}
          isPrimary
          disabled={!currentQuestion?.selected_option}
          className='w-[150px]'
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default AssessmentContainer