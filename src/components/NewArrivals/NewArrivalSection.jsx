import SubTitle from '../utilites/SubTitle'
import ArrivalFlexBox from './ArrivalFlexBox'

export default function NewArrivalSection() {
  return (
    <section className="container mx-auto">
        <SubTitle sectionTitle={'Featured'} title={'New Arrival'}/>
        <div className='mt-[60px]'>
        <ArrivalFlexBox/>
        </div>
       
    </section>
  )
}
