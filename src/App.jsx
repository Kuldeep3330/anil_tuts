import UndoRedo_1 from './sangam/1.UndoRedo'
import Dropdown from './sangam/2.CloseDropdown'
import InlineEditable from './sangam/3.InlineEditableInput'
import TempConvertor from './sangam/input_type/4.Temperature'
import OtpInput from './sangam/5.OtpInput'
import './App.css'
import Apple from './lecture1/Apple'
import Child from './lecture1/Child'
import Header from './lecture1/Header'
import Lecture from './lecture1/Lecture'
import CountdownTimer from './imran/countDown/1.CountDown'
import FAQ from './imran/2.Faq'
// import Post from './aman/pagination/Post'
import Accordion from './sangam/input_type/6.Accordion'
import ContactForm from './sangam/input_type/7.FeedbackForm'
// import ProgressBars from './sangam/9.ProgressBar'
import HolyGrail from './sangam/input_type/holyGrail/8.Holy'
import MortgageCalculator from './sangam/input_type/10.MortgageCalculator'
import FlightBooker from './sangam/input_type/11.FlightBooking'
import ProgressBar from './sangam/13.ProgressBar'
import TemperatureConverter from './sangam/input_type/14.Temperature'
import Tabs from './sangam/15.TabComponent'
import DiceRoller from './sangam/input_type/17.DiceRoller'
import Tweet from './sangam/16.Tweet'
import ModalOverlay from './imran/ModalOverlay/4.ModalOverlay'
import Parent from './aman/Reducer/2.Example/Parent'
import Top from './aman/Reducer/3.Example/Top'
import Color from './aman/Reducer/4.Example/Color'
// import Auth from './aman/Reducer/6.Example/Auth'
import Theme from './aman/Reducer/7.ThemeToggle/Theme'
import Counter from './aman/Reducer/8.GlobalCounter/Counter'
import Auth from './aman/Reducer/9.Authentication/Auth'
import Lang from './aman/Reducer/10.Language/Lang'
import Notifiaction from './aman/Reducer/11.Notification/Notifiaction'
// import Parent from './aman/context_api/2.Example/Parent'
// import Parent from './aman/Reducer/1.Example/Parent'
// import Parent from './aman/context_api/2.Example/Parent'
// import Parent from './aman/context_api/1.Example/Parent'

function App() {
  const people = [
  {
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com"
  },
  {
    name: "Brian Smith",
    age: 34,
    email: "brian.smith@example.com"
  },
  {
    name: "Catherine Lee",
    age: 25,
    email: "catherine.lee@example.com"
  },
  {
    name: "David Kim",
    age: 42,
    email: "david.kim@example.com"
  },
  {
    name: "Eva Martinez",
    age: 30,
    email: "eva.martinez@example.com"
  }
];


  return (
    <>
      {/* {people.map((person, index) => (
    <Child 
      key={index}
      name={person.name} 
      age={person.age} 
      email={person.email} 
    />
  ))} */}
    {/* <UndoRedo_1/> */}
    {/* <Dropdown/> */}
    {/* <InlineEditable/> */}
    {/* <TempConvertor/> */}
    {/* <OtpInput/> */}
    {/* <CountdownTimer/> */}
    {/* <FAQ/> */}
    {/* <Post/> */}
    {/* <Accordion/>
     */}
     {/* <ContactForm/> */}
     {/* <ProgressBars/> */}
     {/* <HolyGrail/> */}
     {/* <MortgageCalculator/> */}
     {/* <FlightBooker/> */}
     {/* <GenerateTable/> */}
     {/* <ProgressBar/> */}
     {/* <TemperatureConverter/> */}
     {/* <Tabs/> */}
     {/* <HolyGrail/> */}
     {/* <DiceRoller/> */}
     {/* <Tweet
        name="Life of Shift"
        handle="@lifeofshift"
        content="Night shift struggles are real 😴"
        likes={45}
        retweets={10}
      /> */}
      {/* <ModalOverlay/> */}
      {/* <Parent/> */}

      {/* <Parent/> */}
      {/* <Parent/>
       */}
       {/* <Parent/> */}
       {/* <Parent/> */}
       {/* <Top/> */}
       {/* <Color/> */}
       {/* <Auth/> */}
       {/* <Theme/> */}
       {/* <Counter/> */}
       {/* <Auth/> */}
       {/* <Lang/> */}
       <Notifiaction/>

      
    </>
  )
}

export default App
