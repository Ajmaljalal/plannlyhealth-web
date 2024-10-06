
// shared
import Add from '../../public/icons/shared/plus.svg'
import AddLight from '../../public/icons/shared/plus-white.svg'
import see from '../../public/icons/shared/see.svg'
import hide from '../../public/icons/shared/hide.svg'
import howTo from '../../public/icons/shared/how-to.svg'
import howToLight from '../../public/icons/shared/how-to-light.svg'
import question from '../../public/icons/shared/question.svg'
import questionLight from '../../public/icons/shared/question-light.svg'
import details from '../../public/icons/shared/details.svg'
import detailsLight from '../../public/icons/shared/details-light.svg'
import checkWhite from '../../public/icons/shared/check-white.svg'
import close from '../../public/icons/shared/close.svg'
import edit from '../../public/icons/shared/edit.svg'
import deleteFlat from '../../public/icons/shared/delete-flat.svg'
import deleteIcon from '../../public/icons/shared/delete.svg'
import admin from '../../public/icons/shared/admin.svg'
import superAdmin from '../../public/icons/shared/super-admin.svg'
import standard from '../../public/icons/shared/standard.svg'
import owner from '../../public/icons/shared/owner.svg'
import broker from '../../public/icons/shared/broker.svg'
import it from '../../public/icons/shared/it.svg'
import finance from '../../public/icons/shared/finance.svg'
import notifications from '../../public/icons/shared/notifications.svg'
import lightMode from '../../public/icons/shared/light-mode.svg'
import increase from '../../public/icons/shared/increase.svg'
import decrease from '../../public/icons/shared/decrease.svg'
import arrowBackBg from '../../public/icons/shared/arrow-back-bg.svg'
import arrowDown from '../../public/icons/shared/arrow-down.svg'
import editPencil from '../../public/icons/shared/edit-pencil.svg'
import goldenStar from '../../public/icons/shared/golden-star.svg'
import checkCircleGreen from '../../public/icons/shared/check-circle-green.svg'
import closeCircleRed from '../../public/icons/shared/close-circle-red.svg'
import progressCircleOrange from '../../public/icons/shared/progress-circle-orange.svg'
import lottery from '../../public/icons/shared/lottery.png'
import tick from '../../public/icons/shared/tick.svg'
import linkIcon from '../../public/icons/shared/link-icon.svg'
import benefitsIcon from '../../public/icons/shared/benefits.png'



////////////// dashboard //////////////
import workloadLight from '../../public/icons/dashboard/workload-light.svg'
import stressLight from '../../public/icons/dashboard/stress-light.svg'
import burnoutLight from '../../public/icons/dashboard/burnout-light.svg'
import turnoverLight from '../../public/icons/dashboard/turnover-light.svg'


////////////// Left Nav //////////////
import dashboard from '../../public/icons/left-nav/dashboard.svg'
import dashboardLight from '../../public/icons/left-nav/dashboard-white.svg'
import employees from '../../public/icons/left-nav/employees.svg'
import employeesLight from '../../public/icons/left-nav/employees-white.svg'
import benefits from '../../public/icons/left-nav/benefits.svg'
import benefitsLight from '../../public/icons/left-nav/benefits-white.svg'
import assessments from '../../public/icons/left-nav/assessments.svg'
import assessmentsLight from '../../public/icons/left-nav/assessments-white.svg'
import integrations from '../../public/icons/left-nav/integrations.svg'
import integrationsLight from '../../public/icons/left-nav/integrations-white.svg'
import settings from '../../public/icons/left-nav/settings.svg'
import settingsLight from '../../public/icons/left-nav/settings-white.svg'
import incentives from '../../public/icons/left-nav/incentives.svg'
import incentivesLight from '../../public/icons/left-nav/incentives-white.svg'
import reports from '../../public/icons/left-nav/reports.svg'
import reportsLight from '../../public/icons/left-nav/reports-white.svg'
import logout from '../../public/icons/left-nav/logout.svg'
import logoutLight from '../../public/icons/left-nav/logout-white.svg'


////////////// New Icons //////////////
import GoogleIcon from '../../public/icons/authentication/google-icon.svg'
import MicrosoftIcon from '../../public/icons/authentication/microsoft-icon.svg'


///////////// Integration Icons /////////////
import insperityIcon from '../../public/icons/integrations/insperity.png'
import paylocityIcon from '../../public/icons/integrations/paylocity.png'
import saplingIcon from '../../public/icons/integrations/sapling.svg'
import waveIcon from '../../public/icons/integrations/wave.svg'
import accuPayIcon from '../../public/icons/integrations/accupay.svg'
import aholaIcon from '../../public/icons/integrations/ahola.svg'
import bamboohrIcon from '../../public/icons/integrations/bamboohr.svg'
import gustoIcon from '../../public/icons/integrations/gusto.png'
import justworksIcon from '../../public/icons/integrations/justworks.svg'
import namelyIcon from '../../public/icons/integrations/namely.svg'
import humaansIcon from '../../public/icons/integrations/humaans.svg'


