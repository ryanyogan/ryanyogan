// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Versioning
import { version } from '../package'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

// Only show progress if page
// transition takes longer than 100ms
Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 100)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Let the people know!
if (global.document) {
  const info = [
    `Version: ${version}`,
    `Want to work with the best? Keep playing in the console ;)`,
    `Bumble Bee Tuna`
  ]

  for (const mesage of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = 'https://github.com/ryanyogan'
  event.preventDefault()
}

export default ({ children }) => (
  <main onDoubleClick={viewSource}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name="description" content="Just adding to the interwebs as if it were lacking content" />
      <meta name="twitter:site" content="@ryanyogan" />
    </Head>

    {children}

    <style jsx global>
      {`
      body {
        font-family: -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      html, body {
        height: 100%;
      }

      body > div:first-child,
      body > div:first-child > div:first-child,
      body > div:first-child > div:first-child > div {
        height: inherit;
      }

      main {
        padding: 30px;
        box-sizing: border-box;
        position: relative;
        min-height: 100%;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #4492ff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      @media (min-width: 768px) {
        main {
          padding: 45px;
        }
      }
      `}
    </style>
  </main>
)