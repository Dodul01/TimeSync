import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import './calenderStyle.css';
import { useState } from "react";
import { BsCalendarWeekFill } from 'react-icons/bs'


const Home = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (nextValue) => {
    setDate(nextValue);
    console.log(nextValue);
  }

  return (
    <div className='max-w-7xl mx-auto px-2'>
      <div className="flex md:flex-row flex-col gap-4 mt-2">

        <div>
          <Calendar onChange={handleDate} value={date} className='calender' />
        </div>
        <div className="bg-[#0b0e11] rounded-lg p-2 w-full">
          <div className="flex items-center gap-2 mt-2 ml-2">
            <p>View Meeting by:</p>
            <button className="border rounded-full hover:text-[#f0f0f0] hover:bg-black px-3 py-1">Daily</button>
            <button className="border rounded-full hover:text-[#f0f0f0] hover:bg-black px-3 py-1">Month</button>
          </div>

          <div>
            <div className="flex items-center justify-center flex-col my-10">
              <div>
                <BsCalendarWeekFill className="text-9xl text-black" />
              </div>

              <h2 className="text-2xl font-bold mt-3 text-black">No UpComing Events</h2>
            </div>
            <div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
