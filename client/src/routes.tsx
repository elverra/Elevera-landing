import About from "@/pages/About";
import Contact from "@/pages/about/Contact";
import Cookies from "@/pages/about/Cookies";
import Privacy from "@/pages/about/Privacy";
import Terms from "@/pages/about/Terms";
import AffiliateManagement from "@/pages/admin/AffiliateManagement";
import CmsManagement from "@/pages/admin/CmsManagement";
import AdminDashboard from "@/pages/admin/Dashboard";
import DiscountManagement from "@/pages/admin/DiscountManagement";
import JobManagement from "@/pages/admin/JobManagement";
import PartnersManagement from "@/pages/admin/PartnersManagement";
import PaymentManagement from "@/pages/admin/PaymentManagement";
import ProjectsManagement from "@/pages/admin/ProjectsManagement";
import SecoursAdmin from "@/pages/admin/SecoursAdmin";
import AffiliateDashboard from "@/pages/AffiliateDashboard";
import AffiliateProgram from "@/pages/AffiliateProgram";
import Affiliates from "@/pages/Affiliates";
import AffiliateDistributors from "@/pages/affiliates/Distributors";
import AffiliateMembers from "@/pages/affiliates/Members";
import AffiliateMerchants from "@/pages/affiliates/Merchants";
import Competitions from "@/pages/Competitions";
import Dashboard from "@/pages/Dashboard";
import Debug from "@/pages/Debug";
import Discounts from "@/pages/Discounts";
import FAQ from "@/pages/FAQ";
import ForgotPassword from "@/pages/ForgotPassword";
import Home from "@/pages/Index";
import JobDashboardEmployee from "@/pages/job-dashboard/EmployeeDashboard";
import JobDashboardEmployer from "@/pages/job-dashboard/EmployerDashboard";
import JobCenter from "@/pages/JobCenter";
import JobDetail from "@/pages/JobDetail";
import Jobs from "@/pages/Jobs";
import Login from "@/pages/Login";
import MembershipPayment from "@/pages/MembershipPayment";
import MyAccount from "@/pages/MyAccount";
import NewsDetail from "@/pages/NewsDetail";
import PostJob from "@/pages/PostJob";
import ProjectSubmission from "@/pages/ProjectSubmission";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import SecoursMyAccount from "@/pages/SecoursMyAccount";
import CreditAccount from "@/pages/services/CreditAccount";
import CreditSystem from "@/pages/services/CreditSystem";
import HirePurchase from "@/pages/services/HirePurchase";
import Services from "@/pages/services/index";
import PaydayLoan from "@/pages/services/PaydayLoan";
import Team from "@/pages/Team";
import ThankYou from "@/pages/ThankYou";

// About pages
import AssociationMembers from "@/pages/about/AssociationMembers";
import ChangingLives from "@/pages/about/ChangingLives";
import Mission from "@/pages/about/Mission";
import News from "@/pages/about/News";
import Partners from "@/pages/about/Partners";
import Projects from "@/pages/about/Projects";
import PartnerDetail from "@/pages/partners/PartnerDetail";
import ProjectDetail from "@/pages/projects/ProjectDetail";

import AccessLawyer from "@/pages/AccessLawyer";
import ActivateCard from "@/pages/ActivateCard";
import MerchantApprovals from "@/pages/admin/MerchantApprovals";
import PaymentGatewayManagement from "@/pages/admin/PaymentGatewayManagement";
import ShopManagement from "@/pages/admin/ShopManagement";
import UserManagement from "@/pages/admin/UserManagement";
import Cards from "@/pages/Cards";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import EBooks from "@/pages/EBooks";
import ProjectRequests from "@/pages/ProjectRequests";
import RegistrationThankYou from "@/pages/RegistrationThankYou";
import OnlineStore from "@/pages/services/OnlineStore";
import OSecours from "@/pages/services/OSecours";
import OSecoursPage from "@/pages/services/OSecoursPage";
import PaydayAdvance from "@/pages/services/PaydayAdvance";
import PaydayAdvancePage from "@/pages/services/PaydayAdvancePage";
import AutoServices from "@/pages/services/secours/AutoServices";
import CataCatani from "@/pages/services/secours/CataCatani";
import FirstAid from "@/pages/services/secours/FirstAid";
import MobilePhones from "@/pages/services/secours/MobilePhones";
import MotorbikesSupport from "@/pages/services/secours/MotorbikesSupport";
import SchoolFees from "@/pages/services/secours/SchoolFees";
import Shop from "@/pages/Shop";
import Wishlist from "@/pages/Wishlist";
import SelectCountry from "./pages/SelectCountry";

