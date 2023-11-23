import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Signup/Signup';
import Home from '../pages/Home/Home/Home';
import Dashboard from '../Layout/Dashboard/Dashboard';
import AddClass from '../pages/Dashboard/Instructor/AddClass/AddClass';
import Classes from '../pages/Classes/Classes';
import MyClasses from '../pages/Dashboard/Instructor/MyClasses/MyClasses';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses/ManageClasses';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers';
import ErrorPage from '../pages/ErrorPage';
import SelectedClass from '../pages/Dashboard/Student/SelectedClass/SelectedClass';
import Instructors from '../pages/Instructors/Instructors';
import PrivateRoute from './PrivateRoute';
import InstructorRoute from './InstructorRoute';
import AdminRoute from './AdminRoute';
import StudentRoute from './StudentRoute';
import Welcome from '../pages/Dashboard/Welcome/Welcome';
import EnrolledClasses from '../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses';
import PaymentTable from '../pages/Dashboard/Student/PaymentTable/PaymentTable';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		// errorElement: <ErrorPage></ErrorPage>,

		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/classes',
				element: <Classes></Classes>,
			},
			{
				path: '/instructors',
				element: <Instructors></Instructors>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signUp',
				element: <SignUp></SignUp>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/dashboard',
				element: <Welcome></Welcome>,
			},
			{
				path: 'addClass',
				element: (
					<InstructorRoute>
						<AddClass></AddClass>
					</InstructorRoute>
				),
			},
			{
				path: 'myClasses',
				element: (
					<InstructorRoute>
						<MyClasses></MyClasses>
					</InstructorRoute>
				),
			},
			{
				path: 'manageClasses',
				element: (
					<AdminRoute>
						<ManageClasses></ManageClasses>
					</AdminRoute>
				),
			},
			{
				path: 'manageUsers',
				element: (
					<AdminRoute>
						<ManageUsers></ManageUsers>
					</AdminRoute>
				),
			},
			{
				path: 'selectedClasses',
				element: (
					<StudentRoute>
						<SelectedClass></SelectedClass>
					</StudentRoute>
				),
			},
			{
				path:'enrolledClasses',
				element:<StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
			},
			{
				path:'payment',
				element:<PaymentTable></PaymentTable>
			}
		],
	},
	,
]);
