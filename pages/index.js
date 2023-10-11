import { fetchDogsFromPetfinder } from '../lib/petfinder' 
import Dog from '../components/dog'

export async function getStaticProps() {
  const dogsData = await fetchDogsFromPetfinder()
  return {
    props: {
      dogsData
    }
  }

}



export default function Home({dogsData}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Katie's Pet Finder</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dogsData.map((dog)=> (
            (<Dog key={dog.id} dogProps={dog}/>)
          ))}
            
          </div>
        </div>
        
      </div>
    )
  }