// Add the new route to the existing routes array
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/about/contact",
    element: <Contact />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/selectCountry",
    element: <SelectCountry />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/about/partners",
    element: <Partners />,
  },
  {
    path: "/about/news",
    element: <News />,
  },
  {
    path: "/about/changing-lives",
    element: <ChangingLives />,
  },
  {
    path: "/about/projects",
    element: <Projects />,
  },
  {
    path: "/about/mission",
    element: <Mission />,
  },
  {
    path: "/about/association-members",
    element: <AssociationMembers />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/partners/:id",
    element: <PartnerDetail />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/credit-account",
    element: <CreditAccount />,
  },
  {
    path: "/services/credit-system",
    element: <CreditSystem />,
  },
  {
    path: "/services/hire-purchase",
    element: <HirePurchase />,
  },
  {
    path: "/services/payday-loan",
    element: <PaydayLoan />,
  },
  {
    path: "/membership-payment",
    element: <MembershipPayment />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/job-dashboard/employee",
    element: <JobDashboardEmployee />,
  },
  {
    path: "/job-dashboard/employer",
    element: <JobDashboardEmployer />,
  },
  {
    path: "/affiliate-dashboard",
    element: <AffiliateDashboard />,
  },
  {
    path: "/debug",
    element: <Debug />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/activate-card",
    element: <ActivateCard />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetail />,
  },
  {
    path: "/job-center",
    element: <JobCenter />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/discounts",
    element: <Discounts />,
  },
  {
    path: "/competitions",
    element: <Competitions />,
  },
  {
    path: "/affiliates",
    element: <Affiliates />,
  },
  {
    path: "/affiliate-program",
    element: <AffiliateProgram />,
  },
  {
    path: "/affiliates/members",
    element: <AffiliateMembers />,
  },
  {
    path: "/affiliates/merchants",
    element: <AffiliateMerchants />,
  },
  {
    path: "/affiliates/distributors",
    element: <AffiliateDistributors />,
  },
  {
    path: "/services/o-secours",
    element: <OSecours />,
  },
  {
    path: "/services/payday-advance",
    element: <PaydayAdvance />,
  },
  {
    path: "/services/online-store",
    element: <OnlineStore />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/services/secours/school-fees",
    element: <SchoolFees />,
  },
  {
    path: "/services/secours/motorbikes",
    element: <MotorbikesSupport />,
  },
  {
    path: "/services/secours/mobile-phones",
    element: <MobilePhones />,
  },
  {
    path: "/services/secours/auto-services",
    element: <AutoServices />,
  },
  {
    path: "/services/secours/first-aid",
    element: <FirstAid />,
  },
  {
    path: "/services/secours/cata-catani",
    element: <CataCatani />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/discount-management",
    element: <DiscountManagement />,
  },
  {
    path: "/admin/secours",
    element: <SecoursAdmin />,
  },
  {
    path: "/admin/agent-panel",
    element: <AffiliateManagement />,
  },
  {
    path: "/admin/cms",
    element: <CmsManagement />,
  },
  {
    path: "/admin/jobs",
    element: <JobManagement />,
  },
  {
    path: "/admin/partners-management",
    element: <PartnersManagement />,
  },
  {
    path: "/admin/projects-management",
    element: <ProjectsManagement />,
  },
  {
    path: "/secours/my-account",
    element: <SecoursMyAccount />,
  },
  {
    path: "/services/o-secours-info",
    element: <OSecoursPage />,
  },
  {
    path: "/services/payday-advance-info",
    element: <PaydayAdvancePage />,
  },
  {
    path: "/project-requests",
    element: <ProjectRequests />,
  },
  {
    path: "/project-submission",
    element: <ProjectSubmission />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/admin/payments",
    element: <PaymentManagement />,
  },
  {
    path: "/admin/shop-management",
    element: <ShopManagement />,
  },
  {
    path: "/admin/user-management",
    element: <UserManagement />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "/admin/payment-gateways",
    element: <PaymentGatewayManagement />,
  },
  {
    path: "/admin/merchant-approvals",
    element: <MerchantApprovals />,
  },
  {
    path: "/access-lawyer",
    element: <AccessLawyer />,
  },
  {
    path: "/registration/thank-you",
    element: <RegistrationThankYou />,
  },
  {
    path: "/ebooks",
    element: <EBooks />,
  },
];

export default routes;
