import React from 'react'

export default ({ num = 1 }) => {
  const li = []

  for (var i = 0; i < num; ++i) {
    let style = ''

    if (i === 0) style = 'flip-clock-before'

    if (i === 1) style = 'flip-clock-active'

    li.push(
      <li key={i} className={style}>
        <a href="#" className="">
          <div className="up">
            <div className="shadow"></div>
            <div className="inn">{i}</div>
          </div>
          <div className="down">
            <div className="shadow"></div>
            <div className="inn">{i}</div>
          </div>
        </a>
      </li>
    )
  }

  return (
      <ul>
        {li}
      </ul>
  )
}
