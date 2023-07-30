import {logo} from '../../src/assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Sayeedifty1", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
        <h1 className='head_text orange_gradient'>
           Article Summarizer 
          
        </h1>
        <h2 className='desc'>
          Simplify your reading experience with Summize, an open-source article summarizer that transforms lengthy articles into clean and concise summaries using OpenAI GPT-4.
          
        </h2>
    </header>
  )
}

export default Hero