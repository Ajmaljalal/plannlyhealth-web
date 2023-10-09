'use client'
import { Button } from '@/components/button'
import React from 'react'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { calculateWidthTailwindClass } from '@/lib/helpers'
import { useRouter } from 'next/navigation'

type Question = {
  id: number
  question: string
  options: string[]
  answer: string | number | null
  icons?: any
}

const questions = [
  {
    id: 1,
    question: 'Rate your overall health?',
    options: ['Great', 'Good', 'Fair', 'Poor'],
    icons: null,
    answer: null,
  },
  {
    id: 2,
    question: 'How stressed are you?',
    options: ['High', 'Moderate', 'Low'],
    icons: null,
    answer: null
  },
  {
    id: 3,
    question: 'Was there a birth or adoption of a child in your family?',
    options: ['Yes, child birth', 'yes, adoption', 'No'],
    icons: {
      'Yes, child birth': icons.childBirth || 10,
      'yes, adoption': icons.childAdoption || 8,
      'No': icons.heartPurple || 1
    },
    answer: null
  },
  {
    id: 4,
    question: 'How well do you manage your work-life balance?',
    options: ['Very well', 'Well', 'Not well', 'Poorly'],
    icons: null,
    answer: null
  },
  {
    id: 5,
    question: 'Are you experiencing difficulty sleeping?',
    options: ['Yes', 'No'],
    icons: null,
    answer: null
  },
  {
    id: 6,
    question: 'Do you feel emotionally drained at the end of your workday?',
    options: ['Yes', 'No'],
    icons: null,
    answer: null
  },
  {
    id: 7,
    question: 'How often do you engage in relaxation techniques or mindfulness practices?',
    options: ['Daily', 'Several times a week and alla the time and if I want daily and in the night and again in the morning and again in the evning', 'Once a week', 'Never'],
    icons: null,
    answer: null
  },
  {
    id: 8,
    question: 'Have you experienced any physical symptoms related to stress (e.g., headaches, muscle tension)?',
    options: ['Yes', 'No'],
    icons: null,
    answer: null
  },
  {
    id: 9,
    question: 'Do you feel supported by your colleagues and supervisors?',
    options: ['Strongly supported', 'Supported', 'Not supported', 'Strongly not supported'],
    icons: null,
    answer: null
  },
  {
    id: 10,
    question: 'How often do you take breaks during work hours?',
    options: ['Frequently', 'Sometimes', 'Rarely', 'Never'],
    icons: null,
    answer: null
  }
];


function AssessmentContainer() {
  const router = useRouter()
  const [allQuestions, setAllQuestions] = React.useState<Question[]>(questions)
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
  const progress = (currentQuestion.id / allQuestions.length) * 100
  const progressLength = calculateWidthTailwindClass(progress)
  const progressStyle = `flex items-center justify-end h-[12px] rounded-[8px] bg-gradient-to-r from-[#C301EE] via-[#DE1FA4] to-[#FF9539] ${progressLength} transition-all`


  return (
    <div className='p-[20px] pb-[64px] lg:p-[40px]'>
      <div className='w-full bg-basic_grey_4 h-[12px] rounded-[8px] max-w-[1440px] mx-auto'>
        <div className={progressStyle}>
          <div className='w-[8px] h-[8px] bg-basic_white rounded-full mr-[2px] relative'>
            <div className='rounded-full mr-[2px] lg:mr-[0px] absolute top-4 right-[-15px]'>{progress}%</div>
          </div>
        </div>
      </div>
      <div className='max-w-[1040px] mx-auto h-full flex flex-col mt-[20px]'>
        <div className='flex flex-col items-start gap-4 mt-[40px] lg:mt-[150px]'>
          <h4 className='flex gap-2 items-start font-normal md:font-bold'>
            <Image src={icons.arrowBackBg} width={32} height={32} alt='arrow back' onClick={handlePreviousQuestion} className='cursor-pointer' />
            {currentQuestion.question}
          </h4>
          <div className='flex gap-4 flex-wrap mt-[24px] lg:mt-[40px] justify-center w-full'>
            {
              currentQuestion.options.map((option, index) => {
                const icon = currentQuestion.icons ? currentQuestion.icons[option] : null
                const iconItem = icon ? <Image src={icon} width={24} height={24} alt='icon' /> : <h3 className='text-brand_voilet_light'>{index + 1}</h3>
                const isSelected = currentQuestion.answer === option
                const selectedItemClass = isSelected ? 'bg-basic_white border border-brand_voilet border-2' : ''
                const style = `gap-6 flex lg:flex-col items-center justify-centerflex-1 px-[14px] py-[12px] bg-basic_grey_4 rounded-[32px] max-w-[335px] min-w-[335px] lg:min-w-[237px] h-fit lg:h-[220px] cursor-pointer ${selectedItemClass}`
                return (
                  <div key={index} onClick={() => handleUpdateQuestion(option)} className={style}>
                    <div className='flex items-center justify-center gap-2 min-w-[65px] min-h-[65px] bg-basic_white shadow-md border border-basic_grey_4/[0.25] rounded-full'>
                      {iconItem}
                    </div>
                    <p className='text-[16px] text-brand_blue_voilet'>{option}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='w-full flex justify-center gap-4 mt-[54px]'>
          <Button text='Save for later' className='w-[150px]' />
          <Button onClick={handleNextQuestion} text={nextButtonText} isPrimary className='w-[150px]' />
        </div>
      </div>
    </div>
  )
}

export default AssessmentContainer