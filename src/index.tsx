import * as React from 'react'
import {render} from 'react-dom'

const App = () => (
  <div>
    <div className='character-info'>
      <span>
        Character Name
        <input type='text' />
      </span>
      <span>
        <div>
          <span>
            <span>
              <input type='text' />
              Class & Level
            </span>
            <span>
              <input type='text' />
              Background
            </span>
            <span>
              <input type='text' />
              Player Name
            </span>
          </span>
        </div>
        <div>
          <span>
            <span>
              <input type='text' />
              Race
            </span>
            <span>
              <input type='text' />
              Alignment
            </span>
            <span>
              <input type='text' />
              Experience Points
            </span>
          </span>
        </div>
      </span>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))
