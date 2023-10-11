
import Image from 'next/image'
import Link from 'next/link'

export default function Dog(dogProps) {
    
    const { dogProps: { url, primary_photo_cropped, name, breeds, gender}} = dogProps

    if(primary_photo_cropped) {
        return (
            <div className="group">
            <Link href={url} target="blank">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={400} height={400} src={primary_photo_cropped.small} alt="profile-photo"/>
                </div>
            </Link>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{name}</h3>
                <div className='my-2'>
                    {getGender(gender)}
                </div>
                <div>
                    {primaryBreed(breeds)}
                    {secondaryBreed(breeds)}

                </div>
            </div>
        )

    }

}

function getGender(gender){
    if(gender == 'Male'){
        return (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Male</span>)
    }
    if(gender == 'Female'){
        return(
            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Female</span>
        )
    }
}

function primaryBreed(breeds) {
    if (breeds && breeds.primary) {
        return(
            <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2'>{breeds.primary}</span>
        )
    }
}

function secondaryBreed(breeds) {
    if(breeds && breeds.secondary) {
        return(<span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>{breeds.secondary}</span>)
    }
}