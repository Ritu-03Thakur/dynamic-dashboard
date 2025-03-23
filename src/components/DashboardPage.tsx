import Header from './Header'
import { UserData } from '@/app/dashboard/page'
import SearchAndFilter from './SearchAndFilter'

const DashboardPage = ({ initialData }: { initialData: UserData[] }) => {

  return (
   <>
   <div className='flex flex-col gap-4  p-3'>
     <Header/>
     <SearchAndFilter allData={initialData}/>
   </div>
    </>
  )
}

export default DashboardPage