/////////////// Employee Icons ///////////////
import calendarDarkBlue from '../../public/icons/employee/calendar-dark-blue.svg'
import calendarInProgressVoilet from '../../public/icons/employee/calendar-in-progress-voilet.svg'
import card from '../../public/icons/employee/card.svg'
import cardLight from '../../public/icons/employee/card-light.svg'
import checkDarkBlue from '../../public/icons/employee/check-dark-blue.svg'
import earnedMoney from '../../public/icons/employee/earned-money.svg'
import pendingRed from '../../public/icons/employee/pending-red.svg'
import profile from '../../public/icons/employee/profile.svg'
import profileLight from '../../public/icons/employee/profile-light.svg'
import rewards from '../../public/icons/employee/rewards.svg'
import rewardsLight from '../../public/icons/employee/rewards-light.svg'
import shipedVoilet from '../../public/icons/employee/shiped-voilet.svg'
import spentMoney from '../../public/icons/employee/spent-money.svg'
import todo from '../../public/icons/employee/todo.svg'
import todoLight from '../../public/icons/employee/todo-light.svg'
import childBirth from '../../public/icons/employee/child-birth.svg'
import childAdoption from '../../public/icons/employee/child-adoption.svg'
import hDotsPurple from '../../public/icons/employee/h-dots-purple.svg'
import heartPurple from '../../public/icons/employee/heart-purple.svg'
import ticketCircle from '../../public/icons/employee/ticket-circle.svg'

interface StringMap { [key: string]: string }
interface ProgramIcons { [key: string]: StringMap }


export const programIcons: ProgramIcons = {
  // programs

}

export const icons = {
  // left nav

  // shared
  add: Add,
  addLight: AddLight,
  see: see,
  hide: hide,
  howTo: howTo,
  howToLight: howToLight,
  question: question,
  questionLight: questionLight,
  details: details,
  detailsLight: detailsLight,
  checkWhite: checkWhite,
  close: close,
  edit: edit,
  delete: deleteIcon,
  deleteFlat: deleteFlat,
  admin: admin,
  superAdmin: superAdmin,
  standard: standard,
  owner: owner,
  broker: broker,
  it: it,
  finance: finance,
  notifications: notifications,
  lightMode: lightMode,
  increase: increase,
  decrease: decrease,
  arrowBackBg: arrowBackBg,
  arrowDown: arrowDown,
  editPencil: editPencil,
  goldenStar: goldenStar,
  checkCircleGreen: checkCircleGreen,
  closeCircleRed: closeCircleRed,
  progressCircleOrange: progressCircleOrange,
  lottery: lottery,
  tick: tick,
  linkIcon: linkIcon,
  benefitsPlacholder: benefitsIcon,


  // social icons
  googleIcon: GoogleIcon,
  microsoftIcon: MicrosoftIcon,


  // integrations
  insperityIcon: insperityIcon,
  paylocityIcon: paylocityIcon,
  saplingIcon: saplingIcon,
  waveIcon: waveIcon,
  accuPayIcon: accuPayIcon,
  aholaIcon: aholaIcon,
  bamboohrIcon: bamboohrIcon,
  gustoIcon: gustoIcon,
  justworksIcon: justworksIcon,
  namelyIcon: namelyIcon,
  humaansIcon: humaansIcon,



  // left nav
  dashboard: dashboard,
  dashboardLight: dashboardLight,
  employees: employees,
  employeesLight: employeesLight,
  benefits: benefits,
  benefitsLight: benefitsLight,
  assessments: assessments,
  assessmentsLight: assessmentsLight,
  integrations: integrations,
  integrationsLight: integrationsLight,
  settings: settings,
  settingsLight: settingsLight,
  incentives: incentives,
  incentivesLight: incentivesLight,
  reports: reports,
  reportsLight: reportsLight,
  logout: logout,
  logoutLight: logoutLight,

  // dashboard
  workloadLight: workloadLight,
  stressLight: stressLight,
  burnoutLight: burnoutLight,
  turnoverLight: turnoverLight,


  // employee
  calendarDarkBlue: calendarDarkBlue,
  calendarInProgressVoilet: calendarInProgressVoilet,
  card: card,
  cardLight: cardLight,
  checkDarkBlue: checkDarkBlue,
  earnedMoney: earnedMoney,
  pendingRed: pendingRed,
  profile: profile,
  profileLight: profileLight,
  rewardsLight: rewardsLight,
  shipedVoilet: shipedVoilet,
  spentMoney: spentMoney,
  rewards: rewards,
  todo: todo,
  todoLight: todoLight,
  childBirth: childBirth,
  childAdoption: childAdoption,
  hDotsPurple: hDotsPurple,
  heartPurple: heartPurple,
  ticketCircle: ticketCircle,
}