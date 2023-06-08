
// shared
import UploadIcon from '../../public/icons/shared/upload.svg'
import ArrowIcon from '../../public/icons/shared/arrow-down.svg'
import CloseIcon from '../../public/icons/shared/close.svg'
import ThreeDots from '../../public/icons/shared/dots.svg'
import Calendar from '../../public/icons/shared/calendar.svg'
import ArrowLeft from '../../public/icons/shared/arrow-left.svg'
import Trash from '../../public/icons/shared/trash.svg'
import Edit from '../../public/icons/shared/edit.svg'
import EditFill from '../../public/icons/shared/edit-fill.svg'
import Download from '../../public/icons/shared/download.svg'
import Add from '../../public/icons/shared/plus.svg'
import AddWhite from '../../public/icons/shared/plus-white.svg'
import UploadBlack from '../../public/icons/shared/upload-black.svg'
import uploadImage from '../../public/icons/shared/pic.svg'
import loginHero from '../../public/logos/login-hero.svg'
import logout from '../../public/icons/shared/logout.png'
import see from '../../public/icons/shared/see.svg'
import hide from '../../public/icons/shared/hide.svg'

// left nav
import MyBenefitsIcon from '../../public/icons/left-nav/balance.svg'
import MarketPlaceIcon from '../../public/icons/left-nav/marketplace.svg'
import DashboardIcon from '../../public/icons/left-nav/dashboard.svg'
import OnBoardingIcon from '../../public/icons/left-nav/onboarding.svg'
import SurveyIcon from '../../public/icons/left-nav/survey.svg'
import Bank_AccIcon from '../../public/icons/left-nav/bank_acc.svg'
import ClaimsIcon from '../../public/icons/left-nav/claims.svg'
import PayoutsIcon from '../../public/icons/left-nav/payouts.svg'
import PolicyIcon from '../../public/icons/left-nav/policy.svg'
import ProgramsIcon from '../../public/icons/left-nav/programs.svg'
import SubscriptionIcon from '../../public/icons/left-nav/subscription.svg'
import CardIcon from '../../public/icons/left-nav/payments.svg'
import AccountIcon from '../../public/icons/left-nav/account.svg'
import UsersIcon from '../../public/icons/left-nav/users.svg'
import Settings from '../../public/icons/left-nav/configs.svg'

// programs
import HealthWellnessIcon from '../../public/icons/programs/healthWellness.svg'
import HealthWellnessGray from '../../public/icons/programs/healthWellness-g.svg'
import FamilyCare from '../../public/icons/programs/familyCare.svg'
import FamilyCareGray from '../../public/icons/programs/familyCare-g.svg'
import LearnDevelop from '../../public/icons/programs/learnDevelop.svg'
import LearnDevelopGray from '../../public/icons/programs/learnDevelop-g.svg'
import RecogAnniv from '../../public/icons/programs/recogAnniv.svg'
import RecogAnnivGray from '../../public/icons/programs/recogAnniv-g.svg'
import StudentLoans from '../../public/icons/programs/studentLoans.svg'
import StudentLoansGray from '../../public/icons/programs/studentLoans-g.svg'
import WFH from '../../public/icons/programs/WFH.svg'
import WFHGray from '../../public/icons/programs/WFH-g.svg'
import CommuterTransportation from '../../public/icons/programs/commuterTransportation.svg'
import CommuterTransportationGray from '../../public/icons/programs/commuterTransportation-g.svg'
import FoodGroceries from '../../public/icons/programs/foodGroceries.svg'
import FoodGroceriesGray from '../../public/icons/programs/foodGroceries-g.svg'
import Donations from '../../public/icons/programs/donations.svg'
import DonationsGray from '../../public/icons/programs/donations-g.svg'



////////////// New Icons //////////////
import GoogleIcon from '../../public/icons/authentication/google-icon.svg'
import MicrosoftIcon from '../../public/icons/authentication/microsoft-icon.svg'



interface StringMap { [key: string]: string }
interface ProgramIcons { [key: string]: StringMap }


export const programIcons: ProgramIcons = {
  // programs
  active: {
    'Health & Wellness': HealthWellnessIcon,
    'Family Care': FamilyCare,
    'Food & Groceries': FoodGroceries,
    'Recognition & Anniversaries': RecogAnniv,
    'Work From Home': WFH,
    'Student Loans': StudentLoans,
    'Learning & Development': LearnDevelop,
    'Commuter & Transportation': CommuterTransportation,
    'Give / Donation': Donations,

  },
  inactive: {
    'Health & Wellness': HealthWellnessGray,
    'Family Care': FamilyCareGray,
    'Food & Groceries': FoodGroceriesGray,
    'Recognition & Anniversaries': RecogAnnivGray,
    'Work From Home': WFHGray,
    'Student Loans': StudentLoansGray,
    'Learning & Development': LearnDevelopGray,
    'Commuter & Transportation': CommuterTransportationGray,
    'Give / Donation': DonationsGray,
  },
}

export const icons = {
  // left nav
  myBenefits: MyBenefitsIcon,
  marketPlace: MarketPlaceIcon,
  dashboard: DashboardIcon,
  onBoarding: OnBoardingIcon,
  settings: Settings,
  survey: SurveyIcon,
  bankAcc: Bank_AccIcon,
  claims: ClaimsIcon,
  payouts: PayoutsIcon,
  policy: PolicyIcon,
  programs: ProgramsIcon,
  subscription: SubscriptionIcon,
  card: CardIcon,
  account: AccountIcon,
  users: UsersIcon,

  // shared
  threeDots: ThreeDots,
  upload: UploadIcon,
  arrow: ArrowIcon,
  close: CloseIcon,
  calendar: Calendar,
  arrowLeft: ArrowLeft,
  trash: Trash,
  edit: Edit,
  editFill: EditFill,
  download: Download,
  add: Add,
  addWhite: AddWhite,
  uploadBlack: UploadBlack,
  uploadImage: uploadImage,
  loginHero: loginHero,
  logout: logout,
  see: see,
  hide: hide,

  // new icons
  googleIcon: GoogleIcon,
  microsoftIcon: MicrosoftIcon,
}