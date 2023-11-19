import Form from './emailFormContent.jsx'
import { cookies } from 'next/headers'


const Email = () => { 
  const SentMsgBefore = cookies().get('dxs6yt532')?.value
  return (
    <div className="grid place-items-center">
      <Form cookie={SentMsgBefore}/>
    </div>
  )
}

export default Email