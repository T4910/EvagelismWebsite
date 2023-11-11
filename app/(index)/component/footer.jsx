const footer = () => {
  return (
    <div className="bg-background3 bg-center bg-cover h-screen mt-44">
      <div className="relative bottom-20 rounded-xl bg-orange-400 mx-auto p-8 w-5/6">
        <form>
          <label htmlFor="surname" className="text-white">Surname</label>
          <input type="text" name="surname"/>
          <label htmlFor="othername" className="text-white">Other names</label>
          <input type="text" name="othername"/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          <input type="text" id="roomno"/>
          <input type="date" name="birthday" id="birthday" />
          <input type="radio" name="waterbaptism" id="water" />
          <input type="radio" name="holyghostbaptism" id="holyghost" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  )
}

export default footer