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
  console.log(dogsData)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {dogsData.map((dog)=> (
            (<Dog key={dog.id} dogProps={dog}/>)
          ))}
          
        </div>
      </main>
    )
  }
