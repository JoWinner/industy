
const Stats = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-4'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-[#040e26]'>Trusted by Manufacturing companies across the world</h2>
                <p className='text-xl py-6  text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 bg-[#040e26] shadow-xl' >
                    <p className='text-6xl font-bold text-white'>100%</p>
                    <p className='text-gray-300 text-base text-left px-8 md:px-14 font-medium mt-2'>Traceability We make sure all our product complies with UK and EU regulations regarding the ability to trace our cocoa beans to their source, through all stages of production, processing and distribution.</p>
                </div>
                <div  className='border py-8 bg-[#fc5e28] shadow-xl' >
                    <p className='text-6xl font-bold text-white'>24/7</p>
                    <p className='text-white text-base text-left px-8 md:px-14 font-medium mt-2'>Ethicality All our cocoa beans are sourced from sustainable farmers and Cocoa producers. Our services are always avaliable, we are always open for our services and supplies.</p>
                </div>
                <div className='border py-8 bg-[#040e26] shadow-xl' >
                    <p className='text-6xl font-bold text-white'>100K</p>
                    <p className='text-gray-300 text-base text-left px-8 md:px-14 font-medium mt-2'>Reliability With manufacturers needing a reliable and dependable supply chain, we take every effort to ensure reliable production, transportation, delivery and above all quality for our clients. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats