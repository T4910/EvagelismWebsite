import Form from './emailFormContent.jsx'
import { cookies } from 'next/headers'
import { SlRefresh } from "react-icons/sl";
import { MdOutlineRefresh } from "react-icons/md";


const Email = () => { 
  const SentMsgBefore = cookies().get('dxs6yt532')?.value
  return (
    <div className="grid place-items-center">
      <Form cookie={SentMsgBefore} refresh={<MdOutlineRefresh />}/>
    </div>
  )
}

export default Email