'use client'
import { Button } from '@/components/button'
import React from 'react'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { calculateWidthTailwindClass } from '@/lib/helpers'
import { useRouter } from 'next/navigation'

type Question = {
  uniqueId: string
  id: number
  question: string
  options: string[]
  answer: string | number | null
  icons?: any
}

const newQuestions: Question[] = [
  {
    uniqueId: 'burnout-1',
    question: "Do you feel exhausted after work and think it's affecting your mental and physical health?",
    options: ["Often", "Sometimes", "Rarely", "Never"],
    answer: null,
    id: 1
  },
  {
    uniqueId: 'burnout-2',
    question: "Based on your defination of burnout, do you currently feel burned out at work?",
    options: ["Yes", "No", "Not sure"],
    answer: null,
    id: 2
  },
  {
    uniqueId: 'burnout-3',
    question: "Can you identify specific reasons or triggers for your burnout?",
    options: [
      "Excessive workload and long hours",
      "Lack of control or autonomy",
      "Not feeling valued, no recognition, low pay",
      "Factors outside work (e.g., family, health)",
      "Absence of fairness (e.g., favoritism, discrimination)",
      "Conflicting values with the employer",
      "Lack of support from coworkers or supervisors",
    ],
    answer: null,
    id: 3
  },
  {
    uniqueId: 'burnout-4',
    question: "Do you feel you have the necessary time and resources to effectively care for your patients?",
    options: [
      "Yes, always",
      "Sometimes",
      "Very rarely",
      "No, never",
    ],
    answer: null,
    id: 4
  },
  {
    uniqueId: 'burnout-5',
    question: "Do you have enough time for your personal and family life, or does overwork and exhaustion from work take over?",
    options: [
      "Yes, always",
      "Often",
      "Sometimes",
      "Rarely",
      "Never",
    ],
    answer: null,
    id: 5
  },
  {
    uniqueId: 'burnout-6',
    question: "Considering your job satisfaction, growth opportunities, and compensation, do you see a future in your current job or profession?",
    options: [
      "Yes, definitely",
      "No, definitely not",
      "Not sure",
    ],
    answer: null,
    id: 6
  },
  {
    uniqueId: 'burnout-7',
    question: "Do you believe your employer prioritizes employee well-being, addresses burnout concerns, and creates a safe environment for voicing issues?",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    answer: null,
    id: 7
  },
  {
    uniqueId: 'burnout-8',
    question: "How satisfied are you with the support you receive from your colleagues and supervisors?",
    options: [
      "Very satisfied and supported",
      "Somewhat satisfied and supported",
      "Neutral",
      "Somewhat unsatisfied or unsupported",
      "Very unsatisfied and unsupported"
    ],
    answer: null,
    id: 8
  },
  {
    id: 9,
    uniqueId: 'burnout-9',
    question: "Do you feel you have the platform and opportunity to voice your concerns and suggestions without fear?",
    options: [
      "Always",
      "Often",
      "Sometimes",
      "Rarely",
      "Never"
    ],
    answer: null,
  }
]


function AssessmentContainer() {
  const router = useRouter()
  const [allQuestions, setAllQuestions] = React.useState<Question[]>(newQuestions)
  const [currentQuestion, setCurrentQuestion] = React.useState<Question>(allQuestions[0])

  const handleUpdateQuestion = (option: any) => {
    // update current question
    currentQuestion.answer = option
    const updatedQuestions = allQuestions.map((question) => {
      if (question.id === currentQuestion.id) {
        return currentQuestion
      }
      return question
    })
    setAllQuestions(updatedQuestions)
    // wait for 1 second
    if (currentQuestion.id === allQuestions.length) return
    setTimeout(() => {
      handleNextQuestion()
    }, 500)
  }

  const handleNextQuestion = () => {
    // get next question
    if (currentQuestion.id === allQuestions.length) {
      // submit all questions
      handleSubmit()
      return
    }
    const nextQuestion = allQuestions[currentQuestion.id]
    setCurrentQuestion(nextQuestion)
  }

  const handlePreviousQuestion = () => {
    // get previous question
    if (currentQuestion.id === 1) return
    const previousQuestion = allQuestions[currentQuestion.id - 2]
    setCurrentQuestion(previousQuestion)
  }

  const handleSubmit = () => {
    router.push('/assessment/congratulations')
  }



  const nextButtonText = currentQuestion.id === allQuestions.length ? 'Submit' : 'Next'

  // calcuate progress based on current question in percentage
  const progress = Math.round((currentQuestion.id / allQuestions.length) * 100)
  const progressLength = calculateWidthTailwindClass(progress)
  const progressStyle = `flex items-center justify-end h-[12px] rounded-[8px] bg-gradient-to-r from-[#C301EE] via-[#DE1FA4] to-[#FF9539] ${progressLength} transition-all`


  return (
    <div className='p-[20px] pb-0 lg:p-[40px] relative h-screen overflow-auto'>
      <div className='w-full bg-basic_grey_4 h-[12px] rounded-[8px] max-w-[1440px] mx-auto'>
        <div className={progressStyle}>
          <div className='w-[8px] h-[8px] bg-basic_white rounded-full mr-[2px] relative'>
            <div className='rounded-full mr-[2px] lg:mr-[0px] absolute top-4 right-[-15px]'>{progress}%</div>
          </div>
        </div>
      </div>
      <div className='max-w-[1040px] mx-auto flex flex-col mt-[20px] h-fit'>
        <div className='flex flex-col items-start gap-4 mt-[40px] lg:mt-[150px]'>
          <h4 className='flex gap-2 items-start font-normal md:font-bold'>
            <Image src={icons.arrowBackBg} width={32} height={32} alt='arrow back' onClick={handlePreviousQuestion} className='cursor-pointer' />
            {currentQuestion.question}
          </h4>
          <div className='flex gap-4 flex-wrap lg:mt-[40px] justify-center w-full'>
            {
              currentQuestion.options.map((option, index) => {
                const icon = currentQuestion.icons ? currentQuestion.icons[option] : null
                const iconItem = icon ? <Image src={icon} width={24} height={24} alt='icon' /> : <h3 className='text-brand_voilet_light'>{index + 1}</h3>
                const isSelected = currentQuestion.answer === option
                const selectedItemClass = isSelected ? 'bg-basic_white border border-brand_voilet border-2' : ''
                const style = `gap-6 flex lg:flex-col items-center lg:justify-center flex-1 px-[14px] py-[12px] bg-basic_grey_4 rounded-[32px] min-w-[320px] max-w-[350px] lg:max-w-[200px] lg:min-w-[200px] h-[100px] lg:h-[210px] cursor-pointer ${selectedItemClass}`
                return (
                  <div key={index} onClick={() => handleUpdateQuestion(option)} className={style}>
                    <div className='flex items-center justify-center gap-2 min-w-[65px] min-h-[65px] bg-basic_white shadow-md border border-basic_grey_4/[0.25] rounded-full'>
                      {iconItem}
                    </div>
                    <p className='text-[16px] text-brand_blue_voilet lg:text-center'>{option}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center gap-4 sticky bottom-[0px] py-[12px] bg-basic_grey_5 mt-[20px] lg:mt-[64px]'>
        <Button text='Save for later' className='w-[150px]' />
        <Button onClick={handleNextQuestion} text={nextButtonText} isPrimary className='w-[150px]' />
      </div>
    </div>
  )
}

export default AssessmentContainer