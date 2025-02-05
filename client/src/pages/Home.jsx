import {  Banner, CompanyInfo, Footer, Hero, JobListing, Navbar,Category } from "../components"

const Home = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Category />
    <JobListing/>
    {/* <CompanyInfo /> */}
    <Banner />
    <Footer />
    </div>
  )
}
export default Home