import InputTxt from "./inputxt"

const biodata = () => {
  return (
    <form className="text-white grid grid-cols-2">
        <InputTxt label="Full Name"/>
        <InputTxt label="Department" inline={true}/>
        <InputTxt label="Reg No/Matric No" inline={true}/>
        <InputTxt label="Web Mail" input={'email'}/>

        <InputTxt label="Phone Number" input={'tel'}/>
        <InputTxt label="Hall" inline={true}/>
        <InputTxt label="Room No" inline={true}/>
        <div className="flex justify-between">
          <InputTxt label="Date of birth" input={'date'} inline={true}/>
          <div>
            <label htmlFor="level" className="text-white">Level: </label>
            <select name="level">
              <option disabled>Level</option>
              <option value='100'>100</option>
              <option value='200'>200</option>
              <option value='300'>300</option>
              <option value='400'>400</option>
              <option value='500'>500</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="text-white">Gender: </label>
            <select>
              <option disabled>Gender</option>
              <option value='m'>Male</option>
              <option value='f'>Female</option>
            </select>
          </div>
        </div>
        <InputTxt label="Favorite Bible Verse"/>
    </form>
  )
}

export default biodata