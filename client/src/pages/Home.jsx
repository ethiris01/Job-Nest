import {  Banner, CompanyInfo, Footer, Hero, JobListing, Navbar } from "../components"

const Home = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <JobListing/>
    
    <CompanyInfo />
    {/* <Banner /> */}
    <Footer />
    </div>
  )
}
export default Home