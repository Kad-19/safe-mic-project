import React from 'react'
import { Card,CardContent,CardDescription,CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
function Benefit() {
  return (
          <div className='flex items-center'>
              <Card className={cn('p-8 m-4 basis-1/3 w-fit h-fit hidden lg:inline')}>
              <img
                loading="lazy"
                srcSet="..."
                className=""
              />
              </Card>
            <Card className={cn('leading-8 p-8 m-4 lg:basis-2/3 w-full ')}>
            <CardTitle>What are the benefits?</CardTitle>
            <CardDescription className=' font-light'>Online counseling offers several benefits, including:</CardDescription>
            <ol type='1' className='list-decimal'>
            <li>
            <b className='font-semibold '>Accessibility:
              </b>Access counseling from anywhere, overcoming distance.
            </li>

            <li>
              <b className='font-semibold '>
                Convenience:
              </b>
              Schedule sessions at your convenience, saving time and travel.
            </li>
            <li>
              <b className='font-semibold '>
                Anonymity and Privacy:
              </b>
              Discuss sensitive issues online, with added privacy.
            </li>
            <li>
            <b className='font-semibold '>
              Cost-Effectiveness:
            </b>
            Save on travel expenses, potentially lower fees.
            </li>
            <li>
              <b className='font-semibold '>
                Flexibility:
              </b>
              Choose communication formats to suit your needs.
            </li>
            </ol>
            </Card>
</div>
  )
}

export default Benefit