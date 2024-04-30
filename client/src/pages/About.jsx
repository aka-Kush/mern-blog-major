import { useTypewriter, Cursor } from "react-simple-typewriter"

const About = () => {

    const [typeEffect] = useTypewriter({
        words: ['Shivansh Kush', 'Love Dua', 'Ajay Singh', 'Narasipuram Ruthvik'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })

  return (
    <>
        <div className='mb-20 max-w-screen-md mx-auto pt-20'>
            <h1 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>Hi, Our team members are:</h1>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-white py-6 pl-6'>{typeEffect}</h1>
        </div>
    </>
  )
}

export default About