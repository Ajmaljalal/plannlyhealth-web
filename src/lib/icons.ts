
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

////////////// New Icons //////////////
import GoogleIcon from '../../public/icons/authentication/google-icon.svg'
import MicrosoftIcon from '../../public/icons/authentication/microsoft-icon.svg'



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


  // new icons
  googleIcon: GoogleIcon,
  microsoftIcon: MicrosoftIcon,
}