import { impressions } from '@/constants'
import NumberAnimate from './NumberAnimate'

const Impression = () => {
  return (
    <section className='bg-primary_700 padding-x py-10'>
        <div className='flex-center lg:gap-32 sm:gap-14 gap-10 flex-wrap '>
        {impressions.map((impression, index) => (
            <NumberAnimate key={index} number={impression.number} symbol={impression.symbol} title={impression.title}/>
        ))}
    </div>
    </section>
  )
}

export default Impression