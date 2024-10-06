'use client'
import React from 'react'
import { Button } from '@/components/button'
import { CheckBox } from '@/components/checkbox'
import Tabs from '@/components/tabs/tabs'
import { Tab } from '@/lib/types/general'
import Image from 'next/image'
import { icons } from '@/lib/icons'

// Assuming the todo's type structure
type Task = {
  id: number,
  title: string,
  completed: boolean,
}

type Todo = {
  id: number,
  title: string,
  description: string,
  deadline: string,
  completed: boolean,
  tasks: Task[],
}

// Constant todos data
const todos: Todo[] = [
  {
    id: 1,
    title: 'Special enrollment for your baby!',
    description: 'You are elegible for special enrollment. Check out what you need to do',
    deadline: '2023-07-30',
    completed: false,
    tasks: [
      {
        id: 2,
        title: 'Add your baby to your dependents list',
        completed: true
      },
      {
        id: 1,
        title: 'Upload birth certificate for your baby',
        completed: false
      },
      {
        id: 3,
        title: 'Choose a plan for your baby',
        completed: false
      },
    ]
  },
  {
    id: 2,
    title: 'Complete your profile!',
    description: 'Provide your personal information to get the most out of your benefits',
    deadline: '2023-08-10',
    completed: false,
    tasks: [
      {
        id: 1,
        title: 'Add your birthdate',
        completed: false
      },
      {
        id: 2,
        title: 'Add your address',
        completed: false
      }
    ]
  },
  {
    id: 3,
    title: 'Submit your wellness assessment for June!',
    description: 'Complete your wellness assessment now and earn a ticket!',
    deadline: '2023-07-01',
    completed: true,
    tasks: [
      {
        id: 1,
        title: 'Submit wellness assessment',
        completed: true
      }
    ]
  },
  {
    id: 4,
    title: 'Add your dependents!',
    description: 'Add your dependents to your benefits plan',
    deadline: '2023-06-25',
    completed: true,
    tasks: [
      {
        id: 1,
        title: 'Upload birth certificate for your baby',
        completed: true
      }
    ]
  }
]

