import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Loader from '../ui-component/Loader';
import loadable from '@loadable/component';
// DATA
import {AboutTheStudy,DiseaseInformation,ContactPageContent,ThankYouData,OptionalSurveyIntermidiareData} from "../Data";

// Page imports using @loadable/component with a fallback loader

const Home = loadable(() => import('../pages/Home'), {
  fallback: <Loader />,
});

const Page = loadable(() => import('../pages/Page'), {
  fallback: <Loader />,
});
const OptionalSurveyIntermidiare = loadable(() => import('../pages/OptionalSurveyIntermidiare'), {
  fallback: <Loader />,
});
const ParticipantDashboard = loadable(() => import('../pages/ParticipantDashboard'), {
  fallback: <Loader />,
});
const DiseaseInformationPage = loadable(() => import('../pages/Crohninformation'), {
  fallback: <Loader />,
});






// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '/about',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"About the study"} data={AboutTheStudy}/>,
        },
      ],
    },
    {
      path: '/thank-you',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"Thank you!"} data={ThankYouData}/>,
        },
      ],
    }
    ,
    {
      path: '/optional-survey',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <OptionalSurveyIntermidiare title={"Optional Survey"} data={ OptionalSurveyIntermidiareData}/>,
        },
      ],
    }
    ,
    {
      path: '/meet-the-team',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"Meet the team"} data={[]}/>,
        },
      ],
    }
    ,
    {
      path: '/contact',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"Contact"} data={ContactPageContent}/>,
        },
      ],
    }
    ,
    {
      path: '/disease-information',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"Crohn’s disease information"} data={DiseaseInformation} />,
        },
      ],
    },
    {
      path: '/crohns-disease-information',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <DiseaseInformationPage />,
        },
      ],
    },
    //
    {
      path: '/profile',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <ParticipantDashboard />,
        },
      ],
    },
    
    
  ],
};

export default MainRoutes;
