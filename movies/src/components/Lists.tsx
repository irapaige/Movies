import { useState } from "react";




const Lists = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const cities = ["Atlanta", "New York", "Houston", "Dallas", "New Mexico", "Trenton"]
  // @ts-ignore
  return (
    <>
      <div>Lists</div>
      <ul className="list-group ">
        {cities.map((city, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={city} onClick={() => { setSelectedIndex(index); }}
        >
          {city}
        </li>
        )}
      </ul >
    </>
  )
}

export default Lists



