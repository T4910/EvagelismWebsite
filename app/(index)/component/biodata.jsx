const biodata = () => {
  return (
    <form>
        <label htmlFor="Full-Name" className="text-white">Full Name:</label>
        <input type="text" name="Full-Name"/>

        <label htmlFor="department" className="text-white">Department:</label>
        <input type="text" name="department"/>

        <label htmlFor="regno">Reg No/Matric No:</label>
        <input type="number" name="regno" id="regno" />

        <label htmlFor="level">Level:</label>
        <input type="number" id="level"/>

        <label htmlFor="gender">Gender:</label>
        <select>
            <option disabled>Select your gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
        </select>

        <label htmlFor="gender">Date of birth:</label>
        <input type="date" name="birthday" id="birthday"/>
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"/>
        
        <label htmlFor="telephone">Phone No:</label>
        <input type="tel" name="telephone"/>

        <label htmlFor="hall">Hall:</label>
        <input type="text" name="hall" id="hall" />

        <label htmlFor="roomno">Room No:</label>
        <input type="number" name="roomno" id="roomno" />

        <label htmlFor="bible">Favorite bible verse:</label>
        <input type="text" name="bible" id="bible" />

        <label htmlFor="bible">Favorite bible verse:</label>
        <label htmlFor="bible">Favorite bible verse:</label>
        <label htmlFor="bible">Favorite bible verse:</label>
        <label htmlFor="bible">Favorite bible verse:</label>
        <input type="radio" name="team" id="follow" value="1"/>
        <input type="radio" name="team" id="media" value="2"/>
        <input type="radio" name="team" id="welfare" value="3"/>

        <label htmlFor="bible">How can we pray for you?</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default biodata