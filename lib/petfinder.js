
const URL = 'https://api.petfinder.com/v2/animals?'

export async function fetchDogsFromPetfinder(){
    var token = await authWithPetfinder()
    var params = new URLSearchParams()
    params.append('type', 'Dog')
    params.append('breed','')
    params.append('size','medium')
    params.append('age','young')
    params.append('good_with_dogs', 1)
    params.append('good_with_children', 1)
    params.append('status', 'adoptable')
    params.append('location', 94612)
    params.append('distance', 50)
    params.append('sort', 'recent')
    params.append('limit', 100)


    var res = await fetch(URL + params, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    }).then( response => {
        return response.json()
    })
    return res.animals

    // returns an array of animals with attributes:
    //id
    //organization_id
    //url
    //type
    //species
    //breeds (object) { primary:, secondary, mixed, unknown }
    //colors (object) { primary:, secondary:, tertiary: }
    //age
    //gender
    //size
    //coat
    //attributes (object) { spayed_neutered:, house_trained:, declawed:, special_needs:, shots_current: }
    //environemnt (object) { children: true, dogs: true, cats: true }
    //tags - array of strings
    //name
    //description
    //organization_animal_id
    //photos [] { small:, medium:, large:, full: }
    //primary_photo_cropped (object - keys: small, medium, large, full)
    //videos []
    //status
    //status_changed_at
    //published_at
    //distance
    //contact (object) { email:, phone:, address: { address1:, address2:, city:, state:, postcode:, country }}
    //links (object)
}

async function authWithPetfinder(){

    const params = new URLSearchParams()
    params.append("grant_type", "client_credentials")
    params.append("client_id", process.env.PETFINDER_API_KEY)
    params.append("client_secret", process.env.PETFINDER_SECRET)

    var res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: "POST",
        body: params
    }).then( response => {
        return response.json()
    })
    return res.access_token
}