
// shared
import Add from '../../public/icons/shared/plus.svg'
import see from '../../public/icons/shared/see.svg'
import hide from '../../public/icons/shared/hide.svg'




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

  see: see,
  hide: hide,

  // new icons
  googleIcon: GoogleIcon,
  microsoftIcon: MicrosoftIcon,
}