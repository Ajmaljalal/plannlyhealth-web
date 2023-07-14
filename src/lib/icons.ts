
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
import detete from '../../public/icons/shared/delete.svg'
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
  delete: detete,
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


  // new icons
  googleIcon: GoogleIcon,
  microsoftIcon: MicrosoftIcon,


  // integrations
  insperityIcon: insperityIcon,
  paylocityIcon: paylocityIcon,
  saplingIcon: saplingIcon,
  waveIcon: waveIcon,
  accuPayIcon: accuPayIcon,
  aholaIcon: aholaIcon,


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


}