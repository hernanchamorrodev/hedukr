import Image from 'next/image'

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Image 
            height={40}
            width={40}
            alt="Logo"
            src="/logo.svg"
        />
            <span className="ml-1 text-xl font-bold">Hedukr</span>
        </div>
    )
}
