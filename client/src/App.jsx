import { Route,Routes } from "react-router-dom"
import { ErrorPage,Applications,Home,ApplyJob, Dashboard, AddJob, ManageJobs, ViewApplications } from "./pages"
import { RecruiterLogin } from "./components"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import "quill/dist/quill.snow.css"
const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
    {
      showRecruiterLogin && <RecruiterLogin />

    }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="*" element={<ErrorPage/>} />
      {/* dashboard for recruiter login */}
      <Route path="/dashboard" element={<Dashboard />} >  
        <Route path="add-job" element={<AddJob />} />
        <Route path="manage-jobs" element={<ManageJobs />} />
        <Route path="view-applications" element={<ViewApplications />} />
      </Route>
    </Routes>
    
    </div>
  )
}
export default App