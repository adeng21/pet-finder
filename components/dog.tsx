
import Image from 'next/image'
import Link from 'next/link'

export default function Dog(dogProps) {
    
    const { dogProps: { url, primary_photo_cropped, name}} = dogProps

    if(primary_photo_cropped) {
        return (
            <Link href={url} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={400} height={400} src={primary_photo_cropped.medium} alt="profile-photo"/>
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{name}</h3>
            </Link>
        )

    }

}