function TodosContainer() {
  // State variables
  const [activeTab, setActiveTab] = React.useState('pending')
  const [activeTodo, setActiveTodo] = React.useState<string | null>(null)
  const [pendingTodos, setPendingTodos] = React.useState<Todo[]>(todos.filter(todo => !todo.completed))
  const [completedTodos, setCompletedTodos] = React.useState<Todo[]>(todos.filter(todo => todo.completed))

  const currentTodos = activeTab === 'pending' ? pendingTodos : completedTodos

  const tabs: Tab[] = [
    {
      text: 'Pending',
      isActive: activeTab === 'pending',
      count: pendingTodos.length,
      onClick: () => setActiveTab('pending'),
    },
    {
      text: 'Completed',
      isActive: activeTab === 'completed',
      count: completedTodos.length,
      onClick: () => setActiveTab('completed'),
    },
  ]

  const handleTodoClick = (todo: Todo) => {
    setActiveTodo(todo.title)
  }

  const completeTask = (todoId: any, taskId: any) => {
    const isCompletedTodos = activeTab === 'completed';
    let updatedTodos;

    if (!isCompletedTodos) {
      updatedTodos = pendingTodos.map(todo => {
        if (todo.id === todoId) {
          const updatedTodo = { ...todo };
          updatedTodo.tasks = updatedTodo.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          return updatedTodo;
        }
        return todo;
      });
      setPendingTodos(updatedTodos);
    } else {
      updatedTodos = completedTodos.map(todo => {
        if (todo.id === todoId) {
          const updatedTodo = { ...todo };
          updatedTodo.tasks = updatedTodo.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          return updatedTodo;
        }
        return todo;
      });
      setCompletedTodos(updatedTodos);
    }
  }

  const completeTodo = (todoId: any) => {
    let todoIndex = pendingTodos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      // clone the pending todos
      let updatedPendingTodos = [...pendingTodos];

      // Get the todo and mark as complete
      let todo = { ...updatedPendingTodos[todoIndex] };
      todo.completed = true;

      // Mark all tasks as complete
      todo.tasks = todo.tasks.map(task => ({ ...task, completed: true }));

      // Remove the todo from the pending todos array
      updatedPendingTodos.splice(todoIndex, 1);

      // Add the todo to the completed todos array
      let updatedCompletedTodos = [todo, ...completedTodos];

      // Update the state
      setPendingTodos(updatedPendingTodos);
      setCompletedTodos(updatedCompletedTodos);
    } else {
      console.error(`Todo with ID ${todoId} not found in pending todos.`);
    }
  };






  const renderTasks = (todo: Todo) => (
    <div className='flex flex-col justify-between'>
      {todo.tasks?.map(task => (
        <div key={task.id} className='flex items-center'>
          <CheckBox checked={task.completed} label={task.title} disabled={todo.completed} onChange={() => completeTask(todo.id, task.id)} />
        </div>
      ))}
      {!todo.completed && (
        <Button text="Mark as completed" className='w-full sm:w-[170px] mt-[24px]' isPrimary isSmallBtn disabled={todo.completed} onClick={() => completeTodo(todo.id)} />
      )}
    </div>
  )

  const renderTodos = () => (
    currentTodos.map(todo => {
      const isOpen = activeTodo === todo.title
      const todoOpenCloseStyle = isOpen ? 'bg-basic_white border-brand_voilet h-fit owerflow-visible items-start' : 'bg-basic_grey_4 overflow-hidden items-center'
      const todoStyle = `flex gap-4 transition-all ease-in-out delay-200 mb-[16px] rounded-[32px] px-[24px] py-[16px] cursor-pointer border border-2 border-basic_grey_4 ${todoOpenCloseStyle}`
      const icon = todo.completed ? icons.tick : icons.todoLight
      const iconBgColor = todo.completed ? 'bg-system_success' : 'bg-brand_voilet'
      const iconStyle = `min-w-[40px] h-[40px] rounded-full p-[8px] hidden sm:block ${iconBgColor}`
      const diffDays = Math.ceil((new Date(todo.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      const isDeadlineClose = diffDays <= 3
      const deadlineText = diffDays < 0 ? 'Deadline passed' : diffDays === 0 ? 'Due today' : `Due in ${diffDays} days`
      const deadlineTextStyle = diffDays < 0 || isDeadlineClose ? 'text-system_error' : 'text-basic_grey_3'
      const deadlineStyle = `text-small w-fit bg-basic_white px-[12px] h-[28px] flex items-center rounded-[16px] ${deadlineTextStyle}`
      const statusTag = todo.completed
        ? <Button className='text-small w-fit bg-basic_white text-system_success' text='Completed' icon={icons.checkCircleGreen} isSmallBtn />
        : <p className={deadlineStyle}>{deadlineText}</p>

      return (
        <div key={todo.id} onClick={() => handleTodoClick(todo)} className={todoStyle}>
          <Image src={icon} alt='todo icon' width={40} height={40} className={iconStyle} />
          <div className='flex-1'>
            <div className='flex flex-col flex-col-reverse sm:flex-row sm:justify-between'>
              <h4>{todo.title}</h4>
              {statusTag}
            </div>
            <p className='mt-[4px] text-small'>{todo.description}.</p>
            {isOpen && renderTasks(todo)}
          </div>
        </div>
      )
    })
  )

  return (
    <div>
      <div className='flex flex-col items-center md:items-start'>
        <h2 className='font-normal mb-[20px]'>Todos</h2>
        <Tabs tabs={tabs} />
      </div>
      <div className='mt-[32px]'>
        {renderTodos()}
      </div>
    </div>
  )
}

export default TodosContainer
