import {CustomButton} from "@/components";

const Hero = () => {
    return (
        <div className='hero'>
            <div className={'flex-1 pt-36 padding-x'}>
                <h1 className={'hero__title'}>
                    Find, book or rent a car - quick and super easy!
                </h1>

                <p className={'hero__subtitle'}>
                    Streamline your car rental experiance
                    with our effortless booking process.
                </p>

                <CustomButton />
            </div>
        </div>
    )
}

export default Hero